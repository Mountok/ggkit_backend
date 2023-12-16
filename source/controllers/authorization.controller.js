const usersDB = require('../database/usersDB.json')
const heshSrevices = require('../services/heshFunction.service')


const logIn = (req,res) => {
    const {
        login,
        password
    } = req.body;
    
    searchUser = usersDB.filter(el => el.login.toLowerCase() == login.toLowerCase());

    switch (searchUser.length) {
        case 1:
            if (heshSrevices.getHeshOfString(password) == searchUser[0].password) {
                res.send({
                    status: 'Вход выполнен',
                    data: searchUser,
                })
            } else {
                res.send({
                    status: 'Пароль не верный',
                })
            }
            break;
        case 0:
            res.send('Создайте пользователя')
            break;
        default:
            break;
    }

    

    
}



module.exports = {
    logIn,
}