const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const models = require('./db.models');
const { response } = require("express");
mongoose.connect('',{ useNewUrlParser: true});
const connection = connect.connection
connection.Once('open', function () {
    console.log('mongo connection successful')
})
 

const app = express();
const port = 4000;
app.use(cors());
app.get('/', (req, res) => { 
    return res.json('welcome')
})


app.get('/:name', (req, res) => {
    const { name } = req.params
    return res.json({name: name})
})


app.post('/create', (req, res) => {
    let  post = new Db(req.body)
    post.save()
        .then(
            response => { 
                return res.json('')
            })

})
    .catch(err => {
        return res.json('did not save successfully')
    })
     
app.patch('/update/id', function (req, res) {
    let update = new Db(req.body)
    let id = req.params
    DB.findByIdAndUpdate({ id: id }, update)
        .then(response => {
            return res.json({ 'did not update': err })
        })
})
    app.delete('/delete/:id', function (req, res) {
        let { id } = req.params
        DB.findByIdAndDelete(id)
            .then(response => {
                return res.json('document deleted' + response.json())
            })
    
        
            
    })



app.listen(port, () => {
    console.log(`app listening on port: ${port}`); 

});

