// export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']
// export const usersObj = {
//     '0': 'Dimych',
//     '1': 'Natasha',
//     '2': 'Valera',
//     '3': 'Katya',
// }

//accociativ array
type UserType = {
    [key: string]: { id: number, name: string }
}
export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '123564': {id: 123564, name: 'Natasha'},
    '1234': {id: 1234, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
//1) достование
users[1]

//2) добавить пользователя, который пришел

var user={id: 100500, name: 'John Doe'}
users[user.id] = user

//3) удаление пользователя

delete users[user.id]

//4) обновить пользователя

users[user.id].name='Vitya'

//array
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 123564, name: 'Natasha'},
    {id: 1234, name:'Valera'},
    {id: 1, name:'Katya'}
]

//1) достование
// usersArray.find(u=>u.id === 1)

//2) добавить пользователя, который пришел

// var user={id: 100500, name: 'John Doe'}
// usersArray.push(user)

//3) удаление пользователя
// var usersArray = usersArray.filter(u=>u.id !== users.id)

