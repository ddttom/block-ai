
# Style Guide Blocks Specification

## Generic Info

Author: Tom Cranstoun
Role: AEM Consultant
Company: Digital Domain Technologies Ltd

## AI Prompt, (c) Tom Cranstoun, September 2024, V 1.1

## Goal

Create a set of Franklin blocks that can generate a comprehensive style guide for a given website URL, following normal Franklin development rules and industry best practices.

** DO NOT focus on creating the first few blocks as examples, and then provide an overview of how to approach the remaining blocks.  Provide all of the blocks.**
** DO NOT ask for continue, keep going.

## Objectives

1. Analyze the visual design of a provided website URL
2. Create modular Franklin blocks representing key design elements
3. Generate a cohesive style guide demonstrating the website's visual language
4. Provide clear documentation and examples for each created block
5. Ensure maintainability, scalability, and cross-browser compatibility

## Key Components

### 1. Design Analysis

- Extract visual elements from the provided URL:
  - Color palette (primary, secondary, accent colors)
  - Typography (fonts, sizes, weights)
  - Layout and grid system
  - UI components (buttons, forms, navigation)
  - Imagery and iconography
  - Spacing and alignment principles
  - Interactive elements and animations

### 2. Franklin Block Creation

Generate the following blocks:
- styleguide-header
- styleguide-color-palette
- styleguide-typography
- styleguide-layout
- styleguide-components
- styleguide-imagery
- styleguide-footer
- styleguide-responsive
- styleguide-forms
- styleguide-animations
- styleguide-navigation
- styleguide-icons
- styleguide-tables
- styleguide-cards
- styleguide-modals
- styleguide-alerts
- styleguide-spacing
- styleguide-grid
- styleguide-accessibility
- styleguide-dark-mode
- styleguide-motion
- styleguide-data-visualization
- styleguide-voice-and-tone

Each block should include:
- JavaScript file (blockname.js)
- CSS file (blockname.css)
- README.md (usage instructions and guidelines)
- EXAMPLE.md (implementation examples, with parameters)

### 3. Style Guide Demo Page

Create a main demo.md file in the demos folder:
- Incorporate all created blocks in a logical order
- Include a table of contents
- Add brief descriptions for each section
- Use block tables to represent each component
- Include the metadata table at the end

### 4. Asset Management

- Utilize sample assets from the .cursorrules.md file
- Optimize assets for web delivery
- Implement lazy loading for images and non-critical content

### 5. Styling and Theming

- Create an import-styling block for overarching styles
- Develop a set of CSS variables for consistent theming
- Ensure responsive design principles are applied
- use franklin variations, when practical

### 6. Accessibility

- Maintain or improve accessibility in all blocks
- Add appropriate ARIA labels and roles
- Ensure sufficient color contrast
- Comply with WCAG 2.1 AA standards

### 7. Interactivity

- Recreate interactive elements in relevant blocks
- Implement necessary JavaScript functionality
- Document behavior and interaction states

## Technical Requirements

- Adhere to Franklin (Adobe Edge Delivery Services) development best practices
- Follow Airbnb JavaScript Style Guide
- Use async/await for asynchronous operations
- Implement error handling with try-catch blocks
- Ensure all markdown files end with a newline
- Surround lists in markdown files with blank lines


## Internationalization and Localization

- Design blocks to support multiple languages and writing systems
- Implement RTL (Right-to-Left) support where necessary
- Consider cultural design differences in color symbolism and imagery

## SEO Considerations

- Ensure all text content is accessible to search engines
- Implement proper semantic HTML structure
- Optimize image alt text and file names


## Deliverables

1. Set of Franklin blocks representing the website's visual style
2. Comprehensive demo.md file showcasing the style guide
3. Documentation (README.md and EXAMPLE.md) for each block
4. Optimized assets and styling files

## Success Criteria

- Accurate representation of the original website's visual design
- each and every block should have js, css, readme.md, demo.md and example.m created
- Modular and reusable Franklin blocks, with variations when practical
- Clear and comprehensive documentation
- Accessibility compliance (WCAG 2.1 AA)
- Responsive design implementation
- Comprehensive coverage of all UI components and design patterns
- Clear documentation of navigation patterns and icon systems
- Detailed guidelines for spacing, layout, and grid usage
- Accessibility features prominently showcased and explained
- Dark mode considerations addressed (if applicable)
- Motion and animation principles clearly defined
- Data visualization styles consistently applied (if applicable)

This specification provides a comprehensive approach to creating a visual style guide using Franklin blocks, ensuring a thorough, maintainable, and future-proof output for implementing consistent design across web projects.
