import express from "express"
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello world</h1>")
    
});
app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>")
})
app.get("/contact", (req, res) => {
    res.send("<h1>Contact page</h1> <h2>Phone: 123456789</h2>")
})

app.listen(port, ()=>{
    console.log("Server ids runnign in port 3000");
    
});