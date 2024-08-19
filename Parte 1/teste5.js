const array1 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
  { id: 1, age: 26, email: 'alice@example.com' },
  { id: 3, name: 'Charlie', age: 22 }
];

function mergeArrays(array1, array2){
    const mergedArrays = array1.map(item =>{
        const addInfo = array2.find(element => element.id === item.id);
        return {...item, ...addInfo}
    });
    console.log(mergedArrays)
};
mergeArrays(array1, array2);