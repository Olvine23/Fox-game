const gameState = {
  current: "INIT",
  wakeTime: -1,
  clock: 1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);
    return this.clock;
  },
  handleUserAction(icon){
     if(["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current))
     {
        return

     }
     if(this.current === 'INIT' || this.current === "DEAD"){
       this.startGame();
       return;
     }
     switch(icon){
      case "weather":
       this.changeWeather();
       break;
      case "poop":
       this.cleanUpPoop();
       break;
      case  "fish":
        this.feed();
        break;
    }
  },
  changeWeather(){
    console.log("Change Weather");
  },
  cleanUpPoop(){
    console.log("Clean poop");
  },
  feed(){
    console.log("Feed me");
  },
  startGame(){
    console.log("hatching");
    this.current = "HATCHING"
    this.wakeTime = this.clock + 3;
  },
  wake(){
    console.log("awoken");
    this.current = "IDLING";
    this.wakeTime = -1;

  },
  
  

};

export const handleUserAction = gameState.handleUserAction.bind(gameState);

export default gameState;
