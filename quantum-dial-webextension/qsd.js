console.log("Quantum Speed Dial Extension v1.0.0.6");

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

function getUrlForKey(key) {
    return "https://index.hu/" + key;
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
