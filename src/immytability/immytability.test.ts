import {
    addNewBooks,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBooks, updadeCompanies, updadeCompanies2, updateBooks,
    upgradeUserLaptop,
    UserType,
    UserWidthBooksType,
    UserWidthLaptopType, WidthCompaniesType
} from "./immytability";

test('reference type test', () => {
    let user: UserType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        }
    }

    const cutUser = makeHairstyle(user, 2)
    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWidthLaptopType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        }
    }
    const movedUser = moveUser(user, 'Kiev')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')
})
test('laptop my asser', () => {
    let user: UserWidthLaptopType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        }
    }
    const movedUser = upgradeUserLaptop(user, 'Asser')
    expect(user).not.toBe(movedUser)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(movedUser.laptop.title).toBe('Asser')
    expect(user.laptop.title).toBe('asus')
})
test('books', () => {
    let user: UserWidthLaptopType & UserWidthBooksType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['css', 'js', 'html']
    }
    const movedUser = moveUserToOtherHouse(user, 'Beresa')
    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.address.title).not.toBe(movedUser.address.title)
    expect(movedUser.address.title).toBe('Beresa')
})
test('add book', () => {
    let user: UserWidthLaptopType & UserWidthBooksType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['css', 'js', 'html']
    }
    const movedUser = addNewBooks(user, 'ts')
    expect(user).not.toBe(movedUser)
    expect(user.address.title).toBe(movedUser.address.title)
    expect(movedUser.books[3]).toBe('ts')
})
test('update book', () => {
    let user: UserWidthLaptopType & UserWidthBooksType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['css', 'js', 'html']
    }
    const movedUser = updateBooks(user, 'js', 'ts')
    expect(user).not.toBe(movedUser)
    expect(user.address.title).toBe(movedUser.address.title)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[1]).toBe('ts')
})
test('remove js book', () => {
    let user: UserWidthLaptopType & UserWidthBooksType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['css', 'js', 'html']
    }
    const movedUser = removeBooks(user, 'js')
    expect(user).not.toBe(movedUser)
    expect(user.address.title).toBe(movedUser.address.title)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[1]).toBe('html')
})
test('width companies', () => {
    let user: UserWidthLaptopType & WidthCompaniesType = {
        name: 'katya',
        hair: 32,
        address: {
            title: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        companies: [
            {id: 1, title: 'aple'},
            {id: 2, title: 'windows'}
        ]

    }
    const movedUser = updadeCompanies(user, 1, 'apple')
    expect(user).not.toBe(movedUser)
    expect(user.address.title).toBe(movedUser.address.title)
    expect(user.companies).not.toBe(movedUser.companies)
    expect(movedUser.companies[0].title).toBe('apple')
})
test('update companies', () => {
    let companies = {
        'Katya': [{id: 1, title: 'aple'}, {id: 2, title: 'windows'}],
        'Mira': [{id: 1, title: 'asser'}]
    }
    const copy = updadeCompanies2(companies, 'Katya', 1, 'apple')

    expect(copy['Katya']).not.toBe(companies['Katya'])
    expect(copy['Mira']).toBe(companies['Mira'])
    expect(copy['Katya'][0].title).toBe('apple')

})