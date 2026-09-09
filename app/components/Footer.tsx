export default function Footer() {
  return (
    <>
<footer className="bg-black text-white/70 pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]">
    <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
            <div className="lg:col-span-1">
                <a
                    href="index.html"
                    className="inline-block mb-[25px] lg:mb-[45px]"
                >
                    <img src="assets/images/white-logo.svg" alt="white-logo" />
                </a>
                <h3 className="mb-[15px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                    Download Our App
                </h3>
                <div className="flex flex-wrap items-center gap-[10px]">
                    <a
                        href="index.html#"
                        target="_blank"
                        className="inline-block relative border border-white/30 bg-[#171E20] rounded-[5px] py-[10px] ltr:pr-[18px] rtl:pl-[18px] ltr:pl-[57px] rtl:pr-[57px] hover:border-primary"
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
                        href="index.html#"
                        target="_blank"
                        className="inline-block relative border border-white/30 bg-[#171E20] rounded-[5px] py-[10px] ltr:pr-[18px] rtl:pl-[18px] ltr:pl-[57px] rtl:pr-[57px] hover:border-primary"
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
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-[25px] ltr:xl:pl-[100px] rtl:xl:pr-[100px]">
                <div>
                    <h3 className="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                        Company
                    </h3>
                    <ul>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="about.html"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                About us
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="pricing.html"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Pricing plan
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="locations.html"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Locations
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="blog-grid.html"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Our news
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="contact.html"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                        Social
                    </h3>
                    <ul>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="index.html#"
                                target="_blank"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="index.html#"
                                target="_blank"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Twitter/X
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="index.html#"
                                target="_blank"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="index.html#"
                                target="_blank"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="mb-[8px] last:mb-0">
                            <a
                                href="index.html#"
                                target="_blank"
                                className="text-[#d9d9d9] hover:text-primary"
                            >
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 sm:col-span-1 ltr:lg:-ml-[15px] rtl:lg:-mr-[15px]">
                    <h3 className="mb-[20px] lg:mb-[25px] !text-white text-base md:text-lg lg:text-xl leading-[1.2]">
                        Contact
                    </h3>
                    <ul className="text-[#d9d9d9]">
                        <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                            Call:
                            <a
                                href="tel:+18558079484"
                                className="font-bold md:text-lg lg:text-xl text-white hover:text-primary"
                            >
                                +1 855 - 807 9484
                            </a>
                        </li>
                        <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                            Email:
                            <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#3b535e5757547b495e554f4a15585456" className="font-bold md:text-lg lg:text-xl text-primary hover:underline">
                                <span className="__cf_email__" data-cfemail="7f171a1313103f0d1a110b0e511c1012">[email&#160;protected]</span>
                            </a>
                        </li>
                        <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                            Address:
                            <a
                                href="index.html#"
                                target="_blank"
                                className="font-semibold text-white hover:text-primary"
                            >
                                123 Business Ave, Los Angeles, CA 90045
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[25px] border-t border-[#292F31] py-[20px] md:py-[25px] lg:py-[30px]">
            <p className="text-white !mb-0">
                © RentQ. All Rights Reserved. Powered by <a href="https://envytheme.com/" className="text-primary font-semibold hover:underline" target="_blank">EnvyTheme</a>
            </p>
            <ul className="flex items-center gap-[15px] lg:gap-[20px] md:justify-end">
                <li>
                    <a href="privacy-policy.html" className="text-white hover:text-primary">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <span className="block w-px h-[17px] bg-[#D9D9D9]/20"></span>
                </li>
                <li>
                    <a href="terms-of-service.html" className="text-white hover:text-primary">
                        Terms of Service
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
    </>
  );
}
