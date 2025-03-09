// Ad Blocker Extension
const adSelectors = [
    'div[class*="ad"]',
    'iframe[src*="ads"]',
    'img[src*="ad"]',
];
adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.remove();
    });
});
