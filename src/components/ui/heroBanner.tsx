"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

import Image1 from "@/assets/heroBanner/img1.jpg";
import Image2 from "@/assets/heroBanner/img2.jpg";
import Image3 from "@/assets/heroBanner/img3.jpg";
import Image4 from "@/assets/heroBanner/img4.jpg";

export default function HeroBanner() {
  return (
    <section className="w-full lg:h-[850px] md:h-[750px] h-[750px] relative">
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        loop={true}
        speed={1000}
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-full">
          <div data-swiper-parallax="-30%" className="absolute inset-0">
            <Image 
            src={Image1}
            alt="Acessibilidade digital"
            className="w-full h-full object-cover brightness-70"
            />
          </div>
          <div
            data-swiper-parallax="-200"
            className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-lg"
          >
            <h1 className="text-4xl font-bold mb-2">Caelum</h1>
            <p className="text-lg">Acessibilidade digital para todos.</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <div data-swiper-parallax="-30%" className="absolute inset-0">
            <Image 
                src={Image2}
                alt="Acessibilidade digital"
                className="w-full h-full object-cover brightness-70"
            />
          </div>
          <div
            data-swiper-parallax="-200"
            className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-lg"
          >
            <h1 className="text-4xl font-bold mb-2">Tecnologia Inclusiva</h1>
            <p className="text-lg">Conectando pessoas sem barreiras.</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <div data-swiper-parallax="-30%" className="absolute inset-0">
            <Image 
                src={Image3}
                alt="Acessibilidade digital"
                className="w-full h-full object-cover brightness-70"
            />
          </div>
          <div
            data-swiper-parallax="-200"
            className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-lg"
          >
            <h1 className="text-4xl font-bold mb-2">Design Universal</h1>
            <p className="text-lg">Para todos, sem exceção.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div data-swiper-parallax="-30%" className="absolute inset-0">
            <Image 
                src={Image4}
                alt="Acessibilidade digital"
                className="w-full h-full object-cover brightness-70"
            />
          </div>
          <div
            data-swiper-parallax="-200"
            className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-lg"
          >
            <h1 className="text-4xl font-bold mb-2">Transformando Vidas</h1>
            <p className="text-lg">Tecnologia inclusiva para todos.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
