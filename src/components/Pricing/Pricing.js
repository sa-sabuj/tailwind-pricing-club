import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const priceOptions = [
        {id: 1, name: 'Free', price: 0, benefits: [
            'lifetime access',
            'unlimited resources', 
            'localized deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'limited access',
            'limited resources', 
            'limited deals'
        ]},
        {id: 3, name: 'Premium', price: 19.99, benefits: [
            'lifetime premime access',
            'most unlimited resources', 
            'awsome localized deals'
        ]}
    ]
    return (
        <div className='bg-indigo-200 p-6 mt-8'>
            <h1 className='text-6xl font-mono text-gray'>Best deals of the town</h1>
            <p className='p-6 mt-8 font-mono text-grays'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus atque quo corporis laudantium doloribus velit aperiam inventore! Ut odit cum quibusdam iure nam! Dolores magni quasi laborum in ratione at dolorem, sint earum maiores sed ex consectetur dolor facere laudantium ullam nisi esse deserunt dolore aliquid. Pariatur, consequatur illum.</p>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    priceOptions.map(option => <PricingOption 
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;