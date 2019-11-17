const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		index: "./index.ts",
		materialize: "./libraries/materialize/sass/materialize.scss",
		styles: "./styles/styles.scss",
	},
	context: path.resolve(__dirname, "src"),
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Password Generator",
			template: "index.html",
		}),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: "sha256",
			hashDigest: "hex",
			hashDigestLength: 20,
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	output: {
		filename: "[name].[contenthash:8].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{ test: /\.css$/, use: ["style-loader, css-loader"] },
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
