import { click } from "@/lib/sound";

let playing = false;
let bpm = 120;
const calculateTimeBetweenClicks = () => 60 / bpm;
let timeBetweenClicks = calculateTimeBetweenClicks();
let timeoutID: NodeJS.Timeout;
let nextClick = 0;
let clickStart = 0;
let clicked = 0;
let clicks = [1, 1, 1, 1];
let audioContext = null;
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
}

const setBpm = (newBpm: number) => {
  bpm = newBpm;
  timeBetweenClicks = calculateTimeBetweenClicks();
};

const setClicks = (newClicks: Array) => {
  clicks = newClicks;
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

  clicked += 1;
  //console.log("click for beat", clicked);
  if (clicks[clicked - 1] === 1) {
    click(nextClick, audioContext!);
  }
  nextClick = clickStart + clicked * timeBetweenClicks;
  if (clicked >= clicks.length) {
    clickStart = nextClick;
    clicked = 0;
  }

  timeoutID = setTimeout(
    triggerNext,
    Math.floor((nextClick - audioContext!.currentTime) * 1000)
  );
};

const run = () => {
  clearTimeout(timeoutID);
  clicked = 0;
  const time = audioContext!.currentTime;

  clickStart = time + 0.1;
  nextClick = clickStart + timeBetweenClicks;

  triggerNext();
};

const metronome = {
  setBpm,
  setPlaying,
  setClicks
};

export default metronome;
