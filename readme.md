# read-audio-tags

[![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/read-audio-tags.svg)](https://greenkeeper.io/)

**Read tags from all common formats.** Uses [ffprobe](http://ffmpeg.org/ffprobe.html).

[![npm version](https://img.shields.io/npm/v/read-audio-tags.svg)](https://www.npmjs.com/package/read-audio-tags)
[![build status](https://img.shields.io/travis/derhuerst/read-audio-tags.svg)](https://travis-ci.org/derhuerst/read-audio-tags)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/read-audio-tags.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install read-audio-tags
```


## Usage

```js
const readTags = require('read-audio-tags')

readTags('/path/to/audio.m4a', (err, tags) => {
	if (err) console.error(err)
	else console.log(tags)
})
```


## API

```js
readTags(file, [ffprobe], cb)
```

You may pass in an `ffprobe` path to use a custom executable, e.g. from [`ffprobe-static`](https://github.com/joshwnj/ffprobe-static).


## Contributing

If you have a question or have difficulties using `read-audio-tags`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/read-audio-tags/issues).
