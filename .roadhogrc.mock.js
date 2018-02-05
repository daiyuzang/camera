import users from './src/mockdata/mock';
// import Mock from 'mockjs';

export default {
    '/api/users': function(req,res){
        res.json(users);
        console.log(users)
    }
};
