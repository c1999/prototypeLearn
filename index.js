const a = [1,3]
const b = [ { id: 1,name: '1'},{ id: 2, name: '2'}]
const c = b.filter((item)=>{
    return a.indexOf(item.id) !== -1
})
console.log('c :>> ', c);