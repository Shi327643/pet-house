
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Hexantine (Build 4).loader.js";
var config = {
  dataUrl: buildUrl + "/Hexantine (Build 4).data",
  frameworkUrl: buildUrl + "/Hexantine (Build 4).framework.js",
  codeUrl: buildUrl + "/Hexantine (Build 4).wasm",
  streamingAssetsUrl: "streamingAssets",
  companyName: "com.PiT0Studios.Hexantine",
  productName: "Hexantine",
  productVersion: "1.3"
};

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  container.className = "unity-mobile";
  config.devicePixelRatio = 1;
} else {
  canvas.style.width = "960px";
  canvas.style.height = "600px";
}
loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  }).then((unityInstance) => {
    loadingBar.style.display = "none";
    fullscreenButton.onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  }).catch((message) => {
    alert(message);
  });
};
document.body.appendChild(script);
