export default function VehiclesContent() {
  return (
        <main className="flex-1">
            
            {/* Page Banner */}
            <div
                className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-cover bg-center bg-no-repeat relative z-[1] text-center ltr:lg:text-left rtl:lg:text-right"
                style={{backgroundImage: "url('/assets/images/bg-images/bg-image9.jpg)"}}
            >
                <div className="container">
                    <h2 className="mb-[8px] text-[34px] md:text-[44px] lg:text-[54px] xl:text-[64px] leading-[1.2] xl:max-w-[985px]">
                        Vehicles
                    </h2>
                    <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-[10px] md:gap-[15px]">
                        <li>
                            <a
                                href="/"
                                className="font-medium text-primary hover:underline"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <span className="block w-px h-[15px] bg-black dark:bg-white ltr:rotate-[15deg] rtl:rotate-[-15deg] mt-px"></span>
                        </li>
                        <li>
                            Vehicles
                        </li>
                    </ul>
                    <div className="absolute bottom-0 ltr:right-0 rtl:left-0 bg-white dark:bg-dark ltr:rounded-tl-[15px] rtl:rounded-tr-[15px] py-[25px] px-[50px] hidden lg:block">
                        <img
                            src="/assets/images/car.gif"
                            className="ltr:-scale-x-100"
                            data-cue="slideInUp"
                            alt="car"
                         />
                    </div>
                </div>
                <div className="absolute inset-0 -z-[1] bg-dark/90 hidden dark:block"></div>
            </div>
            {/* End Page Banner */}

            {/* Vehicles */}
            <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
                <div
                    className="container"
                    data-cues="slideInUp"
                    data-group="vehiclesContent"
                >
                    <div className="text-center xl:max-w-[1090px] mx-auto mb-[30px] md:mb-[35px] lg:mb-[40px]">
                        <span className="block font-bold text-primary mb-[10px]">
                            Our Luxury Vehicles
                        </span>
                        <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                            Discover our meticulously maintained fleet of premium vehicles, each designed to provide the ultimate comfort and style for your journey.
                        </h2>
                    </div>
                    <div className="bg-[#f4f4f4] dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] mb-[25px]">
                        <form action="vehicles.html#" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] sm:gap-[15px]">
                            <div>
                                <label htmlFor="vehicle-type" className="block mb-[6px]">
                                    Vehicle Type
                                </label>
                                <select name="vehicle-type" id="vehicle-type" className="form-select !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10">
                                    <option value="0" >
                                        All Vehicles
                                    </option>
                                    <option value="1">
                                        Sedan
                                    </option>
                                    <option value="2">
                                        SUV
                                    </option>
                                    <option value="3">
                                        Truck
                                    </option>
                                    <option value="4">
                                        Van
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price-range" className="block mb-[6px]">
                                    Price Range
                                </label>
                                <select name="price-range" id="price-range" className="form-select !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10">
                                    <option value="0" >
                                        Any Price
                                    </option>
                                    <option value="1">
                                        $10,000 - $20,000
                                    </option>
                                    <option value="2">
                                        $20,000 - $30,000
                                    </option>
                                    <option value="3">
                                        $30,000 - $40,000
                                    </option>
                                    <option value="4">
                                        $40,000 - $50,000
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="passenger-capacity" className="block mb-[6px]">
                                    Passenger Capacity
                                </label>
                                <select name="passenger-capacity" id="passenger-capacity" className="form-select !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10">
                                    <option value="0" >
                                        Any Capacity
                                    </option>
                                    <option value="1">
                                        2 Passengers
                                    </option>
                                    <option value="2">
                                        4 Passengers
                                    </option>
                                    <option value="3">
                                        6 Passengers
                                    </option>
                                    <option value="4">
                                        8 Passengers
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sort-by" className="block mb-[6px]">
                                    Sort By
                                </label>
                                <select name="sort-by" id="sort-by" className="form-select !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10">
                                    <option value="0" >
                                        Default
                                    </option>
                                    <option value="1">
                                        Price Low to High
                                    </option>
                                    <option value="2">
                                        Price High to Low
                                    </option>
                                    <option value="3">
                                        Newest
                                    </option>
                                    <option value="4">
                                        Oldest
                                    </option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]">
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle1.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                Toyota Corolla
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Economy Sedan
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $38
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            2 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            AC
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Auto
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle2.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                Honda CR-V
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Compact SUV
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $65
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            4 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            AC
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Auto
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle3.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                BMW 5 Series
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Luxury Sedan
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $129
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            3 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Climate
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Auto
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle4.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                Chrysler Pacifica
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Minivan
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $75
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            7 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Dual AC
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Auto
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle5.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                Hyundai Elantra
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Compact Sedan
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $35
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            2 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            AC
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Auto
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-[15px] border border-[#F5E3E7] dark:border-white/10">
                            <a
                                href="/vehicles/1"
                                className="block overflow-hidden rounded-[15px]"
                            >
                                <img
                                    src="/assets/images/vehicles/vehicle6.jpg"
                                    className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                    alt="vehicle-image"
                                 />
                            </a>
                            <div className="p-[20px] md:p-[25px] lg:p-[30px]">
                                <div className="flex justify-between gap-[15px]">
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[5px]">
                                            <a
                                                href="/vehicles/1"
                                                className="hover:text-primary"
                                            >
                                                Jeep Grand Cherokee
                                            </a>
                                        </h3>
                                        <span className="block font-medium">
                                            Full-size SUV
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="block font-bold text-primary mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            $89
                                        </span>
                                        <span className="block font-medium text-13 md:text-sm">
                                            Per day
                                        </span>
                                    </div>
                                </div>
                                <div className="my-[15px] md:my-[20px] lg:my-[25px] flex flex-wrap justify-between gap-[15px] text-center">
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-baby-car-seat"></i>
                                        </div>
                                        <span className="block font-medium">
                                            7 Seats
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-briefcase"></i>
                                        </div>
                                        <span className="block font-medium">
                                            5 Bags
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-air-conditioner"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Dual AC
                                        </span>
                                    </div>
                                    <div>
                                        <div className="leading-none text-[35px] mb-[5px]">
                                            <i className="flaticon-automatic-transmission"></i>
                                        </div>
                                        <span className="block font-medium">
                                            Manual
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px]">
                                    <a
                                        href="/vehicles/1"
                                        className="primary-btn"
                                    >
                                        <span>
                                            Rent Now
                                        </span>
                                        <i className="ri-car-line !bg-white !text-black dark:!bg-dark dark:!text-white"></i>
                                    </a>
                                    <a
                                        href="/vehicles/1"
                                        className="inline-block text-15 md:text-base lg:text-lg xl:text-xl font-medium hover:text-primary"
                                    >
                                        See Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="text-center mt-[30px] md:mt-[35px] lg:mt-[40px]">
                        <ul className="flex items-center flex-wrap justify-center gap-[5px] md:gap-[10px]">
                            <li>
                                <a href="javascript:void(0);" className="w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] rounded-[5px] text-xl text-black dark:text-white bg-[#f4f4f4] dark:bg-black flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    <i className="ri-arrow-left-line"></i>
                                </a>
                            </li>
                            <li>
                                <span className="font-medium w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] rounded-[5px] text-base md:text-lg bg-primary text-white flex items-center justify-center">
                                    1
                                </span>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="font-medium w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] rounded-[5px] text-base md:text-lg text-black dark:text-white bg-[#f4f4f4] dark:bg-black flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="font-medium w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] rounded-[5px] text-base md:text-lg text-black dark:text-white bg-[#f4f4f4] dark:bg-black flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    3
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px] rounded-[5px] text-xl text-black dark:text-white bg-[#f4f4f4] dark:bg-black flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    <i className="ri-arrow-right-line"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End Vehicles */}
            
            {/* Our Maintenance Standards */}
            <div className="pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px]">
                <div
                    className="container"
                    data-cues="slideInUp"
                    data-group="maintenanceStandardsContent"
                >
                    <div className="text-center mb-[30px] md:mb-[35px] lg:mb-[40px]">
                        <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                            Our Maintenance Standards
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[25px]">
                        <div className="group text-center z-[1] relative p-[20px] md:p-[25px] lg:p-[30px] !pt-0">
                            <div className="absolute inset-0 -z-[1] border border-[#F5E3E7] dark:border-white/10 rounded-[10px] mt-[50px]"></div>
                            <div className="flex items-center justify-center text-5xl rounded-full bg-[#FFF1F1] dark:bg-black w-[100px] h-[100px] pt-[5px] transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white mb-[15px] md:mb-[20px] mx-auto">
                                <i className="flaticon-safety"></i>
                            </div>
                            <h3 className="mb-[10px] md:mb-[12px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                Safety First
                            </h3>
                            <p>
                                All vehicles undergo rigorous safety inspections and maintenance checks every 3,000 miles.
                            </p>
                        </div>
                        <div className="group text-center z-[1] relative p-[20px] md:p-[25px] lg:p-[30px] !pt-0">
                            <div className="absolute inset-0 -z-[1] border border-[#F5E3E7] dark:border-white/10 rounded-[10px] mt-[50px]"></div>
                            <div className="flex items-center justify-center text-5xl rounded-full bg-[#FFF1F1] dark:bg-black w-[100px] h-[100px] pt-[5px] transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white mb-[15px] md:mb-[20px] mx-auto">
                                <i className="flaticon-car-service"></i>
                            </div>
                            <h3 className="mb-[10px] md:mb-[12px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                Deep Cleaning
                            </h3>
                            <p>
                                Professional cleaning and sanitization after every trip using hospital-grade disinfectants.
                            </p>
                        </div>
                        <div className="group text-center z-[1] relative p-[20px] md:p-[25px] lg:p-[30px] !pt-0">
                            <div className="absolute inset-0 -z-[1] border border-[#F5E3E7] dark:border-white/10 rounded-[10px] mt-[50px]"></div>
                            <div className="flex items-center justify-center text-5xl rounded-full bg-[#FFF1F1] dark:bg-black w-[100px] h-[100px] pt-[5px] transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white mb-[15px] md:mb-[20px] mx-auto">
                                <i className="flaticon-car"></i>
                            </div>
                            <h3 className="mb-[10px] md:mb-[12px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                Regular Servicing
                            </h3>
                            <p>
                                Scheduled maintenance with certified technicians using genuine parts and fluids.
                            </p>
                        </div>
                        <div className="group text-center z-[1] relative p-[20px] md:p-[25px] lg:p-[30px] !pt-0">
                            <div className="absolute inset-0 -z-[1] border border-[#F5E3E7] dark:border-white/10 rounded-[10px] mt-[50px]"></div>
                            <div className="flex items-center justify-center text-5xl rounded-full bg-[#FFF1F1] dark:bg-black w-[100px] h-[100px] pt-[5px] transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white mb-[15px] md:mb-[20px] mx-auto">
                                <i className="flaticon-quality-assurance"></i>
                            </div>
                            <h3 className="mb-[10px] md:mb-[12px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                Quality Assurance
                            </h3>
                            <p>
                                150-point inspection checklist for every vehicle before it's cleared for service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End How Our Maintenance Standards */}
            
            {/* Download Our App */}
            <div className="py-[30px] md:py-[40px] lg:py-[50px] bg-primary text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] md:gap-[20px] lg:gap-[25px]">
                        <div className="xl:max-w-[535px]">
                            <p>
                                RentQ is a premium car rental service offering professional chauffeurs, reliable vehicles, and exceptional comfort for every journey.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center lg:justify-end gap-[15px]">
                            <h3 className="!text-white mb-0 text-base md:text-lg lg:text-xl leading-[1.2]">
                                Download Our App
                            </h3>
                            <div className="flex flex-wrap items-center gap-[10px]">
                                <a
                                    href="/vehicles"
                                    target="_blank"
                                    className="inline-block relative border border-white/30 bg-[#171E20] rounded-[5px] py-[10px] ltr:pr-[18px] rtl:pl-[18px] ltr:pl-[57px] rtl:pr-[57px] hover:border-white"
                                >
                                    <i className="ri-apple-fill text-white absolute top-1/2 -translate-y-1/2 ltr:left-[12px] rtl:right-[12px] text-4xl leading-none -mt-px"></i>
                                    <span className="block text-[#d9d9d9] text-13 md:text-sm leading-none mb-[3px]">
                                        Download on the
                                    </span>
                                    <span className="block font-bold text-white leading-none">
                                        App Store
                                    </span>
                                </a>
                                <a
                                    href="/vehicles"
                                    target="_blank"
                                    className="inline-block relative border border-white/30 bg-[#171E20] rounded-[5px] py-[10px] ltr:pr-[18px] rtl:pl-[18px] ltr:pl-[57px] rtl:pr-[57px] hover:border-white"
                                >
                                    <i className="ri-google-play-fill text-white absolute top-1/2 -translate-y-1/2 ltr:left-[12px] rtl:right-[12px] text-4xl leading-none -mt-px"></i>
                                    <span className="block text-[#d9d9d9] text-13 md:text-sm leading-none mb-[3px]">
                                        Get it on
                                    </span>
                                    <span className="block font-bold text-white leading-none">
                                        Google Play
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Download Our App */}
            
        </main>
  );
}
