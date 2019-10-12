var VENDOR_PN = "ERROR"
var MANUFACTURER = "ERROR"
var PARTNAME = "ERROR"
var PARTDESC = "ERROR"
var EXDESC = "ERROR"


chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript({
        file: 'scrape.js'
    });
});

// Recieve the scraped variables as a message and then assemble the XML and download
chrome.runtime.onMessage.addListener(
    function (partinfo, sender, sendResponse) {
        VENDOR_PN = partinfo.VENDOR_PN;
        MANUFACTURER = partinfo.MANUFACTURER;
        PARTNAME = partinfo.PARTNAME;
        PARTDESC = partinfo.PARTDESC;

        // Generate the CADInt XML file that can be imported into a new part
        var xmlblob =
            '<?xml version="1.0" encoding="ISO-8859-1"?>' +
            "<PartNumber Name=\"" + PARTNAME + "\" Ver=\"1\">" +
            "<Properties Ver=\"1\">" +
            "<A Key=\"PARTNAME\" Value=\"" + PARTNAME + "\"/>" +
            "<A Key=\"ALTPARTREF\" Value=\"\"/>" +
            "<A Key=\"PARTDESC\" Value=\"" + PARTDESC + "\"/>" +
            "<A Key=\"MANUFACTURER\" Value=\"" + MANUFACTURER + "\"/>" +
            "<A Key=\"PREFIX\" Value=\"\"/>" +
            "<A Key=\"TOLERANCE\" Value=\"\"/>" +
            "<A Key=\"VALUE\" Value=\"\"/>" +
            "<A Key=\"VENDOR\" Value=\"Digi-Key\"/>" +
            "<A Key=\"VENDOR_PN\" Value=\"" + VENDOR_PN + "\"/>" +
            "</Properties>" +
            "</PartNumber>";

        var blob = new Blob([xmlblob], { type: "text/xml" });
        var url = URL.createObjectURL(blob);
        chrome.downloads.download({
            url: url, // The object URL can be used as download URL
            filename: PARTNAME + ".xml"
        });

    }
);