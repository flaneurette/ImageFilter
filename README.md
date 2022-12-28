# ImageFilter

A JavaScript image filter for CSS. The class creates a set of given range sliders, to manipulate an image and applies the effects. Image filters can be applied continuously. The class also gives back a summed CSS rule of which effects were applied.

# Initialize

```
var filter = new filters; 
	
// format values: filter : min : max : default value 

let filterlist = [
	'Brightness:0:200:100',
	'Contrast:0:200:100',
	'Grayscale:0:100:0',
	'Hue:0:360:0',
	'Invert:0:100:0',
	'Opacity:0:100:100',
	'Saturate:0:10:0',
	'Sepia:0:100:0',
	'Blur:0:10:0'
];

filter.createFilters('divId','imageId',filterlist,'resultId');
  ```
  
 # Example
  
 See the contents of the example folder for an example.
 
 <img src="https://github.com/flaneurette/ImageFilter/blob/main/example/example.png" />
