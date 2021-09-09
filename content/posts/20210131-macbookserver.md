---
title: 家に転がっているMacBookを簡単にサーバにしておく
date: 2021-01-31T14:28:12.263Z
---


家に転がっているMacBookを簡単にサーバにしておく
-----------------------------------------------

だれもの家に転がっているもう使わなくなったMacBook、そのMacBook、簡単にサーバとしてつかえるようにしておきましょう。

とはいえ、完全なサーバとして運用するのはノートPCはサーバ向けハードというわけではないのであまりオススメしません。  
（検索すると火事になったー！！とか出てくるけどそのページはVPS比較のアフィサイトなので眉唾と思いつつ同意する部分もある）

```
# とりあえずソフトウェアの更新
yes | sudo apt update && yes | sudo apt upgrade && yes | sudo apt autoremove

# Mac系列にUbuntu系のディストリをいれて下記のエラーが表示される場合 sudo su -以降のコマンドを入れる
Failed to Set MokListRT: Invalid Parameter
Could not create mokListRT: Invalid Parameter
Importing MOK states has failed: import_mok_state() failed: Invalid Parameter
Continuing boot since secure mode is disabled.

sudo su -
cd /boot/efi/EFI/ubuntu
cp grubx64.efi shimx64.efi
reboot

# grubx64.efiをshimx64.efiにコピーして置き換える必要がある。

# SSHキーの登録
curl https://github.com/cabbagekobe.keys >> ~/.ssh/authorized_keys

# PC閉じたときのサスペンドの無効化
sudo vi /etc/systemd/logind.conf
- #HandleLidSwitch=suspend
+ HandleLidSwitch=ignore

# docker周りのインストール
## 既存のパッケージのリストを更新します。
sudo apt update

## aptがHTTPS経由でパッケージを使用できるようにするいくつかの必要条件パッケージをインストール
sudo apt install apt-transport-https ca-certificates curl software-properties-common

## 公式DockerリポジトリのGPGキーをシステムに追加
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

## DockerリポジトリをAPTソースに追加します。
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

## Dockerパッケージでパッケージデータベースを更新
sudo apt update

## Dockerリポジトリからインストールしようとしていることを確認
apt-cache policy docker-ce

## Dockerインストール
sudo apt install docker-ce

## dockerのデーモン確認
sudo systemctl status docker

## ユーザーをdockerグループに追加(dockerコマンドを実行するたびに sudoを入力しないようにする)
sudo usermod -aG docker ${USER}

## docker-composeのインストール( 1.28.2の部分は https://github.com/docker/compose/releases を確認)
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

## docker-composeの権限変更
sudo chmod +x /usr/local/bin/docker-compose

## sambaのインストール
sudo apt -y install samba

## samba共有用のディレクトリ作成
sudo mkdir /home/share
sudo chmod 777 /home/share

## samba設定ファイル記入
sudo vim /etc/samba/smb.conf

## samba再起動と自動起動の設定
sudo systemctl restart smbd
sudo systemctl enable smbd

```
