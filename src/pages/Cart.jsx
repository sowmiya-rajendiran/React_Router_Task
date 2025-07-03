import { useState } from "react";
import { useLocation } from "react-router";

function Cart(){
    let location = useLocation();

    // get Data using location.state
    const [cart, setCart] = useState(
        location.state.map(item => ({ ...item, quantity: 1 }))
        );

    let handleRemove = (itemsId) =>{
        setCart(cart.filter((item) => item.id !== itemsId  ));
    }

    // Increase Quantity Function
    let increaseQty = (itemsId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemsId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease Quantity Function
    let decreaseQty = (itemsId) =>{
        setCart(prevCart =>
            prevCart.map(item => 
                item.id === itemsId ? {...item , quantity : Math.max(1, item.quantity - 1)} : item
            )
        )
    }

    const totalCartPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = totalCartPrice * 0.10;
    const finalPrice = totalCartPrice - discount;

    // Display added cart items
    let displayCartList = cart.map((items)=>(
        <div className='bg-white md:p-10 p-5 rounded-[5px]' key={items.id} id={items.id}>
            <div className='text-right'>    
                <img className='md:w-[300px] md:h-[250px] w-[200px] h-[200px] object-contain md:m-0 m-auto'  src={items.image}></img>
            </div>
            <h3 className='mt-[30px] text-[17px] font-semibold lg:text-left text-center'>{items.category}</h3>
            <div className='lg:flex justify-between mt-[15px] items-center'>
                <p className="lg:text-left text-center">Total Price : <b> ₹ {(items.price * items.quantity).toFixed(2)}</b></p>
                <div className="flex items-center justify-center  lg:mt-[0px] mt-[20px]">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                        onClick={()=> decreaseQty(items.id)}
                    >
                        -
                    </button>
                    <p className="font-bold py-2 px-4">{items.quantity}</p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                        onClick={()=> increaseQty(items.id)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="lg:text-right mt-[20px] text-center">
                <button className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer' onClick={()=>handleRemove(items.id)}>Remove </button>
            </div>
        </div>
    ))


    return(
        <>
            <div className="md:flex justify-between items-center">
                <h1 className="md:block hidden text-[18px] font-semibold">Cart Page</h1>
                <div>
                    <h1 className="md:text-right text-center md:text-[18px]  text-[16px] font-semibold md:mt-[0px] mt-[10px]">Total Cart Price : ₹ {totalCartPrice.toFixed(2)}</h1>
                    <h1 className="md:text-right text-center md:text-[18px] text-[16px] font-semibold md:mt-[0px] mt-[10px]">Discount (10 %) : ₹ {discount.toFixed(2)}</h1>
                    <h1 className="md:text-right text-center md:text-[18px] text-[16px] font-semibold md:mt-[0px] mt-[10px]">Final Price: ₹{finalPrice.toFixed(2)}</h1>
                </div>
            </div>
            
            <div className='grid xl:grid-cols-3 md:grid-cols-2 mt-10 gap-[30px] '>
                {displayCartList}
            </div>
        </>
    )
}

export default Cart;