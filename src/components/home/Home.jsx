import Content from "../displayContent/Content";
import Pagination from '@mui/material/Pagination';
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/contentSlice";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyleBody = styled.div`
align-item : center;
margin-top : 20px;
margin-bottom : 30px;
`

export default function Home() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const handleChange = (event, value) => {
    // dispatch(handlePage(value))
    // console.log(value);
    const prop = {
      current: value ? value : 1,
      items: data.perPage,
    }
    console.log(prop)
    dispatch(getContent(prop));
    // console.log('here', completeData)
  }
  const handleRadioChange = (event) => {
    const prop = {
      current : data.currentPage,
      items : event.target.value
    }
    dispatch(getContent(prop));
  }
  return (
    <div>
      <Content />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyleBody>
          <Pagination count={data.totalPage} page={data.currentPage} onChange={handleChange} shape="rounded" />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Choose Items Per Page</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadioChange}
              value={data.perPage}
            >
              <FormControlLabel value={5} control={<Radio />} label="5" />
              <FormControlLabel value={10} control={<Radio />} label="10" />
              <FormControlLabel value={15} control={<Radio />} label="15" />
            </RadioGroup>
          </FormControl>
        </StyleBody>
      </div>
    </div>
  )
}