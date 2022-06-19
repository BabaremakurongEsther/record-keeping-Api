let names = document.getElementsBy('name')
const body = {
    "farm": "farm2",
    "plant": "maize",
    "activities": "harvest",
    "date":"12/05/2022"
}


fetch('http://localhost:4000/create', {
    methods: 'POST',
    body:body
})
.then(res => res.json())
    .then(data => {
names.innerHTML = JSON.stringify(data)
})
  .catch(err => console.log(err))      
           
        
    