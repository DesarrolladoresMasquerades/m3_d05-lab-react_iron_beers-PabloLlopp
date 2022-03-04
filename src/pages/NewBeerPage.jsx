import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {

  const [addBeer, setAddBeer] = useState({})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, addBeer)
    .then((newBeer)=>navigate(`/`))
  };

  function setBeer(event) {
    event.preventDefault();
    const inputName = event.target.name;
    const value = event.target.value;
    setAddBeer(addBeer=>{return {...addBeer, [inputName]: value}})
  }


  return (
    <div className="AddBeer flex">
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="title"
          onChange={setBeer}
          value={addBeer.title}
        />
        
        <button type="submit">Create Beer</button>
        
      </form>
    </div>
  );
}

export default AddApartmentPage;