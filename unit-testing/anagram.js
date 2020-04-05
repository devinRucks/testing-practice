// Return true if anagram and false if not
// Example:
// 'elbow' === 'below'
// 'Dormitory === 'dirty room##'

const isAnagram = (str1, str2) => {
     return formatStr(str1) === formatStr(str2)
}

const formatStr = (str) => {
     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = isAnagram