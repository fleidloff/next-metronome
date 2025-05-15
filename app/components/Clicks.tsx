"use client";

import { Button } from "@/components/basic/components";
import useMetronomeStore from "@/stores/metronomeStore";

export default function Clicks() {
  const clicks = useMetronomeStore((state) => state.clicks);
  const setClicks = useMetronomeStore((state) => state.setClicks);

  const handleClick = (idx: number) => {
    const newClicks = [...clicks];
    newClicks[idx] = clicks[idx] === 1 ? 0 : 1;
    setClicks(newClicks);
  }

  return (
    <div className="flex flex-row flex-wrap gap-2">
        {clicks.map((click, idx) => 
            <Button 
              key={idx + '.' + click}
              color="green"
              outline={click !== 1}
              onClick={() => handleClick(idx)}>{idx + 1}</Button>
        )}
    </div>
  );
}
