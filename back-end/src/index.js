const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la aplicación de registro de zapatillas');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



const sequelize = require('./config/database');
const Shoe = require('./models/Shoe');

sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos y tablas creadas');
});

const shoeRoutes = require('./routes/shoeRoutes');

app.use('/api', shoeRoutes);