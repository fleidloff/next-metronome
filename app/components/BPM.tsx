'use client'

import { TextInput } from "flowbite-react";
import { useState } from "react";
import { TbMetronome } from "react-icons/tb";

export default function BPM() {
  const [bpm, setBpm] = useState<number | ''>(120);

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