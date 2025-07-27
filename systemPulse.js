// systemPulse.js

const frequencies = require('./frequencies.json');
const RezLamp = require('./rezLampNode.js'); // This will be adjusted below

// Since we're not using modules yet, we reinclude lamp logic here.
class RezLamp {
  constructor(location, tuningFrequency = 432) {
    this.location = location;
    this.tuningFrequency = tuningFrequency;
    this.active = false;
  }

  activate() {
    this.active = true;
    console.log(`🔆 Lamp activated at ${this.location} — ${this.tuningFrequency}Hz.`);
  }

  clearDistortion() {
    if (!this.active) return `Lamp at ${this.location} must be activated.`;
    return `Distortion cleared at ${this.location} using ${this.tuningFrequency}Hz.`;
  }
}

// Define district zones and resonance purposes
const zones = [
  { name: "Civic Core", freq: 528 },
  { name: "Garden Zone", freq: 639 },
  { name: "Healing Center", freq: 741 },
  { name: "Learning Hub", freq: 963 },
  { name: "Residential Ring", freq: 432 }
];

// Activate the city
function pulseCity(zones) {
  console.log("🌀 Initializing Resonant City Pulse...\n");

  zones.forEach(zone => {
    const lamp = new RezLamp(zone.name, zone.freq);
    lamp.activate();
    console.log(lamp.clearDistortion());
    console.log("---");
  });

  console.log("🌍 Field coherence rising.\nHarmonic infrastructure online.");
}

pulseCity(zones);
