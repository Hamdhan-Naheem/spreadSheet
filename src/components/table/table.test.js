import{render,fireEvent} from '@testing-library/react';

import Table from './table';

it('color changed',()=>{
    const {queryByTitle} =  render(<Table/>)
    const th = queryByTitle('box')
    expect(th).toBeTruthy()
})

describe('Table', () => {
    it('Should be true', () => {
       const test = true;
       expect(test).toBe(true);
    });
 })