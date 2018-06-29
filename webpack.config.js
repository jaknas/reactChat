module.exports = {
	output: {
		filename: "build/[name].pack.js"
	},
	module: {
		rules: [
			{
				use: {
					loader: "babel-loader",
					options: {
						presets: ["babel-preset-env", "babel-preset-react"]
					}
				},
				exclude: /node_modules/,
				test: /\.js$/
			}
		]
	},
	entry: {
		index: "./index"
	}
};
