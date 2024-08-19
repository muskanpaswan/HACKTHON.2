function likes(arr) {
    if (arr.length === 0) {
        return 'no one likes this'
    } else if (arr.length === 1) {
        return 'Swami likes this'
    } else if (arr.length === 2) {
        return 'Swami and Sudha like this'
    } else if (arr.length === 3) {
        return 'Swami, Sudha and Shiva like this'
    } else if (arr.length === 4) {
        return 'Swami, Sudha and 2 others like this'
    }
}
console.log(likes([]))
console.log(likes(['Swami']))
console.log(likes(['Swami', 'Sudha']))
console.log(likes(['Swami', 'Sudha', 'Shiva']))
console.log(likes(['Swami', 'Sudha', 'Shiva', 'Shruti']))
