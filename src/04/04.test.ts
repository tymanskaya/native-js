test ('should age',()=>{
    const ages=[2, 18, 27, 98, 6, 31];

    const predicate = (age: number)=>{
        return age>90;
    }
    const oldages = ages.filter(predicate);

    expect(oldages.length).toBe(1);
    expect(oldages[0]).toBe(98);
})