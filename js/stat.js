'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;

var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var PLAYER_STAT_Y = 240;

// Players Points
var playerPoints1 = 150;
var playerPoints2 = 120;
var playerPoints3 = 50;
var playerPoints4 = 70;

window.renderStatistics = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'rgba(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 180, 20);
  ctx.fillText('Список результатов:', 180, 40);

  // 1st Player Column
  ctx.fillStyle = 'red';
  ctx.fillRect(170, (PLAYER_STAT_Y - playerPoints1), 40, playerPoints1);
  // ctx.fillStyle = "#000000";
  // ctx.font = '16px PT Mono';
  // ctx.fillText(wizardTimes[0], 180, 20);

  // 2nd Player Column
  ctx.fillStyle = 'blue';
  ctx.fillRect(260, (PLAYER_STAT_Y - playerPoints2), 40, playerPoints2);
  // 3rd Player Column
  ctx.fillStyle = 'grey';
  ctx.fillRect(350, (PLAYER_STAT_Y - playerPoints3), 40, playerPoints3);
  // 4th Player Column
  ctx.fillStyle = 'green';
  ctx.fillRect(440, (PLAYER_STAT_Y - playerPoints4), 40, playerPoints4);
};

// window.renderStatistics = function (times) {
//   var wizardTimes = [];
// }
