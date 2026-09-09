export default function SidebarModal() {
  return (
    <>
<div className="sidebar-modal">
    <div className="sidebar-modal-header">
        <a
            href="index.html"
            className="flex-none inline-block"
        >
            <img src="assets/images/logo.svg" className="dark:!hidden" alt="logo" />
            <img src="assets/images/white-logo.svg" className="!hidden dark:!inline" alt="white-logo" />
        </a>
        <button
            type="button"
            className="inline-block text-2xl leading-none text-black dark:text-white hover:text-primary"
        >
            <i className="flaticon-close"></i>
        </button>
    </div>
    <div className="sidebar-modal-body scrollbar">
        <p className="font-bold text-black dark:text-white text-xl md:text-2xl lg:text-3xl !leading-[1.2]">
            Premium car rentals with transparent pricing and exceptional service.
        </p>
        <ul className="sidebar-navbar-nav mt-[20px] md:mt-[30px] lg:mt-[40px] lg:hidden">
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle active relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Home
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="index.html"
                            className="nav-link active relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Car Rental Home
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="index-2.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Vehicle Booking Home
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="index-3.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Drive & Go Home
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="index-4.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Auto Rental Home
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="dashboard.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Dashboard Home
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Vehicles
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="vehicles.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Vehicles
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="vehicle-details.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Vehicle Details
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Pages
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="about.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            About Us
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Drivers
                        </a>
                        <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="drivers.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Drivers
                                </a>
                            </li>
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="driver-details.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Driver Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="locations.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Locations
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="pricing.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Pricing Plan
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Careers
                        </a>
                        <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="careers.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="career-details.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Career Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="testimonials.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="faq.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            FAQ
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            My Account
                        </a>
                        <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="login.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Login
                                </a>
                            </li>
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="register.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Register
                                </a>
                            </li>
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="forgot-password.html"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Forgot Password
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="privacy-policy.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="terms-of-service.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Terms of Service
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="error.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            404 Error Page
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Example Dropdown
                        </a>
                        <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Dropdown Item 1
                                </a>
                            </li>
                            <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                >
                                    Dropdown Item 2
                                </a>
                                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                        <a
                                            href="javascript:void(0);"
                                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                        >
                                            Item 1
                                        </a>
                                    </li>
                                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                                        <a
                                            href="javascript:void(0);"
                                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                                        >
                                            Item 2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Services
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="services.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Services
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="service-details.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Service Details
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Shop
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="shop.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Shop
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="cart.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Cart
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="checkout.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Checkout
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="product-details.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Product Details
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle relative font-medium block text-base text-black dark:text-white hover:text-primary"
                >
                    Blog
                </a>
                <ul className="dropdown-menu hidden mt-[15px] py-[10px] ltr:border-l rtl:border-r border-black/5 dark:border-white/5">
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="blog-grid.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Blog Grid
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="blog-right-sidebar.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Blog Right Sidebar
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="blog-left-sidebar.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Blog Left Sidebar
                        </a>
                    </li>
                    <li className="nav-item px-[20px] mb-[15px] last:mb-0">
                        <a
                            href="blog-details.html"
                            className="nav-link relative font-medium block text-base text-black dark:text-white hover:text-primary"
                        >
                            Blog Details
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item mb-[15px] md:mb-[20px] last:mb-0">
                <a
                    href="contact.html"
                    className="nav-link relative font-medium block text-black dark:text-white hover:text-primary"
                >
                    Contact Us
                </a>
            </li>
        </ul>
        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px] mt-[20px] md:mt-[30px] lg:mt-[40px]">
            Contact
        </h3>
        <ul className="text-base mb-[20px] md:mb-[30px] lg:mb-[40px]">
            <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                Call:
                <a
                    href="tel:+18558079484"
                    className="font-bold md:text-lg lg:text-xl hover:text-primary"
                >
                    +1 855 - 807 9484
                </a>
            </li>
            <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                Email:
                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#bcd4d9d0d0d3fcced9d2c8cd92dfd3d1" className="font-bold md:text-lg lg:text-xl text-primary hover:underline">
                    <span className="__cf_email__" data-cfemail="640c0108080b2416010a10154a070b09">[email&#160;protected]</span>
                </a>
            </li>
            <li className="mb-[5px] last:mb-0 flex items-center flex-wrap gap-[5px]">
                Address:
                <a
                    href="index.html#"
                    target="_blank"
                    className="font-semibold hover:text-primary"
                >
                    123 Business Ave, Los Angeles, CA 90045
                </a>
            </li>
        </ul>
        <h3 className="text-base md:text-lg lg:text-xl leading-[1.2] mb-[15px]">
            Social
        </h3>
        <ul>
            <li className="mb-[7px] md:mb-[10px] last:mb-0">
                <a
                    href="index.html#"
                    target="_blank"
                    className="group text-black dark:text-white flex items-center gap-[10px]"
                >
                    <i className="ri-facebook-fill w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f4f4f4] dark:bg-dark text-black dark:text-white transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white"></i>
                    Facebook
                </a>
            </li>
            <li className="mb-[7px] md:mb-[10px] last:mb-0">
                <a
                    href="index.html#"
                    target="_blank"
                    className="group text-black dark:text-white flex items-center gap-[10px]"
                >
                    <i className="ri-twitter-x-fill w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f4f4f4] dark:bg-dark text-black dark:text-white transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white"></i>
                    Twitter/X
                </a>
            </li>
            <li className="mb-[7px] md:mb-[10px] last:mb-0">
                <a
                    href="index.html#"
                    target="_blank"
                    className="group text-black dark:text-white flex items-center gap-[10px]"
                >
                    <i className="ri-linkedin-fill w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f4f4f4] dark:bg-dark text-black dark:text-white transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white"></i>
                    LinkedIn
                </a>
            </li>
            <li className="mb-[7px] md:mb-[10px] last:mb-0">
                <a
                    href="index.html#"
                    target="_blank"
                    className="group text-black dark:text-white flex items-center gap-[10px]"
                >
                    <i className="ri-instagram-line w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f4f4f4] dark:bg-dark text-black dark:text-white transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white"></i>
                    Instagram
                </a>
            </li>
        </ul>
    </div>
    <div className="sidebar-modal-footer">
        <a
            href="cart.html"
            className="w-[50px] h-[50px] rounded-full text-center flex items-center justify-center border border-body/20 dark:border-white/20 text-xl relative text-black dark:text-white hover:text-primary"
        >
            <i className="ri-shopping-cart-line"></i>
            <span className="flex items-center justify-center rounded-full bg-primary text-white w-[18px] h-[18px] text-xs font-medium absolute top-0 ltr:right-0 rtl:left-0">
                0
            </span>
        </a>
        <form
            action="index.html#"
            className="relative flex-1"
        >
            <input type="text" className="form-input dark:!bg-dark" placeholder="Search for anything" />
            <button
                className="absolute top-1/2 -translate-y-1/2 ltr:right-[15px] rtl:left-[15px] ltr:md:right-[20px] rtl:md:left-[20px] text-xl leading-none text-black dark:text-white hover:text-primary"
                type="submit"
            >
                <i className="ri-search-line"></i>
            </button>
        </form>
    </div>
</div>
<div className="backdrop"></div>
    </>
  );
}
