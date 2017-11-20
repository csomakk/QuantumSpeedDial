function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    dials: [
      document.querySelector("#dial1").value,
      document.querySelector("#dial2").value,
      document.querySelector("#dial3").value,
      document.querySelector("#dial4").value,
      document.querySelector("#dial5").value,
      document.querySelector("#dial6").value,
      document.querySelector("#dial7").value,
      document.querySelector("#dial8").value,
      document.querySelector("#dial9").value
    ]
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    var resultDials = result.dials || [,,,,,,,,,,,,,,,,,,];
    document.querySelector("#dial1").value = resultDials[0] || "https://mail.google.com/mail/u/0/";
    document.querySelector("#dial2").value = resultDials[1] || "https://theoldreader.com/";
    document.querySelector("#dial3").value = resultDials[2] || "https://www.facebook.com/";
    document.querySelector("#dial4").value = resultDials[3] || "https://calendar.google.com/calendar/render#main_7";
    document.querySelector("#dial5").value = resultDials[4] || "https://index.hu/";
    document.querySelector("#dial6").value = resultDials[5] || "https://www.youtube.com/";
    document.querySelector("#dial7").value = resultDials[6] || "";
    document.querySelector("#dial8").value = resultDials[7] || "";
    document.querySelector("#dial9").value = resultDials[8] || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("dials");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
