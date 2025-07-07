import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ProductCard({ product }) {
    const [color, setColor] = useState('yellow');

    const colorLabels = {
        yellow: 'Yellow Gold',
        rose: 'Rose Gold',
        white: 'White Gold',
    };

    const colorHex = {
        yellow: '#E6CA97',
        rose: '#E1A4A9',
        white: '#D9D9D9',
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color="#FFC107" />);
        }

        if (hasHalf) {
            stars.push(<FaStarHalfAlt key="half" color="#FFC107" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} color="#FFC107" />);
        }

        return stars;
    };

    return (
        <div style={{
            borderRadius: '12px',
            padding: '1rem',
            width: '240px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
            <img
                src={product.images[color]}
                alt={product.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px' }}
            />

            <h3 className="montserrat-medium" style={{ fontSize: '15px', margin: '0.8rem 0 0.4rem' }}>
                {product.name}
            </h3>

            <p className="montserrat-regular" style={{ fontSize: '14px', margin: 0 }}>
                <strong>${product.price} USD</strong>
            </p>

            {/* Color Picker */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.8rem' }}>
                {['yellow', 'white', 'rose'].map((c) => (
                    <button
                        key={c}
                        onClick={() => setColor(c)}
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: colorHex[c],
                            border: color === c ? '2px solid black' : '1px solid #ccc',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>

            {/* Selected Color Label */}
            <p className="avenir-book" style={{ fontSize: '14px', margin: '0.3rem 0 0.7rem' }}>
                {colorLabels[color]}
            </p>

            {/* Stars + Score */}
            <p className="avenir-book" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', margin: 0 }}>
                {renderStars(product.popularityScoreOutOf5)}
                <span>{product.popularityScoreOutOf5}/5</span>
            </p>
        </div>
    );
}

export default ProductCard;
