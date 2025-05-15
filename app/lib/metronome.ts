import { click } from "@/lib/sound";

let playing = false;
let bpm = 120;
const calculateTimeBetweenClicks = () => 60 / bpm;
let timeBetweenClicks = calculateTimeBetweenClicks();
let timeoutID: NodeJS.Timeout;
let nextClick = 0;
let clickStart = 0;
let clicked = 0;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const setBpm = (newBpm: number) => {
  bpm = newBpm;
  timeBetweenClicks = calculateTimeBetweenClicks();
};

const setPlaying = (isPlaying: boolean) => {
  playing = isPlaying;

  if (playing) {
    run();
  } else {
    clearTimeout(timeoutID);
  }
};

const triggerNext = () => {
  if (!playing) {
    return;
  }

  click(nextClick, audioContext);
  clicked += 1;
  nextClick = clickStart + clicked * timeBetweenClicks;

  timeoutID = setTimeout(
    triggerNext,
    Math.floor((nextClick - audioContext.currentTime) * 1000)
  );
};

const run = () => {
  clearTimeout(timeoutID);
  clicked = 0;
  const time = audioContext.currentTime;

  clickStart = time + 0.1;
  nextClick = clickStart + timeBetweenClicks;

  triggerNext();
};

const metronome = {
  setBpm,
  setPlaying,
};

export default metronome;
