{
  let tagName = "ytd-rich-item-renderer"
  let threshold = 200 // extra large

chrome.storage.sync.get('watchThreshold', function(data) {
  threshold = data.watchThreshold
  removeWatchedVideos()
});

  // Create a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver(removeWatchedVideos);

  // Configure the observer to listen for changes in the entire document
  const observerConfig = {
    childList: true,
    subtree: true,
  };

  // Start observing the document
  observer.observe(document, observerConfig);

  function removeWatchedVideos() {
    let videoThumbnails = document.getElementsByTagName(tagName)

    for (let video of videoThumbnails) {
      let percentageWatched = video?.querySelector("#overlays")?.querySelector("#progress")?.style?.width
      percentageWatched = parseInt(percentageWatched)
      if(percentageWatched >= threshold) {
        video.remove()
        // in future just hide the videos then unhide without page refresh :)
        // video.style.display = 'none'
      }
    }
  }
}
