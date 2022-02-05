module.exports = function(app)
{
   app.get('/', (req, res) =>{
      res.send('hello world!');
   });

   app.get('/text', (req, res) =>{
      res.send('this is response Text');
   })

   app.get('/javascript',function(req,res){
      res.render('javascript.html');
   });

   app.get('/jQuery',function(req,res){
      res.render('jQuery.html');
   });

   app.get('/react',function(req,res){
      res.render('react.html');
   });
}