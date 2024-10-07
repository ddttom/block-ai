# Import Design Block

## Goal

Create a set of Franklin blocks that can recreate the blocks and layout of a given website URL, following normal Franklin development rules. Do not consider navigation, footer or sidebars

** DO NOT focus on creating the first few blocks as examples, and then provide an overview of how to approach the remaining blocks.  Provide all of the blocks.**
** DO NOT ask for continue, keep going. **

if real names are in the source website, hide the identity 

## Functionality

1. **URL Input**
   The URL is given in the prompt.

2. **Design Analysis**
   * Fetch the HTML and CSS content of the provided URL.
   * Analyze the structure and identify main components (header, navigation, main content areas, sidebars, footer, etc.).
   * identify the textual parameters

3. **Block Creation**
   * For each identified component, create a corresponding Franklin block, use blocks named {import}-blockname where {import} is replaced by the name of the import, do not use block names that already exist in the repo. Use variations where possible
   * Generate the necessary JavaScript, CSS, and markdown files for each block. do not place text in the parameter rows, just placeholder names, 

4. **Layout Recreation**
   * Recreate the overall layout of the imported design using Franklin's block structure.
   * attempt to replicate the full look of the input source page
   * Ensure responsive design principles are followed.

5. **Asset Handling**
   * Use sample assets from the .cursorrules.md file.
   * Update references in the created blocks to use the local assets.

6. **Styling**
   * extract overarching styling and associate it with the block import-styling
   * Extract and adapt the CSS styles from the input source page
   * Create a cohesive set of CSS variables for easy theming, in the blocks.
   * Use Franklin variations wheen practical

7. **Interactivity**
   * Identify and recreate interactive elements (e.g., dropdowns, sliders, modals).
   * Implement necessary JavaScript functionality for these elements, in the blocks.

8. **Accessibility**
   * Ensure all created blocks maintain or improve the accessibility, and styling, of the original design.
   * Add appropriate ARIA labels and roles where necessary.

9. **Performance Optimization**
   * Implement lazy loading for images and non-critical content.
   * Optimize asset sizes and formats for web delivery.

10. **Franklin Metadata**
    * Generate appropriate metadata for the recreated design, including title, description, and other relevant fields.

11. **Demo Page**
    * Create a demo page in Franklin format, in the demos folder that showcases the imported design.
    * Include all recreated blocks in their appropriate layout.
    * Represent each block as a single-cell table with the block name inside, add parameters in the rows that follow.

## Error Handling

* Gracefully handle errors.
* Provide clear error messages for any issues encountered.

## Best Practices

* Adhere to Franklin (Adobe Edge Delivery Services) development best practices.
* Ensure all created blocks are modular and reusable, using variations when possible
* Follow Airbnb JavaScript Style Guide for code consistency.
* Use async/await for asynchronous operations.

## Demo Page Structure

1. Title: "Imported Design Demo"
2. import-styling as a table
3. Recreated Header (as a table)
4. Recreated Navigation (as a table, if separate from header)
5. Recreated Main Content Areas (as tables)
6. Recreated Sidebar (as a table, if applicable)
7. Recreated Footer (as a table)
8. Metadata Table (at the end)

Example of how to represent a block in the demo page:

| block-name |
| :---- |
| |

Remember to create README.md, EXAMPLE.md, and sample JSON/CSV files for each created block as needed. Ensure all markdown files end with a newline and lists are surrounded by blank lines.

## Additional Considerations

1. **EXAMPLE.md Creation**
    * Create EXAMPLE.md files for each block, demonstrating how to use the block in a Franklin document.
    * Include various configuration options and use cases in the examples.

2. **Version Control**
    * Commit changes to version control after creating or modifying blocks.
    * Use meaningful commit messages describing the changes made.

3. **Testing**
    * Test each created block individually to ensure it functions as expected.
    * Test the entire demo page to verify the overall layout and interactions.
    * Consider creating automated tests for complex blocks.

4. **Documentation**
    * Provide thorough documentation in README.md files for each block.
    * Include information on block purpose, usage, configuration options, and any dependencies.

5. **Customization Options**
    * Where appropriate, include customization options in blocks to increase their flexibility.
    * Document these options clearly in the block's README.md file.

Remember to balance faithfulness to the original design with the need for modularity and reusability in the Franklin ecosystem.
