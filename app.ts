import fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send('Hello')
});

app.post("/changeLedStatus", (req, res) => {
    // console.log(req.body)
    const rawdata = fs.readFileSync('led.json').toString()
    const ledStatus = JSON.parse(rawdata)
    // console.log(ledStatus)
    res.contentType('appliction/json')
    const resp = {

    };
    res.send(req.body)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server started on port 3000')
})
