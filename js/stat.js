'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

window.renderStatistic = function (ctx) {
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect = (CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

