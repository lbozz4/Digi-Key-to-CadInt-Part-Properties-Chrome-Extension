src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"

var tds = $("#product-overview").find("td");
var DKPN = $(tds[0]).text().trim();
var MFG = $(tds[2]).text().trim();
var MFGPN = $(tds[4]).text().trim();
var DESC = $(tds[6]).text().trim();
var EXDESC = $(tds[10]).text().trim();

alert("hello!");

