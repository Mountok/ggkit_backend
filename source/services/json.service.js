
const fs =  require('fs')

const saveToDataBase = (DB) => {
    fs.writeFileSync(
        './source/database/usersDB.json',
        JSON.stringify(DB,null,2),
        {
            encoding: 'utf-8',
        }
    );
};

module.exports = { saveToDataBase };