var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let split = x.toString().split('')
    let reverse = []

    for (let i = split.length - 1; i >= 0; i--) {
        reverse.push(split[i])
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] !== reverse[i]) {
            return false
        }
    }

    return true
};
