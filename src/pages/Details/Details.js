import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import "./Details.css"
import StarRating from '../../components/starRating';
import { IconName } from "react-icons/fa";



function Details() {
    const routeParams = useParams();
    const [details, setDetails] = useState(null);
    useEffect(() => {
        async function getProductDetails() {
            const detailsResponse = await axios.get(
                `http://localhost:4000/products/${routeParams.id}`
            );
            console.log(detailsResponse.data)
            setDetails(detailsResponse.data)
            // Can use the below code when the backend isn't running
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
function addReview(){
    console.log(" called")
}
    return details ? (
        <div className='Details'>
            <div className='banner'></div>
            <div className='product'>  
                <div className='image1'>
                    <img style={{ width: 80, height: 80}} src={details.mainImage} />
                    <img style={{ width: 80, height: 80}} src={details.mainImage} />
                    <img style={{ width: 80, height:80}} src={details.mainImage} />  
                </div>
                <div className='left'>
                    <img style={{ width: 200, height: 250 }} src={details.mainImage} />
                </div>
                <div className='right'>
                    <h1 className='name'> {details.title} </h1>

                    <div className='rating'>
                        <p>{details.rating}</p>
                        <button onClick={(()=>{addReview()})}>Add Review</button>
                    </div>
                    <p className='price'>€{details.price}</p>

                    <button onClick>Add To Cart</button>
                    <button onClick>Favorite</button>
                </div>
            </div>

            <div className='description'>
                <div className='card'>
                    <div className='sections'>
                        <h3>Description</h3>
                        <h3>Additional Info</h3>
                        <h3>Reviews</h3>
                    </div>
                    <p>{details.description}</p>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading ...</p>
    );
}

export default Details;
