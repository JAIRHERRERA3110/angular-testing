import {getCurriences} from './getCurriences';

describe('curriences', () => {
    it ('should return the supported curriences', () => {
//Arrange
let result;
//Act
result = getCurriences();
// Assert

expect(result).toContain('USD');
expect(result).toContain('AUD');
expect(result).toContain('EUR');

    })
})