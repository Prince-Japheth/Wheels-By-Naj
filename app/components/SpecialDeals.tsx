export default function SpecialDeals() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div
            className="container lg:!max-w-full 2xl:!max-w-[1620px]"
            data-cues="slideInUp"
            data-group="specialDealsPromotionsContent"
        >
            <div className="text-center mb-[30px] md:mb-[35px] lg:mb-[40px]">
                <div className="flex items-center justify-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Special Deals & Promotions
                    </h2>
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block h-[30px] w-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block w-[20px] h-px bg-primary"></span>
                    </div>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl mx-auto lg:max-w-[740px] xl:max-w-[815px]">
                    Don't miss out on these exclusive offers designed to make your journey more affordable and enjoyable. Book now before they're gone!
                </p>
            </div>
            <div className="swiper vehiclesSwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="bg-[#E6F4F5] dark:bg-black rounded-[15px] grid grid-cols-1 md:grid-cols-3">
                            <div
                                className="md:col-span-1 h-[250px] md:h-full relative bg-cover bg-center bg-no-repeat rounded-[15px] ltr:md:-mr-[25px] rtl:md:-ml-[25px]"
                                style={{backgroundImage: "url(assets/images/vehicles/vehicle7.jpg)"}}
                            >
                                <span className="inline-block font-medium uppercase text-13 md:text-sm bg-primary text-white rounded-[30px] py-[2px] px-[10px] absolute top-[20px] ltr:right-[20px] rtl:left-[20px]">
                                    25% OFF
                                </span>
                                <a
                                    href="vehicle-details.html"
                                    className="primary-btn group absolute bottom-[20px] ltr:left-[20px] rtl:right-[20px]"
                                >
                                    <span>
                                        Rent Now
                                    </span>
                                    <i className="ri-car-line"></i>
                                </a>
                            </div>
                            <div className="md:col-span-2 p-[20px] md:p-[25px] lg:p-[30px] ltr:md:ml-[25px] rtl:md:mr-[25px]">
                                <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[10px] lg:mb-[13px]">
                                    <a href="vehicle-details.html" className="hover:text-primary">
                                        Weekend Special
                                    </a>
                                </h3>
                                <p>
                                    Book any car from Friday to Sunday and enjoy 25% off your total rental. Perfect for your weekend getaway!
                                </p>
                                <ul className="md:mt-[20px] ltr:pl-[10px] rtl:pr-[10px]">
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Available on all vehicle categories
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Free additional driver
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        No mileage limits
                                    </li>
                                </ul>
                                <div
                                    className="countdown flex items-center flex-wrap justify-between text-center rounded-[10px] bg-[#CCE9EB] dark:bg-dark p-[20px] my-[15px] md:my-[20px] lg:my-[25px]"
                                    data-countdown="2027-01-01T00:00:00"
                                >
                                    <div>
                                        <span
                                            data-days
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Days
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-hours
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Hours
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-minutes
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Minutes
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-seconds
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Seconds
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-[15px]">
                                    <span className="inline-block text-base md:text-lg lg:text-xl leading-none text-body/50 dark:text-white/50 line-through">
                                        $59/day
                                    </span>
                                    <span className="inline-block font-bold text-base md:text-lg lg:text-xl leading-none text-primary">
                                        $44/day
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-[#FFF1F1] dark:bg-black rounded-[15px] grid grid-cols-1 md:grid-cols-3">
                            <div
                                className="md:col-span-1 h-[250px] md:h-full relative bg-cover bg-center bg-no-repeat rounded-[15px] ltr:md:-mr-[25px] rtl:md:-ml-[25px]"
                                style={{backgroundImage: "url(assets/images/vehicles/vehicle8.jpg)"}}
                            >
                                <span className="inline-block font-medium uppercase text-13 md:text-sm bg-primary text-white rounded-[30px] py-[2px] px-[10px] absolute top-[20px] ltr:right-[20px] rtl:left-[20px]">
                                    20% OFF
                                </span>
                                <a
                                    href="vehicle-details.html"
                                    className="primary-btn group absolute bottom-[20px] ltr:left-[20px] rtl:right-[20px]"
                                >
                                    <span>
                                        Rent Now
                                    </span>
                                    <i className="ri-car-line"></i>
                                </a>
                            </div>
                            <div className="md:col-span-2 p-[20px] md:p-[25px] lg:p-[30px] ltr:md:ml-[25px] rtl:md:mr-[25px]">
                                <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[10px] lg:mb-[13px]">
                                    <a href="vehicle-details.html" className="hover:text-primary">
                                        Monthly Saver
                                    </a>
                                </h3>
                                <p>
                                    Rent any vehicle for a month or longer and save big with our exclusive long-term rental discount.
                                </p>
                                <ul className="md:mt-[20px] ltr:pl-[10px] rtl:pr-[10px]">
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        First month 20% off
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Free insurance upgrade
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Complimentary delivery
                                    </li>
                                </ul>
                                <div
                                    className="countdown flex items-center flex-wrap justify-between text-center rounded-[10px] bg-[#FFD7D9] dark:bg-dark p-[20px] my-[15px] md:my-[20px] lg:my-[25px]"
                                    data-countdown="2028-01-01T00:00:00"
                                >
                                    <div>
                                        <span
                                            data-days
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Days
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-hours
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Hours
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-minutes
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Minutes
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-seconds
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Seconds
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-[15px]">
                                    <span className="inline-block text-base md:text-lg lg:text-xl leading-none text-body/50 dark:text-white/50 line-through">
                                        $1,200/month
                                    </span>
                                    <span className="inline-block font-bold text-base md:text-lg lg:text-xl leading-none text-primary">
                                        $960/month
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-[#E9F0E5]/40 dark:bg-black rounded-[15px] grid grid-cols-1 md:grid-cols-3">
                            <div
                                className="md:col-span-1 h-[250px] md:h-full relative bg-cover bg-center bg-no-repeat rounded-[15px] ltr:md:-mr-[25px] rtl:md:-ml-[25px]"
                                style={{backgroundImage: "url(assets/images/vehicles/vehicle9.jpg)"}}
                            >
                                <span className="inline-block font-medium uppercase text-13 md:text-sm bg-primary text-white rounded-[30px] py-[2px] px-[10px] absolute top-[20px] ltr:right-[20px] rtl:left-[20px]">
                                    15% OFF
                                </span>
                                <a
                                    href="vehicle-details.html"
                                    className="primary-btn group absolute bottom-[20px] ltr:left-[20px] rtl:right-[20px]"
                                >
                                    <span>
                                        Rent Now
                                    </span>
                                    <i className="ri-car-line"></i>
                                </a>
                            </div>
                            <div className="md:col-span-2 p-[20px] md:p-[25px] lg:p-[30px] ltr:md:ml-[25px] rtl:md:mr-[25px]">
                                <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[10px] lg:mb-[13px]">
                                    <a href="vehicle-details.html" className="hover:text-primary">
                                        Yearly Saver
                                    </a>
                                </h3>
                                <p>
                                    Enjoy 15% off when you book a vehicle for a full year. Ideal for business travelers and long-term stays.
                                </p>
                                <ul className="md:mt-[20px] ltr:pl-[10px] rtl:pr-[10px]">
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Available on all vehicle categories
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        Free additional driver
                                    </li>
                                    <li className="relative ltr:pl-[15px] rtl:pr-[15px] mb-[5px] last:mb-0">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></span>
                                        No mileage limits
                                    </li>
                                </ul>
                                <div
                                    className="countdown flex items-center flex-wrap justify-between text-center rounded-[10px] bg-[#E9F0E5] dark:bg-dark p-[20px] my-[15px] md:my-[20px] lg:my-[25px]"
                                    data-countdown="2027-02-01T00:00:00"
                                >
                                    <div>
                                        <span
                                            data-days
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Days
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-hours
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Hours
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-minutes
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Minutes
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            data-seconds
                                            className="font-bold text-xl leading-none mb-[5px] block text-black dark:text-white"
                                        >
                                            00
                                        </span>
                                        <span className="block text-13 md:text-sm">
                                            Seconds
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-[15px]">
                                    <span className="inline-block text-base md:text-lg lg:text-xl leading-none text-body/50 dark:text-white/50 line-through">
                                        $2999/year
                                    </span>
                                    <span className="inline-block font-bold text-base md:text-lg lg:text-xl leading-none text-primary">
                                        $2454/year
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vehicles-swiper-pagination mt-[30px] md:mt-[35px] lg:mt-[40px]"></div>
            </div>
        </div>
    </div>
    </>
  );
}
