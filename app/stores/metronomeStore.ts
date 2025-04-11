import { create } from 'zustand'

interface MetronomeState {
    bpm: number | ''
    setBpm: (newValue: number | '') => void
    stopped: boolean
    toggleStopped: () => void
}

const useMetronomeStore = create<MetronomeState>((set) => ({
  bpm: 120,
  setBpm: (newValue) => set({ bpm: newValue }),
  stopped: true,
  toggleStopped: () => set((state) => ({ stopped: !state.stopped })),
}))

export default useMetronomeStore;
