# Contilio challenge

I tried to stick to the times mentioned in the descriptions, so didn't go over much code to change after initial writing. I would do some things differently on repeat.

I used Formik for the initial login page to manage the form, I use this a lot in general, it's an easy way of handling field states/errors etc and reducing code writing.

On the dashboard, I implemented a general Data component which imported the json values as initial state values, and fed these into child components for the table, chart and ranges to use.
This felt a little like a HOC, as if it's only purpose was to pass data on to child components, I would consider using Context or something similar if I repeated this.

I used imported css files via compiled scss files for style. I began to style the pages a little like the Contilio website although did not have much time to get any further with this.

The table is a html table. I would usually use something like react-table alongside function components (or something similar) but for one table this felt like it might increase rather than decrease or help coding effort.
The chart is a simple canvas.js bar chart. I've also used chart.js and d3.js in the past for data visualisation.


# Notes on this task

The description stated that the chart and table should always remain the same size even when the window was resized.
The description also mentioned a specific breakpoint at 500px to stack the components vertically rather than horizontally.

It seemed the only way to fulfill both conditions was to set the width of the table and chart at a maximum of 250px each regardless of screen size, which felt a little small for the chart.

I instead set their widths to 400px which let them fit nicely into the max width of the 1000px container, and used flex to determine when the components should wrap and stack vertically.
If you have any questions on why I completed parts of this task like I did I'd love to talk to you about them.

# Task 2 - Three.js

I began by importing the stats package so that I could see the exact fps the scene was rendering at.
Immediately I could see that thousands of objects were being drawn, which was probably why the fps was so slow.
I decided to implement an instanced mesh for these objects rather than draw them individually.