const axios = require('axios')

const add = (num1, num2) => {
     return num1 + num2
}

const isNull = () => null

const checkValue = (x) => x

const createUser = () => {
     const user = { firstName: 'Devin' }
     user['lastName'] = 'Rucks'
     return user
}

const fetchUser = () => {
     axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(res => res.data)
          .catch(err => 'fetchUser error')
}

fetchUser()

module.exports = {
     add,
     isNull,
     checkValue,
     createUser,
     fetchUser
}