export default function (eleventyConfig) {
  // 画像・動画はリポジトリ直下の assets/ をそのまま _site/assets/ へコピー
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
