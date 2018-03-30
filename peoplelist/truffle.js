module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  build: {
  	"index.html": "index.html",
  	"app.js": [
  		"javascript/app.js"
  	],
  	"app.css": [
		"stylesheet/app.css"
  	],
  	"images/": "images/"
  },
  rpc: {
  	host: "localhost",
  	port: 8545
  }
};
