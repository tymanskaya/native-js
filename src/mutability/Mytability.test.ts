function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    age: number;
    name: string;
    address?: { title: string }
}
test('big test', () => {
    var user: UserType = {
        name: 'Dima',
        age: 18
    }


    icreaseAge(user)
    expect(user.age).toBe(19)

    const superman = user
    superman.age = 87
    expect(user.age).toBe(87)
})
test('array test', () => {
    var users = [
        {
            age: 18,
            name: 'Dima'

        },
        {
            age: 19,
            name: 'Dian'
        }
    ]
    var admins = users
    admins.push({name: 'lion', age: 98})
    expect(users.length).toBe(3)
})

test('value type test', () => {
    var users = 100
    var admins = users
    admins = users + 1

    expect(users).toBe(100)
})

test('reference test', () => {
    var user: UserType = {
        name: 'Dima',
        age: 18,
        address: {
            title: 'minsk'
        }
    }
    var user2: UserType = {
        name: 'kolj',
        age: 56,
        address: user.address
    }
    const users = [user, user2, {name: 'vfgbh', age: 56, address: user.address}]

    const admins = [user, user2]

    admins[0].name='ghhujgbjh'

    expect(users[0].name).toBe('ghhujgbjh')

})

test('reference array test', () => {
    var users = [
        {
            age: 18,
            name: 'Dima'

        },
        {
            age: 19,
            name: 'Dian'
        }
    ]
    var admins = users
    admins.push({name: 'lion', age: 98})
    expect(users.length).toBe(3)
})