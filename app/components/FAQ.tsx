export default function FAQ() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-black">
        <div
            className="container"
            data-cues="slideInUp"
            data-group="faqContent"
        >
            <div className="text-center mb-[30px] md:mb-[35px] lg:mb-[40px]">
                <div className="flex items-center justify-center gap-[8px] mb-[12px] md:mb-[15px]">
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block w-[20px] h-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block h-[30px] w-px bg-primary"></span>
                    </div>
                    <h2 className="mb-0 !text-white text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex items-center justify-center gap-[2px] flex-none">
                        <span className="block h-[30px] w-px bg-primary"></span>
                        <span className="block h-[20px] w-px bg-primary"></span>
                        <span className="block w-[20px] h-px bg-primary"></span>
                    </div>
                </div>
                <p className="font-medium text-base md:text-lg xl:text-xl mx-auto lg:max-w-[800px] xl:max-w-[875px] text-[#d9d9d9]">
                    Find quick answers to common questions about renting with RentQ. Can't find what you're looking for? Contact our support team.
                </p>
            </div>
            <div className="accordion grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                <div>
                    <div className="accordion-item active border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            1. How do I make a reservation?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px]">
                            <p>
                                You can make a reservation by selecting your desired vehicle, choosing rental dates, and completing the booking process online. Once confirmed, you’ll receive a reservation confirmation via email.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            2. Is there a security deposit required?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                Yes, a small refundable security deposit is required at the time of booking. It’s fully refunded once the vehicle is returned in the same condition.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            3. Can I rent a car without a credit card?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                In most cases, a valid credit card is required for security and verification purposes. However, some locations may accept alternative payment methods—please check availability before booking.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            4. Can I add an additional driver?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                Yes, you can add an additional driver during or after the booking process. The additional driver must meet our age and license requirements and may be subject to an extra fee.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            5. Can I modify or cancel my reservation?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                Yes, reservations can be modified or canceled through your account or by contacting customer support. Cancellation policies may vary depending on the booking type and timing.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            6. What is the minimum rental age?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                The minimum rental age is typically 21 years. Drivers under a certain age may be subject to additional fees or restrictions based on local regulations.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            7. What payment methods do you accept?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                We accept major credit cards and other supported payment options depending on your location. Available payment methods will be displayed during checkout.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item border border-[#454B4D]/50 rounded-[10px] mb-[25px] last:mb-0">
                        <button
                            className="accordion-toggle flex items-center justify-between gap-[15px] w-full ltr:text-left rtl:text-right font-medium text-base md:text-lg lg:text-xl leading-[1.2] text-white p-[15px] md:p-[20px] ltr:lg:pr-[20px] rtl:lg:pl-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] lg:py-[25px]"
                            type="button"
                        >
                            8. What insurance coverage is included?
                            <span className="flex flex-none items-center justify-center rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-primary border border-[#292F31] bg-[#171E20] text-2xl">
                                <i className="ri-add-fill"></i>
                            </span>
                        </button>
                        <div className="accordion-panel md:-mt-[15px] text-[#D9D9D9] px-[15px] ltr:md:pr-[85px] rtl:md:pl-[85px] ltr:md:pl-[20px] rtl:md:pr-[20px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] pb-[15px] md:pb-[20px] lg:pb-[25px] hidden">
                            <p>
                                Basic insurance coverage is included with every rental. Additional coverage options are available at checkout for enhanced protection and peace of mind.
                            </p>
                        </div>
                    </div>
                    <span className="block text-white text-center ltr:lg:text-right rtl:lg:text-left text-base md:text-lg lg:text-xl leading-[1.2]">
                        Still Have Questions? <a href="contact.html" className="text-primary hover:underline">Contact Us</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
