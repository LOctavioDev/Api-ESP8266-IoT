const app = require('./app');
require('./database');

app.listen(app.get('PORT'), () => {
    console.log('Server on Port' + app.get('PORT'));
});