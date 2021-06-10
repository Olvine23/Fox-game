import gameState from './gameState';
/* eslint-disable no-console */
const TICK_RATE = 3000;

async function init(){
  console.log("Starting game");

  let nextTimeToTick = Date.now()

  function nextAnimationFrame(){
    const now = Date.now();

    if(nextTimeToTick <= now){
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;

    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init()
