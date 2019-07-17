const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/client/Main.tsx'),
	output: {
		filename: 'client.js',
		path: path.resolve(__dirname, 'assets'),
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css?$/,
				loader: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		publicPath: '/assets/',
		port: 3001,
		proxy: {
			'**': 'http://localhost:3000'
		}
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css']
	}
};