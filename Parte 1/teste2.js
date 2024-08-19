
async function fetchUserData(){
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const resp = await fetch(apiUrl)
  if (resp.status === 200){
    const users = await resp.json()
      users.forEach(user => {
        if (user.username[0] === 'C')
        return user;
      })
  }
}
console.log(fetchUserData())