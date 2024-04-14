import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
    return (
        <div className='mt-5'>
            
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kVZz697/imresizer-1713126925956.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div data-aos="fade-up" data-aos-duration="2000"  className="max-w-md">
      <h1  className="mb-5 text-5xl font-bold">
Discover your place to live</h1>
      <p className="mb-5">We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nr4CVJc/imresizer-1713127069590.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div  className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Find Your Dream Penthouse</h1>
      <p className="mb-5">Discover unparalleled luxury living at Find Your Dream Penthouse, Luxuria Estates. With breathtaking views and opulent design, each residence offers the pinnacle of sophistication and comfort. Elevate your lifestyle to new heights with personalized services and world-class amenities.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/z5mmgM4/imresizer-1713126875225.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Find Your Dream Villas</h1>
      <p className="mb-5">Each villa offers timeless elegance and modern comforts, creating a sanctuary of sophistication. Elevate your lifestyle with world-class amenities and personalized services. Your dream home awaits.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;