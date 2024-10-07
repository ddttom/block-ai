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

// Move these functions outside of main
const abbreviatePath = (path) => {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  return path.startsWith(homeDir) ? path.replace(homeDir, '~') : path;
};

const createMessage = (fileType, blockName, fullPath) => {
  const abbreviatedPath = abbreviatePath(fullPath);
  if (fullPath.includes('/scripts/')) {
    return `## The following is the ${fileType} text that is a core file named ${blockName}, extracted from path: ${abbreviatedPath}\n`;
  } else {
    return `## The following is the ${fileType} text that generates a fraction of the block named ${blockName}, extracted from path: ${abbreviatedPath}\n`;
  }
};

const processFiles = async (dir, outputDir, outputFile) => {
  logger.debug(`Processing directory: ${dir}`);
  
  // Initialize ignore instance
  const ig = ignore();
  
  // Read .gitignore if it exists in the root directory
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = await fs.promises.readFile(gitignorePath, 'utf-8');
    ig.add(gitignoreContent);
    logger.debug('Loaded .gitignore');
  }

  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  logger.debug(`Found ${files.length} files/directories in ${dir}`);
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    const relativePath = path.relative(process.cwd(), fullPath);
    
    // Skip ignored files/directories
    if (ig.ignores(relativePath)) {
      logger.debug(`Ignored file/directory: ${fullPath}`);
      continue;
    }

    if (file.isDirectory()) {
      logger.debug(`Entering directory: ${fullPath}`);
      await processFiles(fullPath, outputDir, outputFile);
    } else {
      logger.debug(`Processing file: ${fullPath}`);
      
      let content;
      const extension = path.extname(file.name).substring(1);
      const fileType = extension ? extension.toUpperCase() : 'UNKNOWN';
      
      try {
        // Attempt to read the file as UTF-8 text
        content = await fs.promises.readFile(fullPath, 'utf-8');
      } catch (readError) {
        logger.warn(`Failed to read file as UTF-8 text: ${fullPath}. Skipping.`);
        continue; // Skip files that cannot be read as text (e.g., binary files)
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
        case 'md':
          content = `markdown file begins\n${content}\n markdown file ends\n`;
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

    let inputDir = options.input;
    logger.debug(`Initial input directory: ${inputDir}`);

    if (inputDir.endsWith('blocks')) {
      inputDir = path.dirname(inputDir);
      logger.debug(`Updated input directory: ${inputDir}`);

      const blocksDir = path.join(inputDir, 'blocks');
      const stylesDir = path.join(inputDir, 'styles');
      const coreDir = path.join(inputDir, 'core');
      const uiappsDir = path.join(inputDir, 'ui.apps');
      const uifrontendDir = path.join(inputDir, 'ui.frontend');
      const scriptsDir = path.join(inputDir, 'scripts');

      logger.debug(`Blocks Directory: ${blocksDir}`);
      logger.debug(`Styles Directory: ${stylesDir}`);
      logger.debug(`Scripts Directory: ${scriptsDir}`);
      logger.debug(`Core Directory: ${coreDir}`);
      logger.debug(`UI Apps Directory: ${uiappsDir}`);
      logger.debug(`UI Frontend Directory: ${uifrontendDir}`);

      // Process blocks
      logger.info('Processing blocks directory');
      await processFiles(blocksDir, options.output, options.file);

      // Process styles
      logger.info('Processing styles directory');
      await processFiles(stylesDir, options.output, options.file);

      // Process scripts
      logger.info('Processing scripts directory');
      await processFiles(scriptsDir, options.output, options.file);

      // Process core
      logger.info('Processing core directory');
      await processFiles(coreDir, options.output, options.file);

      // Process ui.apps
      logger.info('Processing ui.apps directory');
      await processFiles(uiappsDir, options.output, options.file);

      // Process ui.frontend
      logger.info('Processing ui.frontend directory');
      await processFiles(uifrontendDir, options.output, options.file);
    } else {
      logger.info(`Processing input directory: ${inputDir}`);
      await processFiles(inputDir, options.output, options.file);
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