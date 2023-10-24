
const nav = document.querySelector('.navbar')
fetch('../html/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


const foot = document.querySelector('.footer')
fetch('../html/footer.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML=data
})

