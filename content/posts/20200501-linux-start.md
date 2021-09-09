---
title: linux始めた
date: 2020-05-01
---


#### 在宅勤務しています。

4月頭から在宅勤務開始。
開始4日目でいきなり普段使っていたMBPが起動しなくなる。
（正確には起動して5分くらいでレインボーカーソルくるくる）

どうにも調べる限りSSDの寿命。
6年使ってたし仕方ない。

ということでPCを新調。

以下、Xubuntuをインストールしてセットアップ。（20200615更新）


    # とりあえずでパッケージの更新
    yes | sudo apt update && yes | sudo apt upgrade

    # ホームディレクトリ内のディレクトリ英語表記にする。
    LANG=C xdg-user-dirs-gtk-update

    # 隠しファイル・フォルダーの表示

    # Vivaldiのインストール
    wget http://repo.vivaldi.com/stable/linux_signing_key.pub
    sudo apt-key add linux_signing_key.pub
    echo deb http://repo.vivaldi.com/stable/deb/ stable main | sudo tee /etc/apt/sources.list.d/vivaldi.list
    yes | sudo apt-get update
    yes | sudo apt install vivaldi-stable

    # Chromeのインストール
    curl https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
    ls
    echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list
    yes | sudo apt update
    yes | sudo apt install google-chrome-stable

    # Slackのインストール（先に(公式サイト)[https://slack.com/intl/ja-jp/downloads/linux]からダウンロードする）
    cd Downloads/
    sudo apt install ./slack-desktop-4.4.2-amd64.deb

    # 日本語入力のMozcの設定ツールインストール
    sudo apt install mozc-utils-gui

    # mozcのインプットメソッドをfcitxに（ibusは削除）
    sudo apt install fcitx-mozc
    sudo apt purge ibus

    # 持ってきたssh周りの権限変更
    chmod 600 config
    chmod 600 id_dsa_guthub.pub
    chmod 600 id_rsa.pub
    chmod 600 id_dsa_guthub
    chmod 600 id_rsa

    # Dropboxのインストール
    sudo apt install -y nautilus-dropbox

    # Windowsとの時差調整
    sudo timedatectl set-local-rtc true


    # CUI周りのツールインストール
    sudo apt install curl
    sudo apt install git
    sudo apt install fzf
    sudo apt install ffmpeg imagemagick
    sudo apt install xsel

    # Vimのインストール
    sudo apt install vim-gtk3
    sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'

    # ファイラーのインストール
    sudo apt install ranger
    ranger --copy-config=all

    # 開発用にvagrant
    sudo apt install virtualbox
    curl -O https://releases.hashicorp.com/vagrant/2.2.7/vagrant_2.2.7_x86_64.deb
    sudo apt install ./Downloads/vagrant_2.2.7_x86_64.deb

    # Rubyのインストール（rbenvを使用
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

    # .bashrc や .bash_profile などに以下の記述を追加
    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"

    # インストール可能な Ruby のバージョンを確認
    rbenv install -l

    # rbenvでインストール
    rbenv install 2.7.1

    # (インストール時のエラー対応)
    sudo apt install libssl-dev zlib1g-dev

    # バージョン切り替え
    rbenv global 2.7.1

    # Node周りのインストール
    sudo apt install -y nodejs npm
    sudo npm install n -g
    sudo n stable
    sudo apt purge -y nodejs npm
    node -v
    npm -v

    # Golangのインストール
    sudo apt install golang

    # Golangによるメモツールのインストール
    go get github.com/mattn/memo

    # CapsLockをCtrlに変更
    vi .profile
    # こちらの追記
    setxkbmap -option ctrl:nocaps

    # jumpappのインストール
    sudo apt-get install build-essential debhelper pandoc shunit2
    git clone https://github.com/mkropat/jumpapp.git
    cd jumpapp
    make deb
    sudo dpkg -i jumpapp*all.deb
    sudo apt-get install -f

    # Zoomのインストール
    wget http://zoom.us/client/latest/zoom_amd64.deb
    sudo apt install ./zoom_amd64.deb

    # gh – The GitHub CLI toolのインストール
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
    sudo apt-add-repository https://cli.github.com/packages
    sudo apt update
    sudo apt install gh

