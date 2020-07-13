var browsersList = [
  {
    browser: "Chrome",
    minVersion: 4
  },
  {
    browser: "Firefox",
    minVersion: 2
  },
  {
    browser: "Opera",
    minVersion: 10
  },
  {
    browser: "Edge",
    minVersion: 12
  },
  {
    browser: "MSIE",
    minVersion: 10
  },
  {
    browser: "IE",
    minVersion: 12
  },
  {
    browser: "Safari",
    minVersion: 10
  }
];

function checkBrowser() {
  var userAgent = navigator.userAgent;
  var version;
  var browser =
    userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    ) || [];

  if (/trident/i.test(browser[1])) {
    version = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return "IE " + (version[1] || "");
  }

  if (browser[1] === "Chrome") {
    version = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
    if (version !== null) {
      return version
        .slice(1)
        .join(" ")
        .replace("OPR", "Opera");
    }
  }

  browser = browser[2]
    ? [browser[1], browser[2]]
    : [navigator.appName, navigator.appVersion];
  if ((version = userAgent.match(/version\/(\d+)/i)) !== null) {
    browser.splice(1, 1, version[1]);
  }
  return browser.join(" ");
}

function compareVersions(currentBrowser) {
  var browser = currentBrowser.split(" ")[0];
  var version = Number(currentBrowser.split(" ")[1]);
  var notSupported;

  for (var i = 0; i < browsersList.length; i++) {
    if (
      browsersList[i].browser === browser &&
      browsersList[i].minVersion > version
    ) {
      notSupported = true;
    }
  }

  if (notSupported) {
    var container = document.createElement("div");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    var h4 = document.createElement("h4");
    var hr = document.createElement("hr");

    var browserChrome = document.createElement("div");
    var chromeImage = document.createElement("img");
    var chromeName = document.createElement("p");

    var browserFirefox = document.createElement("div");
    var firefoxImage = document.createElement("img");
    var firefoxName = document.createElement("p");

    var browserOpera = document.createElement("div");
    var operaImage = document.createElement("img");
    var operaName = document.createElement("p");

    var browserEdge = document.createElement("div");
    var edgeImage = document.createElement("img");
    var edgeName = document.createElement("p");

    chromeName.innerText = "Chrome";
    chromeImage.src = "browsersLogo/Google.png";

    firefoxName.innerText = "Firefox";
    firefoxImage.src = "browsersLogo/Firefox.png";

    operaName.innerText = "Opera";
    operaImage.src = "browsersLogo/Opera.png";

    edgeName.innerText = "Edge";
    edgeImage.src = "browsersLogo/Edge.png";

    browserChrome.appendChild(chromeImage);
    browserChrome.appendChild(chromeName);

    browserFirefox.appendChild(firefoxImage);
    browserFirefox.appendChild(firefoxName);

    browserOpera.appendChild(operaImage);
    browserOpera.appendChild(operaName);

    browserEdge.appendChild(edgeImage);
    browserEdge.appendChild(edgeName);

    container.style.cssText = "text-align: center; font-family: sans-serif";
    h3.innerText = "Your browser isn't supported!";
    p.innerText =
      "Unfortunately we noticed that you're using an outdated browser. Please, update your browser or try another one!";
    h4.innerText = "List of supported browsers:";
    browserChrome.style.cssText =
      "display: inline-block; *display: inline; zoom: 1; margin: 20px";
    browserFirefox.style.cssText =
      "display: inline-block; *display: inline; zoom: 1; margin: 20px";
    browserOpera.style.cssText =
      "display: inline-block; *display: inline; zoom: 1; margin: 20px";
    browserEdge.style.cssText =
      "display: inline-block; *display: inline; zoom: 1; margin: 20px";
    chromeImage.style.cssText = "width: 70px; height: 70px";
    firefoxImage.style.cssText = "width: 70px; height: 70px";
    operaImage.style.cssText = "width: 70px; height: 70px";
    edgeImage.style.cssText = "width: 70px; height: 70px";

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(h4);
    container.appendChild(hr);
    container.appendChild(browserChrome);
    container.appendChild(browserFirefox);
    container.appendChild(browserOpera);
    container.appendChild(browserEdge);
    document.body.appendChild(container);
  }
}

compareVersions(checkBrowser(), browsersList);
