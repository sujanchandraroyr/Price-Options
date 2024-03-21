import axios from "axios";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setPhones] = useState([])
    
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => setPhones(data.data.data) 
    )
    // console.log(phones)
    return (
        <div>
            
            <div>
            <h1 className="text-3xl">Phones: {phones.length}</h1>
            
            </div>
        </div>
    );
};

export default Phones;