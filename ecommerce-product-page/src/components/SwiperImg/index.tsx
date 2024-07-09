import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';


import { Navigation } from 'swiper/modules';

export const SwiperImg = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="swiperMobile">
                <SwiperSlide><img src={"../../../public/images/image-product-1.jpg"} alt={"product1"}/></SwiperSlide>
                <SwiperSlide><img src={"../../../public/images/image-product-2.jpg"} alt={"product1"}/></SwiperSlide>
                <SwiperSlide><img src={"../../../public/images/image-product-3.jpg"} alt={"product1"}/></SwiperSlide>
                <SwiperSlide><img src={"../../../public/images/image-product-4.jpg"} alt={"product1"}/></SwiperSlide>
            </Swiper>
        </>
    );
}