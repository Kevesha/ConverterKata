describe("Convert to Binary", function () {
    describe("given one number", function () {
        it("should return the binary value of the number of 1", function () {
            //Arrange
            let kata = new convertToBinary();
            //Act
            let actual = kata.addBinary(1);
            //Assert
            let expected ="1";
            expect(actual).toBe(expected);
        });
        it("should return the binary value of the number of 23", function () {
            //Arrange
            let kata = new convertToBinary();
            //Act
            let actual = kata.addBinary(23);
            //Assert
            let expected ="10111";
            expect(actual).toBe(expected);
        });
        it("should return the binary value of the number of 55", function () {
            //Arrange
            let kata = new convertToBinary();
            //Act
            let actual = kata.addBinary(55);
            //Assert
            let expected ="110111";
            expect(actual).toBe(expected);
        });
        it("should return the binary value of the number of 99", function () {
            //Arrange
            let kata = new convertToBinary();
            //Act
            let actual = kata.addBinary(99);
            //Assert
            let expected ="1100011";
            expect(actual).toBe(expected);
        });
        
    });
});