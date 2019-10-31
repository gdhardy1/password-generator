const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Password Generator",
			template: "./src/index.html"
		})
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{ test: /\.css$/, use: ["style-loader, css-loader"] },
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
};
