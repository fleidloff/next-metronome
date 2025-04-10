'use client'

import BPM from "./BPM";
import PlayStopButton from "./PlayStopButton";

export default function Metronome() {
  return <>
    <PlayStopButton onChange={newState => console.log(newState)} />
    <BPM />
  </>;
}