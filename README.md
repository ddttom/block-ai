# File Processor

This is a Node.js command-line tool that processes JavaScript and CSS files in a specified directory, extracts information about each file, and writes the results to an output file.

## Features

- Recursively processes files in the input directory
- Handles both JavaScript (.js) and CSS (.css) files
- Generates a summary for each processed file
- Configurable input and output directories
- Customizable output file name
- Adjustable logging levels

## Installation

1. Ensure you have Node.js installed on your system.
2. Clone this repository or download the source code.
3. Navigate to the project directory and run `npm install` to install the dependencies.

## Usage

Run the script using Node.js with the following command:

```bash
node script.js [options]
```

### Options

- `-i, --input <directory>`: Specify the input directory (required)
- `-o, --output <directory>`: Specify the output directory (default: './output')
- `-f, --file <filename>`: Specify the output file name (default: 'result.txt')
- `-l, --log-level <level>`: Set the logging level (default: 'info')

### Example

```bash
node index.js -i /Users/tomcranstoun/Documents/GitHub/allaboutV2 -o ./output -f processed_files.txt -l debug
```

This command will process all .js and .css files in the './src' directory and its subdirectories, write the results to './output/processed_files.txt', and set the logging level to 'debug'.

## Output

For each processed file, the script generates a message in the following format:

```bash
This is the [JS/CSS] file that generates a fraction of the block named [blockName]. Full path: [fullPath]
[File Content]
```

This information is appended to the specified output file.

## Dependencies

- [commander](https://github.com/tj/commander.js/): For parsing command-line options
- fs: Node.js built-in module for file system operations
- path: Node.js built-in module for handling file paths
- Custom logger module (not provided in the given code snippet)

## Error Handling

- The script creates the output directory if it doesn't exist.
- If an error occurs during execution, it will be logged using the custom logger.

## Notes

- Ensure you have the necessary permissions to read from the input directory and write to the output directory.
- The script assumes the existence of a custom `logger.js` module, which is not provided in the given code snippet.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or encounter any bugs.

## License

[Specify your license here]
