import React from 'react'
import img1 from '../../images/img-4.png';
import img2 from '../../images/img-5.png';
import img3 from '../../images/img-6.png';
import img4 from '../../images/img-6.png';
import img5 from '../../images/img-7.png';
import img6 from '../../images/img-8.png';
import img7 from '../../images/img-9.png';
import img8 from '../../images/img-10.png';
import img9 from '../../images/img-11.png';
import img10 from '../../images/img-12.png';
import img from '../../images/img-2.png';

import { useSelector, useDispatch } from 'react-redux';
import { addcart } from '../Redux/cartslice/cartslice';



const vegproduct = [
    {
        "id": 1,
        "name": "Tomato",
        "price": 10,
        "img": img1,
        "description": "Fresh and juicy tomatoes, perfect for salads and cooking."
    },
    {
        "id": 2,
        "name": "Cabbage",
        "price": 12,
        "img": img2,
        "description": "Crisp and crunchy cabbage for your favorite dishes."
    },
    {
        "id": 3,
        "name": "Carrot",
        "price": 8,
        "img": img3,
        "description": "Sweet and nutritious carrots, great for snacking."
    },
    {
        "id": 5,
        "name": "Spinach",
        "price": 6,
        "img": img5,
        "description": "Healthy spinach leaves for salads and smoothies."
    },
    {
        "id": 6,
        "name": "Potato",
        "price": 5,
        "img": img6,
        "description": "Versatile potatoes for a variety of dishes."
    },
    {
        "id": 7,
        "name": "Onion",
        "price": 7,
        "img": img7,
        "description": "Flavorful onions to enhance your recipes."
    },
    {
        "id": 8,
        "name": "Bell Pepper",
        "price": 9,
        "img": img8,
        "description": "Colorful bell peppers for a vibrant dish."
    },
    {
        "id": 9,
        "name": "Garlic",
        "price": 4,
        "img": img9,
        "description": "Aromatic garlic cloves for delicious seasoning."
    },
    {
        "id": 10,
        "name": "Zucchini",
        "price": 11,
        "img": img10,
        "description": "Fresh zucchini, perfect for grilling or sautéing."
    }
]

const Product = () => {
    const dispatch=useDispatch();
    const selector=useSelector(state=>state.cart);
    const fun = () => {
        console.log("Current cart state:", selector);
    };

    return (
        <section className='py-5'>
            <div className="container">
                <div className='flex  flex-col items-center my-11'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='md:text-5xl font-golos font-bold my-4 text-[1.5rem]'>Our Vegetables</h1>
                    <p>Reader will be distracted by the readable content of a</p>
                </div>

                {/* product */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {vegproduct.map((item) => (
                        <div
                            key={item.id}
                            className="border-2 border-dotted border-black p-4 flex flex-col justify-between items-center h-full"
                        >
                            {/* Image */}
                            <div className="mb-4">
                                <img src={item.img} className="w-full max-h-[150px] object-cover" alt={item.name} />
                            </div>

                            {/* Product Info */}
                            <div className="text-center">
                                <h1 className="text-primary font-bold text-lg">
                                    <span className="text-black">$</span>{item.price}
                                </h1>
                                <h2 className="text-black font-bold text-lg">{item.name}</h2>
                                <p className="text-sm my-3">{item.description}</p>
                            </div>

                            {/* Button */}
                            <button className="secondary-btn mt-auto" onClick={()=>{dispatch(addcart(item)); fun()}}>BUY NOW</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product