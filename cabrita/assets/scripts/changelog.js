const currentVersion = 2;
var last_version;

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("close").addEventListener ("click", close, false);
})

$(document).ready(function () {
    version = localStorage.getItem("version");
    if (version && version == currentVersion) {
        document.getElementById("changelog-container").style.display = "none";
    } else {
        document.getElementById("changelog-title").innerHTML = "Changelog v" + currentVersion;
        localStorage.setItem("version", 2);
    }
    
  });

  function close() {
    document.getElementById("changelog-container").style.display = "none";
  }