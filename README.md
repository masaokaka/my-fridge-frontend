## 冷蔵庫アプリのフロントエンド

## コンテナイメージのビルド

docker compose build

## コンテナ起動を一時起動、端末を開く

docker compose exec myfridge sh

## 端末内で下記コマンド実行

npm ci

## コンテナをデタッチモードで起動

docker-compose up -d
※以降は docker-compose up -d のみでコンテナが起動する

ローカルはポート 3000 で確認
