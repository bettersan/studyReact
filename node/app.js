const express = require('express');
const app = express();
const router = require('./router/main')(app);
const PORT = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

<<<<<<< HEAD

app.listen(PORT, () => {
    console.log('Server On : http://localhost:${PORT}/');
})
=======
app.listen(PORT, ()=> {
	console.log('Server On : ${PORT}');
})

>>>>>>> 8807e8dfb74778121f0709a893d0ccfd05d73e9d
