import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import logger from './logger.js';
import { rm } from 'fs/promises';

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

const createMessage = (fileType, blockName, fullPath, isStylesFolder) => {
  const abbreviatedPath = abbreviatePath(fullPath);
  if (isStylesFolder) {
    return `## This is a ${fileType} file that contains the overarching styles: path: ${abbreviatedPath}\n`;
  } else {
    return `## This is the ${fileType} file that generates a fraction of the block named ${blockName}: path: ${abbreviatedPath}\n`;
  }
};

const processFiles = async (dir, outputDir, outputFile, isStylesFolder = false) => {
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      await processFiles(fullPath, outputDir, outputFile, isStylesFolder);
    } else if ((file.name.endsWith('.js') || file.name.endsWith('.css') || file.name.endsWith('.md')) && 
               (dir.includes('blocks') || dir.includes('scripts'))) {
      const content = await fs.promises.readFile(fullPath, 'utf-8');
      const blockName = path.basename(file.name, path.extname(file.name));
      let fileType;
      if (file.name.endsWith('.js')) {
        fileType = 'JS';
        content = `\`\`\`javascript\n${content}\n\`\`\``;
      } else if (file.name.endsWith('.css')) {
        fileType = 'CSS';
        content = `\`\`\`css\n${content}\n\`\`\``;
      } else {
        fileType = 'Markdown';
      }
      const message = createMessage(fileType, blockName, fullPath, isStylesFolder);
      logger.info(message);
      await fs.promises.appendFile(path.join(outputDir, outputFile), `${message}\n${content}\n`);
    }
  }
};

const main = async () => {
  try {
    // Remove logs folder and output folder if they exist
    const logsDir = './logs';
    await rm(logsDir, { recursive: true, force: true });
    await rm(options.output, { recursive: true, force: true });

    // Recreate output directory
    await fs.promises.mkdir(options.output, { recursive: true });

    let inputDir = options.input;
    if (inputDir.endsWith('blocks')) {
      inputDir = path.dirname(inputDir);
      const blocksDir = path.join(inputDir, 'blocks');
      const stylesDir = path.join(inputDir, 'styles');

      // Process blocks
      await processFiles(blocksDir, options.output, options.file, false);

      // Process styles
      await processFiles(stylesDir, options.output, options.file, true);
    } else {
      await processFiles(inputDir, options.output, options.file);
    }
  } catch (error) {
    logger.error(error.message);
  }
};

main().catch(error => {
  logger.error('An error occurred during execution:', error);
  process.exit(1);
});