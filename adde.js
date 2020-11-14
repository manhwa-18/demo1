function adBlockClose() {
  document.getElementById("WgD").classList.remove("is-detected");
  document.body.classList.remove("ab-is-detected")
};
function adBlockReload() {
  window.location.reload();
  return !1
};
function adBlockDetected() {
  document.getElementById("WgD").classList.add("is-detected");
  document.body.classList.add("ab-is-detected")
};
if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
	adBlockDetected();
} else {
	var importFAB = document.createElement('script');
	importFAB.onload = function() {
		fuckAdBlock.onDetected(adBlockDetected)
		fuckAdBlock.onNotDetected(adBlockNotDetected);
	};
	importFAB.onerror = function() {
		adBlockDetected(); 
	};
	importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
	importFAB.crossOrigin = 'anonymous';
	importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js';
	document.head.appendChild(importFAB);
}
