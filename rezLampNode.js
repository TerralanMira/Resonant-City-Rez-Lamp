// rezLampNode.js

const frequencies = require('./frequencies.json');

class RezLamp {
  constructor(location, tuningFrequency = 432) {
    this.location = location;
    this.tuningFrequency = tuningFrequency;
    this.active = false;
  }

  activate() {
    this.active = true;
    console.log(`Rez Lamp at ${this.location} activated. Tuning to ${this.tuningFrequency}Hz.`);
  }

  clearDistortion() {
    if (!this.active) return "Lamp must be activated.";
    return `Distortion cleared at ${this.location} using ${this.tuningFrequency}Hz resonance.`;
  }

  retune(newFreq) {
    const freqValid = frequencies.some(f => f.frequency === newFreq);
    if (!freqValid) return `Invalid frequency: ${newFreq}Hz.`;
    this.tuningFrequency = newFreq;
    return `Lamp at ${this.location} retuned to ${newFreq}Hz.`;
  }
}

// Example
const lamp = new RezLamp("Education-District", 741);
lamp.activate();
console.log(lamp.clearDistortion());
console.log(lamp.retune(639));
