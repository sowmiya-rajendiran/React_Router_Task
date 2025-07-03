import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Product(){

    let[list , setList] = useState([]);
    let[cartItems , setCartItems] = useState([]);

    let navigate = useNavigate();

    // Data Fetch
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    // Passing Data Through Navigate
    let handleViewCart = () =>{
        navigate('Cart', {state : cartItems});
    }

    // Handle Add to Cart
    let handleAddToCart =(item) =>{
        if(!cartItems.find(cartItems => cartItems.id === item.id)){
            setCartItems([...cartItems , item]);
        }
    }

    let handleRemoveFromCart = (itemId) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    };

    // Display items function
    let displayList = list.map((lists) => (
        <div className='bg-white md:p-10 p-5 rounded-[5px] md:mt-[0px] mt-[20px]' key={lists.id} id={lists.id}>
            <div className='text-right'>    
                <img className='md:w-[300px] md:h-[250px] w-[200px] h-[200px] object-contain md:m-0 m-auto'  src={lists.image}></img>
            </div>
            <h3 className='mt-[30px] h-[50px] text-[17px] font-semibold overflow-hidden'>{lists.title}</h3>
            <h3 className='mt-[10px]  h-[100px] text-[16px] overflow-hidden text-[#45505f]'><span className="text-[#1f252d] font-semibold">discription :</span> {lists.description}</h3>
            <div className='flex justify-between mt-[25px] items-center'>
                <p>Price : <b> ₹ {lists.price}</b></p>

                {
                    cartItems.find(cartItem => cartItem.id === lists.id) ? (
                        <button
                        className='text-white bg-red-600 py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer'
                        onClick={() => handleRemoveFromCart(lists.id)}
                        >
                        Remove from Cart
                        </button>
                    ) : (
                        <button
                        className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer'
                        onClick={() => handleAddToCart(lists)}
                        >
                        Add to Cart
                        </button>
                    )
                }
                

            </div>
        </div>
    ) ) 

    return(
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-[18px] font-semibold">Product Page</h1>
                <div className="relative">
                    <button className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer'
                        onClick={handleViewCart}
                        >View Cart</button>   
                    <span className="text-[12px] px-[8px] py-[3px] border border-[#6f6fee] bg-[#6f6fee] rounded-full text-white absolute top-[-18px] right-[-18px]">{cartItems.length}</span>
                </div>
                
            </div>
            
            <div className='md:grid xl:grid-cols-3 md:grid-cols-2 mt-10 gap-[30px] '>
                {displayList}
            </div>
        </>
    )
}

export default Product;