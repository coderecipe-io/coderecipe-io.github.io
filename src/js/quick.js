var common = require('./common.js');

import logo from '../../images/logo.png';
import quickmain from '../../images/quick-main2.png';

document.querySelector('.navbar-brand img').src = logo;
document.querySelector('.quick-main').src = quickmain;
console.log(common.init());

console.log('index.js');