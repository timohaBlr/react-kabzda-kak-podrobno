
test('first', ()=> {
    let props = {
        name: 'Tolya',
        age: 35,
        lessons: [{lesson: 'adin'}, {lesson: 'dva'}],
        address: {
            city: {
                street: 'Nezalezhnasti'
            }
        }
    };
    let {name, age, address: {city : {street}} } = props
expect(name).toBe('Tolya')
expect(age).toBe(35)
expect(street).toBe('Nezalezhnasti')
})
export default  '';