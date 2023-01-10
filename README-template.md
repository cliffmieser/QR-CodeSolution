# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

For this challenge, I wanted to practice and review my knowledge of using javascript classes to apply colors to the design. I also attempted to use CSS grid combined with the mobile-first layout approach. Unfortunately, I haven't yet been able to align the content properly for larger windows.

### Screenshot

![](./Viewport-SC.jpg)

### Links

- Solution URL: https://github.com/cliffmieser/QR-CodeSolution
- Live Site URL: https://cliffmieser.github.io/QR-CodeSolution/

### Built with

- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/)



### What I learned

I made use of JS classes to initialize the colors going to be applied to various elements.

```js
class Color{ //setting up inital colors to be used
	constructor(h, s, l){
  	this.h  = h;
    this.s = s;
    this.l = l;
  }
  makeWhite(){
    const {h = 0, s = 0, l = 100} = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  
  makeLightGray(){
    const {h = 212, s = 45, l = 89} = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  
  makeGrayishBlue(){
    const {h = 220, s = 15, l = 55} = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  
  makeDarkBlue(){
    const {h = 218, s = 44, l = 22} = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  
}
```

### Continued development

For future projects, I would like to spend more time with layout placement and alignment with both flexbox and grid methods. I would also like to spend more time learning about the box-size model and size scaling of elements.


### Useful resources

- [Colt Steele](https://www.youtube.com/watch?v=na-X_SM8vg0) - Helpful video on responsive design and media queries
- [Mike Powel](https://www.youtube.com/watch?v=rg7Fvvl3taU) - A quick crash course on CSS grids and media queries

## Author

- Frontend Mentor - [@cliffmieser](hhttps://www.frontendmentor.io/profile/cliffmieser)
