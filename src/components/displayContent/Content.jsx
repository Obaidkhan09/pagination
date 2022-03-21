import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const StyleCenter = styled.div`
display : flex;
justify-content: center;
align-items: center;
flex-direction : column;
`
const StyleDetails = styled.div`
background-color : white;
box-shadow : 0.5px 0.5px 5px rgb(0,0,0,0.5);
margin-top : 30px;
margin-bottom : 20px;
width : 80%
`

export default function Content() {
    const data = useSelector((state) => state.data.items);
    const loading = useSelector((state)=> state.data.state);
    // const startIndex = ( page - 1 ) * perPage ;
    // const [err, setErr] = useState('');
    // const [loading, setLoading] = useState(false);
    
    // const fetchData = async () => {
    //     try {
    //         setLoading(true);
    //         const temp = await axios.get('/');
    //         setLoading(false);
    //         setData(temp.data);
    //         setTotalPage(temp.data.length / perPage)
    //     } catch (error) {
    //         console.log(error);
    //         setErr(error);
    //     }
    // }
    
    // useEffect(() => {
    //     fetchData();
    // }, [])
    // if (err) {
    //     return <h1>{err}</h1>
    // }
    
    // const selectData = data.slice(startIndex, startIndex + perPage);

    return (
        <div>
            <StyleCenter>
                {loading ? <h2>Loading Data Please Wait..</h2> : data.map((items) => (
                    <StyleDetails key={items.id}>
                        <h2>{items.title}</h2>
                        <p>{items.body}</p>
                    </StyleDetails>
                ))}
            </StyleCenter>
        </div>
    )
}
