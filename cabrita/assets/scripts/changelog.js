const currentVersion = 2;

$(document).ready(() => {
  const version = localStorage.getItem('version');
  if (version && version === currentVersion) {
    document.getElementById('changelog-container').style.display = 'none';
  } else {
    document.getElementById('changelog-title').innerHTML = `Changelog v${currentVersion}`;
    localStorage.setItem('version', 2);
  }
});

function close() {
  document.getElementById('changelog-container').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('close').addEventListener('click', close, false);
});
