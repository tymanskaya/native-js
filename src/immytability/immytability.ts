export type UserType={
    name: string,
    hair:number,
    address:{title: string}
}

export type LaptopType={
    title: string
}

export type UserWidthLaptopType= UserType&{
    laptop:LaptopType

}

export type UserWidthBooksType= UserType&{
    books: Array<string>
}
export type Company={
    id: number,
    title: string
}

export type WidthCompaniesType= {
    companies: Array<Company>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy={
        ...u,
        hair:u.hair/power
    }
    // copy.hair=u.hair/power;
    return copy;
}

export function moveUser(user:UserWidthLaptopType, title:string) {
  const copy= {
      ...user,
      address: {...user.address,title:title}
  }
  return copy
}

export function upgradeUserLaptop(user:UserWidthLaptopType, title:string) {
    const copy= {
        ...user,
        laptop: {...user.laptop,title:title}
    }
    return copy
}

export function moveUserToOtherHouse(user:UserWidthLaptopType & UserWidthBooksType, title:string) {
    const copy= {
        ...user,
        address: {...user.address,title:title}
    }
    return copy
}

export function addNewBooks (user:UserWidthLaptopType & UserWidthBooksType, newbook: string) {
    const copy= {
        ...user,
        books: [...user.books, newbook]
    }
    return copy
}

export function updateBooks(user:UserWidthLaptopType & UserWidthBooksType, old: string, newbook: string) {
    const copy={
        ...user,
        books:user.books.map(book=>book===old? newbook:book)
    }
    return copy
}

export function removeBooks(user:UserWidthLaptopType & UserWidthBooksType, title:string) {
    const copy={
        ...user,
        books:user.books.filter(book=>book!==title)
    }
    return copy
}

export function updadeCompanies(user: UserWidthLaptopType & WidthCompaniesType, id:number, title:string) {
    const copy= {
        ...user,
        companies:user.companies.map(comp=>comp.id===id?{...comp,title:title}:comp)
    }
    return copy
}

export const updadeCompanies2=(companies: {[key:string]:Array<Company>},
                               userName: string,
                               idCompany:number,
                               newTitle:string)=>{
let companiesCopy={...companies}
    companiesCopy[userName]=companiesCopy[userName].map(comp=>comp.id===idCompany?{...comp,title:newTitle}:comp)

    return companiesCopy
}