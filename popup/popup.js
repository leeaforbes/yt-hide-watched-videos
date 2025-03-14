let allCloseToggle = document.getElementById("all-on")
let thresholdSlider = document.getElementById("watch-threshold")
let sidebarToggle = document.getElementById("sidebar-toggle")
let creatorVideosToggle = document.getElementById("creator-videos-toggle")
let searchToggle = document.getElementById("search-toggle")
let homeToggle = document.getElementById("home-toggle")

allCloseToggle.addEventListener("click", saveAllOn);
thresholdSlider.addEventListener("click", saveWatchThreshold);
thresholdSlider.addEventListener("mousemove", displayWatchThreshold);
sidebarToggle.addEventListener("click", saveSidebar);
creatorVideosToggle.addEventListener("click", saveCreatorVideos);
searchToggle.addEventListener("click", saveSearch);
homeToggle.addEventListener("click", saveHome);

// all on
chrome.storage.sync.get('allOn', function(data) {
    let toggle = document.getElementById("all-on-checkbox")
    toggle.checked = data.allOn
});

function saveAllOn() {
    let toggle = document.getElementById("all-on-checkbox")
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

// sidebar
chrome.storage.sync.get('sidebar', function(data) {
    let toggle = document.getElementById("sidebar-toggle-checkbox")
    toggle.checked = data.sidebar
});

function saveSidebar() {
    let toggle = document.getElementById("sidebar-toggle-checkbox")
    chrome.storage.sync.set({ sidebar: toggle.checked });
}

// creator videos
chrome.storage.sync.get('creatorVideos', function(data) {
    let toggle = document.getElementById("creator-videos-toggle-checkbox")
    toggle.checked = data.creatorVideos
});

function saveCreatorVideos() {
    let toggle = document.getElementById("creator-videos-toggle-checkbox")
    chrome.storage.sync.set({ creatorVideos: toggle.checked });
}

// search
chrome.storage.sync.get('search', function(data) {
    let toggle = document.getElementById("search-toggle-checkbox")
    toggle.checked = data.search
});

function saveSearch() {
    let toggle = document.getElementById("search-toggle-checkbox")
    chrome.storage.sync.set({ search: toggle.checked });
}

// home
chrome.storage.sync.get('home', function(data) {
    let toggle = document.getElementById("home-toggle-checkbox")
    toggle.checked = data.home
});

function saveHome() {
    let toggle = document.getElementById("home-toggle-checkbox")
    chrome.storage.sync.set({ home: toggle.checked });
}