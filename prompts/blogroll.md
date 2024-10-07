You are an expert Franklin Developer

# Blogroll Block

## AI Prompt, (c) Tom Cranstoun, September 2024, V 1.3

**Goal:** Create a Franklin block named blogroll that displays a visually appealing list of blog posts, fetched from a JSON file using a relative URL, with both regular and compact variations.

## Key Features:
1. Fetch blog post data from '/query-index.json'
2. Group posts by series and sort them by part number or title
3. Display posts in a structured list format
4. Provide a compact variation with a floating icon, text, and slide-out panel
5. Implement error handling and loading state
6. Use CSS variables for easy customization
7. Ensure accessibility and responsive design
8. Implement a "Show All Posts" toggle functionality in compact mode

## Implementation Details:

### JavaScript (blogroll.js):
- Use relative URL for fetching data: '/query-index.json'
- Implement functions for date formatting, series info extraction, and post grouping/sorting
- Handle both regular and compact variations
- Display loading state and error messages
- Implement slide-out panel functionality for compact variation
- Add click-outside and Escape key functionality to close the panel
- Implement case-insensitive filtering based on current page path
- Add "Show All Posts" toggle functionality in compact mode

### CSS (blogroll.css):
- Use CSS variables for colors, fonts, and sizes
- Implement styles for both regular and compact variations
- Style the floating icon, text, and slide-out panel for compact variation
- Include responsive design for mobile devices
- Style the "Show All Posts" button in the compact panel

### README.md:
- Provide clear instructions for usage and authoring
- Explain both regular and compact variations
- Describe the default filtering behavior in compact mode
- Explain the "Show All Posts" toggle functionality
- List available CSS variables for customization

### EXAMPLE.md:
- Show examples of both regular and compact usage
- Include notes on compact mode behavior and filtering

### demo.md:
- Demonstrate the block's functionality in both regular and compact modes
- Provide sample usage instructions
- Explain how it works, including the compact mode features and filtering
- Include metadata for the demo page

## Compact Variation Details:
- Display a floating icon (📚) with "Blogroll" text in the top-left corner of the viewport
- When clicked, open a slide-out panel from the left side
- Panel should contain a sticky header with "Blogroll" title and close button
- Display blog posts in a compact format within the panel
- Close panel when clicking outside, pressing Escape, or clicking the close button
- Default to filtering posts based on the current page's folder path and name (without part number)
- Include a "Show All Posts" button to toggle between filtered and all posts

## Additional Notes:
- Ensure proper error handling and user feedback
- Optimize performance for large datasets
- Implement accessibility features using semantic HTML and ARIA attributes
- Use CSS variables consistently throughout the stylesheet
- Provide responsive design for various screen sizes
- Implement case-insensitive filtering

## Potential Improvements:
- Implement infinite scrolling or pagination for large datasets
- Add search functionality within the blogroll
- Provide options for different sorting methods (e.g., by date, popularity)
- Implement smooth animations for panel open/close actions
- Add keyboard navigation support within the panel
- Consider adding a dark mode option for enhanced accessibility

Remember to test the block thoroughly, especially with different data sets and in both regular and compact modes. Ensure it works well on various devices and screen sizes, and that the filtering and "Show All Posts" functionality work as expected in the compact mode.
