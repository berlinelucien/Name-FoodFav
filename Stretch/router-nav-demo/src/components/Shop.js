import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Shop = () => {
    const [items, setItems] = useState([]);
  
    // run fetchItems when the component mount
    useEffect(() => { fetchItems() }, []);
  
    const fetchItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
      console.log(data)
      setItems(data);
    }
  
    return (
      < Container >
        <h3>Shop is here</h3>
        {items.map(item =>
          <div key={item.id}>
            <div>
              <Link to={`/shop/${item.id}`}>
                {item.title}
              </Link>
            </div>
            <Image src={item.image} className="imgStyleItem"></Image>
          </div>
        )}
      </Container >
    )
  }

  export default Shop;

/*  await fetch('https://fakestoreapi.com/products?limit=5')
.then(res => res.json())
.then(json => console.log(json)); */