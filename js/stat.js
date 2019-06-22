'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 80;
var TEXT_HEIGTH = 20;
var BAR_WIDTH = 40;
var barY = (CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGTH);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_WIDTH);
};

// находим максимальный элемент массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// находим рандомный цвет
var getEnemiesColor = function (mass) {
  var color = 'rgba(0, 0, 255, 0.' + Math.floor(3 + Math.random() * 9) + ')';
  if (mass === 'Вы') {
    color = 'rgba(255, 0, 0, 1)';
  }
  return color;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var barHeigth = (150 * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, barY - GAP - barHeigth);

    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    ctx.fillStyle = getEnemiesColor(players);
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, barY - barHeigth, BAR_WIDTH, barHeigth);
  }

  ctx.fillStyle = 'rgba(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 170, 20);
  ctx.fillText('Список результатов:', 170, 40);
};
