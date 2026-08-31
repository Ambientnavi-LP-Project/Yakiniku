# farm-to-table — 店舗ページ管理マニュアル

Farm to Table（和牛焼肉食べ放題）の店舗ランディングページです。
**店舗の追加も、営業時間の変更も、`src/_data/stores.js` という1つのファイルを編集するだけ**でできます。
HTML やプログラミングの知識は必要ありません。

公開URL: （Vercel でドメインを設定したらここに書く）

---

## 0. 公開前にやること（チェックリスト）

いくつかの値が**仮のまま**入っています。公開前に必ず埋めてください。

| ファイル | 項目 | 状態 |
|---|---|---|
| `src/_data/stores.js` | `domain`（公開ドメイン） | ★仮 |
| `src/_data/stores.js` | `gtm_id`（GTMコンテナID） | ★空。新規コンテナを作る |
| `src/_data/stores.js` | `defaults.instagram_official` | ★空 |
| `src/_data/stores.js` | `maps_link` / `maps_embed` | ★空。地図が出ません |
| `src/_data/stores.js` | `station_en` / `station_note`（最寄駅） | ★空。行ごと出ません |
| `src/_data/stores.js` | **`courses`（コース名・内容）** | **★全部仮。要差し替え** |
| `assets/` | 焼肉・内観・牧場の写真 | ★仮画像 |

**入力済み（いただいた情報を反映）**

| 項目 | 値 |
|---|---|
| 住所 | 〒542-0084 大阪府大阪市中央区宗右衛門町3-5 金田ビル 2F |
| 電話 | 080-8221-9371 |
| 営業時間 | 11:00 — 23:00 |
| 予約 | https://www.tablecheck.com/shops/5wnipponbashi/reserve |

**金額はページに表示していません。** `courses` の `price` をすべて空 `""` にしてあるためです。
出したくなったら `price` に `"¥4,980"` のように入れるだけで、その行に金額が出ます。

---

## 0.4 ロゴについて

いただいた版下（`1.jpg` / `2.jpg`）を**そのまま**使っています。漢字・落款・`est. 1962` も
版下の字形のままで、こちらで再現し直したものは使っていません。

| ファイル名 | 中身 | 使われている場所 |
|---|---|---|
| `assets/logo-lockup-light.png` | ロックアップ全体（背景を抜いて生成り色に） | ヒーロー |
| `assets/logo-wordmark-light.png` | 筆記体の部分だけ（背景を抜いて生成り色に） | ヘッダー／フッター |
| `assets/logo-illustration.jpg` | イラスト入りのロゴ（版下のまま） | ストーリーと強みのあいだ |
| `assets/logo-lockup-dark.png` | ロックアップ全体（墨のまま。予備） | 未使用 |
| `assets/logo.jpg` | いただいた版下そのもの（予備） | 未使用 |

- ページの生成り（`--paper`）は**版下の台紙と同じ `#F6EFDD`** に合わせてあります。
  そのため `logo-illustration.jpg` は台紙ごと置いても継ぎ目が出ません。
- 差し替えるときは `assets/` に**同じファイル名で**置いてください。
  使う場所を変えたいときは `stores.js` 冒頭の `logo_lockup` / `logo_wordmark` /
  `logo_illustration` を書き換えます。
- **透過の元データ（AI / SVG / 透過PNG）をいただければ差し替えます。**
  現在はJPEGの版下から背景を抜いているため、拡大すると輪郭がわずかに甘くなります。

---

## 0.5 写真について

**いただいた写真をすべて反映済みです。**（Web用に長辺1600px前後へ縮小・圧縮しています）

| ファイル名 | 元ファイル | 使われている場所 |
|---|---|---|
| `assets/wagyu-01.jpg` | DSC03114 | ヒーロー背景／予約欄の背景／ギャラリー |
| `assets/farm-01.jpg` | DSC09084 | ストーリー欄の全幅写真（給餌中の牛） |
| `assets/farm-02.jpg` | DSC09173 | 強み欄（生産者と牛） |
| `assets/interior-01.jpg` | IMG_4076 | ヒーロー背景／ギャラリー（窓際席） |
| `assets/interior-02.jpg` | IMG_4078 | ヒーロー背景／ギャラリー（ボックス席） |
| `assets/interior-03.jpg` | IMG_4065 | ギャラリー（俯瞰） |
| `assets/og.jpg` | ロゴ（2.jpg）から生成 | SNSシェア時の画像 |
| `assets/wagyu-01-sq.jpg` `farm-02-wide.jpg` | 予備 | 未使用（正方形／横長の別トリミング） |

差し替えるときは、`assets/` に**同じファイル名で**アップロードしてください。
`stores.js` を触る必要はありません。

写真を増やすときは `assets/` に置いて、`stores.js` の `hero_photos` や `gallery` に
ファイル名を足します。1枚あたり **400KB以下**が目安です。


### ロゴの朱の落款について

支給いただいた版下は、筆記体の「to」に朱色の落款が重なった状態でした。
ヒーローでは意味が伝わりにくいというご指摘を受け、**落款を消した版**を機械的に作り、
そちらを表示しています。

| ファイル | 中身 |
|---|---|
| `assets/logo-wordmark-light-plain.png` | 筆記体のみ・落款なし（**現在使用中**） |
| `assets/logo-wordmark-light.png` | 支給版下（落款あり） |
| `assets/logo-lockup-light-plain.png` | ロックアップ全体・落款なし（予備） |
| `assets/logo-lockup-light.png` `logo-lockup-dark.png` | 支給版下 |

落款ごと出したくなったら、`stores.js` の `logo_wordmark` を
`"assets/logo-wordmark-light.png"` に戻すだけです。

**注意：** 落款は文字の上に重なって描かれていたため、消した部分は周囲から
埋め戻しています。表示サイズでは分かりませんが、拡大すると「to」の輪郭が
わずかに荒れています。**デザイナーさんに落款なしの版を書き出してもらえるなら、
そちらに差し替えることをおすすめします**（同じファイル名で上書きすればOK）。

---

## 1. いちばんよく使う操作

### 営業時間や電話番号を直したい

1. GitHub で `src/_data/stores.js` を開く
2. 右上の **鉛筆マーク（Edit this file）** をクリック
3. 直したい店舗を探して、`" "` の中の文字を書き換える
4. ページ下の **Commit changes** を押す
5. 3〜5分待つと、サイトに反映されます

### 新しい店舗を追加したい

`src/_data/stores.js` の**冒頭にコピペ用のテンプレート**が入っています。
それを丸ごとコピーして、ファイルの一番下（`];` のすぐ上）に貼り付け、値を書き換えるだけです。

貼り付けたあと保存すると、`/osaka/shinsaibashi/` のようなページが自動で作られます。
**新しいファイルを作る必要はありません。**

### 編集するときの3つの約束

| | |
|---|---|
| ① | `" "`（ダブルクォート）は消さない。**中の文字だけ**を書き換える |
| ② | 行の最後の `,`（カンマ）は消さない |
| ③ | 日本語の `” ”` ではなく、**半角の** `" "` を使う |

これを守れば壊れません。もし壊れてもサイトは前の状態のままなので、
GitHub の History から元に戻せます。

---

## 2. ファイルの説明

| ファイル / フォルダ | 役割 | 触る？ |
|---|---|---|
| `src/_data/stores.js` | **店舗データ＋サイト設定。ここだけ編集すればOK** | ◎ よく触る |
| `assets/` | 写真の置き場所 | ○ 画像追加のとき |
| `src/store.njk` | 店舗ページの見た目のひな型（全店舗で共通） | △ デザイン変更のとき |
| `src/index.njk` | トップページ。転送用の保険（通常は表示されません） | ✕ ほぼ触らない |
| `vercel.json` | 公開設定・旧URLの転送設定 | ✕ ほぼ触らない |
| `.eleventy.js` | ページ生成の設定 | ✕ 触らない |
| `package.json` | 使っているプログラムの一覧 | ✕ 触らない |
| `_site/` | 自動生成されるページ（GitHubには入りません） | ✕ 触らない |

### 仕組み（かんたんに）

```
src/_data/stores.js  （店舗データ）
          +
src/store.njk        （見た目のひな型：1枚）
          ↓  自動生成
/osaka/nipponbashi/   /osaka/shinsaibashi/   /tokyo/…
```

ひな型は1枚しかありません。**店舗が増えてもページを作る必要はなく、データを足すだけ**です。
逆に言うと、`store.njk` を1か所直すと**全店舗のページが同時に変わります**。

---

## 3. 店名の書き方

店名は `name` という**1つの項目にまとめてあります**。英語と中国語を分けません。

```js
name: "Farm to Table 和牛烧肉自助 Wagyu Yakiniku BBQ All-You-Can-Eat Dotonbori Restaurant",
```

**Googleマップに登録されている店名を、そのままコピーして貼り付けてください。**
この店名はページ本文には大きく出ませんが、ブラウザのタブ・検索結果・
ページ下部・構造化データ（Google向けの情報）に使われます。

`name_short` は管理用の短い名前です。画像の代替テキストなどに使われるだけで、
お客さまの目に見える場所には出ません。

`city_en` / `district_en` は、ヒーロー下部に小さく出る英語の地名です。
例: `Osaka` / `Nipponbashi · Dotonbori`

### 既存 halal-wagyu-burger との項目名の対応

項目名・ファイル構成は既存リポジトリと**同じ**に揃えてあります。
`stores.js` の作りも同じで、ファイル冒頭に社内名称→URLの対応表、
末尾に `defaults` をマージして `export default { domain, ..., stores: merged }` する形です。

| 共通の項目名 | 意味 |
|---|---|
| `internal_name` | 社内での呼び名。ページには出ません |
| `name` | **ヒーローとネームプレート欄に大きく表示されます**（GBP登録名と一致させる） |
| `region` / `slug` | URL（`/osaka/nipponbashi/`） |
| `name` / `name_short` | 店名 / 管理用の短い名前 |
| `area_label` | ヒーロー下部の帯（大文字。例 `NIPPONBASHI · DOTONBORI · OSAKA`） |
| `city` | 「Find us in ○○」の○○ |
| `address_jp` / `address_en` | 日本語住所（管理用） / ページに出る住所 |
| `station_en` / `station_note` | 最寄り駅 / 町名・区名 |
| `hours` / `hours_note` / `hours_special` | 営業時間 / 補足 / 特定曜日だけ違う場合 |
| `tel_display` / `tel_raw` | 表示用番号 / 発信用番号 |
| `reserve_system` / `tablecheck_url` | 予約導線の種類 / 予約URL |
| `maps_link` / `maps_embed` | 地図リンク / 地図埋め込み |
| `google_rating` / `google_count` | Google評価 / 件数 |
| `instagram_url` | 空なら `defaults.instagram_official` が使われます |
| `hero_photos` | ヒーローの写真 |

**このLPだけにある項目**
`banner`（最上部の帯） / `gallery` / `farm_photo` / `traceability` / `courses` / `drinks` / `seats` / `google_reviews_url`

**このLPには無い項目**
`morning` 系（モーニング欄） / `google_rating_img` / `tripadvisor_img` / `hero_headline_place`
（`hero_headline_place` はヒーローの主役がロゴのため使っていません）

---

## 4. 画像の追加

写真は**リポジトリ直下の `assets/` フォルダ**に入れます（`src/assets/` ではありません）。

1. GitHub で `assets/` フォルダを開く
2. **Add file → Upload files** で画像をアップロード
3. `stores.js` からファイル名で指定する

```js
hero_photos: [
  "assets/interior-01.jpg",
  "assets/yakiniku-01.jpg",
],
```

- ファイル名は**半角英数字とハイフンのみ**（日本語・スペースは使えません）
- 1枚あたり **500KB以下**が目安。大きいとページが重くなります
- 既存のファイル名と**同じ名前**でアップロードすれば、そのまま差し替わります
- `hero_photos` を空 `[]` にすると、その部分は黒背景になります

### いま入っている仮画像

| ファイル名 | 何に使われているか | 差し替え内容 |
|---|---|---|
| `assets/interior-01.jpg` 〜 `03` | ヒーロー背景・ギャラリー | 内観写真 |
| `assets/yakiniku-01.jpg` 〜 `04` | ヒーロー背景・ギャラリー | 焼肉・料理写真 |
| `assets/farm.jpg` | ストーリー欄 | 牧場・牛の写真 |
| `assets/og.jpg` | SNSでシェアされたときの画像 | ロゴ入りのバナー（1200×630） |

ギャラリーの写真は `stores.js` の `gallery` で並び順とキャプションを変えられます。

```js
gallery: [
  { src: "assets/yakiniku-02.jpg", caption: "Wagyu, plated" },
],
```

キャプションは**翻訳されません**。英語で短く書くのがおすすめです。

---

## 5. 出したり消したりできるもの

`stores.js` の値によって、ページのセクションが自動で出たり消えたりします。

| 項目 | 空 / false のとき | 値を入れたとき |
|---|---|---|
| `tablecheck_url` | 全ボタンが「電話で予約」になる | 「席を予約する」になる |
| `maps_embed` | 地図が出ず、アクセス欄が1カラムに寄る | 地図が埋め込まれる |
| `maps_link` | 「地図を見る」ボタンが出ない | ボタンが出る |
| `google_rating` | Googleレビュー欄が**まるごと消える** | 星評価が出る |
| `courses` を `[]` | コース欄が**まるごと消える** | 品書きが出る |
| コースの `price` が `""` | 金額欄が出ない（点線も消える） | 右端に金額が出る |
| `drinks` を `null` | 飲み放題の枠が消える | 枠が出る |
| `gallery` を `[]` | ギャラリー欄が消える | 写真が並ぶ |
| `traceability` を `false` | 「TRACEABILITY」の帯が消える | 帯が出る |
| `banner` を `""` | 最上部の赤い帯が消える | 帯が出る（翻訳されません） |
| `closed` / `seats` | その行だけ消える | 行が出る |
| `instagram_url` | `defaults.instagram_official` にリンク | 店舗アカウントにリンク |

---

## 6. コース（食べ放題）の書き方

```js
courses: [
  {
    name: "Wagyu Premium",              // 大きく出る名前（英語）
    name_jp: "和牛プレミアム食べ放題",     // その下に小さく出る名前
    price: "",                          // 右端に出る金額。空 "" なら金額欄ごと出ません
    duration: "100 min",                // 制限時間。空 "" なら出ません
    featured: true,                     // true にすると朱色で目立つ表示に（1つだけ推奨）
    items: [                            // 中身。行を足し引きできます
      "Prime short rib / 和牛特上カルビ",
    ],
  },
],
```

- `price` は**空 `""` にすると金額欄そのものが出ません**（現在の設定）。
  `"¥4,980"` のように入れると、コース名の右端に点線でつながって表示されます
- `items` は「英語 / 日本語」を `/` で区切って1行に書くと、そのまま区切って並びます
- **コース名・内容・金額は翻訳されません。** ここに書いた文字がどの言語でもそのまま出ます
- 上から書いた順に並びます

---

## 7. 地図の入れ方

Googleマップで店舗を開き、**共有 → 地図を埋め込む** を選ぶと、
`<iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>` というコードが出ます。

このうち **`src="` と `"` の間のURLだけ**をコピーして貼り付けてください。
`<iframe>` タグごと貼らないよう注意してください。

```js
maps_embed: "https://www.google.com/maps/embed?pb=!1m14!...",
```

`maps_link`（ボタンのリンク先）は、**共有 → リンクをコピー** で出る
`https://maps.app.goo.gl/...` を貼ります。

---

## 8. 電話番号

2つの項目があります。

```js
tel_display: "06-1234-5678",   // 画面に表示される番号
tel_raw: "81612345678",        // タップで発信するための番号
```

`tel_raw` は、**先頭の 0 を取って、頭に 81 を付ける**だけです。

| 表示 | tel_raw |
|---|---|
| 06-1234-5678 | 81**6**12345678 |
| 090-1234-5678 | 81**90**12345678 |
| 080-1234-5678 | 81**80**12345678 |

---

## 9. 言語切り替えについて

各店舗ページの**右上**に、EN / 简体 / 繁體 / 한국어 の切り替えボタンと予約ボタンがあります。
ヘッダーはヒーローの上では透明で、スクロールして写真を抜けると背景が敷かれます。
ヘッダーはスクロールしても上部に残るので、どこを見ていても切り替えられます。
スマホでは予約ボタンを画面下の固定バーに移し、その分ヘッダーは店名と言語切り替えだけにしています。**全店舗のページに入っています。** 特別な設定は不要です。

- 仕組みは既存 halal-wagyu-burger と**同じ**です（`data-i18n` 属性＋`translations` 辞書）
- 保存キーも同じ `preferred_lang` を使っています
- 初回のみブラウザの言語から自動で選ばれます。中国語は**台湾・香港・マカオなら繁體**、それ以外は简体になります。
  一度でも自分でボタンを押すと、以後はその選択が優先されます
- 翻訳文は `src/store.njk` の一番下、`translations` という部分にまとまっています
- 翻訳値には `<br>` などのHTMLタグも使えます（`innerHTML` で差し込むため）

### 翻訳されないもの

次のものは `stores.js` に書いた文字が**そのまま出ます**。

- 店名・住所・最寄駅・営業時間・電話番号・席数
- **コース名・コース内容・金額**
- ギャラリーのキャプション
- ロゴまわりの文字（`ALL-YOU-CAN-EAT WAGYU BBQ` など。ロゴの一部のため固定）

翻訳文を直したいときは `store.njk` の `translations` を編集しますが、
プログラムの部分なので、不安なときはエンジニアに依頼してください。

---

## 10. 困ったとき

**サイトが更新されない**
Vercel のビルドが失敗している可能性があります。GitHub の該当コミットに
赤い ✕ が付いていないか確認してください。付いていたら、直前の編集で
`"` や `,` が消えている可能性が高いです。

**間違えて壊してしまった**
GitHub でファイルを開き、右上の **History** から前のバージョンを開いて、
その内容をコピーして貼り直せば元に戻せます。

**トップURLを開くと一瞬「REDIRECTING」と出る**
これは直しました。トップ（`/`）から店舗ページへの転送を、`vercel.json` の
`redirects` によるサーバー側転送に変えています。
もし再発したら、`vercel.json` に次の記述が残っているか確認してください。

```json
"redirects": [
  { "source": "/", "destination": "/osaka/nipponbashi/", "permanent": false }
]
```

`"permanent": false` にしてあるのは、将来ほかの店舗が増えてトップページを
作りたくなったときに、ブラウザに転送先が焼き付いて戻せなくなるのを防ぐためです。

**写真を差し替えたのに変わらない**
ブラウザに古い画像が残っていることがあります。
スーパーリロード（Windows: Ctrl+Shift+R / Mac: Cmd+Shift+R）を試してください。

**ページのデザインを変えたい / 新しいセクションを足したい**
`src/store.njk` の編集が必要です。全店舗に影響するので、エンジニアに依頼してください。

---

## 11. 計測イベント一覧

計測は **GTM コンテナ1本**に集約します。ID は `src/_data/site.js` の `gtm_id` に入れてください。
**空のままだと計測タグは一切出力されません**（開発中に誤計測しないための仕様です）。

| イベント名 | 発火する場所 | 実装 |
|---|---|---|
| `reserve_click` | ヒーロー／ヘッダー／アクセス欄／フッターの予約ボタン（TableCheckへの外部リンク） | `data-ga-event="reserve_click"` |
| `tel_click` | アクセス欄の電話番号リンク、および `tablecheck_url` が空のときに表示される「電話で予約」「CALL」 | `data-ga-event="tel_click"` |
| `map_click` | ヒーロー／アクセス欄の「地図を見る」、フッターの「MAPS」 | `data-ga-event="map_click"` |
| `outbound_click` | フッターの「INSTAGRAM」、Googleレビューへのリンク | `data-ga-event="outbound_click"` |
| `scroll_depth` | ページのスクロール到達率 | GTM組み込みトリガー（コード実装なし） |

### 仕組み

計測方式は **1つだけ**です。計測したい要素に `data-ga-event="イベント名"` を付けると、
ページ末尾の委譲リスナー1本が `dataLayer` に push します。

```js
window.dataLayer.push({ event: el.getAttribute('data-ga-event') });
```

店舗名・エリア・チャネルなどの**パラメータはコード側で組み立てません**。
GTM 側で URL（ホスト名／パス）から解決します。
そのため `stores.js` に店舗を追加しても、計測用の設定を書き足す必要はありません。

### 実装していないもの

- **地図の埋め込み（iframe）**は計測対象外です。ブラウザの仕様上、iframe 内部のクリックは
  親ページの JavaScript では検知できません。地図の反応は「地図を見る」「MAPS」リンクで見てください。
- `reservation_form_submit` は自社予約フォームを使うLP用のイベントです。
  このLPは TableCheck への外部遷移のみのため、実装していません。
- `course_select` はコース選択UIがあるLP用のイベントです。このLPにはコース選択UIがありません。

---

## 12. デザインの決めごと（変更するとき用）

| | 値 | 使いどころ |
|---|---|---|
| 生成り | `#F4EEDF` | 背景（ロゴの紙色） |
| 墨 | `#17130F` | 文字・暗いセクション |
| 朱 | `#B4382C` | 予約ボタン・おすすめコース・引用の縦線（落款の色） |
| 耳標の黄 | `#E8B32C` | **ページ中1か所だけ。** 個体識別番号のチップ |

- 見出し: **Fraunces**（英字）
- ラベル・金額: **IBM Plex Mono**
- ロゴ: **Yellowtail**（筆記体）
- 本文の日本語・中国語・韓国語: 端末標準のフォント（読み込みを軽くするため）

ロゴはCSSで組んでいます（`store.njk` の `.mk` まわり）。
**背景が透過されたロゴ画像**をもらえれば、画像に差し替えられます。

---

## 13. 開発者向けメモ

- Eleventy 3 / Nunjucks。`src/store.njk` が `pagination` で全店舗ぶんを生成
- `package.json` は `"type": "module"` のため、`stores.js` / `site.js` は **ESM**
  （`module.exports` ではなく `export default`）
- 画像はリポジトリ直下の `assets/` を `.eleventy.js` の
  `addPassthroughCopy("assets")` で `_site/assets/` に出力
- 多言語は既存repoと同一実装（`data-i18n` → `applyLanguage()` が `innerHTML` を差し替え、
  `localStorage.preferred_lang` に保存）。初期表示は英語で出力し、保存が無いときだけ
  `navigator.language` から推定する
- TableCheck へのリンクには `?utm_source=lp&utm_medium=referral` をテンプレート側で自動付与
- CSS は素の CSS。既存repoの Tailwind CDN（`cdn.tailwindcss.com`）は使っていない
  （ブラウザ側でのJITコンパイルが不要になり、初回表示が軽くなる）
- 構造化データ（`Restaurant`）を出力。空の項目は自動で省略される
- ローカル確認: `npm install` → `npm run dev`
- 本番: Vercel が `main` への push を検知して `npm run build` → `_site/` を配信
- 旧URLからの転送が必要になったら `vercel.json` の `redirects` に追加
- `/` → 店舗ページの転送は `vercel.json` の `redirects`（サーバー側・307）で行う。
  `src/index.njk` は `vercel.json` が効かない環境向けの保険で、画面には何も描画しない

---

## 14. 公開されるもの／されないもの（セキュリティ）

### サイトを見た人がソースから読めるもの

このLPは**静的サイト**です。GitHub に置いたファイルのうち、実際にサーバーへ
配信されるのは `_site/` に出力された**HTMLと画像だけ**です。

```
配信される     _site/osaka/nipponbashi/index.html
              _site/index.html
              _site/assets/  （画像）

配信されない   src/_data/stores.js   ← 店舗データ。ブラウザには一切届きません
              src/store.njk         ← ひな型
              .eleventy.js / package.json / vercel.json
```

`stores.js` はビルド時に Vercel のサーバー上で読まれて HTML に変換されるだけで、
ブラウザには送られません。

### 金額について

**現在、金額はHTMLのどこにも出力されていません。** 「CSSで隠している」のではなく、
`price` が空のときはその部分を**生成しない**ようにしてあります。
ビルド後のHTMLを検索しても `¥` `円` および数字の金額は0件です。

残っているのは `.board__price` というCSSのクラス名と、`per person` という
ラベル文字だけで、金額そのものは含まれません。

### ソースから読めてしまうもの（仕様上そうなります）

次のものはHTMLに書かれているので、ソースを見れば誰でも読めます。
いずれも店頭やGoogleマップで公開している情報なので問題ありません。

- 店名・住所・電話番号・営業時間・TableCheckの予約URL
- **4言語すべての翻訳文**（表示していない言語の文章もソースには入っています）
- GTM のコンテナID

**逆に言うと、非公開にしたい文言を `translations` に書いてはいけません。**

### いちばん注意すべきはリポジトリの公開設定

サイトよりも、**GitHub リポジトリを公開（Public）にしている方がリスク**です。
Public だと `stores.js` の中身が誰でも読めます。ここには

- `address_jp`（日本語住所）
- `internal_name`（社内での呼び名）
- `★仮` などの社内向けコメント
- 将来入れる金額

が入ります。**リポジトリは Private を推奨します。**
Vercel は Private リポジトリでも問題なく動きます。

金額が決まるまでのあいだ、まだ出したくない金額は
**リポジトリに置かない**のが最も安全です。

### 施しているセキュリティ設定

`vercel.json` の `headers` で、次を全ページに付けています。

| ヘッダー | 目的 |
|---|---|
| `Strict-Transport-Security` | 常にHTTPSで接続させる |
| `X-Content-Type-Options: nosniff` | ファイル種別の誤判定を防ぐ |
| `X-Frame-Options` / `frame-ancestors` | 他サイトに iframe で埋め込まれるのを防ぐ（フィッシング対策） |
| `Referrer-Policy` | 外部サイトへ遷移するとき、URLの詳細を渡さない |
| `Permissions-Policy` | カメラ・マイク・位置情報などを一律で無効化 |
| `Cross-Origin-Opener-Policy` | 別タブからの干渉を防ぐ |

そのほか、

- 入力フォーム・ログイン・決済が**一切ありません**。情報を盗まれる入口がありません
- 外部リンク（TableCheck・Googleマップ・Instagram）はすべて `rel="noopener"` 付き。
  リンク先から元のタブを操作される攻撃を防ぎます
- APIキーやパスワードの類をコードに一切埋め込んでいません
- 外部へ通信するのは Google Fonts と TableCheck のみです


## 計測要件

LPの作成・デザイン変更・テンプレート追加を行う際は、必ず以下を参照すること。
CTAの書き方やTableCheckのURL指定を誤ると、広告のコンバージョン計測が停止する。

https://github.com/Ambientnavi-LP-Project/omakase/blob/main/docs/LP%E4%BD%9C%E6%88%90%E3%83%97%E3%83%AD%E3%83%B3%E3%83%97%E3%83%88.md
