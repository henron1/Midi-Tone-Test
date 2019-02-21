const scribble = require('scribbletune');

// Creating a clip that contains a musical idea
let clip = scribble.clip({
	notes: 'F#m C#m DM Bm EM AM DM C#m AM',
	pattern: '[-x-x][x---][x-x-][xxxx][x-xx]'.repeat(32)
});

scribble.midi(clip, 'chord.mid');