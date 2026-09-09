export default function Vehicles() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-black">
        <div
            className="container"
            data-cues="slideInUp"
            data-group="vehiclesContent"
        >
            <div className="text-center mb-[25px]">
                <div className="flex items-center justify-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 !text-white text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Explore Our Premium Fleet
                    </h2>
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block h-[30px] w-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block w-[20px] h-px bg-primary"></span>
                    </div>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl mx-auto lg:max-w-[800px] xl:max-w-[875px] text-[#d9d9d9]">
                    Choose from our wide selection of vehicles, from economical compacts to luxurious SUVs, all maintained to the highest standards.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-[7px] mb-[30px] md:mb-[35px] lg:mb-[40px]">
                <a
                    href="vehicles.html"
                    className="inline-block font-medium bg-primary border border-primary text-white rounded-[5px] py-[6px] md:py-[8px] px-[15px] md:px-[19px]"
                >
                    All Vehicles
                </a>
                <a
                    href="vehicles.html"
                    className="inline-block font-medium border border-[#D9D9D9]/30 text-white rounded-[5px] py-[6px] md:py-[8px] px-[15px] md:px-[19px] hover:bg-primary hover:border-primary"
                >
                    Economy
                </a>
                <a
                    href="vehicles.html"
                    className="inline-block font-medium border border-[#D9D9D9]/30 text-white rounded-[5px] py-[6px] md:py-[8px] px-[15px] md:px-[19px] hover:bg-primary hover:border-primary"
                >
                    Suvs
                </a>
                <a
                    href="vehicles.html"
                    className="inline-block font-medium border border-[#D9D9D9]/30 text-white rounded-[5px] py-[6px] md:py-[8px] px-[15px] md:px-[19px] hover:bg-primary hover:border-primary"
                >
                    Luxury
                </a>
                <a
                    href="vehicles.html"
                    className="inline-block font-medium border border-[#D9D9D9]/30 text-white rounded-[5px] py-[6px] md:py-[8px] px-[15px] md:px-[19px] hover:bg-primary hover:border-primary"
                >
                    Vans
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]">
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle1.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        Toyota Corolla
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Economy Sedan
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $38
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    2 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    AC
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Auto
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle2.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        Honda CR-V
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Compact SUV
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $65
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    4 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    AC
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Auto
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle3.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        BMW 5 Series
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Luxury Sedan
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $129
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    3 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Climate
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Auto
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle4.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        Chrysler Pacifica
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Minivan
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $75
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    7 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Dual AC
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Auto
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle5.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        Hyundai Elantra
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Compact Sedan
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $35
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    2 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    AC
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Auto
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-[15px] bg-[#171E20]">
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px]"
                    >
                        <img
                            src="assets/images/vehicles/vehicle6.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="vehicle-image"
                         />
                    </a>
                    <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                        <div className="flex justify-between gap-[15px]">
                            <div>
                                <h3 className="!text-white text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                    <a
                                        href="vehicle-details.html"
                                        className="hover:text-primary"
                                    >
                                        Jeep Grand Cherokee
                                    </a>
                                </h3>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Full-size SUV
                                </span>
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                    $89
                                </span>
                                <span className="block font-medium text-[#bbbbbb] text-13 md:text-sm">
                                    Per day
                                </span>
                            </div>
                        </div>
                        <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-baby-car-seat"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    7 Seats
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    5 Bags
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-air-conditioner"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Dual AC
                                </span>
                            </div>
                            <div>
                                <div className="leading-none text-white text-[35px] mb-[5px]">
                                    <i className="flaticon-automatic-transmission"></i>
                                </div>
                                <span className="block font-medium text-[#bbbbbb]">
                                    Manual
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                            <a
                                href="vehicle-details.html"
                                className="primary-btn"
                            >
                                <span>
                                    Rent Now
                                </span>
                                <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                            </a>
                            <a
                                href="vehicle-details.html"
                                className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-[30px] md:mt-[35px] lg:mt-[40px]">
                <a
                    href="vehicles.html"
                    className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                >
                    Explore All Vehicles
                </a>
            </div>
        </div>
    </div>
    </>
  );
}
