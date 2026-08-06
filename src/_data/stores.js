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
// ============================================================================
//
//  ■ 社内名称 → ページの対応表
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
//   {
//     internal_name: "心斎橋",       // 社内での呼び名（自由記入。ページには出ません）
//
//     name: "ここに店名（Googleマップの登録名をそのままコピー）",
//     name_short: "ここに管理用の短い名前（例: Shinsaibashi。ページには出ません）",
//
//     region: "osaka",              // URLの前半
//     slug: "shinsaibashi",         // URLの後半 → /osaka/shinsaibashi/
//
//     area_label: "SHINSAIBASHI · OSAKA",  // ヒーロー下部の帯（大文字で書きます）
//     city: "Osaka",                       // 「Find us in ○○」の○○
//
//     banner: "",                   // 最上部の帯。空 "" にすると消えます
//
//     address_jp: "",               // 日本語住所（管理用。ページには出ません）
//     address_en: "",               // ページに出る住所
//     station_en: "",               // 最寄り駅。空なら行ごと消えます
//     station_note: "",             // 町名・区名
//
//     hours: "11:00 — 23:00",
//     hours_note: "",               // 補足（例: "Open Daily"）。空なら出ません
//     hours_special: "",            // 特定曜日だけ違う場合のみ
//     seats: "",                    // 例: "74 seats"。空なら行ごと消えます
//
//     tel_display: "06-1234-5678",
//     tel_raw: "81612345678",       // 先頭の0を取り、頭に81を付ける
//
//     reserve_system: "tablecheck",
//     tablecheck_url: "",           // 空なら予約ボタンが電話発信に変わります
//     maps_link: "",
//     maps_embed: "",
//     instagram_url: "",
//
//     google_rating: "",            // 例: "4.8"。空ならレビュー欄ごと消えます
//     google_count: "",
//     google_reviews_url: "",
//
//     hero_photos: [],
//     gallery: [],
//     farm_photo: "assets/farm.jpg",
//     courses: [],
//     drinks: null,
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
const domain = "https://farm-to-table.example.com"; // ★仮。独自ドメインを設定したら書き換える
const brand = "Farm to Table";
const founded = "1962";
const og_image = "assets/og.jpg";

// Googleタグマネージャーのコンテナ ID（例: "GTM-XXXXXXX"）
// ★空 "" のあいだは計測タグを一切出力しません。
const gtm_id = "";

// 全店舗の共通設定。各店舗で値を書けば、そちらが優先されます。
const defaults = {
  instagram_official: "", // Instagram未設定店のリンク先。★要記入
  google_rating: "",
  google_count: "",
  google_reviews_url: "",
  station_en: "",
  station_note: "",
  hours_note: "",
  hours_special: "",
  seats: "",
  banner: "",
  farm_photo: "assets/farm-01.jpg",
  farmer_photo: "assets/farm-02.jpg",
  reserve_system: "tablecheck",
};

// ============================================================================
//  店舗一覧
// ============================================================================
const stores = [
  // ─────────────────────────────────────────────
  // 日本橋店   →  /osaka/nipponbashi/
  // ─────────────────────────────────────────────
  {
    internal_name: "日本橋",

    // --- 店名（Googleマップ登録名。ヒーローにこのまま表示されます） ---
    name: "Farm to Table 和牛烧肉自助 Wagyu Yakiniku BBQ All-You-Can-Eat Dotonbori Restaurant",
    name_short: "Nipponbashi",

    // --- URL ---
    region: "osaka",
    slug: "nipponbashi",

    // --- ページ内の地名表示 ---
    area_label: "DOTONBORI · OSAKA",
    city: "Osaka",

    // --- 最上部の帯（クリックで予約ページへ飛びます） ---
    banner: "Reservations recommended — seats fill up quickly",

    // --- 住所・最寄り駅 ---
    address_jp: "〒542-0084 大阪府大阪市中央区宗右衛門町3-5 金田ビル 2F",
    address_en: "Kaneda Bldg. 2F, 3-5 Soemoncho, Chuo-ku, Osaka 542-0084, Japan",
    station_en: "", // 最寄り駅。記入すると行が出ます
    station_note: "",

    // --- 営業時間 ---
    hours: "11:00 — 23:00",
    hours_note: "", // 例 "Open Daily" や "L.O. 22:00"。記入すると小さく出ます
    hours_special: "",
    seats: "",

    // --- 電話番号 ---
    tel_display: "080-8221-9371",
    tel_raw: "818082219371",

    // --- リンク ---
    reserve_system: "tablecheck",
    tablecheck_url: "https://www.tablecheck.com/shops/5wnipponbashi/reserve",
    maps_link: "", // ★要記入
    maps_embed: "", // ★要記入。空なら地図が出ず、アクセス欄が1カラムに寄ります
    instagram_url: "",

    // --- Googleレビュー ---
    google_rating: "",
    google_count: "",
    google_reviews_url: "",

    // --- 写真 ---
    //     ★ 現在はすべて仮画像です。同じファイル名でアップロードすると差し替わります
    hero_photos: [
      "assets/wagyu-01.jpg",
      "assets/interior-01.jpg",
      "assets/interior-02.jpg",
    ],
    gallery: [
      { src: "assets/interior-01.jpg", caption: "Window seats" },
      { src: "assets/interior-02.jpg", caption: "Booth seating" },
      { src: "assets/interior-03.jpg", caption: "Dining room" },
      { src: "assets/wagyu-01.jpg", caption: "Wagyu" },
    ],
    farm_photo: "assets/farm-01.jpg",     // ストーリー欄（牧場の牛）
    farmer_photo: "assets/farm-02.jpg",   // 強み欄（生産者と牛）

    // --- 食べ放題コース ---
    //     ★★ コース名・金額・内容はすべて仮です。確定したら必ず書き換えてください ★★
    //     courses を空 [] にすると、コース欄がまるごと消えます
    //     featured: true にすると、そのコースが目立つ表示になります（1つだけ推奨）
    courses: [
      {
        name: "Course A",
        name_jp: "コースA",
        price: "¥0,000", // ★仮
        duration: "",
        featured: false,
        items: [],
      },
      {
        name: "Course B",
        name_jp: "コースB",
        price: "¥0,000", // ★仮
        duration: "",
        featured: true,
        items: [],
      },
      {
        name: "Course C",
        name_jp: "コースC",
        price: "¥0,000", // ★仮
        duration: "",
        featured: false,
        items: [],
      },
    ],

    // --- 飲み放題（出さない場合は null） ---
    drinks: null,
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
