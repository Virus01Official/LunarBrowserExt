(function () {
  'use strict';

  // Prevent YouTube from loading ad modules
  Object.defineProperty(window, 'ytInitialPlayerResponse', {
    get: function () {
      return this._ytInitialPlayerResponse || {};
    },
    set: function (val) {
      if (val && val.adPlacements) {
        delete val.adPlacements;
      }
      this._ytInitialPlayerResponse = val;
    }
  });

  // Catch YouTube's playerResponse ad payload
  const originalDefineProperty = Object.defineProperty;
  Object.defineProperty = function (obj, prop, descriptor) {
    if (prop === 'playerResponse' && descriptor && descriptor.set) {
      const originalSetter = descriptor.set;
      descriptor.set = function (val) {
        if (val && val.adPlacements) {
          delete val.adPlacements;
        }
        return originalSetter.call(this, val);
      };
    }
    return originalDefineProperty.call(Object, obj, prop, descriptor);
  };

  // Also try removing ad modules
  const removeAds = () => {
    const adContainers = [
      '.ytp-ad-module',
      '.ytp-ad-player-overlay',
      '.ytp-ad-overlay-container',
      '.ytp-ad-skip-button-container',
      '.video-ads',
      '#player-ads'
    ];
    adContainers.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  };

  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
})();
