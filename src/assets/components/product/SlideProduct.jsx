import NextIcon from '@/assets/components/icons/NextIcon';
import PrevIcon from '@/assets/components/icons/PrevIcon';

import imgproducto1 from '@/assets/images/image-product-1.jpg';
import imgproducto2 from '@/assets/images/image-product-2.jpg';
import imgproducto3 from '@/assets/images/image-product-3.jpg';
import imgproducto4 from '@/assets/images/image-product-4.jpg';
import { useState } from 'react';

import imgproduct1 from '@/assets/images/image-product-1-thumbnail.jpg';
import imgproduct2 from '@/assets/images/image-product-2-thumbnail.jpg';
import imgproduct3 from '@/assets/images/image-product-3-thumbnail.jpg';
import imgproduct4 from '@/assets/images/image-product-4-thumbnail.jpg';

const LIST_IMG = [imgproducto1, imgproducto2, imgproducto3, imgproducto4];

export default () => {

    const [index,setIndex] = useState(0);
    

    const handleclickNext = () => {
        index === LIST_IMG.length - 1 ? setIndex(0): setIndex(index + 1);

    };

    const handleclickPrev = () => {
        index === 0 ? setIndex(LIST_IMG.length -1): setIndex(index - 1);

    };
    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className='relative col-span-4 '>
                <img src={LIST_IMG[index]} 
                alt="" className='aspect-[16/12]'/>
                <div className='absolute top-1/2 left-0 -translate-y-1/2 justify-between px-4 flex w-full md:px-4 md:pl-0'>
                    <button className='w-10 h-10 bg-white rounded-full  justify-items-center ml-4 '
                        onClick={handleclickPrev}>
                        <PrevIcon />
                    </button>
                    <button className='w-10 h-10 bg-white rounded-full  justify-items-center ml-4 '
                        onClick={handleclickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgproduct1} alt="" className='hidden md:block'/>
            <img src={imgproduct2} alt="" className='hidden md:block'/>
            <img src={imgproduct3} alt="" className='hidden md:block'/>
            <img src={imgproduct4} alt="" className='hidden md:block'/>
              
        </section>
    );
};