'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}


window.renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  //Ура вы победили! \nСписок результатов:
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000'
  ctx.fillText('Ура вы победили!', 120, 20);
  ctx.fillText('Список результатов:', 120, 40);

  var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = "hsl(240, " + (25 + 70 * Math.random()) + '%, ' + '50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
    }
    ctx.fillRect(
      CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i,
      CLOUD_HEIGHT - CLOUD_Y - GAP,
      BAR_WIDTH,
      -(times[i] * BAR_HEIGHT)/maxTime)

    ctx.fillStyle = '#000';
    ctx.fillText(
      names[i],
      CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i,
      CLOUD_HEIGHT - CLOUD_Y - GAP
    );
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i,
      CLOUD_HEIGHT - FONT_GAP - ((times[i] * BAR_HEIGHT)/maxTime)
    );


  }

};
