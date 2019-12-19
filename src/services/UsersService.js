const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3004/" : "https://3004-dot-7073245-dot-devshell.appspot.com/",
    timeout: 1000,
});

class UsersService {

    static getUsers(){
        return instance.get('/users');
    }
    static getUser(id){
        return instance.get('/users/' + id);
    }
    static createUser(user){
        return instance.post('/user', user);
    }
    static getUserByEmailAndPassword(email, password) {
        return instance.get('/users?email=' + email + '&password=' + password);
    }



}

export default UsersService;