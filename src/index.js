const app = require("./server");
const dotenv = require('dotenv').config();
require('./database');

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});