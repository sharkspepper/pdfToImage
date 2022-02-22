/* 
file -> base64
*/
export function fileToBase64(file){
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		let base64Uri = "";
		reader.readAsDataURL(file);
	
		reader.onload = function() {
		base64Uri = reader.result;
		};
	
		reader.onerror = err => {
			reject(err);
		};
	
		reader.onloadend = () => {
			resolve(base64Uri);
		};
	});
}
/**
 * url -> base64
 * @param {*} url 服务器图片url(http://image.jpg)
 * @returns Promise -> base64
 */
export function imgUrlToBase64 (url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = url;

		img.onload = () => {
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext("2d");
			canvas.height = img.height;
			canvas.width = img.width;
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			const base64Uri = canvas.toDataURL("image/jpeg", 0.9);
			resolve(base64Uri);
		};
		img.onerror = err => {
			reject(err);
		};
	});
}