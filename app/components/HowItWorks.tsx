export default function HowItWorks() {
  return (
    <>
    <div className="pt-[60px] md:pt-[80px] lg:pt-0 pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px] lg:-mt-[100px] xl:-mt-[190px] 2xl:-mt-[230px]">
        <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] items-end">
                <div
                    className="lg:col-span-1 bg-[#E9F0E5] dark:bg-black rounded-[15px] p-[20px] md:p-[25px] lg:p-[30px] xl:max-w-[460px] ltr:lg:-mr-[45px] rtl:lg:-ml-[45px] ltr:xl:mr-0 rtl:xl:ml-0"
                    data-cue="slideInUp"
                >
                    <h2 className="text-xl md:text-2xl lg:text-3xl leading-[1.2] mb-[15px] md:mb-[20px]">
                        Start a Reservation
                    </h2>
                    <form action="index.html#">
                        <div className="mb-[10px]">
                            <input type="text" className="form-input !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px]" name="pick-up" id="pick-up" placeholder="Where to?" />
                        </div>
                        <div className="mb-[20px]">
                            <input type="text" className="form-input !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px]" name="drop-off" id="drop-off" placeholder="Drop-off location" />
                        </div>
                        <div className="mb-[20px]">
                            <label htmlFor="pick-up" className="font-medium block mb-[8px]">
                                Pick-up Date & Time
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="mb-[10px] sm:mb-0">
                                    <input type="date" className="form-input cursor-pointer !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px] ltr:sm:rounded-r-none rtl:sm:rounded-l-none" name="pick-up-date" id="pick-up-date" />
                                </div>
                                <div className="ltr:sm:-ml-px rtl:sm:-mr-px">
                                    <input type="time" className="form-input cursor-pointer !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px] ltr:sm:rounded-l-none rtl:sm:rounded-r-none" name="pick-up-time" id="pick-up-time" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-[20px]">
                            <label htmlFor="drop-off" className="font-medium block mb-[8px]">
                                Drop-off Date & Time
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="mb-[10px] sm:mb-0">
                                    <input type="date" className="form-input cursor-pointer !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px] ltr:sm:rounded-r-none rtl:sm:rounded-l-none" name="drop-off-date" id="drop-off-date" />
                                </div>
                                <div className="ltr:sm:-ml-px rtl:sm:-mr-px">
                                    <input type="time" className="form-input cursor-pointer !bg-white dark:!bg-dark !border-body/20 dark:!border-white/15 rounded-[5px] ltr:sm:rounded-l-none rtl:sm:rounded-r-none" name="drop-off-time" id="drop-off-time" />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="primary-btn group hover:!bg-dark"
                        >
                            <span>
                                View All Cars
                            </span>
                            <i className="ri-car-line"></i>
                        </button>
                    </form>
                </div>
                <div className="lg:col-span-2 ltr:lg:pl-[45px] rtl:lg:pr-[45px]">
                    <div className="text-center mb-[30px] md:mb-[35px] lg:mb-[40px] flex items-center justify-center gap-[8px]">
                        <div className="flex items-center justify-center gap-[2px] flex-none">
                            <span className="block w-[20px] h-px bg-primary"></span>
                            <span className="block h-[20px] w-px bg-primary"></span>
                            <span className="block h-[30px] w-px bg-primary"></span>
                        </div>
                        <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                            Rent a Car in 3 Easy Steps
                        </h2>
                        <div className="flex items-center justify-center gap-[2px] flex-none">
                            <span className="block h-[30px] w-px bg-primary"></span>
                            <span className="block h-[20px] w-px bg-primary"></span>
                            <span className="block w-[20px] h-px bg-primary"></span>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]"
                        data-cues="fadeIn"
                        data-group="howItWorksContent"
                    >
                        <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div className="leading-none text-black dark:text-white text-[40px] md:text-[50px] mb-[15px] lg:mb-[20px]">
                                <i className="flaticon-insurance"></i>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[12px] lg:mb-[15px]">
                                <span className="text-primary">01.</span> Choose & Book
                            </h3>
                            <p className="font-medium">
                                Select your dates, location, and browse our wide range of vehicles.
                            </p>
                        </div>
                        <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div className="leading-none text-black dark:text-white text-[40px] md:text-[50px] mb-[15px] lg:mb-[20px]">
                                <i className="flaticon-secure-payment"></i>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[12px] lg:mb-[15px]">
                                <span className="text-primary">02.</span> Confirm & Pay
                            </h3>
                            <p className="font-medium">
                                Securely complete your booking online with our transparent, all-inclusive pricing.
                            </p>
                        </div>
                        <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div className="leading-none text-black dark:text-white text-[40px] md:text-[50px] mb-[15px] lg:mb-[20px]">
                                <i className="flaticon-location-2"></i>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[12px] lg:mb-[15px]">
                                <span className="text-primary">03.</span> Pick Up & Go
                            </h3>
                            <p className="font-medium">
                                Show your license and confirmation at our counter, and you're ready to hit the road!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
