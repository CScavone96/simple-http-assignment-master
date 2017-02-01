const http = require('http'); 
const {getIndex, getPage2} = require('./htmlResponses.js');
const {getHello, getTime} = require('./textResponses.js');
const {getHelloJSON, getTimeJSON} = require('./jsonResponses.js');
const {getImage} = require('./imageResponses.js');

const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
	console.log(request.url);
	switch(request.url){
		case '/':
			getIndex(request, response);
			break;
		case '/page2':
			getPage2(request, response);
			break;
		case '/hello':
			getHello(request, response);
			break;
		case '/time':
			getTime(request, response);
			break;
		case '/helloJSON':
			getHelloJSON(request, response);
			break;
		case '/timeJSON':
			getTimeJSON(request, response);
			break;
		case '/dankmemes':
			getImage(request, response);
			break;
		default:
			getIndex(request, response);
			break;
	}
};
http.createServer(onRequest).listen(PORT);

console.log(`listening on ${PORT}`);