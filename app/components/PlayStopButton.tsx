"use client";

import { Button } from "@/components/basic/components";
import { Play, Stop } from "@/components/basic/icons";
import useMetronomeStore from "@/stores/metronomeStore";

export default function PlayStopButton() {
  const stopped = useMetronomeStore((state) => state.stopped);
  const toggleStopped = useMetronomeStore((state) => state.toggleStopped);

  return (
    <>
      <Button size="lg" onClick={toggleStopped}>
        {stopped ? (
          <Play className="m-2 h-5 w-5" />
        ) : (
          <Stop className="m-2 h-5 w-5" />
        )}
      </Button>
    </>
  );
}
