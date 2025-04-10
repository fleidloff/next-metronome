'use client'

import { Button } from "flowbite-react";
import { useState } from "react";
import { IoPlay, IoStop } from "react-icons/io5";

export default function PlayStopButton({ onChange }) {
  const [ stopped, setStopped ] = useState<boolean>(true);

  const onClick = () => {
    const newState = !stopped;
    setStopped(newState);
    onChange({ playing: !newState, stopped: newState });
  }

  return <>
    <Button size="lg" onClick={onClick}> 
      {stopped ? 
        <IoPlay className="m-2 h-5 w-5" /> :
        <IoStop className="m-2 h-5 w-5" />
      }
    </Button>
  </>;
}