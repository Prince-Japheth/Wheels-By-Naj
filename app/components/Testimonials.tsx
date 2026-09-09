export default function Testimonials() {
  return (
    <>
    <div className="overflow-hidden pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px]">
        <div className="container xl:!max-w-full 2xl:!max-w-[1620px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:items-center xl:items-stretch">
                <div className="text-center rounded-[15px]">
                    <img src="assets/images/girl-with-car.jpg" className="rounded-[15px]" alt="girl-with-car" />
                </div>
                <div
                    className="ltr:xl:pl-[45px] rtl:xl:pr-[45px] ltr:2xl:pl-[110px] rtl:2xl:pr-[110px] 2xl:pt-[45px] relative"
                    data-cues="slideInUp"
                    data-group="testimonialsContent"
                >
                    <div className="flex items-center gap-[8px] mb-[12px] md:mb-[15px]">
                        <div className="flex items-center justify-center gap-[2px] flex-none">
                            <span className="block w-[20px] h-px bg-primary"></span>
                            <span className="block h-[20px] w-px bg-primary"></span>
                            <span className="block h-[30px] w-px bg-primary"></span>
                        </div>
                        <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                            Customer Testimonials & Reviews
                        </h2>
                    </div>
                    <p className="font-medium text-base md:text-lg xl:text-xl xl:max-w-[536px]">
                        Don't just take our word for it. Read what thousands of satisfied customers have to say about their RentQ experience.
                    </p>
                    <div className="md:flex lg:block xl:flex items-center gap-[15px] md:mt-[20px]">
                        <div className="flex items-center">
                            <img src="assets/images/users/user1.jpg" className="w-[50px] rounded-full border-[2px] border-white dark:border-dark ltr:-mr-[20px] rtl:-ml-[20px]" alt="user-image" />
                            <img src="assets/images/users/user2.jpg" className="w-[50px] rounded-full border-[2px] border-white dark:border-dark ltr:-mr-[20px] rtl:-ml-[20px]" alt="user-image" />
                            <img src="assets/images/users/user3.jpg" className="w-[50px] rounded-full border-[2px] border-white dark:border-dark ltr:-mr-[20px] rtl:-ml-[20px]" alt="user-image" />
                            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black text-white text-3xl border-[2px] border-white dark:border-dark">
                                <i className="ri-add-fill"></i>
                            </div>
                        </div>
                        <div className="mt-[15px] md:mt-0 md:mt-[15px] xl:mt-0">
                            <div className="flex items-center gap-[5px] mb-[7px]">
                                <div className="flex items-center leading-none text-primary gap-[2px]">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <span className="block text-black dark:text-white leading-none relative top-px">
                                     10k+ reviews
                                </span>
                            </div>
                            <span className="block">
                                Trusted by millions worldwide
                            </span>
                        </div>
                    </div>
                    <div className="testimonials-swiper-pagination !justify-start mt-[25px] xl:mt-0 xl:!absolute ltr:xl:!right-auto ltr:xl:!left-[45px] ltr:2xl:!left-[110px] rtl:xl:!left-auto rtl:xl:!right-[45px] rtl:2xl:!right-[110px] xl:!top-auto xl:!bottom-0 2xl:!bottom-[45px]"></div>
                </div>
            </div>
        </div>
        <div
            className="container xl:!max-w-full"
            data-cue="slideInUp"
        >
            <div
                className="swiper testimonialsSwiper mt-[25px] lg:mt-[100px] xl:-mt-[273px] xl:-top-[85px] 2xl:-top-[165px] ltr:xl:left-[25px] rtl:xl:right-[25px] ltr:2xl:left-[280px] rtl:2xl:right-[280px]"
                style={{overflow: "unset"}}
            >
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                            <div className="flex items-center leading-none text-primary gap-[2px] mb-[15px] md:mb-[20px]">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <p className="text-black dark:text-white font-medium text-base md:text-lg lg:text-xl">
                                “No hidden fees, no last-minute surprises — just honest pricing. I got a great deal on a 7-day rental and saved more than I expected.”
                            </p>
                            <span className="block md:mt-[25px]">
                                Charles Shriner
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                            <div className="flex items-center leading-none text-primary gap-[2px] mb-[15px] md:mb-[20px]">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="text-black dark:text-white font-medium text-base md:text-lg lg:text-xl">
                                “The car was spotless and in perfect condition. I drove over 400 km without a single issue. RentQ really maintains their vehicles well.”
                            </p>
                            <span className="block md:mt-[25px]">
                                Scott Castillo
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                            <div className="flex items-center leading-none text-primary gap-[2px] mb-[15px] md:mb-[20px]">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <p className="text-black dark:text-white font-medium text-base md:text-lg lg:text-xl">
                                “Their support team was amazing! I needed to extend my rental, and it took just one quick call. Super responsive and friendly staff.”
                            </p>
                            <span className="block md:mt-[25px]">
                                Sandra Crittenden
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                            <div className="flex items-center leading-none text-primary gap-[2px] mb-[15px] md:mb-[20px]">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <p className="text-black dark:text-white font-medium text-base md:text-lg lg:text-xl">
                                “We rented an SUV for a family road trip, and it was perfect. Comfortable ride, easy pickup, and the drop-off took less than five minutes.”
                            </p>
                            <span className="block md:mt-[25px]">
                                Joyce Carr
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                            <div className="flex items-center leading-none text-primary gap-[2px] mb-[15px] md:mb-[20px]">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <p className="text-black dark:text-white font-medium text-base md:text-lg lg:text-xl">
                                “I appreciated the straightforward booking process and the friendly staff. The car was ready on time and the return was hassle-free.”
                            </p>
                            <span className="block md:mt-[25px]">
                                Olivia Davies
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
