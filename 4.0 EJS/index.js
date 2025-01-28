import express from 'express';

const app = express();
const port = 3000

app.get('/', (req, res)=>{
    const today = new Date();
    let day = today.getDay()
    const type = "Its a week day"
    const adv = "You need to grind harder";

    if (day === 6 || day === 0){
        const type = "Its a weekend";
        const adv = "Take a rest.";
    }
    res.render("index.ejs",{
        dayType : type,
        advice : adv
    })
})

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
    
})