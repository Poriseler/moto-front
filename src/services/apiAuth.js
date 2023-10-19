export async function login({email, password}){
    const url = 'http://127.0.0.1:8000/api/user/token/'
    const payload = {
        'email': email,
        'password': password
    }
    const res = await fetch(url, {
        
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    const data = await res.json()
    return data

}