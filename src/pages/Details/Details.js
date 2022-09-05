import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from "axios"
import "./Details.css"

function Details() {
    const routeParams = useParams();
    const [details, setDetails] = useState(null);

useEffect(() => {
    async function getProductDetails(){
        const detailsResponse = await axios.get(
            `http://localhost:4000/products/${routeParams.id}`
        );
        console.log(detailsResponse.data)
        setDetails(detailsResponse.data)
        // setDetails({
        //     title: "name",
        //     price: 20,
        //     description: "hello",
        //     mainImage: "",
        //     rating: 4
        // })
        }
    getProductDetails();
}, [routeParams.id]);

return details ? (
    <div>
        <h1> {details.title} </h1>
        <p> {details.price}</p>
        <p> {details.description}</p>
        <img style={{width:200}} src={details.mainImage}/>
        <p> {details.rating}</p>
        </div>
    ) : (
        <p>Loading ...</p>
    );
    }

export default Details;
