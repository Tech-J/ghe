let startDate = document.querySelectorAll('#start')
let returnDate = document.querySelectorAll('#return')
let inputs = document.querySelectorAll('input')

// let start =  flatpickr("#start", {})
// let returnDate2 = flatpickr("#return", {})

flatpickr("#start", {disableMobile: "true"})
flatpickr("#return", {disableMobile: "true"})
// new1.addEventListener('click',(event)=>{

// console.log("hi")
// console.log(event)
// var start = document.querySelectorAll('#start')
// console.log(start)
// var returnAdd = document.querySelectorAll('#return')
// console.log(returnAdd)

// })

const searchButton = document.getElementById('select')
console.log(searchButton)
searchButton.addEventListener('click', (event)=>{
  event.preventDefault()
  console.log("hi")
  // console.log(startDate)
  // console.log(returnDate)
  console.log(start,returnDate2)
  console.log(inputs)
})
