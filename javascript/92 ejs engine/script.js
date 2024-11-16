const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let site = "BMW"
    let site_text = "Search for best cars!"
    res.render("index",{site:site,site_text:site_text} )
})
app.get('/blog/:slug', (req, res) => {
    let blog = "BMW-Best Cars"
    let blog_cont = "Best Cars in the world!"
    res.render("index",{blog:blog,blog_cont:blog_cont} )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// if we wanna use multiple pages through one get request then we will use ejs engine