import { useState } from "react";
import Content from "../displayContent/Content";
import Pagination from '@mui/material/Pagination';
import styled from "@emotion/styled";

const StyleBody = styled.div`
align-item : center;
margin-top : 20px;
margin-bottom : 30px;
`

export default function Home() {
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(5);
  let [data, setData] = useState([]);
  console.log(data.length)
  let [totalPage, setTotalPage ] = useState();
  console.log(totalPage);
  return (
    <div>
      <Content page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} data={data} setData={setData} setTotalPage={setTotalPage} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyleBody>
          <Pagination count={totalPage} shape="rounded" />
        </StyleBody>
      </div>
    </div>
  )
}