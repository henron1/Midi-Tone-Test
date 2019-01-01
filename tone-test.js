console.clear();

const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
const gain = new Tone.Gain(0.1);
gain.toMaster();
synth.connect(gain);

const notes = [
    'C4', 'E4', 'G4', 'B4',
    'C5', 'Eb5', 'G5', 'Bb5'
];

var index = 0;

Tone.Transport.scheduleRepeat(time => {
    repeat(time);
}, '8n');

function repeat (time){
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '8n', time);
    index++;
}
  
Tone.Transport.start();

setTimeout(() => {
    Tone.Transport.stop();
}, 5000)