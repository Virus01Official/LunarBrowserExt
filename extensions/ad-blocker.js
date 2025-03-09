(function () {
  'use strict';

  const adSelectors = [
    '.ytd-promoted-video-renderer',
    'ytd-display-ad-renderer',
    '.ytp-ad-module',
    '.video-ads',
    '.ytp-ad-player-overlay',
    '.ytp-ad-overlay-image',
    '.ytp-ad-overlay-container',
    '.ytp-ad-skip-button-container',
    '.ytp-ad-preview-container',
    '.ytp-ad-text',
    '#player-ads',
    '.ytp-ad-message-container'
  ];

  function removeYTAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Skip video ads if visible
    const skipBtn = document.querySelector('.ytp-ad-skip-button');
    if (skipBtn) skipBtn.click();
  }

  // Initial cleanup
  window.addEventListener('load', () => {
    removeYTAds();
  });

  // Monitor for dynamically added ads
  const observer = new MutationObserver(() => {
    removeYTAds();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
