import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagens de usuários');

    response.json([
        'Matheus',
        'Felipe',
        'Gabriel',
        'Carlos'
    ]);
});

app.listen(3333);