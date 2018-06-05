function convertToBinary() {
    function addBinary(num) {
        var bin = [];
        while (num > 0) {
            bin.unshift(num % 2);
            num >>= 1; // basically /= 2 without remainder if any
        }
        return bin.join('');
    }
    return {
        addBinary
    };
}