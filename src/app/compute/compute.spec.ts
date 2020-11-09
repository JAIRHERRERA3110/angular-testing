import {compute} from "./compute";

describe ('compute', () => {
     
    it('should return 0 if compute is negative ',() =>{
      // pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      //Act
        result = compute(-1);
      //Assert  
        expect (result).toBe(0);
    })
    
        it('should increment if input is positive ',() =>{
            // Arrange
            let result = 0;
            // Act
            result = compute(1);
            // Asset
            expect (result).toBe(2);
        })
})

