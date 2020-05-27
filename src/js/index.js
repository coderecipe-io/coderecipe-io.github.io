var common = require('./common.js');

import main from '../../images/top.jpg';
import logo from '../../images/logo.png';
import logov from '../../images/logo-v.png';
import p1 from '../../images/p-1.svg';
import p2 from '../../images/p-2.svg';
import p3 from '../../images/p-3-1.svg';

document.querySelector('.navbar-brand img').src = logo;
document.querySelector('.bg-top').src = main;
document.querySelector('.logo-v').src = logov;
document.querySelector('.svg-p1').data = p1;
document.querySelector('.svg-p2').data = p2;
document.querySelector('.svg-p3').data = p3;
console.log(common.init());

console.log('index.js');