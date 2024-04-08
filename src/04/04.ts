//есть массив с возрастом, нужно отобрать людей больше 90

const ages=[2, 18, 27, 98, 6, 31];//исходный массив

const predicate = (age: number)=>{
return age>90;
}
const oldages=[]//>90 новый массив который получится


//сделать фильтр курсов, которые дешевле 150
const courses=[
    {
        title: 'css',
        price:100
    },
    {
        title: 'js',
        price:200
    },
    {
        title: 'html',
        price:140
    }
]

type CourseType={
    title:string
    price:number
}
const price=(course: CourseType)=>{
    return course.price<60
}

