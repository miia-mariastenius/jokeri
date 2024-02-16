const raffle = document.querySelector('p')
const list = document.querySelector('table')
const button = document.querySelector('button')
let times = 0


button.addEventListener('click',() => {
  const tr = list.insertRow()

  for (let i = 0;i<7;i++) {
    const td = tr.insertCell(i)
    td.innerHTML = Math.floor(Math.random() * 10)
  }

  times += 1
  raffle.innerHTML = 'Valmiita rivejä ' + times  
})