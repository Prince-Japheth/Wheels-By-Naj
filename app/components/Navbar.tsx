export default function Navbar() {
  return (
    <>
<header
    className="relative z-[9] py-[15px] border-b lg:border-b-0 border-black/10 dark:border-white/10"
    id="navbar"
>
    <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
        <div className="relative flex items-center flex-wrap lg:flex-nowrap justify-between lg:justify-start">
            <a
                href="index.html"
                className="flex-none inline-block"
            >
                <img src="assets/images/logo.svg" className="dark:!hidden" alt="logo" />
                <img src="assets/images/white-logo.svg" className="!hidden dark:!inline" alt="white-logo" />
            </a>
            <div className="flex-none lg:hidden">
                <button
                    type="button"
                    className="navbar-burger-toggle inline-block leading-none"
                >
                    <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
                    <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
                    <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
                </button>
            </div>
            <div className="hidden lg:flex items-center grow basis-full basis-auto gap-[25px] xl:gap-[40px]">
                <ul className="navbar-nav flex items-center flex-row gap-[25px] xl:gap-[30px] ltr:ml-auto rtl:mr-auto">
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle active relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Home
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="index.html"
                                    className="nav-link active font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Car Rental Home
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="index-2.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Vehicle Booking Home
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="index-3.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Drive & Go Home
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="index-4.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Auto Rental Home
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="dashboard.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Dashboard Home
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Vehicles
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="vehicles.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Vehicles
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="vehicle-details.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Vehicle Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Pages
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="about.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Drivers
                                </a>
                                <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="drivers.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Drivers
                                        </a>
                                    </li>
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="driver-details.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Driver Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="locations.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Locations
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="pricing.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Pricing Plan
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Careers
                                </a>
                                <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="careers.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="career-details.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Career Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="testimonials.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="faq.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    My Account
                                </a>
                                <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="login.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="register.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Register
                                        </a>
                                    </li>
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="forgot-password.html"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Forgot Password
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="privacy-policy.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="terms-of-service.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="error.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    404 Error Page
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Example Dropdown
                                </a>
                                <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="javascript:void(0);"
                                            className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Dropdown Item 1
                                        </a>
                                    </li>
                                    <li className="nav-item relative mb-[17px] last:mb-0">
                                        <a
                                            href="javascript:void(0);"
                                            className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                        >
                                            Dropdown Item 2
                                        </a>
                                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                                            <li className="nav-item relative mb-[17px] last:mb-0">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                                >
                                                    Item 1
                                                </a>
                                            </li>
                                            <li className="nav-item relative mb-[17px] last:mb-0">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
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
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Services
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="services.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="service-details.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Service Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Shop
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="shop.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="cart.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Cart
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="checkout.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Checkout
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="product-details.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Product Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item relative">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Blog
                        </a>
                        <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="blog-grid.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Blog Grid
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="blog-right-sidebar.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Blog Right Sidebar
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="blog-left-sidebar.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Blog Left Sidebar
                                </a>
                            </li>
                            <li className="nav-item relative mb-[17px] last:mb-0">
                                <a
                                    href="blog-details.html"
                                    className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary"
                                >
                                    Blog Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item relative">
                        <a
                            href="contact.html"
                            className="nav-link relative font-medium py-[25px] block text-black dark:text-white hover:text-primary"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="flex items-center gap-[10px]">
                    <div className="relative">
                        <button
                            type="button"
                            id="searchBtn"
                            className="w-[50px] h-[50px] rounded-full text-center flex items-center justify-center border border-body/20 dark:border-white/20 text-2xl relative text-black dark:text-white hover:text-primary"
                        >
                            <i className="ri-search-line"></i>
                        </button>
                        <div
                            id="searchBox"
                            className="absolute mt-[10px] top-full ltr:right-0 rtl:left-0 w-[380px] xl:w-[420px] bg-white dark:bg-black p-[20px] md:p-[25px] lg:p-[30px] invisible opacity-0 transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none"
                        >
                            <form
                                action="index.html#"
                                className="relative"
                            >
                                <input type="text" className="form-input dark:!bg-dark" placeholder="Search for anything" name="search" id="searchInput" />
                                <button
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-[15px] rtl:left-[15px] ltr:md:right-[20px] rtl:md:left-[20px] text-2xl leading-none text-black dark:text-white hover:text-primary"
                                    type="submit"
                                >
                                    <i className="ri-search-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <a
                        href="cart.html"
                        className="w-[50px] h-[50px] rounded-full text-center flex items-center justify-center border border-body/20 dark:border-white/20 text-2xl relative text-black dark:text-white hover:text-primary"
                    >
                        <i className="ri-shopping-cart-line"></i>
                        <span className="flex items-center justify-center rounded-full bg-primary text-white w-[18px] h-[18px] text-xs font-medium absolute top-0 ltr:right-0 rtl:left-0">
                            0
                        </span>
                    </a>
                    <button
                        type="button"
                        className="navbar-burger-toggle ltr:ml-[10px] rtl:mr-[10px] ltr:xl:ml-[20px] rtl:xl:mr-[20px] inline-block leading-none text-2xl transition-all duration-300 ease-in-out text-black dark:text-white hover:text-primary"
                    >
                        <i className="ri-menu-3-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
    </>
  );
}
