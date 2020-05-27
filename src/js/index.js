const css = require('../../dist/css/style.css');
// const indexCss = require('./index.css');
var common = require('./common.js');

import main from '../../images/top.jpg';
import logo from '../../images/logo.png';
import logov from '../../images/logo-v.png';
import p1 from '../../images/p-1.svg';
// function addImage(){
    // const img = document.createElement('img')
    // img.alt('image');
    
    // const body = document.querySelector('body');
    // body.appendChild(img);
// }

document.querySelector('.navbar-brand img').src = logo;
document.querySelector('.bg-top').src = main;
document.querySelector('.logo-v').src = logov;
document.querySelector('.svg-p1').data = p1;
console.log(common.init());

console.log('index.js');

// addImage();