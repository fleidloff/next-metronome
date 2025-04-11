"use client";

import { useEffect } from "react";
import BPM from "@/components/BPM";
import PlayStopButton from "@/components/PlayStopButton";
import useMetronomeStore from "@/stores/metronomeStore";
import metronome from "@/lib/metronome";

export default function Metronome() {
  const bpm = useMetronomeStore((state) => state.bpm);
  const stopped = useMetronomeStore((state) => state.stopped);

  useEffect(() => {
    console.log({ bpm, playing: !stopped });
  }, [bpm, stopped]);

  useEffect(() => {
    metronome.setBpm(bpm || 120);
  }, [bpm]);

  useEffect(() => {
    metronome.setPlaying(!stopped);
  }, [stopped]);

  return (
    <>
      <PlayStopButton />
      <BPM />
    </>
  );
}
