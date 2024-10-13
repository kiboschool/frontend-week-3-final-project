import './style.css'
import covidData from './covid-data'
import processData from './process-data.js'

document.querySelector('#app').addEventListener('click', ()=>{
  alert('hello world')
})

processData(covidData)
