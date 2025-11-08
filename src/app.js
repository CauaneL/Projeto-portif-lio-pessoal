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

// Mock temporário para teste de performance
app.get('/crm/extract-test', (req, res) => {
    res.status(200).json({
        clientes: [
            { id: '1', nome: 'Cliente 1', status: 'ativo' },
            { id: '2', nome: 'Cliente 2', status: 'ativo' },
            { id: '3', nome: 'Cliente 3', status: 'inativo' },
            { id: '4', nome: 'Cliente 4', status: 'ativo' },
            { id: '5', nome: 'Cliente 5', status: 'inativo' }
        ]
    });
});


module.exports = app;