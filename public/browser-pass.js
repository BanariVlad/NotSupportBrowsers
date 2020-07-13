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
    minVersion: 9
  },
  {
    browser: "IE",
    minVersion: 11
  },
  {
    browser: "Safari",
    minVersion: 5
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
    document.write("Your browser doesn't support Vue!");
    console.log("Your browser doesn't support Vue!");
  }
}

compareVersions(checkBrowser(), browsersList);
