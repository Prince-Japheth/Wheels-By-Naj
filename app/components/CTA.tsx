export default function CTA() {
  return (
    <>
    <div className="container">
        <div
            className="rounded-[15px] bg-cover bg-center bg-no-repeat py-[60px] md:py-[80px] lg:py-[100px] md:!pb-[40px] px-[20px] md:px-[40px] lg:px-[60px] ltr:xl:pl-[100px] rtl:xl:pr-[100px] ltr:xl:pr-[40px] rtl:xl:pl-[40px]"
            style={{backgroundImage: "url(assets/images/bg-images/bg-image2.jpg)"}}
        >
            <div
                className="lg:max-w-[475px] xl:max-w-[525px]"
                data-cues="slideInUp"
                data-group="ctaContent"
            >
                <div className="flex items-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 !text-white text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Limited Time Offer - 25% Off
                    </h2>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl text-white">
                    Book now and save on your next rental. This exclusive offer ends soon!
                </p>
                <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center flex-wrap gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px]">
                    <a
                        href="contact.html"
                        className="primary-btn group"
                    >
                        <span>
                            Book Now
                        </span>
                        <i className="ri-calendar-event-line"></i>
                    </a>
                    <a
                        href="terms-of-service.html"
                        className="inline-block underline text-15 md:text-base lg:text-lg xl:text-xl font-medium text-white hover:text-primary"
                    >
                        View Terms
                    </a>
                </div>
                <span className="block text-[#D9D9D9] mt-[15px]">
                    Offer expires in <span className="font-semibold text-white">2 days, 14 hours</span>
                </span>
            </div>
            <div
                className="md:max-w-[170px] ltr:md:ml-auto rtl:md:mr-auto mt-[15px]"
                data-cue="slideInUp"
            >
                <span className="block text-[#D9D9D9] mb-[5px]">
                    Call Us Now
                </span>
                <a
                    href="tel:+18558079484"
                    className="inline-block font-bold text-base md:text-lg lg:text-xl leading-none text-white hover:text-primary"
                >
                    +1 855 - 807 9484
                </a>
            </div>
        </div>
    </div>
    </>
  );
}
