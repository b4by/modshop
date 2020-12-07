import { useState, useEffect } from 'react';
import Section from '../../components/Section';
import './index.scss';
import { getProducts } from '../../api/api';

const HomePage = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then(res => {
      setProducts(res.data);
    })
  }, [])

  return (
    <div className="homepage">
      <div className="container">
        <div className="homepage__content">
          <Section products={products} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;