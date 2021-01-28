export const login = async (username: string, password: string): Promise<any> => {

  let result = await  fetch("http://localhost:25004/Jwt/authenticate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    })
  })
  
  return await result.json()

};


// export const login = async () =>{
//  let res = await fetch("http://localhost:25004/api/GeneralSettings");
//  let result = await res.json();
//  console.log("result",result);
// }
