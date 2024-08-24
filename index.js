import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import logger from './logger.js';

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

const processFiles = async (dir, outputDir, outputFile, isStylesFolder = false) => {
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      await processFiles(fullPath, outputDir, outputFile, isStylesFolder);
    } else if (file.name.endsWith('.js') || file.name.endsWith('.css') || file.name.endsWith('.md')) {
      const content = await fs.promises.readFile(fullPath, 'utf-8');
      const blockName = path.basename(file.name, path.extname(file.name));
      let fileType;
      if (file.name.endsWith('.js')) {
        fileType = 'JS';
      } else if (file.name.endsWith('.css')) {
        fileType = 'CSS';
      } else {
        fileType = 'Markdown';
      }
      let message;
      if (isStylesFolder) {
        message = `This is a ${fileType} file that contains the overarching styles. Full path: ${fullPath}`;
      } else {
        message = `This is the ${fileType} file that generates a fraction of the block named ${blockName}. Full path: ${fullPath}`;
      }
      logger.info(message);
      await fs.promises.appendFile(path.join(outputDir, outputFile), `${message}\n${content}\n`);
    }
  }
};

const main = async () => {
  try {
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

main();