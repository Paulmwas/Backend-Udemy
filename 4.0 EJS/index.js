import express from 'express';

const app = express();
const port = 3000

app.get('/', (req, res)=>{
    const today = new Date();
    let day = today.getDay()
    const type = "Its a week day"
    const adv = "You need to grind harder";
    const  data ={
        title: "Home Page",
        seconds: new Date().getSeconds(),
        items : ["Apple", "Banana", "Orange", "Mango"],
        htmlContent : "<h2> This is a heading </h2>",
    }

    if (day === 6 || day === 0){
        const type = "Its a weekend";
        const adv = "Take a rest.";
    }
    res.render("index.ejs",{
        dayType : type,
        advice : adv,
        data : data,
    })
})
app.get('/fun', (req, res)=>{
    let funGames = ["Chess", "Ludo", "PUBG", "COD", "Among Us", "Fortnite"];
    res.render("fun.ejs", {
        funGames : funGames,
    })
})

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
    
})