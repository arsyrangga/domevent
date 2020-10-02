//buat fungsi
//memunculkan modal

const showModal = () => {
    //kita dapatkan element MODAL
    //yang mau dimunculkan
    let modal = document.getElementById(`modalMenu`)
    let menuhide = document.getElementById(`menu-icon`)
    let loginhide = document.getElementById(`login-text`)
    let registerhide = document.getElementById(`register-text`)
    // let alert = document.getElementById(`alert`)
    //kita atur styling element modalnya
    menuhide.style.display = `none`
    modal.style.display = `flex`
    loginhide.style.display = `none`
    registerhide.style.display = `none`
    // alert.style.display = `none`

}

const closeModal = () => {
    let hide = document.getElementById(`modalMenu`)
    let menuhide = document.getElementById(`menu-icon`)
    let loginhide = document.getElementById(`login-text`)
    let registerhide = document.getElementById(`register-text`)
    // let alert = document.getElementById(`alert`)
    menuhide.style.display = `flex`
    hide.style.display = `none`
    loginhide.style.display = `flex`
    registerhide.style.display = `flex`
    //  alert.style.display = `flex`
}

const closeAlert = () => {
    let hideAlert = document.getElementById(`alert`)
    hideAlert.style.display = `none`
}




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
