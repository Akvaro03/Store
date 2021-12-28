process.traceDeprecation = true;
const express = require('express');
const path = require(`path`);
const mongoose = require(`mongoose`)
const app = express();
const bodyParser = require(`body-parser`);
const uri = `mongodb+srv://alvaro:Wx6QdkklUQ5Bgtad@cluster0.v3juy.mongodb.net/store`
const cors = require('cors')
const compression = require('compression');


app.use(compression());
app.use(cors({
    origin: '*',
    method: ['POST', 'DELETE', 'PUT', 'GET'],
    credentials: false
}))
const port = process.env.PORT || 3000;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connect(uri, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`conneccion existosa a ${uri}`)
    }
})
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static('./public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Datos = require(`./products.js`);
app.get("/hola", async (req, res) => {
    // await Datos.deleteMany({});

    // const { tittle, id, thumbnailUrl, price} = req.query;
    // console.log(tittle)
    // console.log(id)
    // console.log(thumbnailUrl)
    // console.log(price)
    // const datos = await new Datos({ tittle, id, thumbnailUrl, price });
    // await datos.save();
    let productos = await await Datos.find({ })
    console.log(productos)
    res.json(productos);
})  

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})