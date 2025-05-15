import { create } from "zustand";

interface MetronomeState {
  bpm: number | "";
  setBpm: (newValue: number | "") => void;
  stopped: boolean;
  toggleStopped: () => void;
  clicks: Array<number>;
  setClicks: (newValue: Array<number>) => void;
}

const useMetronomeStore = create<MetronomeState>((set) => ({
  bpm: 120,
  setBpm: (newValue) => set({ bpm: newValue }),
  stopped: true,
  toggleStopped: () => set((state) => ({ stopped: !state.stopped })),
  clicks: [1,1,1,1],
  setClicks: (newValue) => set({ clicks: newValue })
}));

export default useMetronomeStore;
