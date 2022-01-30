const express = require('express');
const app = express();
const router = require('./router/main')(app);
const PORT = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.listen(PORT, ()=> {
	console.log('Server On : ${PORT}');
})

