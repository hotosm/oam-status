/* global XMLHttpRequest */
'use strict';

function reqListener () {
  var data = JSON.parse(this.responseText);

  var stats = document.querySelector('[data-hook*="history"] .stats-list');
  // Set properties on holders
  for (var i = 0; i < data.results.length; i++) {
    var result = data.results[i];
    var dateFromNow = moment(result.date).fromNow();

    if (i == 0) {
      var last = document.querySelector('[data-hook*="last-update"]');
      last.innerHTML = 'Updated ' + dateFromNow;
    }

    var dt = document.createElement('dt');
    var dd = document.createElement('dd');

    dt.innerHTML = result.count + ' images';
    dd.innerHTML = dateFromNow;
    stats.appendChild(dt);
    stats.appendChild(dd);
  }
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'https://oam-catalog.herokuapp.com/analytics?limit=16', true);
oReq.send();