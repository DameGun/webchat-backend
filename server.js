import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', (req, res) => {
    res.send('Hello world!');
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}...`);
});