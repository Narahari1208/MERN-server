const mongoose=require('mongoose')
describe('MongoDB Connected',()=>{
    beforeAll(async()=>{
        const url='mongodb+srv://nbsnarahari:Ds6xcjJ0rO6pXSyp@cluster0.gpinard.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    });
    test('MongoDB Conneced to Server',()=>{
    expect(mongoose.connection.readyState).toBe(1)
    //If connected 1 or else 0
    })
})