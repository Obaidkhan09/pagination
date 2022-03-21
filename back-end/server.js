import express, { request } from 'express';
import { data } from './model/data.js'
import cors from 'cors';
//init app
const app = express();
const PORT = process.env.PORT || 5000 ;
let currentPage = 1 ;
//init middleware
app.use(cors());
//init endpoints
app.get('/', (req, res) => {
    req.query.current = parseInt(req.query.current);
    const { current } = req.query;
    currentPage = current;
    let perPage = 5;
    let totalData = data.length;
    const totalPage = Math.ceil(totalData / perPage);
    let  startFrom = (currentPage - 1) * perPage;
    const temp =  data.slice(startFrom, startFrom + perPage );
    res.status(200).send(JSON.stringify({items : temp, perPage, totalPage, currentPage}));
});
app.post('/:id', (req, res) => {
    const { id } = req.params;
    currentPage = id;
    res.status(200).send(id);
})
//init listner
app.listen(PORT, (req, res) => {
    console.log(`listening on PORT ${PORT}`)
})