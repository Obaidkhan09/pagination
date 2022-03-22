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
    req.query.items = parseInt(req.query.items);
    console.log(req.query);
    const { current, items } = req.query;
    let perPage = items;
    let totalData = data.length;
    const totalPage = Math.ceil(totalData / perPage)
    //if perPage = 10 & current page is already 4, it will exceed total page which will be 3
    //there will be no data to display on page 4
    totalPage >= current ? currentPage = current : currentPage = 1;
    let  startFrom = (currentPage - 1) * perPage;
    const temp =  data.slice(startFrom, startFrom + perPage );
    res.status(200).send(JSON.stringify({items : temp, perPage, totalPage, currentPage}));
});
//init listner
app.listen(PORT, (req, res) => {
    console.log(`listening on PORT ${PORT}`)
})