const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/server/index.ts',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
	},
	plugins: [
		new NodemonPlugin()
	],
	target: 'node',
	node: {
		__dirname: true,
		__filename: true
	}
};