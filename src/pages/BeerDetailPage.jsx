import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

export default function BeerDetailPage() {

    const [beer, setBeer] = useState({});
    const {beerId} = useParams();
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => setBeer(response.data))
    }, [beerId])

    console.log(beerId)

    return(
        <div key={beerId} className="flex">
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