import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

export default function BeerRandomPage() {

    const [beer, setBeer] = useState({});

    function getRandomBeer(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => setBeer(response.data))
    }

    useEffect(getRandomBeer, [])

    return(
        <div key={beer._id} className="flex">
        <div className="scroll-div beer">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            
            <Link exact to='/beers/'> Go back </Link>
            </div>
        </div>
    )
}