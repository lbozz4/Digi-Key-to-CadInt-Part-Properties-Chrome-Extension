
var tds = $("#product-overview").find("td");
var VENDOR_PN = $(tds[0]).text().trim();
var MANUFACTURER = $(tds[2]).text().trim();
var PARTNAME = $(tds[4]).text().trim();
var PARTDESC = $(tds[6]).text().trim();
var EXDESC = $(tds[10]).text().trim();

//send these variables back up to popup.js
chrome.runtime.sendMessage({VENDOR_PN:VENDOR_PN, MANUFACTURER:MANUFACTURER, PARTNAME:PARTNAME, PARTDESC:PARTDESC});

