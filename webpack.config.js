const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	entry: {
		index: "./index.ts",
		matStyle: "./libraries/materialize/sass/materialize.scss",
		styles: "./styles/styles.scss",
	},
	context: path.resolve(__dirname, "src"),
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Password Generator",
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
			ignoreOrder: false,
		}),
		new OptimizeCSSAssetsPlugin({}),
	],
	optimization: {
		minimizer: [new TerserJSPlugin({})],
		splitChunks: {
			chunks: "all",
		},
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development",
						},
					},
					"css-loader",
					"sass-loader",
				],
			},
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
