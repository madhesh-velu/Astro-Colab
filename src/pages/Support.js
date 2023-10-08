import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onCommunityForumTextClick = useCallback(() => {
    navigate("/communitiy-forum");
  }, [navigate]);

  const onSettingsTextClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onCodeSpaceTextClick = useCallback(() => {
    navigate("/codespace");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIntroducingOurInnovative2Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-whitesmoke-300 font-ubuntu">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[859px] left-[454px] font-medium inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[80px] left-[24px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1303px] flex flex-row items-center justify-start gap-[617.89px] text-sm text-lightgray-200 font-noto-sans">
        <div className="flex flex-row items-start justify-start py-[9px] pr-0 pl-[7px] gap-[16.7px]">
          <div
            className="relative leading-[30px] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="rounded-md flex flex-row items-start justify-start py-0 px-2 relative">
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-0.5 z-[0]">
              <div className="relative leading-[30px] font-semibold">
                Support
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[7.3px] rounded-md bg-salmon-100 w-[61px] h-0.5 z-[1]" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[23.81px] text-left text-cornflowerblue-100">
          <div
            className="relative leading-[21px] cursor-pointer"
            onClick={onCommunityForumTextClick}
          >
            Community Forum
          </div>
          <div
            className="relative leading-[21px] cursor-pointer"
            onClick={onSettingsTextClick}
          >
            Settings
          </div>
          <div className="relative leading-[21px]">Support</div>
          <div
            className="relative leading-[21px] cursor-pointer"
            onClick={onCodeSpaceTextClick}
          >
            Code Space
          </div>
          <div className="relative w-[46.39px] h-[21px] text-lightgray-200">
            <div className="absolute top-[0px] left-[0px] leading-[21px]">
              Filter
            </div>
            <div className="absolute top-[calc(50%_-_0px)] left-[38.39px] box-border w-2 h-1 border-t-[4px] border-solid border-lightgray-200 border-r-[4px] border-l-[4px]" />
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_132px)] top-[169px] right-[75px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-left text-base text-lavender-100 font-dm-sans border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[589px] left-[1088px] w-[76px] h-[21px]">
          <div className="absolute top-[0px] left-[0px] w-[76px] h-[21px]">
            <div className="absolute top-[0px] left-[29px] font-medium inline-block w-[47px] h-[21px]">
              Guide
            </div>
            <img
              className="absolute h-[93.57%] w-[26.32%] top-[4.68%] right-[73.68%] bottom-[1.75%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylightinfo-square1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[571px] left-[1024px] w-[205px] h-14">
          <div
            className="absolute top-[0px] left-[0px] rounded-lg bg-mediumslateblue-200 w-[205px] h-14 cursor-pointer"
            onClick={onRectangle2Click}
          />
          <div className="absolute top-[18px] left-[93px] w-[54px] h-[21px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[54px] h-[21px]">
              Logout
            </div>
          </div>
          <img
            className="absolute top-[17px] left-[58px] w-6 h-6 overflow-hidden"
            alt=""
            src="/iconsaxlinearlogout.svg"
          />
        </div>
        <div className="absolute top-[339px] left-[513px] w-[232px] h-[33px] text-center text-gray-2900 font-ubuntu">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[232px] h-[33px]">
            Welcome to Astro-Colab
          </div>
        </div>
        <div className="absolute h-[31.48%] w-[15.35%] top-[18.52%] right-[42.29%] bottom-[50%] left-[42.37%]">
          <img
            className="absolute h-[44.34%] w-[33.55%] top-[16.97%] right-[39.57%] bottom-[38.69%] left-[26.88%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image4@2x.png"
          />
          <img
            className="absolute h-[44.72%] w-[38.09%] top-[39.44%] right-[61.91%] bottom-[15.85%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image5@2x.png"
          />
          <img
            className="absolute h-[27.5%] w-[26.91%] top-[11.76%] right-[73.09%] bottom-[60.74%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image6@2x.png"
          />
          <img
            className="absolute h-[32.22%] w-[34.36%] top-[0%] right-[15.42%] bottom-[67.78%] left-[50.22%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image7@2x.png"
          />
          <img
            className="absolute h-[38.26%] w-[43.05%] top-[28.53%] right-[0%] bottom-[33.22%] left-[56.95%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image8@2x.png"
          />
          <img
            className="absolute h-[52.99%] w-[55.18%] top-[47.01%] right-[20.6%] bottom-[0%] left-[24.22%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image9@2x.png"
          />
        </div>
        <div className="absolute top-[377px] left-[361px] text-smi font-medium font-ubuntu text-darkgray-300 text-justify inline-block w-[535px]">
          imagine a friendly online space where researchers from all fields come
          together effortlessly, just like superheroes. Astro Colab is here to
          help you collaborate, create research documents, and connect with
          scientists from all over the world. Our mission is clear: to empower
          scientists of all levels. Join us on this exciting journey of
          scientific innovation, where your ideas find a home and your
          contributions make a difference.
        </div>
        <div className="absolute top-[493px] left-[549px] w-[159px] h-9">
          <div className="absolute top-[0px] left-[0px] rounded bg-mediumslateblue-300 w-[159px] h-9" />
        </div>
        <div className="absolute top-[504px] left-[570px] text-smi font-medium text-white text-center inline-block w-[118px] h-3.5">
          Report issue
        </div>
      </div>
      <div
        className="absolute top-[32px] left-[31px] text-xl font-coda text-whitesmoke-200 text-left inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative2Click}
      >
        Astro Colab
      </div>
    </div>
  );
};

export default Support;
