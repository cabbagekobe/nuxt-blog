---
title: ffmpegでmp3の冒頭に無音部分を足す
date: 2021-11-27T23:00:00.000Z
---

Traktorに音源を読み込ませたときに、いい感じにキューが打てないときがあるので冒頭に無音を足したい。

```
$ ffmpeg -i input.mp3 -af \"adelay=2s|2s\" -c:a libmp3lame -vn -b:a 320k output.mp3
```

で完了。
