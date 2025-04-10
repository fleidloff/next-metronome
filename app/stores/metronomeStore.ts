import { create } from 'zustand'

const useMetronomeStore = create((set) => ({
  bpm: 120,
  setBpm: (newValue) => set({ bpm: newValue }),
  stopped: true,
  toggleStopped: () => set((state) => ({ stopped: !state.stopped })),
}))

export default useMetronomeStore;
