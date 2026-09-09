"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`${className ?? ""} ${isActive ? "active" : ""}`.trim()}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      <header
        className="relative z-[9] py-[15px] border-b lg:border-b-0 border-black/10 dark:border-white/10"
        id="navbar"
      >
        <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
          <div className="relative flex items-center flex-wrap lg:flex-nowrap justify-between lg:justify-start">
            <Link href="/" className="flex-none inline-block">
              <img src="/assets/images/logo.svg" className="dark:!hidden" alt="logo" />
              <img src="/assets/images/white-logo.svg" className="!hidden dark:!inline" alt="white-logo" />
            </Link>

            {/* Mobile burger */}
            <div className="flex-none lg:hidden">
              <button type="button" className="navbar-burger-toggle inline-block leading-none">
                <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
                <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
                <span className="h-[3px] w-[30px] my-[5px] block bg-black dark:bg-white first:mt-0 last:mb-0"></span>
              </button>
            </div>

            <div className="hidden lg:flex items-center grow basis-full basis-auto gap-[25px] xl:gap-[40px]">
              <ul className="navbar-nav flex items-center flex-row gap-[25px] xl:gap-[30px] ltr:ml-auto rtl:mr-auto">

                {/* Home */}
                <li className="nav-item relative">
                  <NavLink href="/" className="nav-link relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Home
                  </NavLink>
                </li>

                {/* Vehicles */}
                <li className="nav-item relative">
                  <a href="#" className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Vehicles
                  </a>
                  <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/vehicles" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Vehicles
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/vehicles/1" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Vehicle Details
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Pages */}
                <li className="nav-item relative">
                  <a href="#" className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Pages
                  </a>
                  <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/about" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <a href="#" className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Drivers
                      </a>
                      <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/drivers" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Drivers
                          </NavLink>
                        </li>
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/drivers/1" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Driver Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/locations" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Locations
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/pricing" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Pricing Plan
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <a href="#" className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Careers
                      </a>
                      <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/careers" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Careers
                          </NavLink>
                        </li>
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/careers/1" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Career Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/testimonials" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Testimonials
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/faq" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        FAQ
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <a href="#" className="nav-link dropdown-toggle font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        My Account
                      </a>
                      <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/login" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Login
                          </NavLink>
                        </li>
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/register" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Register
                          </NavLink>
                        </li>
                        <li className="nav-item relative mb-[17px] last:mb-0">
                          <NavLink href="/forgot-password" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                            Forgot Password
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/privacy-policy" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/terms-of-service" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Terms of Service
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/404" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        404 Error Page
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Services */}
                <li className="nav-item relative">
                  <a href="#" className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Services
                  </a>
                  <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/services" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/services/1" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Service Details
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Blog */}
                <li className="nav-item relative">
                  <a href="#" className="nav-link dropdown-toggle relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Blog
                  </a>
                  <ul className="dropdown-menu absolute min-w-[270px] xl:min-w-[290px] bg-white dark:bg-black py-[25px] transition-all duration-300 ease-in-out shadow-[0_8px_24px_rgba(149,157,165,0.2)] dark:shadow-none">
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/blog" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Blog Grid
                      </NavLink>
                    </li>
                    <li className="nav-item relative mb-[17px] last:mb-0">
                      <NavLink href="/blog/1" className="nav-link font-medium relative text-black dark:text-white px-[25px] block hover:text-primary">
                        Blog Details
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Contact */}
                <li className="nav-item relative">
                  <NavLink href="/contact" className="nav-link relative font-medium py-[25px] block text-black dark:text-white hover:text-primary">
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              {/* Search + Cart + Sidebar toggle */}
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
                    <form action="#" className="relative">
                      <input
                        type="text"
                        className="form-input dark:!bg-dark"
                        placeholder="Search for anything"
                        name="search"
                        id="searchInput"
                      />
                      <button
                        className="absolute top-1/2 -translate-y-1/2 ltr:right-[15px] rtl:left-[15px] ltr:md:right-[20px] rtl:md:left-[20px] text-2xl leading-none text-black dark:text-white hover:text-primary"
                        type="submit"
                      >
                        <i className="ri-search-line"></i>
                      </button>
                    </form>
                  </div>
                </div>
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
