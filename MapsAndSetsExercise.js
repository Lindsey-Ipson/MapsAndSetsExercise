// 1. What does the following code return?
// new Set([1,1,2,2,3,4])
// returns [1,2,3,4]

// 2. What does the following code return?
// [...new Set("referee")].join("")
// returns referee

// 3. What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// looks like {[1,2,3]: false}

// 4. Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
    const arrSet = new Set(arr);
    return ! (arr.length === arrSet.size);
}

// 5. Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel (letter) {
    return 'aeiou'.includes(letter);
};

const vowelCount = (str) => {
    const lowStr = str.toLowerCase();
    const vowMap = new Map ();
    for (let char of lowStr) {
        if (isVowel(char)) {
            if (vowMap.get(char)) {
                vowMap.set(char, (vowMap.get(char) +1))
            }
            else vowMap.set (char, 1)
        }
    }
    return vowMap;
}
