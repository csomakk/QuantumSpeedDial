console.log("Quantum Speed Dial Extension v1.0.1.7");

browser.commands.onCommand.addListener(function(command) {
  console.log("command:" + command);
  var newTab = false;
  if (command.search("load") === 0) {
    if (command.search("-new") > 0) {
      newTab = true;
    }
    this.speedDial(command.charAt(5), newTab)
  }
});

this.restoreOptions();

function restoreOptions() {
  console.log('restoring options');

  function setCurrentChoice(result) {
    this.resultDials = result.dials || [,,,,,,,,,,,,,,,,,,];
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("dials");
  getting.then(setCurrentChoice, onError);
}


function getUrlForKey(key) {
    return this.resultDials[key];
}

function speedDial(key, newTab) {
  var url = this.getUrlForKey(key);
  if (newTab) {
    browser.tabs.create({
      url:url
    });
  } else {
    browser.tabs.update({
      url: url
    });
  }
}
