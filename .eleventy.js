module.exports = function (eleventyConfig) {
	return {
		templateFormats: ["njk", "md", "html"],
		markdownTemplateEngine: "njk",

		dir: {
			includes: "_includes",
			input: "src",
			// output: "dist"
		}
	}
}
