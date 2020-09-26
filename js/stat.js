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

//
// "use strict";
//
// (function() {
// window.renderStatistics = function(ctx, names, times) {
// 	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
// 	ctx.beginPath();
// 	ctx.moveTo(140, 20);
// 	ctx.lineTo(290, 20);
// 	ctx.lineTo(290, -70);
// 	ctx.lineTo(440, -70);
// 	ctx.lineTo(440, 40);
// 	ctx.lineTo(520, 40);
// 	ctx.lineTo(520, 100);
// 	ctx.lineTo(560, 100);
// 	ctx.lineTo(560, 290);
// 	ctx.lineTo(360, 290);
// 	ctx.lineTo(90, 290);
// 	ctx.lineTo(90, 100);
// 	ctx.lineTo(140, 100);
// 	ctx.closePath();
// 	ctx.fill();
// 	ctx.fillStyle = 'white';
// 	ctx.beginPath();
// 	ctx.moveTo(130, 10);
// 	ctx.lineTo(280, 10);
// 	ctx.lineTo(280, -60);
// 	ctx.lineTo(430, -60);
// 	ctx.lineTo(430, 30);
// 	ctx.lineTo(510, 30);
// 	ctx.lineTo(510, 90);
// 	ctx.lineTo(550, 90);
// 	ctx.lineTo(550, 280);
// 	ctx.lineTo(190, 280);
// 	ctx.lineTo(80, 280);
// 	ctx.lineTo(80, 90);
// 	ctx.lineTo(130, 90);
// 	ctx.closePath();
// 	ctx.fill();
//
//
// 	ctx.fillStyle = '#000';
// 	ctx.font = '16px PT Mono';
// 	ctx.fillText('Ура вы победили!', 240, 30);
// 	ctx.fillText('Список результатов:', 230, 48);
//
// 	var max = times[0];
// 	var maxIndex = 0;
// 	var histogramHeight = 150;
// 	var histogramWidth = 40;
// 	var initialX = 155;
// 	var initialY = 250;
// 	var indent = 90;
// 	for (var i = 0; i < times.length; i++) {
// 		if(times[i] > max) {
// 			max = times[i];
// 			maxIndex = i;
// 		}
// 	}
//
// 	var step = histogramHeight / max ;
// 	var getRandom = function () {
//   	return Math.random();
// 	}
//
// 	ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 140, 70);
//
// 	for (var i = 0; i < times.length; i++) {
// 		if (names[i] == "Вы") {
// 			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
// 		}
//     ctx.fillStyle = 'rgba(0, 0, 255,' + getRandom() + ')';
// 		ctx.fillRect(
//       initialX + indent * i,
//       initialY, histogramWidth,
//        -(times[i] * step));
// 		ctx.fillStyle = '#000';
// 		ctx.fillText(names[i], initialX + indent * i, initialY + 20);
// 		ctx.fillText(times[i].toFixed(0), initialX + indent * i, 245 - (times[i] * step));
// 	}
//
// };
//
// })();
