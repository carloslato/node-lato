import express from 'express';
import ejs from 'ejs';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

// configuracion
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'))

app.listen(3000);
console.log('Server listening on port', 3000);

