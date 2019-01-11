import 'dotenv/config';
import express from 'express';
import { template } from './index.js';

const app = express();

console.log(`




${template}




`);

app.get('/', (req, res) => res.send(template));
app.listen(process.env.PORT,
    () => console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
);
