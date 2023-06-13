const { name } = require("ejs");
var express = require("express");
var app = express();
app.use(express.static("node_modules"));  //node_modules dosyasının içeriğini kullanmamızı sağlar.
app.set("view engine", "ejs"); //views altındaki dosyaları render ile konum belirtmeden çağırabiliriz.
const animes=require("./animes");

app.use("/animeler/:name/:num", (req, res) => {
    const anime = animes.find(anim => anim.name == req.params.name);
    const aboutiç = anime.fotoabout.filter(foto => foto.numb == req.params.num)[0];
    res.render("fotoiçeriği", { anime: anime, aboutiç: aboutiç });
});
app.use("/animeler/:name", (req, res) => {
    const anime = animes.find(anim => anim.name == req.params.name);
    res.render("animeiçeriği", anime); //animeiçeriği anime değişkenine erişebilir.
});
app.use("/animeler", (req, res) => {
    res.render("animeler", { animes: animes })       // animeler.ejs sayfası animes listesine erişebilir. 
});
app.use("/", (req, res) => {
    res.render("anasayfa");
});
app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER 3000 PORTUNDA ŞUAN ÇALIŞIYOR");
})






