// ============================================================================
//  店舗データ  stores.js
// ----------------------------------------------------------------------------
//  このファイルだけを編集すれば、店舗ページが自動で作られます。
//  HTML の知識は不要です。" " で囲まれた部分の文字だけを書き換えてください。
//
//  【編集するときの3つの約束】
//   1. " " （ダブルクォート）は消さない。中の文字だけを書き換える
//   2. 行の最後の , （カンマ）は消さない
//   3. 日本語の ” ” ではなく、半角の " " を使う（"" ←これ）
//
//  保存 → GitHub にコミットすると、数分で自動的にサイトに反映されます。
//
//  ※ 項目名は halal-wagyu-burger の stores.js と同じに揃えてあります。
//    あちらを触ったことがあれば、そのままの感覚で編集できます。
// ============================================================================
//
//  ■ 社内名称 → ページの対応表
//
//    このリポジトリ／サイトは Farm to Table（和牛焼肉食べ放題）です。
//    社内名称は自由記入です。社内で呼んでいる名前をそのまま入れてください。
//
//      日本橋店   →  /osaka/nipponbashi/
//
//  ■ 新しい店舗を追加する手順
//
//   1. 下の【コピペ用テンプレート】を丸ごとコピー
//   2. このファイルの一番下、いちばん最後の "];" のすぐ上に貼り付け
//   3. 値を書き換えて保存
//
//  ■【コピペ用テンプレート】ここから ↓（// を外して使ってください）
//
//   // ─────────────────────────────────────────────
//   // ○○店   →  /osaka/○○/
//   // ─────────────────────────────────────────────
//   {
//     // --- 社内名称（社内での呼び名。ページには出ません）---
//     internal_name: "心斎橋",       // 社内で呼んでいる名前をそのまま入れてください（自由記入）
//                                   //   「心斎橋のLPを直して」と言えば店舗を特定できるようにするためのものです
//                                   //   同じ地名で複数ある場合だけ "心斎橋2F" のように区別が付く形にしてください
//
//     // --- 店名 ---
//     name: "ここに店名（Googleマップの登録名をそのままコピー。英語＋中国語つなげたままでOK）",
//     name_short: "ここに管理用の短い名前（例: Shinsaibashi。ページには出ません）",
//
//     // --- URL（ページのアドレスになります）---
//     region: "osaka",              // tokyo / kyoto / osaka など。URLの前半になります
//     slug: "shinsaibashi",         // URLの後半。半角英数字とハイフンのみ
//                                   //   → 上の例なら /osaka/shinsaibashi/ になります
//
//     // --- ページ内の地名表示 ---
//     area_label: "SHINSAIBASHI · OSAKA",  // ヒーロー下部の帯に出る小さな文字（大文字で書きます）
//     city: "Osaka",                       // 「Find us in ○○」の○○
//
//     // --- 最上部の帯 ---
//     banner: "",                   // 空 "" にすると帯ごと消えます。翻訳されないので多言語を並べて書きます
//
//     // --- 住所・最寄り駅 ---
//     address_jp: "〒542-0085 大阪府大阪市中央区心斎橋筋１丁目１−１",  // 日本語住所（管理用）
//     address_en: "1-1 Shinsaibashisuji 1-chome, Chuo-ku, Osaka 542-0085, Japan",  // ページに出る住所
//     station_en: "Shinsaibashi Station", // 最寄り駅
//     station_note: "Shinsaibashisuji, Chuo-ku", // 町名・区名
//
//     // --- 営業時間 ---
//     hours: "17:00 — 23:00",             // 深夜1時までなら "17:00 — 25:00" と書きます
//     hours_note: "Open Daily · L.O. 22:00",  // 補足
//     hours_special: "",                  // 特定曜日だけ違う場合のみ記入。無ければ ""
//     seats: "",                          // 例: "74 seats"。空なら行ごと消えます
//
//     // --- 電話番号 ---
//     tel_display: "06-1234-5678",        // 画面に表示される番号（ハイフンあり）
//     tel_raw: "81612345678",             // タップ発信用。先頭の0を取り、頭に81を付ける
//                                         //   06-1234-5678 → 81612345678
//
//     // --- リンク ---
//     reserve_system: "tablecheck",       // 予約導線の種類。このLPは全店 "tablecheck" のままでOK
//     tablecheck_url: "",                 // TableCheckの予約URL。無ければ "" （電話予約ボタンになります）
//                                         //   ?utm_source=lp&utm_medium=referral はコード側で自動で付きます
//     maps_link: "",                      // Googleマップの共有URL（https://maps.app.goo.gl/... ）
//     maps_embed: "",                     // Googleマップ「地図を埋め込む」で出る <iframe src="..."> の
//                                         //   " " の中身のURLだけを貼る。iframeタグごとは貼らない
//     instagram_url: "",                  // 店舗アカウント。空なら公式アカウントが使われます
//
//     // --- Googleレビュー ---
//     google_rating: "",                  // 例: "4.8"。空にするとレビュー欄ごと非表示になります
//     google_count: "",                   // 例: "1,046"
//     google_reviews_url: "",             // 口コミ一覧へのリンク
//
//     // --- 写真 ---
//     hero_photos: [],                    // 空なら黒背景。入れる場合は下のように書きます
//                                         //   hero_photos: [
//                                         //     "assets/hero_shinsaibashi_1.jpg",
//                                         //   ],
//     gallery: [],                        // 空ならギャラリー欄ごと消えます
//     farm_photo: "assets/farm.jpg",      // ストーリー欄の写真（牧場）
//
//     // --- 食べ放題 ---
//     traceability: true,                 // false にすると「TRACEABILITY」の帯が消えます
//     courses: [],                        // 空 [] にするとコース欄ごと消えます
//     drinks: null,                       // 飲み放題を出さない場合は null
//   },
//
//  ■【コピペ用テンプレート】ここまで ↑
//
//  ■ 画像の置き場所
//    画像はこのフォルダではなく、リポジトリ直下の assets/ に入れてください。
//    ファイル名は半角英数字とハイフンのみ（日本語・スペースは使えません）。
//
// ============================================================================

// --- サイト全体の設定 --------------------------------------------------------
const domain = "https://farm-to-table.example.com"; // ★仮。Vercelで独自ドメインを設定したら書き換える
const brand = "Farm to Table";
const founded = "1962";
const og_image = "assets/og.jpg"; // SNSでシェアされたときに出る画像

// Googleタグマネージャーのコンテナ ID（例: "GTM-XXXXXXX"）
// ★空 "" のあいだは計測タグを一切出力しません。新規コンテナを作って貼ってください。
const gtm_id = "";

// 全店舗の共通設定。各店舗で値を書けば、そちらが優先されます。
const defaults = {
  instagram_official: "", // Instagram未設定店のリンク先。★要記入
  google_rating: "",
  google_count: "",
  google_reviews_url: "",
  hours_special: "",
  seats: "",
  banner: "",
  traceability: true,
  farm_photo: "assets/farm.jpg",
  reserve_system: "tablecheck",
};

// ============================================================================
//  店舗一覧（ここから下に店舗を追加していきます）
// ============================================================================
const stores = [
  // ─────────────────────────────────────────────
  // 日本橋店   →  /osaka/nipponbashi/
  // ─────────────────────────────────────────────
  {
    // --- 社内名称（社内での呼び名。自由記入。ページには出ません） ---
    internal_name: "日本橋",

    // --- 店名 ---
    name: "Farm to Table 和牛烧肉自助 Wagyu Yakiniku BBQ All-You-Can-Eat Dotonbori Restaurant",
    name_short: "Nipponbashi",

    // --- URL（ページのアドレスになります） ---
    //     ※ GBPの登録名に合わせて slug: "dotonbori" にする案もあります。
    //       公開前に決めてください（後から変えると転送設定が必要になります）
    region: "osaka",
    slug: "nipponbashi",

    // --- ページ内の地名表示 ---
    area_label: "NIPPONBASHI · DOTONBORI · OSAKA",
    city: "Osaka",

    // --- 最上部の帯 ---
    banner: "WALK-INS WELCOME · ウォークイン歓迎 · 欢迎无预约 · 예약 없이 환영",

    // --- 住所・最寄り駅 ---
    address_jp: "大阪府大阪市中央区日本橋◯-◯-◯", // ★仮
    address_en: "Nipponbashi, Chuo-ku, Osaka, Japan", // ★仮
    station_en: "Nipponbashi Station", // ★仮
    station_note: "Nipponbashi, Chuo-ku", // ★仮

    // --- 営業時間 ---
    hours: "17:00 — 23:00", // ★仮
    hours_note: "Open Daily · L.O. 22:00", // ★仮
    hours_special: "",
    seats: "",

    // --- 電話番号 ---
    tel_display: "06-0000-0000", // ★仮
    tel_raw: "810600000000", // ★仮

    // --- リンク ---
    reserve_system: "tablecheck",
    tablecheck_url: "", // ★要記入。空のあいだは全ボタンが「電話で予約」になります
    maps_link: "", // ★要記入
    maps_embed: "", // ★要記入。空なら地図が出ず、アクセス欄が1カラムに寄ります
    instagram_url: "",

    // --- Googleレビュー ---
    google_rating: "",
    google_count: "",
    google_reviews_url: "",

    // --- 写真 ---
    //     ★ 現在はすべて仮画像です。本番の写真に差し替えてください
    hero_photos: [
      "assets/interior-01.jpg",
      "assets/yakiniku-01.jpg",
      "assets/interior-02.jpg",
    ],
    gallery: [
      { src: "assets/yakiniku-02.jpg", caption: "Wagyu, plated" },
      { src: "assets/interior-03.jpg", caption: "Booth seating" },
      { src: "assets/yakiniku-03.jpg", caption: "Today's cuts" },
      { src: "assets/yakiniku-04.jpg", caption: "Charcoal table" },
    ],
    farm_photo: "assets/farm.jpg",

    // --- 生産履歴の欄 ---
    traceability: true,

    // --- 食べ放題コース ---
    //     ★★ 金額・内容はすべて仮です。確定したら必ず書き換えてください ★★
    //     featured: true にすると、そのコースが目立つ表示になります（1つだけ推奨）
    courses: [
      {
        name: "Wagyu Standard",
        name_jp: "和牛スタンダード食べ放題",
        price: "¥4,980", // ★仮
        duration: "100 min",
        featured: false,
        items: [
          "Wagyu short rib / 和牛カルビ",
          "Wagyu skirt / 和牛ハラミ",
          "Pork & chicken / 豚・鶏",
          "Sides, rice & soup / 一品・ライス・スープ",
          "Dessert / デザート",
        ],
      },
      {
        name: "Wagyu Premium",
        name_jp: "和牛プレミアム食べ放題",
        price: "¥6,980", // ★仮
        duration: "100 min",
        featured: true,
        items: [
          "Everything in Standard / スタンダード全品",
          "Prime short rib / 和牛特上カルビ",
          "Wagyu sirloin / 和牛サーロイン",
          "Three rare cuts / 希少部位3種",
          "Seafood / 海鮮",
        ],
      },
      {
        name: "Farm to Table",
        name_jp: "一頭買いコース",
        price: "¥9,800", // ★仮
        duration: "120 min",
        featured: false,
        items: [
          "Everything on the menu / 全メニュー",
          "Today's rare cuts / 本日の希少部位",
          "Wagyu sukiyaki / 和牛すき焼き",
          "Wagyu sushi / 和牛寿司",
          "Dessert platter / デザート盛り合わせ",
        ],
      },
    ],

    // --- 飲み放題（出さない場合は null） ---
    drinks: {
      name: "Free-flow drinks",
      name_jp: "飲み放題",
      price: "¥1,650", // ★仮
      duration: "100 min",
      note: "Beer, highball, sours, soft drinks / ビール・ハイボール・サワー・ソフトドリンク",
    },
  },
];

// ============================================================================
//  ここから下はプログラムです。編集しないでください。
// ============================================================================
const merged = stores.map((store) => {
  const m = { ...defaults, ...store };
  if (!m.instagram_url) m.instagram_url = m.instagram_official;
  return m;
});

export default {
  domain,
  brand,
  founded,
  og_image,
  gtm_id,
  defaults,
  stores: merged,
};
