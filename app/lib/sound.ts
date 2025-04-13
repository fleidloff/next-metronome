"use client";

const click = (time: number, audioContext: AudioContext) => {
  console.log("click");
  // create an oscillator
  const osc = audioContext.createOscillator();

  // Set the sound frequency
  osc.frequency.value = 800;

  // Connect the oscillator to the output destination
  osc.connect(audioContext.destination);

  // Start the oscilator in 1 second and stop after a short time
  osc.start(time + 0);
  osc.stop(time + 0.03);
};

export { click };
