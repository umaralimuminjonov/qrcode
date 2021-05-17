const express = require("express");
const qrcode = require("qrcode");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/scan", (req, res) => {
  const someTxt = req.body.someTxt;

  if (someTxt == "") res.send("Biror narsa yozing");

  qrcode.toDataURL(someTxt, (err, src) => {
    if (err) res.send("Xa'tolik yuz berdi");

    res.render("scan", { src });
  });
});

app.listen(3000, () => console.log("Server 3000chi portda ishga tushdi"));
