const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age': 30,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the raper': {
        'age': 30,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}


app.get('/', (request, response)=>{ // hear the get request
response.sendFile(__dirname + '/index.html')
// find the index html and send it 
})

app.get('/api/:rapperName', (request, response)=>{
    //console.log(request.params.rapperName) 
    const rappersName = request.params.rapperName.toLowerCase()
    // letter sensitivity set fo lowercase :) 
    // querry selector for searching we need to set conditional now 
        if(rappers[rappersName]){
            //if is true lets response with json 
            response.json(rappers[rappersName])
            }else{
                response.json(rappers['dylan'])
            }

        })

  
    // get api send json with our created object


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You beter go catch it :)!`)
})