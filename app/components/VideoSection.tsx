export default function VideoSection() {
  return (
    <>
    <div className="container lg:!max-w-full 2xl:!max-w-[1620px]">
        <div
            className="rounded-[15px] bg-cover bg-center bg-no-repeat px-[20px] md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[150px] py-[80px] md:pt-[115px] lg:pt-[260px] md:pb-[115px]"
            style={{backgroundImage: "url(assets/images/bg-images/bg-image1.jpg)"}}
            data-cue="slideInUp"
        >
            <a
                data-fslightbox
                href="https://www.youtube.com/watch?v=rcCotZMxSXM"
                className="w-[90px] md:w-[120px] lg:w-[150px] h-[90px] md:h-[120px] lg:h-[150px] rounded-full border-[3px] border-primary flex items-center justify-center backdrop-blur-[21px] text-white text-5xl md:text-6xl hover:border-white hover:text-primary"
                style={{background: "radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"}}
            >
                <i className="ri-play-fill"></i>
            </a>
            <h3 className="mb-0 mt-[25px] md:mt-[50px] lg:mt-[80px] !text-white text-xl md:text-2xl lg:text-3xl leading-[1.2] md:max-w-[345px] lg:max-w-[425px] ltr:md:ml-auto rtl:md:mr-auto">
                Book a Week, Save a Quarter 25% Off Rentals Over 5 Days
            </h3>
        </div>
    </div>
    </>
  );
}
