import { Outlet, useNavigate } from "react-router";

function Navbar(){

    let navigate = useNavigate();

    let handleProduct = () =>{
        navigate('/');
    }

    return(
        <>
            <div className="px-[30px] py-[30px] xl:px-[100px] lg:px-[70px] md:px-[40px] bg-white sticky top-0 z-20">
                <div className="flex justify-between items-center">
                    <h2 className="md:text-2xl text-xl font-medium">Shopping Cart </h2>
                    <div>
                        <button className='cursor-pointer mr-5 text-[17px] font-semibold' onClick={handleProduct}>Product</button>
                    </div>
                </div>
            </div>
            <div className="px-[30px] py-[30px] xl:px-[100px] lg:px-[70px] md:px-[40px]">
                <Outlet /> 
            </div>
        </>
    )
}

export default Navbar;