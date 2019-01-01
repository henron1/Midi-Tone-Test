const scribble = require('scribbletune');

// Creating a clip that contains a musical idea
let clip = scribble.clip({
	notes: 'F#m C#m DM Bm EM AM DM C#m AM',
	pattern: '[-x][----][x-][xxxx][----]'.repeat(8)
});

scribble.midi(clip, 'chords.mid');