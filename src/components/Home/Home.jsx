import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className=' gap-3 grid md:grid-cols-4 lg:grid-cols-5'>
           <div className='md:col-span-3 lg:col-span-4 row-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5  my-20'>
                {
                     tshirts.map(tshirt => <TShirt
                     key={tshirt._id}
                     tshirt = {tshirt}
                     ></TShirt>)
                 }
           </div>
           <div className=' sticky top-0 bg-orange-200 pt-5 p-5'>
                <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;