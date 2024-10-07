# Google Docs Markdown Converter Plugin

## AI Prompt, (c) Tom Cranstoun, September 2024, V 1.0

**Goal:** Create an advanced Google Docs add-on that converts Markdown (.md) files to Google Docs format with the following functionalities and improvements. create this artifact in tools/plugin folder

## Initial State

* Add a menu item to Google Docs under the "Add-ons" menu
* The plugin interface should not be visible until activated
* Menu item:
  * Label: "Convert Markdown Files"
  * Position: Under "Add-ons" > "Google Docs Markdown Converter"

## Content Processing

* Read uploaded Markdown (.md) files
* Convert Markdown content to HTML
* Create new Google Docs with converted content
* Maintain basic formatting (headings, bold, italic, links, lists, allow franklin autoblocking, add franklin metadata)

## Display

* Sidebar interface:
  * Width: 300px (Google Docs default)
  * Height: Full height of the document
* File Selection:
  * Multiple file upload input
  * "Upload and Convert" button
* Folder Selection:
  * Dropdown menu for selecting destination folder
  * Option to create a new folder
* Results Display:
  * List of converted files with links
  * Link to the destination folder

## Conversion Mechanism

* Convert Markdown to HTML
* Create new Google Doc for each file
* Apply basic formatting to Google Doc content, including franklin metadata

## Control Mechanisms

* Start:
  * Click on "Upload and Convert" button
* Cancel:
  * Close the sidebar
* Folder Selection:
  * Use dropdown to select existing folder or create new

## Functionality

* Allow multiple file selection
* Create a new folder in Google Drive if not specified
* Move converted docs to the specified folder

## Styling

* Use Google's Material Design principles
* Ensure consistent styling with Google Docs interface

## Performance

* Handle multiple file conversions efficiently
* Use asynchronous operations for file reading and conversion

## Accessibility

* Ensure all elements are properly labeled for screen readers
* Provide keyboard navigation support

## Additional Features

* Display conversion progress
* Handle errors gracefully (e.g., unsupported Markdown features, file read errors)

## Error Handling

* Display user-friendly error messages
* Provide guidance on how to resolve common issues

## Deployment

* Create a deployment configuration in Google Apps Script
* create a deployment.md with instructions for the user
* Prepare for Google's add-on review process if publishing publicly

Note: Ensure that the plugin adheres to Google's guidelines for Google Workspace Add-ons.
