export default function Subscribe() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
            <div
                className="text-center"
                data-cues="slideInUp"
                data-group="subscribeContent"
            >
                <img src="assets/images/car.png" className="mb-[15px] md:mb-[20px] lg:mb-[25px]" alt="car" />
                <div className="flex items-center justify-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Stay Updated with RentQ Rental
                    </h2>
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block h-[30px] w-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block w-[20px] h-px bg-primary"></span>
                    </div>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl mx-auto lg:max-w-[780px] xl:max-w-[865px]">
                    Subscribe to our newsletter for exclusive deals, travel tips, and the latest updates.
                </p>
                <form className="md:flex items-center justify-center gap-[15px] md:max-w-[650px] mx-auto md:mt-[20px] lg:mt-[25px] xl:mt-[30px]">
                    <input
                        type="email"
                        className="form-input !bg-[#FBFBFB] dark:!bg-black !border-[#D9D9D9] dark:!border-white/15 rounded-[5px] md:!h-[54px]"
                        placeholder="Enter your email address"
                     />
                    <button
                        type="submit"
                        className="primary-btn group flex-none mt-[15px] md:mt-0"
                    >
                        <span>
                            Subscribe
                        </span>
                        <i className="ri-send-plane-line"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}
