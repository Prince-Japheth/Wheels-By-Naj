export default function Blog() {
  return (
    <>
    <div className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] relative">
        <div className="container">
            <div
                className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] lg:items-start"
                data-cues="slideInUp"
                data-group="blogContent"
            >
                <div className="lg:col-span-1 lg:sticky lg:top-[150px]">
                    <div className="flex items-center gap-[8px] mb-[12px] md:mb-[15px]">
                        <div className="flex items-center justify-center gap-[2px] flex-none">
                            <span className="block w-[20px] h-px bg-primary"></span>
                            <span className="block h-[20px] w-px bg-primary"></span>
                            <span className="block h-[30px] w-px bg-primary"></span>
                        </div>
                        <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl leading-[1.2]">
                            RentQ Blog & Travel Tips
                        </h2>
                    </div>
                    <p className="font-medium text-base md:text-lg xl:text-xl">
                        Discover expert travel advice, car rental tips, destination guides, and the latest news from RentQ.
                    </p>
                </div>
                <div className="lg:col-span-2 ltr:xl:pl-[70px] rtl:xl:pr-[70px]">
                    <div className="group md:flex items-center gap-[25px] xl:gap-[50px] py-[15px] md:py-[20px] lg:py-[25px] border-b border-body/10 dark:border-white/10 first:border-t">
                        <a
                            href="blog-details.html"
                            className="block overflow-hidden rounded-[15px] md:w-[262px] flex-none text-center"
                        >
                            <img
                                src="assets/images/blogs/blog1.jpg"
                                className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                alt="blog-image"
                             />
                        </a>
                        <div className="mt-[15px] md:mt-[20px] lg:mt-0">
                            <div className="flex items-center gap-[15px]">
                                <a
                                    href="blog-details.html"
                                    className="block w-[50px] rounded-full"
                                >
                                    <img
                                        src="assets/images/users/user4.jpg"
                                        className="rounded-full"
                                        alt="user-image"
                                     />
                                </a>
                                <span className="block">
                                    Written by <a href="blog-grid.html" className="font-medium text-black dark:text-white hover:text-primary">admin</a>
                                </span>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.3] my-[15px] md:my-[20px]">
                                <a
                                    href="blog-details.html"
                                    className="hover:text-primary"
                                >
                                    How to maintain your rental car for optimal performance
                                </a>
                            </h3>
                            <ul className="flex flex-wrap items-center gap-[25px]">
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-calendar-event-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    January 25, 2026
                                </li>
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-time-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    8 min read
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group md:flex items-center gap-[25px] xl:gap-[50px] py-[15px] md:py-[20px] lg:py-[25px] border-b border-body/10 dark:border-white/10 first:border-t">
                        <a
                            href="blog-details.html"
                            className="block overflow-hidden rounded-[15px] md:w-[262px] flex-none text-center"
                        >
                            <img
                                src="assets/images/blogs/blog2.jpg"
                                className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                alt="blog-image"
                             />
                        </a>
                        <div className="mt-[15px] md:mt-[20px] lg:mt-0">
                            <div className="flex items-center gap-[15px]">
                                <a
                                    href="blog-details.html"
                                    className="block w-[50px] rounded-full"
                                >
                                    <img
                                        src="assets/images/users/user5.jpg"
                                        className="rounded-full"
                                        alt="user-image"
                                     />
                                </a>
                                <span className="block">
                                    Written by <a href="blog-grid.html" className="font-medium text-black dark:text-white hover:text-primary">admin</a>
                                </span>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.3] my-[15px] md:my-[20px]">
                                <a
                                    href="blog-details.html"
                                    className="hover:text-primary"
                                >
                                    Traveling with kids making family road trips enjoyable
                                </a>
                            </h3>
                            <ul className="flex flex-wrap items-center gap-[25px]">
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-calendar-event-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    January 24, 2026
                                </li>
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-time-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    5 min read
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="group md:flex items-center gap-[25px] xl:gap-[50px] py-[15px] md:py-[20px] lg:py-[25px] border-b border-body/10 dark:border-white/10 first:border-t">
                        <a
                            href="blog-details.html"
                            className="block overflow-hidden rounded-[15px] md:w-[262px] flex-none text-center"
                        >
                            <img
                                src="assets/images/blogs/blog3.jpg"
                                className="rounded-[15px] transition-all duration-300 ease-in-out group-hover:scale-110"
                                alt="blog-image"
                             />
                        </a>
                        <div className="mt-[15px] md:mt-[20px] lg:mt-0">
                            <div className="flex items-center gap-[15px]">
                                <a
                                    href="blog-details.html"
                                    className="block w-[50px] rounded-full"
                                >
                                    <img
                                        src="assets/images/users/user6.jpg"
                                        className="rounded-full"
                                        alt="user-image"
                                     />
                                </a>
                                <span className="block">
                                    Written by <a href="blog-grid.html" className="font-medium text-black dark:text-white hover:text-primary">admin</a>
                                </span>
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl leading-[1.3] my-[15px] md:my-[20px]">
                                <a
                                    href="blog-details.html"
                                    className="hover:text-primary"
                                >
                                    Top 10 essential road trip tips for your next adventure
                                </a>
                            </h3>
                            <ul className="flex flex-wrap items-center gap-[25px]">
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-calendar-event-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    January 23, 2026
                                </li>
                                <li className="relative ltr:pl-[25px] rtl:pr-[25px]">
                                    <i className="ri-time-line text-primary absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-lg -mt-px"></i>
                                    7 min read
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
