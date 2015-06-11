/* global XMLHttpRequest */
'use strict';

function reqListener () {
  var data = JSON.parse(this.responseText);

  var stats = document.getElementsByClassName('stats')[0];
  // Set properties on holders
  for (var i = 0; i < data.results.length; i++) {
    var result = data.results[i];
    var div = document.createElement('div');
    div.innerHTML = result.count + ' images as of ' + result.date + '.';
    stats.appendChild(div);
  }

  // Show stats box now that we have stats
  stats.style['display'] = 'block';
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'https://oam-catalog.herokuapp.com/analytics', true);
oReq.send();
