const { name } = require("ejs");
var express = require("express");
var app = express();
app.use(express.static("node_modules"));  //node_modules dosyasının içeriğini kullanmamızı sağlar.
app.use(express.static("images"));//images dosyasının içeriğini kullanmamızı sağlar.
app.set("view engine", "ejs"); //views altındaki dosyaları render ile konum belirtmeden çağırabiliriz.
const gallery=require("./gallery");
const about=require("./about");
var favicon = require("serve-favicon");
var path = require("path");
app.use(favicon(path.join(__dirname,"imagess","sharingan2.png")));



app.use("/animeler/:name/gallery/:num", (req, res) => {
    const anime = gallery.find(anim => anim.name == req.params.name);
    const aboutiç = anime.fotoabout.filter(foto => foto.numb == req.params.num)[0];
    res.render("fotoiçeriği", { anime: anime, aboutiç: aboutiç });
});
app.use("/animeler/:name/gallery", (req, res) => {
    const anime = gallery.find(anim => anim.name == req.params.name);
    res.render("animeiçeriği", { anime: anime});
});
app.use("/animeler/:name/about", (req, res) => {
    const anime = gallery.find(anim => anim.name == req.params.name);
    const hakkinda = about.find(anim =>anim.name ==req.params.name)
    res.render("about", { anime: anime , hakkinda:hakkinda});
});
app.use("/animeler/:name", (req, res) => {
    const anime = gallery.find(anim => anim.name == req.params.name);
    const amine =about.find(amin=>amin.name ==req.params.name);
    res.render("arasayfa", {anime: anime , amine:amine}); //animeiçeriği anime değişkenine erişebilir.
});
app.use("/animeler", (req, res) => {
    res.render("animeler", { gallery: gallery })       // animeler.ejs sayfası animes listesine erişebilir. 
});
app.use("/", (req, res) => {
    res.render("anasayfa");
});
app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER 3000 PORTUNDA ŞUAN ÇALIŞIYOR");
})






