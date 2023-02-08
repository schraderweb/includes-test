module.exports = function (eleventyConfig) {

	eleventyConfig.addShortcode('renderlayoutblock', function(name) {
		return (this.page.layoutblock || {})[name] || ''
	})
	eleventyConfig.addPairedShortcode('layoutblock', function(content, name) {
		if (!this.page.layoutblock) this.page.layoutblock = {}
		this.page.layoutblock[name] = content
		return ''
	})

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy({ "src/assets": "./assets" });

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
