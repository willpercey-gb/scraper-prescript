/**
 * Usage: 
 *  - document.querySelector('#logo').toDataUrl('image/png').then(console.log);
 *  - await document.querySelector('#logo');
 */
Image.prototype.toDataUrl = function(format,quality) {
	var par = this;
	var promise = new Promise(function(resolve,reject) {
		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function() {
			var canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0);	
			resolve(canvas.toDataURL(format,quality));
		};
		img.onerror = reject;
		img.src = par.src;
	});
	return promise;
};
