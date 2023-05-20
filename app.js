let mill = document.querySelector('.mill')
let price = document.querySelector('.price')
let spead = document.querySelector('.spead')
let dwoor = document.querySelector('.dwoor')


// door.forEach(( ) => {

//     door.onclick = () => {
//         image.style.animationName = 'door'
//         image.classList.toggle('active')
//         wheel_back.classList.toggle('hide')
//         wheel_front.classList.toggle('hide')
//         setTimeout(() => {

//             main.style.animationName = 'close_door'
//         }, 1900)

//         setTimeout(() => {
//             main.classList.toggle('show')
//         }, 1900)

//         setTimeout(() => {
//             tesla.classList.toggle('hide')
//         }, 1900)
//     }
// })







down_whele.onclick = () => {
    disks.innerHTML = razmerMin
    price.innerHTML = '$' + addCommas(cost)
    wheel_back.classList.remove('r21_back')
    wheel_front.classList.remove('r21_front')
}

