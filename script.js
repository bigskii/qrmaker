
function qrc() {
	var qr = new QRious({
          element: document.getElementById('qr'),
          value: document.getElementById('link').value
        });
}
