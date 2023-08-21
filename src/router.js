import express from "express"
import path from "path"
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import bodyParser from "body-parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'ejs'))
app.use('/dist',express.static(path.join(__dirname,'..','dist')))

app.use('/public',express.static(path.join(__dirname,'public')))


app.get('/',((req, res) => {
    res.redirect('/notes')
}))

app.get('/notes',(req,res)=>{
    res.render('notes-categories')
})

app.post('/notes/:category',(req,res)=>{
    const categoriesData = req.body
    console.log(categoriesData)
})

app.get('/notes/:categories',(req,res)=>{
    const category = req.params.category

    console.log(category)
    res.render('chosen-notes-type')
})
app.post('/notes',(req,res)=>{
    let category = req.body.find(item => item.title === 'All')
    let data = category.noteList.notes
    console.log(data)
})

app.listen(port,()=>{
    console.log('Localhost is running ')
})
