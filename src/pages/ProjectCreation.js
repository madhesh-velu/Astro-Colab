import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCreation = () => {
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

  const onSupportTextClick = useCallback(() => {
    navigate("/support");
  }, [navigate]);

  const onCodeSpaceTextClick = useCallback(() => {
    navigate("/codespace");
  }, [navigate]);

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-lightgray-200 font-noto-sans">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[859px] left-[454px] font-medium font-ubuntu text-whitesmoke-300 inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[80px] left-[24px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1303px] flex flex-row items-center justify-start gap-[617.89px] text-sm">
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
                New Projects
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[12.3px] rounded-md bg-salmon-100 w-[83px] h-0.5 z-[1]" />
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
          <div
            className="relative leading-[21px] cursor-pointer"
            onClick={onSupportTextClick}
          >
            Support
          </div>
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
      <div className="absolute w-[calc(100%_-_132px)] top-[169px] right-[75px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-left border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[25px] left-[147px] w-[269px] h-[158px] text-base text-gray-2900 font-dm-sans">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[158px] border-[1px] border-solid border-gray-2100" />
          <div className="absolute h-[41.14%] w-[28.25%] top-[29.11%] right-[36.43%] bottom-[29.75%] left-[35.32%]">
            <img
              className="absolute h-[55.38%] w-[47.37%] top-[0%] right-[25%] bottom-[44.62%] left-[27.63%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylightplus1.svg"
            />
            <div className="absolute top-[44px] left-[0px] font-medium">
              New Repo
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_761.34px)] top-[203px] right-[103.34px] left-[658px] rounded-md box-border h-[196px] border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[297px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[21px] font-semibold">React</div>
              <div className="flex flex-row items-center justify-start gap-[7.66px] text-2xs text-slategray-200">
                <div className="relative leading-[18px]">By Astro-colab</div>
                <img className="relative w-3 h-3" alt="" src="/frame47.svg" />
              </div>
            </div>
            <div className="relative rounded-9xl bg-white shadow-[0px_3px_6px_#010409] w-14 h-14">
              <div className="absolute top-[calc(50%_-_14.94px)] left-[calc(50%_-_16.8px)] overflow-hidden flex flex-row items-start justify-start py-0 pr-[0.00782068818807602px] pl-[0.00781957060098648px]">
                <img
                  className="relative w-[33.58px] h-[29.88px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame48.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[90px] left-[17px] text-sm leading-[21px] text-slategray-200 flex items-center w-[415.34px] h-10">
            A popular JavaScript library for building user interfaces based on
            UI components.
          </div>
          <div className="absolute top-[calc(50%_+_49px)] left-[17px] rounded-md bg-darkslateblue-300 flex flex-row items-start justify-start py-1.5 pr-[20.546875px] pl-5 text-center border-[1px] border-solid border-aliceblue">
            <div className="relative leading-[20px] font-medium">
              Use this template
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_761.34px)] top-[432px] right-[103.34px] left-[658px] rounded-md box-border h-[196px] border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[297px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[21px] font-semibold">
                Research-Node
              </div>
              <div className="flex flex-row items-center justify-start gap-[7.66px] text-2xs text-slategray-200">
                <div className="relative leading-[18px]">By Astro-colab</div>
                <img className="relative w-3 h-3" alt="" src="/frame49.svg" />
              </div>
            </div>
            <img
              className="relative rounded-9xl w-[68px] h-[68px]"
              alt=""
              src="/frame50.svg"
            />
          </div>
          <div className="absolute top-[90px] left-[17px] text-sm leading-[21px] text-slategray-200 flex items-center w-[415.34px] h-10">
            A popular JavaScript library for building user interfaces based on
            UI components.
          </div>
          <div className="absolute top-[calc(50%_+_49px)] left-[17px] rounded-md bg-darkslateblue-300 flex flex-row items-start justify-start py-1.5 pr-[20.546875px] pl-5 text-center border-[1px] border-solid border-aliceblue">
            <div className="relative leading-[20px] font-medium">
              Use this template
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_761.34px)] top-[203px] right-[614.34px] left-[147px] rounded-md box-border h-[196px] border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[301px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[21px] font-semibold">Blank</div>
              <div className="flex flex-row items-center justify-start gap-[7.66px] text-2xs text-slategray-200">
                <div className="relative leading-[18px]">By Astro-colab</div>
                <img className="relative w-3 h-3" alt="" src="/frame47.svg" />
              </div>
            </div>
            <img
              className="relative rounded-9xl w-[68px] h-[68px]"
              alt=""
              src="/frame51.svg"
            />
          </div>
          <div className="absolute top-[90px] left-[17px] leading-[21px] text-slategray-200 flex items-center w-[365.76px] h-[19px]">
            Start with a blank canvas or import any packages you need.
          </div>
          <div className="absolute top-[calc(50%_+_49px)] left-[17px] rounded-md bg-darkslateblue-300 flex flex-row items-start justify-start py-1.5 pr-[20.546875px] pl-5 text-center border-[1px] border-solid border-aliceblue">
            <div className="relative leading-[20px] font-medium">
              Use this template
            </div>
          </div>
        </div>
        <div className="absolute top-[67px] left-[429px] leading-[21px] font-semibold">
          New Repo
        </div>
        <div className="absolute top-[88px] left-[429px] leading-[21px] text-slategray-200 flex items-center w-[365.76px] h-[19px]">
          Start with a your code or import any packages you need.
        </div>
        <div className="absolute w-[calc(100%_-_761.34px)] top-[432px] right-[614.34px] left-[147px] rounded-md box-border h-[196px] border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[17px] left-[17px] flex flex-row items-center justify-start gap-[252px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[21px] font-semibold">
                Jupyter Notebook
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-[48.125px] pl-0 gap-[7.66px] text-2xs text-slategray-200">
                <div className="relative leading-[18px]">By Astro-colab</div>
                <img className="relative w-3 h-3" alt="" src="/frame49.svg" />
              </div>
            </div>
            <div className="relative rounded-9xl bg-white shadow-[0px_3px_6px_#010409] w-14 h-14">
              <div className="absolute top-[calc(50%_-_15.39px)] left-[calc(50%_-_13.28px)] overflow-hidden flex flex-row items-start justify-start py-0 pr-[0.00306458561681211px] pl-[0.0030637255404144526px]">
                <img
                  className="relative w-[26.56px] h-[30.78px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame52.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[90px] left-[17px] text-sm leading-[21px] text-slategray-200 flex items-center w-[448.4px] h-10">
            JupyterLab is the latest web-based interactive development
            environment for notebooks, code, and data.
          </div>
          <div className="absolute top-[calc(50%_+_49px)] left-[17px] rounded-md bg-darkslateblue-300 flex flex-row items-start justify-start py-1.5 pr-[20.546875px] pl-5 text-center border-[1px] border-solid border-aliceblue">
            <div className="relative leading-[20px] font-medium">
              Use this template
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[32px] left-[31px] text-xl font-coda text-whitesmoke-200 text-left inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative1Click}
      >
        Astro Colab
      </div>
    </div>
  );
};

export default ProjectCreation;
