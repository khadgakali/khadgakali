// A list of all ad unit keys you want to load
var adUnitKeys = [
    '016a00269030c3c3fdecdafbfaca0eeb',
    '1ec12885c6277097c5861b7c2740b2a1',
    '9d4b89d5cbcaa1b19d907abbf60e5119',
    '373cc5c6f517c18407ef041b259c7957',
    '00d40dd8961eefbe7ad3ace47e3ddae6',
    'fdcb1ec53cb933f1ef28dbe66d9ba1bd',
    'd71dd54649a72db6b6f0a9abec7ccc6e',
    '507c46e8f716a21d987fae5b4eb29bac',
    '7d4d7b751cbafba0825ef51a60a603d3',
    '557bde13d9cfbf1e61649456c5b0c8e6',
    '7d4d7b751cbafba0825ef51a60a603d3',
    '5c64d1449c495bf7fd633e2db781e60b'
];

// Function to create and load a single ad unit
function loadAdUnit(key, width, height) {
    var atOptionsScript = document.createElement('script');
    atOptionsScript.type = 'text/javascript';
    atOptionsScript.innerHTML = 'atOptions = { "key" : "' + key + '", "format" : "iframe", "height" : ' + height + ', "width" : ' + width + ', "params" : {} };';
    document.body.appendChild(atOptionsScript);

    var invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//detachteethsolitude.com/' + key + '/invoke.js';
    document.body.appendChild(invokeScript);
}

// Loop through each key and load the ad unit
adUnitKeys.forEach(function(key) {
    // Assuming all ads are 728x90. You can modify this if needed.
    loadAdUnit(key, 728, 90);
});
