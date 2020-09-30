//buat fungsi
//memunculkan modal

const showModal = () => {
    //kita dapatkan element MODAL
    //yang mau dimunculkan
    let modal = document.getElementById(`modalMenu`)
    let menuhide = document.getElementById(`menu-icon`)
    let alert = document.getElementById(`alert`)
    //kita atur styling element modalnya
    menuhide.style.display = `none`
    modal.style.display = `flex`
    alert.style.display = `none`

}

const closeModal = () => {
    let hide = document.getElementById(`modalMenu`)
    let menuhide = document.getElementById(`menu-icon`)
    let alert = document.getElementById(`alert`)
    menuhide.style.display = `flex`
    hide.style.display = `none`
    alert.style.display = `flex`
}

