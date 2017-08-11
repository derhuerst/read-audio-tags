'use strict'

const path = require('path')
const test = require('tape')

const readTags = require('..')

const src = path.join(__dirname, 'kevin-macleod-ghost-dance.slice.mp3')

test('readTags', (t) => {
	readTags(src, (err, tags) => {
		if (err) t.ifError(err)
		else {
			t.ok(tags)
			t.equal(tags.title, 'Ghost Dance')
			t.equal(tags.artist, 'Kevin MacLeod')
			t.equal(tags.genre, 'Classical')
		}
		t.end()
	})
})
