const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
    console.log("fsdsads")
    console.log(req.body.email)
    return res.json({status: 'OK!'});
})

app.post('/api', async (req, res) => {
    console.log("fsdsads")
    console.log(req.body)
    console.log(JSON.stringify(req.body));
    // var result = {}
    const url = 'https://expensedaily.azurewebsites.net/api/post/' + req.body.url
    console.log(url);
    let result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
        'Content-Type': 'application/json',
        }
    })
    console.log(result)
    let data = await result.json()
    console.log(data)

    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // return res.json(data);
    // })
    // .catch(error => console.error(error));
    return res.json({status: data});
})



app.listen(3000, () => {
    console.log('Server started on 3000')
})
