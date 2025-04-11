'use client'

import { Button } from "flowbite-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypedButton = Button as unknown as React.FC<any>; // Hacky workaround

import { IoPlay, IoStop } from "react-icons/io5";
import useMetronomeStore from "../stores/metronomeStore"

export default function PlayStopButton() {
  const stopped = useMetronomeStore((state) => state.stopped)
  const toggleStopped = useMetronomeStore((state) => state.toggleStopped)

  return <>
    <TypedButton size="lg" onClick={toggleStopped}>
      {stopped ?
        <IoPlay className="m-2 h-5 w-5" /> :
        <IoStop className="m-2 h-5 w-5" />
      }
    </TypedButton>
  </>;
}
