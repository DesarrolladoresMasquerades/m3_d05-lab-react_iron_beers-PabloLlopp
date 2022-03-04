import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";


export default function BeerPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response.data)
            setBeers(response.data)})
    }, [])

    

    return (
        <div className="flex">
        <div className=" scroll-div">
            <h2>All Beers</h2>
            {beers.map((beer) => (
                
                <div className="allBeers" key={beer._id}>
                    <h3>{beer.name}</h3>
                    <img src={beer.image_url} alt={beer.name}/>
                    <p>{beer.abv}%</p>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: <i>{beer.contributed_by}</i></p>
                    <Link exact to={`/beers/${beer._id}`}> Show more </Link>
                    <hr></hr>
                </div>
                
            ))}
        </div>
        </div>
    )
}