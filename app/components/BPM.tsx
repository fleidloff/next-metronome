"use client";

import { TextInput } from "@/components/basic/components";
import { Metronome } from "@/components/basic/icons";
import useMetronomeStore from "@/stores/metronomeStore";

export default function BPM() {
  const bpm = useMetronomeStore((state) => state.bpm);
  const setBpm = useMetronomeStore((state) => state.setBpm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setBpm(newValue === "" ? "" : Number(newValue));
  };

  return (
    <>
      <TextInput
        type="number"
        icon={Metronome}
        value={bpm}
        onChange={handleChange}
        className="w-64" // sets width to 16rem
      />
    </>
  );
}
