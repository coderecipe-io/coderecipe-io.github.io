var common = require('./common.js');

import main from '../../images/top.jpg';
import logo from '../../images/logo.png';
import logov from '../../images/logo-v.png';
import p1 from '../../images/p-1.svg';

document.querySelector('.navbar-brand img').src = logo;
document.querySelector('.bg-top').src = main;
document.querySelector('.logo-v').src = logov;
document.querySelector('.svg-p1').data = p1;
console.log(common.init());

console.log('index.js');