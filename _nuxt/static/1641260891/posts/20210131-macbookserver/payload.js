__NUXT_JSONP__("/posts/20210131-macbookserver", (function(a,b,c,d,e,f,g){return {data:[{post:{slug:"20210131-macbookserver",title:c,date:"2021-01-31T14:28:12.263Z",toc:[{id:e,depth:2,text:c}],body:{type:"root",children:[{type:a,tag:"h2",props:{id:e},children:[{type:a,tag:"a",props:{ariaHidden:"true",href:"#%E5%AE%B6%E3%81%AB%E8%BB%A2%E3%81%8C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8Bmacbook%E3%82%92%E7%B0%A1%E5%8D%98%E3%81%AB%E3%82%B5%E3%83%BC%E3%83%90%E3%81%AB%E3%81%97%E3%81%A6%E3%81%8A%E3%81%8F",tabIndex:-1},children:[{type:a,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:b,value:c}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"だれもの家に転がっているもう使わなくなったMacBook、そのMacBook、簡単にサーバとしてつかえるようにしておきましょう。"}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"とはいえ、完全なサーバとして運用するのはノートPCはサーバ向けハードというわけではないのであまりオススメしません。"},{type:a,tag:"br",props:{},children:[]},{type:b,value:"\n（検索すると火事になったー！！とか出てくるけどそのページはVPS比較のアフィサイトなので眉唾と思いつつ同意する部分もある）"}]},{type:b,value:d},{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:a,tag:"code",props:{},children:[{type:b,value:"# とりあえずソフトウェアの更新\nyes | sudo apt update && yes | sudo apt upgrade && yes | sudo apt autoremove\n\n# Mac系列にUbuntu系のディストリをいれて下記のエラーが表示される場合 sudo su -以降のコマンドを入れる\n# grubx64.efiをshimx64.efiにコピーして置き換える必要がある。\n\u003E Failed to Set MokListRT: Invalid Parameter\n\u003E Could not create mokListRT: Invalid Parameter\n\u003E Importing MOK states has failed: import_mok_state() failed: Invalid Parameter\n\u003E Continuing boot since secure mode is disabled.\n\nsudo su -\ncd \u002Fboot\u002Fefi\u002FEFI\u002Fubuntu\ncp grubx64.efi shimx64.efi\nsudo apt remove --purge shim shim-signed\nsudo update-grub2\nreboot\n\n# tailscale\ncurl -fsSL https:\u002F\u002Fpkgs.tailscale.com\u002Fstable\u002Fubuntu\u002Ffocal.gpg | sudo apt-key add -\ncurl -fsSL https:\u002F\u002Fpkgs.tailscale.com\u002Fstable\u002Fubuntu\u002Ffocal.list | sudo tee \u002Fetc\u002Fapt\u002Fsources.list.d\u002Ftailscale.list\nsudo apt update\nsudo apt install tailscale\nsudo tailscale up\nsudo tailscaled\nsudo systemctl enable --now tailscale\n\n# SSHクライアントのインストール\nsudo apt install openssh-server\n\n# SSHキーの登録\ncurl https:\u002F\u002Fgithub.com\u002Fcabbagekobe.keys \u003E\u003E ~\u002F.ssh\u002Fauthorized_keys\n\n# PC閉じたときのサスペンドの無効化\nsudo vi \u002Fetc\u002Fsystemd\u002Flogind.conf\n- #HandleLidSwitch=suspend\n+ HandleLidSwitch=ignore\n\n# docker周りのインストール\n## 既存のパッケージのリストを更新します。\nsudo apt update\n\n## aptがHTTPS経由でパッケージを使用できるようにするいくつかの必要条件パッケージをインストール\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\n\n## 公式DockerリポジトリのGPGキーをシステムに追加\ncurl -fsSL https:\u002F\u002Fdownload.docker.com\u002Flinux\u002Fubuntu\u002Fgpg | sudo apt-key add -\n\n## DockerリポジトリをAPTソースに追加します。\nsudo add-apt-repository \"deb [arch=amd64] https:\u002F\u002Fdownload.docker.com\u002Flinux\u002Fubuntu focal stable\"\n\n## Dockerパッケージでパッケージデータベースを更新\nsudo apt update\n\n## Dockerリポジトリからインストールしようとしていることを確認\napt-cache policy docker-ce\n\n## Dockerインストール\nsudo apt install docker-ce\n\n## dockerのデーモン確認\nsudo systemctl status docker\n\n## ユーザーをdockerグループに追加(dockerコマンドを実行するたびに sudoを入力しないようにする)\nsudo usermod -aG docker ${USER}\n\n## docker-composeのインストール( 1.28.2の部分は https:\u002F\u002Fgithub.com\u002Fdocker\u002Fcompose\u002Freleases を確認)\nsudo curl -L \"https:\u002F\u002Fgithub.com\u002Fdocker\u002Fcompose\u002Freleases\u002Fdownload\u002F1.28.2\u002Fdocker-compose-$(uname -s)-$(uname -m)\" -o \u002Fusr\u002Flocal\u002Fbin\u002Fdocker-compose\n\n## docker-composeの権限変更\nsudo chmod +x \u002Fusr\u002Flocal\u002Fbin\u002Fdocker-compose\n\n## sambaのインストール\nsudo apt -y install samba\n\n## samba共有用のディレクトリ作成\nsudo mkdir \u002Fhome\u002Fshare\nsudo chmod 777 \u002Fhome\u002Fshare\n\n## samba設定ファイル記入\nsudo vim \u002Fetc\u002Fsamba\u002Fsmb.conf\n\n## samba再起動と自動起動の設定\nsudo systemctl restart smbd\nsudo systemctl enable smbd\n\n"}]}]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002F20210131-macbookserver",extension:".md",createdAt:g,updatedAt:g}}],fetch:{},mutations:void 0}}("element","text","家に転がっているMacBookを簡単にサーバにしておく","\n","家に転がっているmacbookを簡単にサーバにしておく","p","2021-12-30T05:02:12.935Z")));