import Metronome from "./components/Metronome";

export default function Home() {
  return <div className="p-8 space-y-4">
    <h1 className="text-3xl font-bold underline">next metronome</h1>
    <Metronome />
  </div>;
}