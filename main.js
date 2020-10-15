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

//menutup alert home
const closeAlert = () => {
    let hideAlert = document.getElementById(`alert`)
    hideAlert.style.display = `none`
}

//looping image
let showcase = document.getElementById(`wrapper_showcase`)
// showcase.innerHTML += ` 
// <img src="https://picsum.photos/seed/411/300" alt="gambar rusak" /> 
// `

for (var i = 0; i < 45; i++) {
    showcase.innerHTML += `
<img src='https://picsum.photos/seed/${60 + i}/130' alt='Gambar ke ${i}'/>
`
}









