const SignInPage = () => {
  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-white font-ubuntu">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1440px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[429px] left-[454px] font-medium text-whitesmoke-200 inline-block w-[535px]">
        Welcome to a new era of research collaboration with Astro Colab!
      </div>
      <div className="absolute top-[859px] left-[465px] font-medium text-whitesmoke-300 inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[461px] left-[450px] font-medium text-darkgray-200 text-justify inline-block w-[535px]">
        imagine a friendly online space where researchers from all fields come
        together effortlessly, just like superheroes. Astro Colab is here to
        help you collaborate, create research documents, and connect with
        scientists from all over the world. Our mission is clear: to empower
        scientists of all levels. Join us on this exciting journey of scientific
        innovation, where your ideas find a home and your contributions make a
        difference.
      </div>
      <div className="absolute top-[306px] left-[399px] text-50xl font-secular-one inline-block w-[643px] h-[86px]">
        ASTRO COLAB
      </div>
      <div className="absolute top-[580px] left-[728px] rounded-3xs bg-midnightblue-100 flex flex-row items-center justify-center py-3.5 px-[45px] gap-[9px] text-left text-sm">
        <b className="relative">Log in</b>
        <img
          className="relative w-[14.5px] h-[10.5px]"
          alt=""
          src="/vector10.svg"
        />
      </div>
      <div className="absolute top-[580px] left-[559px] rounded-3xs bg-mediumslateblue-100 w-[155px] h-[45px] flex flex-row items-center justify-center py-3.5 px-[45px] box-border gap-[9px] text-left text-sm text-gray-1600">
        <b className="relative">ORCID id</b>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconsaxlinearfingerscan.svg"
        />
      </div>
      <div className="absolute top-[682px] left-[677px] text-xs font-medium text-mediumslateblue-100">
        Sign in to explore!
      </div>
      <div className="absolute top-[708px] left-[558px] rounded-3xs bg-midnightblue-200 w-[326px] h-[45px] flex flex-row items-center justify-between py-3.5 pr-[78px] pl-[72px] box-border">
        <img className="relative w-6 h-6" alt="" src="/google-logo.svg" />
        <img
          className="relative w-[23px] h-[22.86px]"
          alt=""
          src="/vector11.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/apple-logo.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/facebook-logo.svg"
        />
      </div>
    </div>
  );
};

export default SignInPage;
