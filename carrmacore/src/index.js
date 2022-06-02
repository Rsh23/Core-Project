const app = require('./app.js');

app.listen(app.get('port'), () =>{

    console.log('servidor',app.get('port'));

});