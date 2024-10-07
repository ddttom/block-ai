import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import logger from './logger.js';
import { rm } from 'fs/promises';
import ignore from 'ignore';

const program = new Command();

program
  .option('-i, --input <directory>', 'input directory')
  .option('-o, --output <directory>', 'output directory', './output')
  .option('-f, --file <filename>', 'output file', 'result.txt')
  .option('-l, --log-level <level>', 'logging level', 'info')
  .parse(process.argv);

const options = program.opts();

logger.level = options.logLevel;

if (!options.input) {
  console.error('Error: Input directory is required.');
  program.help();
}

const abbreviatePath = (path) => {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  return path.startsWith(homeDir) ? path.replace(homeDir, '~') : path;
};

const createMessage = (fileType, blockName, fullPath) => {
  const abbreviatedPath = abbreviatePath(fullPath);
      return `## The following is the ${fileType} text that generates a fraction of the code named ${blockName}, extracted from path: ${abbreviatedPath}\n`;
};

const isBinaryFile = (buffer) => {
  // Check the first 1024 bytes for null bytes
  const chunkSize = Math.min(1024, buffer.length);
  for (let i = 0; i < chunkSize; i++) {
    if (buffer[i] === 0) {
      return true;
    }
  }
  return false;
};

const processFiles = async (dir, outputDir, outputFile, rootDir) => {
  logger.debug(`Processing directory: ${dir}`);
  
  // Initialize ignore instance
  const ig = ignore();
  
  // Explicitly ignore .git and .github folders
  ig.add(['.git', '.github', 'node_modules','all','it.tests','ui.content','ui.content.sample']);
  
  // Read .gitignore if it exists in the root directory
  const gitignorePath = path.join(rootDir, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = await fs.promises.readFile(gitignorePath, 'utf-8');
    ig.add(gitignoreContent);
    logger.debug('Loaded .gitignore');
  }

  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  logger.debug(`Found ${files.length} files/directories in ${dir}`);
  
  for (const file of files) {
    const fullPath = path.resolve(dir, file.name);
    const relativePath = path.relative(rootDir, fullPath);
    
    // Skip ignored files/directories
    if (ig.ignores(relativePath)) {
      logger.debug(`Ignored file/directory: ${fullPath}`);
      continue;
    }

    if (file.isDirectory()) {
      logger.debug(`Entering directory: ${fullPath}`);
      await processFiles(fullPath, outputDir, outputFile, rootDir);
    } else {
      logger.debug(`Processing file: ${fullPath}`);
      
      const extension = path.extname(file.name).substring(1);
      
      // Skip processing .md files
      if (extension.toLowerCase() === 'md') {
        logger.debug(`Skipping .md file: ${fullPath}`);
        continue;
      }
      
      let content;
      const fileType = extension ? extension.toUpperCase() : 'UNKNOWN';
      
      try {
        // Read file as buffer
        const buffer = await fs.promises.readFile(fullPath);
        
        // Check if the file is binary
        if (isBinaryFile(buffer)) {
          logger.warn(`Skipping binary file: ${fullPath}`);
          continue;
        }
        
        // If not binary, convert buffer to UTF-8 string
        content = buffer.toString('utf-8');
      } catch (readError) {
        logger.warn(`Failed to read file: ${fullPath}. Error: ${readError.message}. Skipping.`);
        continue;
      }

      const blockName = path.basename(file.name, path.extname(file.name));
      
      // Format content based on file type
      switch (extension.toLowerCase()) {
        case 'js':
          content = `\`\`\`javascript\n${content}\n\`\`\``;
          break;
        case 'css':
          content = `\`\`\`css\n${content}\n\`\`\``;
          break;
        case 'java':
          content = `\`\`\`java\n${content}\n\`\`\``;
          break;
        default:
          // For other file types, include content as is or handle accordingly
          content = `## File: ${blockName}${path.extname(file.name)}\n${content}\n`;
          break;
      }
      
      const message = createMessage(fileType, blockName, fullPath);
      logger.info(message);
      
      try {
        await fs.promises.appendFile(path.join(outputDir, outputFile), `${message}\n${content}\n`);
        logger.debug(`Appended content to ${path.join(outputDir, outputFile)}`);
      } catch (writeError) {
        logger.error(`Failed to append content to ${path.join(outputDir, outputFile)}: ${writeError.message}`);
      }
    }
  }
};

const main = async () => {
  try {
    logger.info('Starting main function');
    logger.debug(`Input directory: ${options.input}`);
    logger.debug(`Output directory: ${options.output}`);
    logger.debug(`Output file: ${options.file}`);
    logger.debug(`Log level: ${options.logLevel}`);

    // Remove logs folder and output folder if they exist
    const logsDir = './logs';
    logger.debug(`Removing logs directory: ${logsDir}`);
    await rm(logsDir, { recursive: true, force: true });
    logger.debug(`Removing output directory: ${options.output}`);
    await rm(options.output, { recursive: true, force: true });

    // Recreate output directory
    logger.debug(`Creating output directory: ${options.output}`);
    await fs.promises.mkdir(options.output, { recursive: true });

    const inputDir = path.resolve(options.input);
    logger.debug(`Input directory (resolved): ${inputDir}`);

    if (path.basename(inputDir) === 'blocks') {
      const projectRoot = path.dirname(inputDir);
      logger.debug(`Project root directory: ${projectRoot}`);

      const blocksDir = path.join(projectRoot, 'blocks');
      const stylesDir = path.join(projectRoot, 'styles');
      const coreDir = path.join(projectRoot, 'core');
      const uiappsDir = path.join(projectRoot, 'ui.apps');
      const uifrontendDir = path.join(projectRoot, 'ui.frontend');
      const scriptsDir = path.join(projectRoot, 'scripts');

      logger.debug(`Blocks Directory: ${blocksDir}`);
      logger.debug(`Styles Directory: ${stylesDir}`);
      logger.debug(`Scripts Directory: ${scriptsDir}`);
      logger.debug(`Core Directory: ${coreDir}`);
      logger.debug(`UI Apps Directory: ${uiappsDir}`);
      logger.debug(`UI Frontend Directory: ${uifrontendDir}`);

      // Process blocks
      logger.info('Processing blocks directory');
      await processFiles(blocksDir, options.output, options.file, projectRoot);

      // Process styles
      logger.info('Processing styles directory');
      await processFiles(stylesDir, options.output, options.file, projectRoot);

      // Process scripts
      logger.info('Processing scripts directory');
      await processFiles(scriptsDir, options.output, options.file, projectRoot);

      // Process core
      logger.info('Processing core directory');
      await processFiles(coreDir, options.output, options.file, projectRoot);

      // Process ui.apps
      logger.info('Processing ui.apps directory');
      await processFiles(uiappsDir, options.output, options.file, projectRoot);

      // Process ui.frontend
      logger.info('Processing ui.frontend directory');
      await processFiles(uifrontendDir, options.output, options.file, projectRoot);
    } else {
      logger.info(`Processing input directory: ${inputDir}`);
      await processFiles(inputDir, options.output, options.file, inputDir);
    }

    logger.info('Main function completed successfully');
  } catch (error) {
    logger.error(`Error in main function: ${error.message}`);
  }
};

main().catch(error => {
  logger.error('An error occurred during execution:', error);
  process.exit(1);
});