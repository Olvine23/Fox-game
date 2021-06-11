import   game, { handleUserAction } from './gameState';
import initButtons from './buttons';
/* eslint-disable no-console */
import { TICK_RATE } from './constants';
async function init(){
  console.log("Starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now()

  function nextAnimationFrame(){
    const now = Date.now();

    if(nextTimeToTick <= now){
      game.tick();
      nextTimeToTick = now + TICK_RATE;

    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init()
