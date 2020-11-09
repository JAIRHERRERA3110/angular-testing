import { greet } from './greet';

describe ('greet', ()=> {// greet suit
xit('should be equal to Hi: <name> good day', ()=>{
    expect(greet('jair')).toEqual('Hi:'+'jair'+'good day');
   
})
it('should include the name in the message', ()=>{
    expect(greet('jair')).toContain('jair');
})
it('should include the Hi in the message', ()=>{
    expect(greet('jair')).toContain('Hi');
})
it('should include the good day in the message', ()=>{
    expect(greet('jair')).toContain('good day');
})
it('should include "." in the message', ()=>{
    expect(greet('jair')).toContain('.');
})
})