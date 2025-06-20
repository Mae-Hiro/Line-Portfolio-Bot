# LINEポートフォリオBot

Google Apps Script（GAS）とLINE Messaging APIを使用して作成した、自己紹介用のLINE Botです。  
技術CAMPアカデミアでの勉強会をきっかけに制作し、自分用のポートフォリオBotとして機能を改良しました。

以下のQRコードから友達追加して、Botを体験できます
[LINE Bot ORコード](./qrcode.png)

## 機能一覧

- 「おはよう」「おやすみ」などの定型応答
- 「明日の天気は？」で広島の天気を取得（気象庁API）
- 自己紹介（制作者 / スキル / 資格 / 制作物 / GitHub / 連絡先）
- 「メニュー」で使えるキーワード一覧を表示

## 使用技術

- LINE Messaging API
- Google Apps Script (GAS)
- 気象庁の天気API（広島エリア）

## 応答例

| 入力         | 応答内容                       |
|--------------|-------------------------------|
| おはよう     | おはよう！今日も1日頑張ろう！ |
| おやすみ     | おやすみ。いい夢見てね。     |
| 明日の天気は？| 広島の天気予報を表示           |
| メニュー     | 利用可能なコマンド一覧を表示   |

## 制作者情報
- 出身、 学校、 名前

## スキル

- 使用経験のある言語

## 資格

-保有資格

## 制作物

- GASでLINE Botを作成など

## ファイル構成

| ファイル名         | 内容                       |
|--------------|-------------------------------|
| `main.gs` | GASコード |
| `README.md` | 説明ファイル |

## 備考

このLine Botは、技術CAMPアカデミアのオンライン学数回を通して学んだ知識を活用して開発しました。
