const btn = document.getElementsByClassName("btn")
const mobile = document.getElementsByClassName('mobile-menu')[0]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        mobile.classList.toggle('display')
    })
}