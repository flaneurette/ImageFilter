# ImageFilter

A JavaScript image filter for CSS.

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
  
  See the contents of the example folder for a demonstration.
