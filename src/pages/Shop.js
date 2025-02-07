
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
//import { Link } from 'react-router-dom';
import '../App.css';





    const products = [
        {
          id: 1,
          name: 'Imou 3MP Smart CCTV Security WiFi Camera for Home, 360° Coverage, AI Human Detection, Siren Alarm, Night Vision 10M, 2-Way Talk, Supports 256GB SD Card, WiFi & Ethernet Connection',
          price: '₹1,449',
          rating: '⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/614nbVpRIaL._SX679_.jpg',
        },
        {
          id: 2,
          name: 'Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (Gray)',
          price: '₹1,999',
          rating: '⭐⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/71+QbcNRlvL._SX522_.jpg',
        },
        {
          id: 3,
          name: 'Boult x Mustang Torq Wireless in Ear Earbuds with 50H Playtime, App Support, Quad Mic ENC, 45ms Low Latency, Breathing LEDs, 13mm Drivers, Touch Control, Made in India IPX5 Ear Buds TWS Bluetooth 5.4',
          price: '₹1,700',
          rating: '⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/719xn0KawFL._SX522_.jpg',
        },
        {
          id: 4,
          name: 'Sounce Shutter Remote Control with Bluetooth Wireless Technology - Create Amazing Photos and Videos Hands-Free - Works with Most Smartphones and Tablets (iOS and Android) (Black)',
          price: '₹169',
          rating: '⭐⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/51x9HSFrFrL._SX522_.jpg',
        },
        {
          id: 5,
          name: 'Hoard 0.5W Led Plug in Smart Night Lamp with Automatic Sensor -(Warm White) Pack of 1(Polycarbonate)',
          price: '₹289',
          rating: '⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/31SlmbdR+eL._SY445_SX342_.jpg',
        },
        {
          id: 6,
          name: 'LIRAMARK Wall Mounted Mobile Phone Charging Stand, Storage Holder, Bedside Fixed Rack, Home Organization and Storage Supplies, Bedroom Accessories, Office Accessories, Bathroom Accessories (Pack of 1)',
          price: '₹99',
          rating: '⭐⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/61mJSikurML._SL1200_.jpg',
        },
        {
          id: 7,
          name: 'CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera | 360° with Pan Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance 10mtr | CP-E25A',
          price: '₹1,199',
          rating: '⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/4189ssgrMFL._SL1000_.jpg',
        },
        {
          id: 8,
          name: 'AGARO Grand Egg Boiler and Poacher,2-in1 Boils 8 Eggs, Poach 4 Eggs, Steamed Vegetables, 3 Boiling Modes, Stainless Steel Body, Transparent Lid, 500 Watts, Silver |14 Ounces(414 ml)' ,
          price: '₹9,99',
          rating: '⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/51WKbFYMpDL._SX300_SY300_QL70_FMwebp_.jpg',
        },
        {
          id: 9,
          name: 'INNOWIN Venture Ergonomic Leatherette Executive High Back Revolving Desk Office Chair (Black)',
          price: '₹7,999',
          rating: '⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/41Lr99tzcIL._SY300_SX300_QL70_FMwebp_.jpg'
        },
        {
          id: 10,
          name: 'CAIDEN Smart Table Clock WiFi Weather Album Function(5 Photos) Gaming Desktop Decoration Study Living Room Bedroom Tech-Gadget DIY Cute GIF Animation Desk Accesories Creative Gift (White)',
          price: '₹1,499',
          rating: '⭐⭐⭐⭐',
          image: 'https://m.media-amazon.com/images/I/61y+LrodXAL._SX679_.jpg',
        },
      ];
      


      const Shop = () => {
        const { addToCart } = useContext(CartContext);
        const [quantities, setQuantities] = useState({}); // Store quantity for each product
    
        // Update selected quantity
        const handleQuantityChange = (productId, newQuantity) => {
            setQuantities((prev) => ({
                ...prev,
                [productId]: newQuantity
            }));
        };
    
        return (
            <div className="shop">
                <h2 className="shop-title">Our Shop</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>Rating: {product.rating}</p>
    
                            {/* Quantity Selector */}
                            <label>Quantity: </label>
                            <select
                                value={quantities[product.id] || 1}
                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
    
                            {/* Add to Cart Button */}
                            <button onClick={() => addToCart({ ...product, quantity: quantities[product.id] || 1 })}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    
    export default Shop;