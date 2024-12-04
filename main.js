document.addEventListener("DOMContentLoaded", function () {
  // İlk açılışta container'ı göster
  document.querySelector(".container").style.display = "grid";
  document.querySelector(".battery-container").style.display = "none";

  // Tüm CSS dosyalarını ekleyelim
  const containerCss = document.createElement('link');
  containerCss.rel = 'stylesheet';
  containerCss.href = 'container.css';
  containerCss.id = 'container-css';
  document.head.appendChild(containerCss);

  const batteryContainerCss = document.createElement('link');
  batteryContainerCss.rel = 'stylesheet';
  batteryContainerCss.href = 'batterycontainer.css';
  batteryContainerCss.id = 'battery-container-css';
  document.head.appendChild(batteryContainerCss);

  // Başlangıçta container.css aktif olacak
  batteryContainerCss.disabled = true;

  // Sidebar ve ikonlar için etkileşim mantığı burada eklenebilir
  document.querySelector(".sidebar ul li:first-child").addEventListener("click", function () {
    toggleSections("container", "battery-container");
  });

  document.querySelector(".sidebar ul li:nth-child(2)").addEventListener("click", function () {
    toggleSections("battery-container", "container");
  });
});

function toggleSections(showSectionClass, hideSectionClass) {
  // Gösterilecek bölümü ve saklanacak bölümü belirle
  document.querySelector(`.${hideSectionClass}`).style.display = "none";
  document.querySelector(`.${showSectionClass}`).style.display = "grid";

  // CSS dosyalarını aktif/deaktif et
  document.querySelector('#container-css').disabled = showSectionClass !== "container";
  document.querySelector('#battery-container-css').disabled = showSectionClass !== "battery-container";

  // JS dosyalarını değiştir
  const jsMap = {
    "container": "container.js",
    "battery-container": "batterycontainer.js"
  };

  const oldScript = document.querySelector(`script[src*="${jsMap[hideSectionClass]}"]`);
  if (oldScript) {
    const newScript = document.createElement('script');
    newScript.src = jsMap[showSectionClass];
    oldScript.replaceWith(newScript);
  }
}
