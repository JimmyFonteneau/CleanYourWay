const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3004/',
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