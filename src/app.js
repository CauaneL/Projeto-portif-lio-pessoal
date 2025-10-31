const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../resources/swagger/swagger.json');
const authRoutes = require('./routes/auth.routes');
const crmRoutes = require('./routes/crm.routes');
const excelRoutes = require('./routes/excel.routes');
const mensageriaRoutes = require('./routes/mensageria.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/crm', crmRoutes);
app.use('/excel', excelRoutes);
app.use('/mensageria', mensageriaRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;