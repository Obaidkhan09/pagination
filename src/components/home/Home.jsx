import Content from "../displayContent/Content";
import Pagination from '@mui/material/Pagination';
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getContent, handlePage } from "../../features/contentSlice";
import { useEffect } from "react";

const StyleBody = styled.div`
align-item : center;
margin-top : 20px;
margin-bottom : 30px;
`

export default function Home() {

  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.data.totalPage)
  const currentPage = useSelector((state) => state.data.currentPage);
  const completeData = useSelector((state) => state.data);
  const handleChange = (event,value) => {
    // dispatch(handlePage(value))
    // console.log(value);
    dispatch(getContent(value ? value : 1));
    // console.log('here', completeData)
  }
  
  return (
    <div>
      <Content/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyleBody>
          <Pagination count={totalPage} page={currentPage} onChange={handleChange} shape="rounded" />
        </StyleBody>
      </div>
    </div>
  )
}