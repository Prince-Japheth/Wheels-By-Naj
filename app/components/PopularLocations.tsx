export default function PopularLocations() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div
            className="container"
            data-cues="slideInUp"
            data-group="popularRentalLocationsContent"
        >
            <div className="text-center mb-[30px] md:mb-[35px] lg:mb-[40px]">
                <div className="flex items-center justify-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Popular Rental Locations
                    </h2>
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block h-[30px] w-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block w-[20px] h-px bg-primary"></span>
                    </div>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl mx-auto lg:max-w-[780px] xl:max-w-[865px]">
                    With 50+ locations nationwide, find the most convenient RentQ branch for your next adventure. All locations offer our signature premium service.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                <div className="group bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                    <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] md:mb-[20px]">
                        <a href="vehicle-details.html" className="hover:text-primary">
                            LAX International Airport
                        </a>
                    </h3>
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px] mb-[15px] md:mb-[20px]"
                    >
                        <img
                            src="assets/images/locations/location1.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="location-image"
                         />
                    </a>
                    <ul className="mb-[15px] md:mb-[20px]">
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-map-pin-4-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    Terminal 3, Level 1
                                </span>
                                <span className="block text-13 md:text-sm">
                                    1 World Way, Los Angeles, CA 90045
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-time-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    24/7 Operation
                                </span>
                                <span className="block text-13 md:text-sm">
                                    Open every day, including holidays
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-bus-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    Free Shuttle Service
                                </span>
                                <span className="block text-13 md:text-sm">
                                    Every 10 minutes to all terminals
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-wrap justify-between text-center">
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                4.8
                            </span>
                            <span className="block text-13 md:text-sm">
                                Rating
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                5 min
                            </span>
                            <span className="block text-13 md:text-sm">
                                Wait Time
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                24/7
                            </span>
                            <span className="block text-13 md:text-sm">
                                Support
                            </span>
                        </div>
                    </div>
                </div>
                <div className="group bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                    <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] md:mb-[20px]">
                        <a href="vehicle-details.html" className="hover:text-primary">
                            Downtown Los Angeles
                        </a>
                    </h3>
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px] mb-[15px] md:mb-[20px]"
                    >
                        <img
                            src="assets/images/locations/location2.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="location-image"
                         />
                    </a>
                    <ul className="mb-[15px] md:mb-[20px]">
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-map-pin-4-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    Financial District
                                </span>
                                <span className="block text-13 md:text-sm">
                                    555 S Figueroa St, Los Angeles, CA 90071
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-time-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    6:00 AM - 11:00 PM
                                </span>
                                <span className="block text-13 md:text-sm">
                                    Extended hours on weekends
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-train-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    Metro Access
                                </span>
                                <span className="block text-13 md:text-sm">
                                    Connected to 7th St/Metro Center station
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-wrap justify-between text-center">
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                4.9
                            </span>
                            <span className="block text-13 md:text-sm">
                                Rating
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                8 min
                            </span>
                            <span className="block text-13 md:text-sm">
                                Wait Time
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                Express
                            </span>
                            <span className="block text-13 md:text-sm">
                                Service
                            </span>
                        </div>
                    </div>
                </div>
                <div className="group bg-white dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] shadow-[0_0_200px_rgba(13,20,22,0.1)] dark:shadow-none">
                    <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] md:mb-[20px]">
                        <a href="vehicle-details.html" className="hover:text-primary">
                            Beverly Center
                        </a>
                    </h3>
                    <a
                        href="vehicle-details.html"
                        className="block overflow-hidden rounded-[15px] mb-[15px] md:mb-[20px]"
                    >
                        <img
                            src="assets/images/locations/location3.jpg"
                            className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                            alt="location-image"
                         />
                    </a>
                    <ul className="mb-[15px] md:mb-[20px]">
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-map-pin-4-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    West Hollywood
                                </span>
                                <span className="block text-13 md:text-sm">
                                    8500 Beverly Blvd, Los Angeles, CA 90048
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-time-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    24/7 Kiosk Available
                                </span>
                                <span className="block text-13 md:text-sm">
                                    Staffed 8:00 AM - 10:00 PM
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center gap-[12px] mb-[15px] last:mb-0">
                            <div className="flex items-center justify-center flex-none w-[40px] h-[40px] rounded-[10px] bg-[#EFEFF0] dark:bg-dark text-primary text-xl">
                                <i className="ri-parking-box-line"></i>
                            </div>
                            <div>
                                <span className="block leading-[1.2] font-bold text-black dark:text-white mb-[4px]">
                                    Free Validation
                                </span>
                                <span className="block text-13 md:text-sm">
                                    3 hours free parking with rental
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-wrap justify-between text-center">
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                4.7
                            </span>
                            <span className="block text-13 md:text-sm">
                                Rating
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                3 min
                            </span>
                            <span className="block text-13 md:text-sm">
                                Wait Time
                            </span>
                        </div>
                        <div>
                            <span className="block font-medium text-base md:text-lg lg:text-xl leading-none text-black dark:text-white mb-[4px]">
                                Kiosk
                            </span>
                            <span className="block text-13 md:text-sm">
                                24/7
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
