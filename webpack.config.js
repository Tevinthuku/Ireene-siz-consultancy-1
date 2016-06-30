var poststylus = require('poststylus');
var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
      ]
   },
   stylus: {
     use: [
       poststylus([ 'autoprefixer'])
     ]
   }
}

module.exports = config;