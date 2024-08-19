const items = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' }
];


function groupByCategory(items){
    const agrupado = {}
    items.forEach(item =>{
        const categoria = item.category
        if (!agrupado[categoria]){
            agrupado[categoria] = []
        };
        agrupado[categoria].push(item)
    });
    return agrupado
}
console.log(groupByCategory(items))