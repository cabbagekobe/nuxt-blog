---
title: githubに登録している公開鍵を簡単に取得authorized_keysに配置
date: 2020-12-14
---


何回もやるけどいろいろと覚えられないので
----------------------------------------------------

```
$ curl https://github.com/cabbagekobe.keys >> ~/.ssh/authorized_keys
```

もちろんcabbagekobeを他にそれぞれのユーザー名に変えればいい。

### wgetなら

```
$ wget https://github.com/cabbagekobe.keys -qO - >> ~/.ssh/authorized_keys
```

