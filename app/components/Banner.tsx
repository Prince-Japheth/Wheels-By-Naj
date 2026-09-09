export default function Banner() {
  return (
    <>
    <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
            <div
                className="pt-[60px] md:pt-[80px] 2xl:pt-[100px] ltr:xl:-mr-[30px] rtl:xl:-ml-[30px]"
                data-cues="slideInUp"
                data-group="bannerContent"
            >
                <h1 className="text-[32px] md:text-6xl lg:text-[65px] xl:text-[85px] 2xl:text-[110px] leading-[1.2] md:leading-none mb-[12px] md:mb-[15px]">
                    <span className="text-primary">Rent Smart.</span> Drive Anywhere with RentQ.
                </h1>
                <p className="font-medium text-base md:text-lg xl:text-xl">
                    Affordable, reliable, and hassle-free car rentals in minutes.
                </p>
                <a
                    href="contact.html"
                    className="primary-btn group mt-[5px] md:mt-[10px] xl:mt-[15px]"
                >
                    <span>
                        Start Booking
                    </span>
                    <i className="ri-calendar-event-line"></i>
                </a>
            </div>
            <div
                className="text-center ltr:xl:pl-[75px] rtl:xl:pr-[75px] xl:pb-[75px] 2xl:pb-[25px] relative"
                data-cues="slideInUp"
                data-group="bannerImages"
            >
                <img
                    src="assets/images/banners/banner-bg1.png"
                    className="!hidden md:!inline-block rtl:-scale-x-100"
                    alt="banner-bg-image"
                 />
                <div
                    className="leading-none font-bold text-[100px] 2xl:text-[125px] uppercase absolute top-[2px] left-0 right-0 text-transparent ltr:-ml-[430px] rtl:-mr-[430px] ltr:lg:-ml-[280px] rtl:lg:-mr-[280px] ltr:xl:-ml-[245px] rtl:xl:-mr-[245px] ltr:2xl:-ml-[345px] rtl:2xl:-mr-[345px] hidden md:block"
                    style={{WebkitTextStroke: "1.5px #ffffff"}}
                >
                    Car
                </div>
                <div
                    className="leading-none font-bold text-[100px] 2xl:text-[140px] uppercase absolute top-[95px] 2xl:top-[105px] left-0 right-0 text-transparent ltr:lg:ml-[15px] rtl:lg:mr-[15px] ltr:xl:ml-[33px] rtl:xl:mr-[33px] hidden md:block"
                    style={{WebkitTextStroke: "1.5px #ffffff"}}
                >
                    RENTAL
                </div>
                <ul className="ltr:text-left rtl:text-right font-medium text-white absolute ltr:right-[120px] rtl:left-[120px] top-[215px] xl:top-[235px] 2xl:top-[265px] hidden md:block">
                    <li className="relative ltr:pl-[34px] rtl:pr-[34px] mb-[15px] 2xl:mb-[20px] last:mb-0">
                        <i className="ri-checkbox-circle-line absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 font-normal text-2xl"></i>
                        No Hidden Fees
                    </li>
                    <li className="relative ltr:pl-[34px] rtl:pr-[34px] mb-[15px] 2xl:mb-[20px] last:mb-0">
                        <i className="ri-checkbox-circle-line absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 font-normal text-2xl"></i>
                        Free Cancellation
                    </li>
                    <li className="relative ltr:pl-[34px] rtl:pr-[34px] mb-[15px] 2xl:mb-[20px] last:mb-0">
                        <i className="ri-checkbox-circle-line absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 font-normal text-2xl"></i>
                        24/7 Support
                    </li>
                </ul>
                <div className="banner-images grid items-end md:absolute ltr:right-0 rtl:left-0 bottom-0 ltr:lg:-ml-[60px] rtl:lg:-mr-[60px] ltr:xl:-ml-[160px] rtl:xl:-mr-[160px] ltr:2xl:-ml-[260px] rtl:2xl:-mr-[260px]">
                    <div className="image active col-start-1 row-start-1 opacity-0 transition-all ease-in-out duration-300 scale-75">
                        <img
                            src="assets/images/banners/banner1.png"
                            className="rtl:-scale-x-100"
                            alt="banner-image"
                         />
                    </div>
                    <div className="image col-start-1 row-start-1 opacity-0 transition-all ease-in-out duration-300 scale-75">
                        <img
                            src="assets/images/banners/banner2.png"
                            className="rtl:-scale-x-100"
                            alt="banner-image"
                         />
                    </div>
                    <div className="image col-start-1 row-start-1 opacity-0 transition-all ease-in-out duration-300 scale-75">
                        <img
                            src="assets/images/banners/banner3.png"
                            className="rtl:-scale-x-100"
                            alt="banner-image"
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
