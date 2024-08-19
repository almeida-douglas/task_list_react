
const fruits = ['apple','banana', 'apple', 'orange', 'banana', 'apple']
function countOccurrences(array){
    const ocorrencia = {}
    array.forEach(string =>{
        if (ocorrencia[string]){
            ocorrencia[string]++;
        }
        else{
            ocorrencia[string] = 1
        }
    });
    return ocorrencia
}
console.log(countOccurrences(fruits))
