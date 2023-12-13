# Preview for image element

> Extend the behaviour of the \<img\> element to support the fast preview of an image.

## Example

Using the following HTML (notice the `src-preview` attribute):

```html
<img is="with-preview" src="/img/1.png" src-preview="/img/1.min.png" height="256px" alt="An astronaut cat"></img>
``` 

The browser will first load this low resolution image (23,3KB)

<img src="img/1.min.png" height="256px"></img>

and only once the preview is loaded, the browser will load the full resolution image (1.8MB)

<img src="img/1.png" height="256px"></img>


## How to use it


1. First you need to install the custom element. No npm package is provided for 
now. Use a script tag to import it.

```html
<script type="module" src="path/to/img-with-preview.js"></script>
```

2. Once the custom element is imported you need to add `is="with-preview"` 
in the image elements where you want a preview. This does nothing in itself 
from a user perspective but it register the additional behavior.

3. Then you can simply add a `src-preview` attribute to your image tag with like to 
a lower resolution image. 


> Because we only extend the \<img\> tag all of it's features are supported, 
including lazy loading and accessibility support.

## Compatibility 

This repository use the "Customized built-it elements" API with at the time of 
this writing (2023/12/13) is supported by 77.69% of brower. The missing ~20% is
Safari wich statted they will not implement it.

But, thanks to progressive enhancement, no error will be thrown if the browser 
does not support the API. Your hight resolution image will just be loaded without
preview. 

To ensure complete compatibility you can use the 
[CutsomElement Polyfill](https://github.com/ungap/custom-elements#readme).
It weight only 7.57KB. 
