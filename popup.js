var MFGPN = "SMA10F";

let download = document.getElementById('download');

download.onclick = function (element) {
    var blob = new Blob(["< note ><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note >"], { type: "text/xml" });
    var url = URL.createObjectURL(blob);
    chrome.downloads.download({
        url: url, // The object URL can be used as download URL
        filename: MFGPN+".xml"
    });
};