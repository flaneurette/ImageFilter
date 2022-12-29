# ImageFilter

A JavaScript image filter for CSS. The class creates a set of given range sliders, to manipulate an image and applies the effects. Image filters can be applied continuously. The class also gives back a summed CSS rule of which effects were applied.

# Initialize

```
var filter = new filters; 
	
// filter : min : max : default 

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

// presets

let presets = [
	
	['Professional',['Grayscale:86','Contrast:200','Brightness:97','Saturate:2','Sepia:31']],
	['Blackwhite',['Grayscale:100','Contrast:181']],
	['Worn',['Grayscale:10','Sepia:90','Contrast:189','Brightness:102']],
	['Fuchsia',['Hue:299','Saturate:1','Contrast:194','Brightness:130']],
	['Ink',['Brightness:74','Contrast:200','Grayscale:100']],
	['Moonlight',['Saturate:1','Sepia:14','Hue:175','Grayscale:77','Brightness:61','Contrast:176']],
	['Xray',['Saturate:1','Hue:18','Brightness:71','Sepia:51','Invert:100','Contrast:200']],
	['Flame',['Sepia:100','Saturate:7','Contrast:174']],
		
];
	
filter.createFilters(divId, imageId, filterlist, presets, resultId);
  ```
  
 # Example
  
 See the contents of the example folder for an example.
 
 # Lightbox
 
 Lightbox example with initialized presets:
 
 <img src="https://github.com/flaneurette/ImageFilter/blob/main/example/example2.jpg" />
