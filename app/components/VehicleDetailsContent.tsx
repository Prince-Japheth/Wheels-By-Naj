export default function VehicleDetailsContent() {
  return (
        <main className="flex-1">
            
            {/* Page Banner */}
            <div
                className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-cover bg-center bg-no-repeat relative z-[1] text-center ltr:lg:text-left rtl:lg:text-right"
                style={{backgroundImage: "url('/assets/images/bg-images/bg-image9.jpg)"}}
            >
                <div className="container">
                    <h2 className="mb-[8px] text-[34px] md:text-[44px] lg:text-[54px] xl:text-[64px] leading-[1.2] xl:max-w-[985px]">
                        Mercedes-Benz
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
                            <a
                                href="/vehicles"
                                className="hover:text-primary"
                            >
                                Vehicles
                            </a>
                        </li>
                        <li>
                            <span className="block w-px h-[15px] bg-black dark:bg-white ltr:rotate-[15deg] rtl:rotate-[-15deg] mt-px"></span>
                        </li>
                        <li>
                            Vehicle Details
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

            {/* Vehicle Details */}
            <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] xl:gap-[50px]">
                        <div className="lg:col-span-2">
                            <img src="/assets/images/vehicles/vehicle-details1.jpg" className="rounded-[15px]" alt="vehicle-details-image" />
                            <div className="md:flex justify-between gap-[15px] my-[20px] md:my-[25px] lg:my-[30px]">
                                <div className="mb-[10px] md:mb-0">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[5px]">
                                        Mercedes-Benz S-Class
                                    </h3>
                                    <p>
                                        The pinnacle of luxury, comfort, and advanced technology
                                    </p>
                                </div>
                                <div className="ltr:md:text-right rtl:md:text-left">
                                    <span className="block font-bold text-primary text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                                        $38
                                    </span>
                                    <span className="block font-medium text-13 md:text-sm">
                                        per day
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[10px] md:mb-[12px]">
                                Vehicle Overview
                            </h2>
                            <p>
                                The Mercedes-Benz S-Class represents the ultimate in automotive luxury and innovation. With its sophisticated design, cutting-edge technology, and unparalleled comfort, this vehicle is perfect for executive travel, special occasions, or when you simply want to travel in the utmost style and comfort. Every detail of the S-Class has been meticulously crafted to provide an exceptional experience, from the hand-finished interior to the advanced driver assistance systems that ensure a smooth and safe journey
                            </p>
                            <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[12px] md:mb-[15px] mt-[20px] md:mt-[25px] lg:mt-[30px]">
                                Specifications
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                                <li>
                                    Vehicle Type: <span className="font-semibold text-black dark:text-white">Luxury Sedan</span>
                                </li>
                                <li>
                                    Transmission: <span className="font-semibold text-black dark:text-white">9-Speed Automatic</span>
                                </li>
                                <li>
                                    Year: <span className="font-semibold text-black dark:text-white">2023</span>
                                </li>
                                <li>
                                    Engine: <span className="font-semibold text-black dark:text-white">3.0L Turbo Hybrid</span>
                                </li>
                                <li>
                                    Passenger Capacity: <span className="font-semibold text-black dark:text-white">4</span>
                                </li>
                                <li>
                                    Fuel Economy: <span className="font-semibold text-black dark:text-white">24 MPG Combined</span>
                                </li>
                                <li>
                                    Luggage Capacity: <span className="font-semibold text-black dark:text-white">3 Large Bags</span>
                                </li>
                                <li>
                                    Fuel Type: <span className="font-semibold text-black dark:text-white">Premium Gasoline</span>
                                </li>
                            </ul>
                            <div className="grid grid-cols-2 gap-[25px] my-[20px] md:my-[25px] lg:my-[30px]">
                                <img src="/assets/images/vehicles/vehicle-details2.jpg" className="rounded-[10px]" alt="vehicle-details-image" />
                                <img src="/assets/images/vehicles/vehicle-details3.jpg" className="rounded-[10px]" alt="vehicle-details-image" />
                            </div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[12px] md:mb-[15px]">
                                Premium Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Premium Wi-Fi
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Complimentary Bar
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Dual Climate Control
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Rear Entertainment
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Wireless Charging
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Premium Sound System
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Ambient Lighting
                                </li>
                                <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]">
                                    <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                    Massage Seats
                                </li>
                            </ul>
                            <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[15px] md:mb-[20px] mt-[20px] md:mt-[25px] lg:mt-[30px]">
                                Safety Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] md:gap-[20px]">
                                <div className="flex items-center gap-[15px] md:gap-[25px] border border-[#FFD7D9] dark:border-white/10 bg-[#FFF1F1] dark:bg-black rounded-[10px] p-[20px] md:p-[25px] lg:p-[30px]">
                                    <div className="leading-none flex-none text-5xl">
                                        <i className="flaticon-warning-2"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[8px]">
                                            Active Brake Assist
                                        </h3>
                                        <p>
                                            Automatically applies brakes in emergency situations
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[15px] md:gap-[25px] border border-[#FFD7D9] dark:border-white/10 bg-[#FFF1F1] dark:bg-black rounded-[10px] p-[20px] md:p-[25px] lg:p-[30px]">
                                    <div className="leading-none flex-none text-5xl">
                                        <i className="flaticon-car-1"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[8px]">
                                            Active Lane Keeping
                                        </h3>
                                        <p>
                                            Helps keep the vehicle in its lane
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[15px] md:gap-[25px] border border-[#FFD7D9] dark:border-white/10 bg-[#FFF1F1] dark:bg-black rounded-[10px] p-[20px] md:p-[25px] lg:p-[30px]">
                                    <div className="leading-none flex-none text-5xl">
                                        <i className="flaticon-blind-spot"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[8px]">
                                            Blind Spot Assist
                                        </h3>
                                        <p>
                                            Warns of vehicles in blind spots
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[15px] md:gap-[25px] border border-[#FFD7D9] dark:border-white/10 bg-[#FFF1F1] dark:bg-black rounded-[10px] p-[20px] md:p-[25px] lg:p-[30px]">
                                    <div className="leading-none flex-none text-5xl">
                                        <i className="flaticon-parking-area"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[8px]">
                                            Active Parking Assist
                                        </h3>
                                        <p>
                                            Automatically parks the vehicle
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-[#f4f4f4] dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] mb-[25px]">
                                <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] md:mb-[20px]">
                                    Book This Vehicle
                                </h3>
                                <form action="#">
                                    <div className="mb-[15px]">
                                        <label htmlFor="pickup-location" className="block mb-[6px]">
                                            Pickup Location
                                        </label>
                                        <input
                                            type="text"
                                            name="pickup-location"
                                            id="pickup-location"
                                            placeholder="Enter address"
                                            className="form-input !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10"
                                        />
                                    </div>
                                    <div className="mb-[15px]">
                                        <label htmlFor="destination" className="block mb-[6px]">
                                            Destination
                                        </label>
                                        <input
                                            type="text"
                                            name="destination"
                                            id="destination"
                                            placeholder="Where to?"
                                            className="form-input !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10"
                                        />
                                    </div>
                                    <div className="mb-[15px]">
                                        <label htmlFor="phone-number" className="block mb-[6px]">
                                            Date and Time
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            <div className="relative mb-[10px] sm:mb-0">
                                                <input type="date" className="form-input !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10 cursor-pointer ltr:sm:rounded-r-none rtl:sm:rounded-l-none [&::-webkit-calendar-picker-indicator]:opacity-0 ltr:!pr-0 rtl:!pl-0" name="pick-up-date" id="pick-up-date" />
                                            </div>
                                            <div className="relative ltr:sm:-ml-px rtl:sm:-mr-px">
                                                <input type="time" className="form-input !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10 cursor-pointer ltr:sm:rounded-l-none rtl:sm:rounded-r-none dark:[&::-webkit-calendar-picker-indicator]:invert" name="pick-up-time" id="pick-up-time" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[15px]">
                                        <label htmlFor="duration-hours" className="block mb-[6px]">
                                            Duration (hours)
                                        </label>
                                        <select name="duration-hours" id="duration-hours" className="form-select !bg-white dark:!bg-dark rounded-[5px] !border-[#d9d9d9] dark:!border-white/10">
                                            <option value="0" >
                                                8 hours
                                            </option>
                                            <option value="1">
                                                12 hours
                                            </option>
                                            <option value="2">
                                                16 hours
                                            </option>
                                            <option value="3">
                                                20 hours
                                            </option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="primary-btn group mb-[15px]"
                                    >
                                        <span>
                                            Book Now
                                        </span>
                                        <i className="ri-calendar-2-line"></i>
                                    </button>
                                    <p>
                                        Available for booking today
                                    </p>
                                </form>
                            </div>
                            <div className="bg-[#f4f4f4] dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] mb-[25px]">
                                <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] md:mb-[18px]">
                                    Included in Price
                                </h3>
                                <ul>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Professional Chauffeur
                                    </li>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Fuel & Tolls
                                    </li>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Insurance Coverage
                                    </li>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Bottled Water & Refreshments
                                    </li>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Wi-Fi & Device Charging
                                    </li>
                                    <li className="font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mb-[10px] last:mb-0">
                                        <i className="ri-check-double-line font-normal text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-xl"></i>
                                        Flight Tracking (Airport Pickups)
                                    </li>
                                </ul>
                            </div>
                            <div className="group overflow-hidden relative rounded-[15px]">
                                <a href="/drivers/1" className="flex items-center justify-center w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-full bg-white text-primary absolute top-[20px] md:top-[25px] lg:top-[25px] ltr:right-[20px] ltr:md:right-[25px] ltr:lg:right-[25px] rtl:left-[20px] rtl:md:left-[25px] rtl:lg:left-[25px] hover:bg-primary hover:text-white text-3xl z-[1]">
                                    <i className="ri-arrow-right-line"></i>
                                </a>
                                <img src="/assets/images/drivers/driver1.jpg" className="rounded-[15px] transition-all duration-500 ease-in-out group-hover:scale-110" alt="driver-image" />
                                <div className="absolute left-0 right-0 bottom-0 z-[1] p-[20px] md:p-[25px] lg:p-[30px] flex items-center justify-between">
                                    <div>
                                        <h3 className="!text-white mb-[5px] text-base md:text-lg lg:text-xl leading-[1.2]">
                                            <a href="/drivers/1" className="hover:text-primary">
                                                Patrick Akers
                                            </a>
                                        </h3>
                                        <span className="text-white">
                                            Executive Chauffeur
                                        </span>
                                    </div>
                                    <div>
                                        <span className="inline-block text-13 md:text-sm bg-primary text-white rounded-[30px] py-px px-[8px]">
                                            4.9 (128 reviews)
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-0 rounded-[15px]"
                                    style={{background: "linear-gradient(180deg, rgba(13, 20, 22, 0) 50%, rgba(13, 20, 22, 0.9) 100%)"}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Vehicle Details */}
            
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
                                    href="#"
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
                                    href="#"
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
