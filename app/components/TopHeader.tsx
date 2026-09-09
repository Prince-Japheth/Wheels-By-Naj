export default function TopHeader() {
  return (
    <>
<div className="bg-primary text-white py-[13px]">
    <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[8px] md:gap-[10px] lg:gap-[25px]">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-[8px] md:gap-[15px] xl:gap-[25px] font-medium">
                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#234b464f4f4c546351464d57520d404c4e" className="inline-block relative ltr:pl-[20px] rtl:pr-[20px] ltr:md:pl-[23px] rtl:md:pr-[23px] hover:text-white/80">
                    <i className="ri-mail-line font-normal absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></i>
                    <span className="__cf_email__" data-cfemail="e38b868f8f8c94a391868d9792cd808c8e">[email&#160;protected]</span>
                </a>
                <span className="inline-block relative ltr:pl-[20px] rtl:pr-[20px] ltr:md:pl-[23px] rtl:md:pr-[23px]">
                    <i className="ri-time-line font-normal absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></i>
                    Mon - Fri: 9:00 AM - 8:00 PM
                </span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-[8px] md:gap-[15px] xl:gap-[25px] font-medium">
                <a
                    href="tel:+1855-5079484"
                    className="inline-block relative ltr:pl-[20px] rtl:pr-[20px] ltr:md:pl-[23px] rtl:md:pr-[23px] hover:text-white/80"
                >
                    <i className="ri-phone-line font-normal absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></i>
                    +1 855-507-9484
                </a>
                <div className="relative ltr:pl-[20px] rtl:pr-[20px] ltr:md:pl-[23px] rtl:md:pr-[23px]">
                    <i className="ri-global-line font-normal absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></i>
                    Lang:
                    <select className="appearance-none cursor-pointer outline-0" name="lang" id="lang">
                        <option  value="en">
                            EN
                        </option>
                        <option value="fr">
                            FR
                        </option>
                        <option value="es">
                            ES
                        </option>
                        <option value="de">
                            DE
                        </option>
                        <option value="pt">
                            PT
                        </option>
                    </select>
                </div>
                <div className="flex items-center gap-[7px] md:gap-[10px] relative ltr:pl-[20px] rtl:pr-[20px] ltr:md:pl-[23px] rtl:md:pr-[23px]">
                    <i className="ri-user-line font-normal absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"></i>
                    <a
                        href="login.html"
                        className="hover:text-white/80"
                    >
                        Login
                    </a>
                    <div className="w-px h-[12px] md:h-[15px] bg-white/30"></div>
                    <a
                        href="register.html"
                        className="hover:text-white/80"
                    >
                        Register
                    </a>
                </div>
                <button
                    type="button"
                    id="lightDarkToggle"
                    className="inline-block leading-none"
                >
                    <i className="ri-sun-fill"></i>
                </button>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
