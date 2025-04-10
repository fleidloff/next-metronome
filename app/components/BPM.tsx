'use client'

import { TextInput } from "flowbite-react";
import { useState } from "react";
import { TbMetronome } from "react-icons/tb";
import useMetronomeStore from "../stores/metronomeStore"

export default function BPM({ onChange }) {
  const bpm = useMetronomeStore((state) => state.bpm)
  const setBpm = useMetronomeStore((state) => state.setBpm)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setBpm(newValue === '' ? '' : Number(newValue));  

  };

  return <>
    <TextInput 
      type="number" 
      icon={TbMetronome}
      value={bpm} 
      onChange={handleChange} 
      className="w-64" // sets width to 16rem    
    />
  </>;
}