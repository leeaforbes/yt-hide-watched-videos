document.getElementById("watch-threshold").addEventListener("click", saveWatchThreshold);
document.getElementById("watch-threshold").addEventListener("mousemove", displayWatchThreshold);
let toggle = document.getElementById("watch-threshold")

chrome.storage.sync.get('watchThreshold', function(data) {
    toggle.value = data.watchThreshold
    displayWatchThreshold()
});

function displayWatchThreshold() {
    document.getElementById("threshold-value").innerHTML = "<b>" + toggle.value + "%</b>"
}

function saveWatchThreshold() {
    // let toggle = document.getElementById("watch-threshold")
    chrome.storage.sync.set({ watchThreshold: toggle.value });
    displayWatchThreshold()
    // console.log(toggle.value)
}