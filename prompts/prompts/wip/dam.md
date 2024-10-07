# dam block

## AI Prompt, (c) Tom Cranstoun, September 2024, V 1.1

**Goal:** Create a Franklin block named dam that contains a list of images with associated metadata in the rows

The first cell in the table is the table name, subsequent rows contain:
1. A note in the first cell
2. A textual description in the second cell
3. A classification name in the third cell
4. A tagname in the fourth cell
5. A picture element or an href element in the fifth cell
6. Additional information in the sixth cell (optional)

The block should display the output as a JSON with note, description, classification, tag, path to the image (without the domain name), and additional info inside a code HTML element.

## JavaScript (dam.js)

Create a `dam.js` file with the following functionality:
- Export a default `decorate` function that takes a `block` parameter
- Iterate through the block's children (rows), skipping the header
- Extract data from each row: note, description, classification, tag, image path, and additional info
- Create a JSON object with the extracted data
- Display the JSON output in a `<pre><code>` element

## CSS (dam.css)

Create a `dam.css` file with the following styles:
- Style the `<pre>` element to ensure proper formatting of the JSON output
- Add responsive styles for different screen sizes
- Use CSS variables for theming and consistency

## Input

| DAM | Note | Description | Classification | Tag | Image | Additional Info |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| | Note | Colorful abstract art | Art | Abstract | ![Abstract Art](https://example.com/abstract.png) | Vibrant colors |

## JSON Output

[
{
"note": "Note",
"description": "Colorful abstract art",
"classification": "Art",
"tag": "Abstract",
"path": "/abstract.png",
"additionalInfo": "Vibrant colors"
}
]

## Additional Requirements

- Ensure the JavaScript code follows the Airbnb style guide
- Use `async/await` for any asynchronous operations
- Include error handling for potential issues (e.g., missing image elements)
- Add comments to explain complex logic or important steps
- Optimize for performance and accessibility

Remember to create README.md and EXAMPLE.md files for the block, following the structure guidelines provided earlier.

## README.md Structure

The README.md should include:
1. Component name as the main heading
2. Brief description of the component's purpose
3. Usage section explaining how to use the component
4. Authoring section describing content creation in Google Docs or Microsoft Word
5. Styling section mentioning CSS classes or variables for customization
6. Behavior section explaining the JSON output generation
7. Accessibility section highlighting relevant features

## EXAMPLE.md Structure

The EXAMPLE.md should include:
1. Block name as the main heading
2. A sample table demonstrating how to structure the input in Google Docs or Microsoft Word
3. Use realistic examples with varied content to showcase the block's capabilities

Ensure all files (dam.js, dam.css, README.md, and EXAMPLE.md) are created and placed in the `blocks/dam/` directory.