const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname, '../logs/userLogs.txt'); 

function userLogs(req, res, next) {
   const ab = `el ususario ingreso a la ruta: ${req.url} \n`
   fs.appendFileSync(logs, ab);
    
    next();
    
}



module.exports = userLogs 

