'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;


let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);

  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, 120, 20);
  ctx.fillText(`Список результатов:`, 120, 40);

  let getMaxElement = function (arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `hsl(240, ` + (25 + 70 * Math.random()) + `%, ` + `50%)`;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
    }
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP, BAR_WIDTH, -(times[i] * BAR_HEIGHT) / maxTime);

    ctx.fillStyle = `#000`;
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP * i + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - FONT_GAP - ((times[i] * BAR_HEIGHT) / maxTime));
  }
};
