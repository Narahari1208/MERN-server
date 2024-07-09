const { User } = require('./resolvers');
const fetchData=require('./test/api')

test('GET /users api data',async()=>{
    const data=await fetchData();
    console.log(data);
    expect(data).toHaveProperty('getAllUsers');
    data.getAllUsers.forEach(User => {
        expect(User).toHaveProperty('id')
        expect(User).toHaveProperty('name')
        expect(User).toHaveProperty('password')
    });
})