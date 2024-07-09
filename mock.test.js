//mock getData
//process the Mocked Data
const {getData,getRaw}=require('./test/utils')
const {processData,processRaw}=require('./test/processData')
jest.mock('./test/utils',()=>({
    getData:jest.fn(),
    getRaw:jest.fn()
}));

test('Mocked the process Data',()=>{
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data');
});
test('Mocked the Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
});