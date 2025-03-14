let allCloseToggle = document.getElementById("all-on")
let thresholdSlider = document.getElementById("watch-threshold")

allCloseToggle.addEventListener("click", saveAllOn);
thresholdSlider.addEventListener("click", saveWatchThreshold);
thresholdSlider.addEventListener("mousemove", displayWatchThreshold);

// all on
chrome.storage.sync.get('allOn', function(data) {
    let toggle = document.getElementById("auto-close-checkbox")
    toggle.checked = data.allOn
});

function saveAllOn() {
    let toggle = document.getElementById("auto-close-checkbox")
    chrome.storage.sync.set({ allOn: toggle.checked });
}

// watch threshold
chrome.storage.sync.get('watchThreshold', function(data) {
    thresholdSlider.value = data.watchThreshold
    displayWatchThreshold()
});

function displayWatchThreshold() {
    console.log(thresholdSlider.value)
    document.getElementById("threshold-value").innerHTML = "<b>" + thresholdSlider.value + "%</b>"
}

function saveWatchThreshold() {
    chrome.storage.sync.set({ watchThreshold: thresholdSlider.value });
    displayWatchThreshold()
}