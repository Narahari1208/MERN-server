const request=require('supertest')
const app=require('./index')

describe('GET /users/',()=>{
    test('Get users from /user api',async()=>{
        const res=await request(app).get('/users').expect(200);
        console.log(res.body.getAllUsers);
        const data=res.body;
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('email');
        })
    })
})