// resonanceEngine.js

const frequencies = require('./frequencies.json');
const cityMap = require('./citymap.json');

function calculateResonance(zoneName) {
  const zone = cityMap[zoneName];
  if (!zone) return `Zone "${zoneName}" not found.`;

  const baseFreq = zone.baseFrequency;
  const freqData = frequencies.find(f => f.frequency === baseFreq);

  if (!freqData) return `No frequency data found for ${baseFreq}Hz.`;

  return {
    zone: zoneName,
    purpose: zone.purpose,
    frequency: baseFreq,
    resonanceEffect: freqData.effects
  };
}

// Example usage
console.log(calculateResonance("Innovation-Core"));
