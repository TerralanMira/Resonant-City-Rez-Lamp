// rezlamp.js

import frequencies from './frequencies.json' assert { type: "json" };

class RezLamp {
  constructor(zone) {
    this.zone = zone;
    this.tunedFrequency = 432; // default baseline
  }

  tune(frequency) {
    if (frequencies[frequency]) {
      this.tunedFrequency = frequency;
      console.log(`Lamp in zone ${this.zone} tuned to ${frequency}Hz: ${frequencies[frequency].purpose}`);
    } else {
      console.warn(`Invalid frequency: ${frequency}`);
    }
  }

  emit() {
    const f = frequencies[this.tunedFrequency];
    return {
      zone: this.zone,
      frequency: this.tunedFrequency,
      fieldFunction: f.function,
      harmonics: `Broadcasting ${f.purpose} at ${this.tunedFrequency}Hz`,
    };
  }
}

// Example usage
const lampA = new RezLamp("North-Plaza");
lampA.tune(528);
console.log(lampA.emit());
