"use client";

const click = () => {
  // Create the audio context
  const audioContext = new window.AudioContext();

  // create an oscillator
  const osc = audioContext.createOscillator();

  // Set the sound frequency
  osc.frequency.value = 800;

  // Connect the oscillator to the output destination
  osc.connect(audioContext.destination);

  // Start the oscilator in 1 second and stop after a short time
  osc.start(audioContext.currentTime + 0);
  osc.stop(audioContext.currentTime + 0.03);
};

export { click };
