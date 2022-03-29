
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-10 rounded-lg'>
            <h2 className='bg-indigo-300 py-4 rounded text-xl font-bold-700'>{name}</h2>
            <p className='mt-3'>
                <span className='text-4xl font-bold'>
                    {price}
                </span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left mt-2'>Benefits: </h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-400 text-white flex  justify-center align-middles w-full rounded p-2 mt-5 hover:text-gray-700 font-bold'> 
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-3'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;