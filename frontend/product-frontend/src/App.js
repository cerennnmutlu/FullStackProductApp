import React, { useEffect, useState, useRef } from 'react';
import { fetchProducts } from './services/api';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const arrowStyle = (side) => ({
    position: 'absolute',
    top: '50%',
    [side]: '12px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    fontWeight: '300',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
    lineHeight: 1
  });

  return (
    <div style={{ position: 'relative', padding: '2rem' }}>
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'Avenir, sans-serif',
        fontWeight: 400,
        fontSize: '45px',
        marginBottom: '2rem'
      }}>
        Product List
      </h1>


      {/* Sol ok */}
      <button onClick={scrollLeft} style={arrowStyle('left')}>
        &#10094;
      </button>

      {/* Sağ ok */}
      <button onClick={scrollRight} style={arrowStyle('right')}>
        &#10095;
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        style={{
          display: 'flex',
          gap: '2rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          scrollSnapType: 'x mandatory',
        }}
      >
        {products.map((product, idx) => (
          <div key={idx} style={{ scrollSnapAlign: 'start' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
