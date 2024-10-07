# Imagecycle

## Tom Cranstoun, 12 Sep v1.00

This document describes the Imagecycle block, a Franklin component for displaying a rotating image carousel.

## Block Specifications

Create a franklin block with images, named imagecycle

the first cell in the table is the table name, subsequent rows contain a picture element or an href element , extract the path to the image and use it as an image.  
The images are fully qualified urls, do not use  createOptimizedPicture(). use as is.
on loading the images randomize them, make the background light blue in color.
read all of the rows when creating the block, remove the from the DOM after reading
only display one image at a time
start the block execution immediately on constructing
rotate through each image every 5 seconds. provide a placement indicator. if the user hovers over the image stop rotating.
when the user moves off the image start rotating again, immediately move to next image
Add keyboard navigation (left/right arrow keys) for manual image rotation

Create the blocks, css, js, readme.md example.md and the demo.md file.  demo.md file should have a title, then the component, then describe the component, lists use cases,  with metadata 

