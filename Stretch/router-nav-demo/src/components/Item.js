import './../App.css';
import { Container, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Item = ({ match }) => {

    const [item, setItem] = useState({});
  
    // run fetchItem when the component mount
    useEffect(() => { fetchItem() }, []);
  
    const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then(res => res.json())
      console.log(data)
      setItem(data);
    }
  
    return (
      < Container >
        <h3>ItemDetail is here</h3>
        <h2>{item.title}</h2>
        <Image src={item.image} className="imgStyleItem"></Image>
        <br></br>
        {item.description}
        <br></br>
        <br></br>
        {item.price}
      </Container >
    )
  }

  export default Item;