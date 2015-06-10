/* global XMLHttpRequest */
'use strict';

function reqListener () {
  var data = JSON.parse(this.responseText);

  // Set properties on holders
  document.getElementsByClassName('images')[0].innerHTML = data.meta.found;

  // Show stats box now that we have stats
  document.getElementsByClassName('stats')[0].style['display'] = 'block';
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'https://oam-catalog.herokuapp.com/', true);
oReq.send();
