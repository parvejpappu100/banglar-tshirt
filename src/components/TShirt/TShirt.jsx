import React from 'react';

const TShirt = ({tshirt}) => {
    const {picture , name , price}  = tshirt;
    return (
        <div className='border border-gray-400 p-2 rounded-lg shadow'>
            <img className='h-96 w-full rounded-md'  src={picture}></img>
            <div className='flex justify-between items-center'>
                <div>
                    <h5 className='text-2xl font-medium my-1'>{name}</h5>
                    <p className='text-xl font-semibold'>Price : <span className='text-orange-300'>${price}</span></p>
                </div>
                <div>
                    <button className='btn btn-outline'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;