'use strict'

const shell = require('shell-escape-tag').default
const {exec} = require('child_process')

const readTags = (file, ffprobe = 'ffprobe', cb) => {
	if ('function' === typeof ffprobe) {
		cb = ffprobe
		ffprobe = 'ffprobe'
	}

	const cmd = shell `${ffprobe} -v error -print_format json -show_entries format ${file}`
	exec(cmd, (err, stdout, stderr) => {
		if (err) {
			err.message = stderr.trim()
			return cb(err)
		}

		try {
			const data = JSON.parse(stdout)
			const tags = data && data.format && data.format.tags || null
			if (!tags) cb(new Error('ffprobe returned invalid data'))
			cb(null, tags)
		} catch (err) {
			cb(new Error('ffprobe returned invalid JSON'))
		}
	})
}

module.exports = readTags
