const { cpfs, cpfs2, ips, alfabeto, html, html2, lookahead } = require('./base.js');

// console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));

// console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g).map((item) => item.replace(/\D/g, '')));

//  250 - 255 25[0-5]
//  200 - 249 2[0-4][0-9]
// 100 - 199 1[\d]{2}
// 10 - 99 [1-9][0-9]
// 0 - 9 [\d]

const regexIp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d))/g;
console.log(ips.match(regexIp));
