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

const body = document.querySelector('body');
body.style.backgroundColor = new Color().makeLightGray();

const container = document.querySelector('.container-sm');
container.style.backgroundColor = new Color().makeWhite();


const p = document.querySelector('#heading-paragraph');
p.style.color = new Color().makeDarkBlue();

const p2 = document.querySelector("#secondary-paragraph");
p2.style.color = new Color().makeLightGray;
/* 
let body = document.querySelector('body');

body.style.backgroundColor = new Color().makeGrayishBlue(); */
