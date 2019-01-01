console.clear();

const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
]

synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'square';