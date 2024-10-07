# WordCloud Block

## Generic Info

My name is Tom Cranstoun, I am an AEM Consultant, my Company is Digital Domain Technologies Ltd

## AI Prompt, (c) Tom Cranstoun, September 2024, V 1.0

**Goal:** Create an advanced Franklin block named "wordcloud" that generates a visually appealing word cloud based on the content of p elements within div structures with the class "wordcloud".

# wordcloud block

Create a wordcloud component, called wordcloud, listing the words that appear the franklin block rows.  
Each element will contain phrases, or words; each separated by commas. there may be many rows.
Iterate over all of the rows, building a list of words or phases, adding them to the wordcloud, with an increasing font size for the most used word or phrase.
Place the most used word or phrases at the start of the block.

## Content Processing

* Identify the parameters in the franklin block
* Parse each text content, splitting phrases or words by commas
* Build a list of words or phrases, tracking their frequency
* remove the list of words from the display

## Display

Create a container for the wordcloud
* For each unique word or phrase:
  * Create a span element
  * Set font size based on frequency (more frequent = larger font)
  * Apply random rotation (-20 to 20 degrees) for visual interest

* wordcloud block: Background is to be Light gray (#f5f5f5)
* Position: Centered within its container
* Text Display:
  * Font: Sans-serif (e.g., Arial, Helvetica)
  * Colors: Use a predefined color palette (6 colors) for variety
  * Most frequent word:
    * Largest font size (48px)
    * Bold weight

## Interactivity

* Hover effect:
  * Slight increase in size (scale 1.2)
  * Change in opacity (0.8)

* Click effect:
  * smoothly show a tooltip with the word's frequency count on click, at the pointer position for 2 seconds

## Styling

* Use CSS Flexbox for layout
* Ensure proper spacing between words (margin: 5px, padding: 5px)
* Apply subtle transitions for hover and click effects

## Performance

* Limit the number of displayed words (top 50) for large datasets
* Use efficient DOM manipulation techniques

## Accessibility

* Ensure proper contrast ratios for text visibility
* Add aria-labels to provide context for screen readers

## Additional Features

* Implement a simple filtering system to exclude common words (e.g., "the", "and", "or")
* Allow customization of color palette through CSS variables

## Error Handling

* Display a message if no valid wordcloud data is found

## Responsiveness

* Adjust font sizes and layout for different screen sizes
* Ensure readability on mobile devices (minimum font size: 14px)

## Demo

When creating demo.md ensure that words repeat, sufficient to test, only put one example in the demo.md
