import { click } from "@/lib/sound";

let playing = false;
let bpm = 120;
let intervalID: NodeJS.Timeout;

const setBpm = (newBpm: number) => {
  bpm = newBpm;
  if (playing) {
    run();
  }
};
const setPlaying = (isPlaying: boolean) => {
  playing = isPlaying;

  if (playing) {
    run();
  } else {
    clearInterval(intervalID);
  }
};

const run = () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    console.log("click");
    click();
  }, 1000 * (60 / bpm));
};

const metronome = {
  setBpm,
  setPlaying,
};

export default metronome;
