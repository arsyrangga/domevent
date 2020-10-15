


//javascript untuk login page
const showLogin = () => {
    let login = document.getElementById(`login-page`)
    login.style.display = `flex`

}
const closeLogin = () => {
    let close = document.getElementById(`login-page`)
    close.style.display = `none`
}
const showRegister = () => {
    let register = document.getElementById(`register-page`)
    register.style.display = `flex`
}
const closeRegister = () => {
    let closeReg = document.getElementById(`register-page`)
    closeReg.style.display = `none`
}
const noAccount = () => {
    let close = document.getElementById(`login-page`)
    let register = document.getElementById(`register-page`)
    close.style.display = `none`
    register.style.display = `flex`
}
const haveAccount = () => {
    let closeReg = document.getElementById(`register-page`)
    let login = document.getElementById(`login-page`)
    closeReg.style.display = `none`
    login.style.display = `flex`

}
const logoutAccount = () => {
    let loginText = document.getElementById('loginText')
    let registerText = document.getElementById('registerText')
    let textLogin = document.querySelector('.textLogin')




    loginText.style.display = 'flex'
    registerText.style.display = 'flex'
    textLogin.style.display = 'none'
    window.location.href = 'index.html'

}


//function
const register = () => {
    let username = document.querySelector('.username').value
    let email = document.getElementById('email').value
    let password = document.querySelector('.password').value

    console.log(`
    username : ${username}
    email : ${email}
    password : ${password}
    `)
    alert(`username : ${username} Berhasil didaftarkan..`)

    sessionStorage.setItem('username', username)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)

    let closeReg = document.getElementById(`register-page`)
    closeReg.style.display = `none`

}

const login = () => {

    let usernames = document.querySelector('.usernames').value
    let passwords = document.querySelector('.passwords').value

    console.log(`
    username : ${usernames}  
    password : ${passwords} 
    `)
    let dbus = sessionStorage.getItem('username')
    let dbpass = sessionStorage.getItem('password')
    if (usernames === dbus && passwords === dbpass) {
        let loginText = document.getElementById('loginText')
        let registerText = document.getElementById('registerText')
        let close = document.getElementById(`login-page`)
        let textLogin = document.querySelector('.textLogin')

        close.style.display = `none`
        loginText.style.display = 'none'
        registerText.style.display = 'none'
        textLogin.style.display = 'flex'
        textLogin.innerHTML += ` <div style="display:flex;width:auto;height:10vh;justify-content:center;align-items:center;position:relative;left:48vw;">
            <h4 style="
            display:flex;
            color:white;
 
            ">Selamat Datang ${usernames}...</h4>
            <h4 style="color:blue;margin-left:10px;cursor:pointer; " onclick="logoutAccount()">Logout</h4>
            </div>
        `

    }
    else {
        alert('cek kembali Username dan Password anda...')
    }
}
const logout = () => {
    sessionStorage.clear()
    window.location.href = '#home'
}