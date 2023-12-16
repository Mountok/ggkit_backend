const usersDB = require('../database/usersDB.json')
const heshService = require('../services/heshFunction.service')
const jsonService = require('../services/json.service')

const logIn = (req,res) => {
    const {
        login,
        password
    } = req.body;
    
    searchUser = usersDB.filter(el => el.login.toLowerCase() == login.toLowerCase());

    switch (searchUser.length) {
        case 1:
            if (heshService.getHeshOfString(password) == searchUser[0].password) {
                res.send({
                    status: 'Вход выполнен',
                    data: searchUser,
                })
            } else {
                res.send({
                    status: 'Имя пользователя занято',
                })
            }

            break;
        case 0:
            usersDB.push({
                login,
                password: heshService.getHeshOfString(password)
            })
            jsonService.saveToDataBase(usersDB)
            res.send({
                status: "Новый пользователь создан",
                data: usersDB.at(-1)
            })
            break;
        default:
            break;
    }

    

    
}



module.exports = {
    logIn,
}