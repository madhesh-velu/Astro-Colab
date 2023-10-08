import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
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

  const onRectangle3Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onActivityContainerClick = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-whitesmoke-300 font-ubuntu">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
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
      <div className="absolute w-[calc(100%_-_132px)] top-[169px] right-[75px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-left text-base text-gray-2900 font-dm-sans border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[23px] left-[18px] w-[877px] h-[610px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[158px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle3Click}
          />
          <div
            className="absolute top-[0px] left-[298px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[158px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle4Click}
          />
          <div
            className="absolute top-[0px] left-[594px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[158px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle5Click}
          />
          <div
            className="absolute top-[538px] left-[5px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[72px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle6Click}
          />
          <div
            className="absolute top-[538px] left-[318px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[72px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle7Click}
          />
          <div
            className="absolute top-[538px] left-[608px] rounded-3xs bg-gray-1200 box-border w-[269px] h-[72px] cursor-pointer border-[1px] border-solid border-gray-2100"
            onClick={onRectangle8Click}
          />
          <div className="absolute h-[10.66%] w-[8.67%] top-[7.54%] right-[80.5%] bottom-[81.8%] left-[10.83%]">
            <img
              className="absolute h-[55.38%] w-[47.37%] top-[0%] right-[25%] bottom-[44.62%] left-[27.63%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylightplus1.svg"
            />
            <div className="absolute top-[44px] left-[0px] font-medium">
              New Repo
            </div>
          </div>
          <div className="absolute h-[10.98%] w-[12.2%] top-[7.54%] right-[44.01%] bottom-[81.48%] left-[43.79%]">
            <img
              className="absolute h-[53.73%] w-[33.64%] top-[0%] right-[38.32%] bottom-[46.27%] left-[28.04%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylightplus1.svg"
            />
            <div className="absolute top-[46px] left-[0px] font-medium">
              New Research
            </div>
          </div>
          <div className="absolute h-[10.82%] w-[14.25%] top-[7.54%] right-[9.81%] bottom-[81.64%] left-[75.94%]">
            <img
              className="absolute h-[54.55%] w-[28.8%] top-[0%] right-[36%] bottom-[45.45%] left-[35.2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylightplus1.svg"
            />
            <div className="absolute top-[45px] left-[0px] font-medium">
              New Graph View
            </div>
          </div>
        </div>
        <div className="absolute top-[217px] left-[4px] w-[869px] h-[314px] text-[28px] text-lavender-100">
          <b className="absolute top-[0px] left-[31px] uppercase">
            Create files
          </b>
          <div
            className="absolute top-[69px] left-[0px] w-[869px] h-[245px] cursor-pointer"
            onClick={onActivityContainerClick}
          >
            <div className="absolute top-[0px] left-[15px] rounded-lg bg-gray-1300 w-[854px] h-[232px]" />
          </div>
          <div className="absolute top-[15px] left-[743px] w-[126px] h-[21px] text-base text-mediumslateblue-300">
            <div className="absolute top-[0px] left-[0px] font-medium">
              More Activity
            </div>
            <img
              className="absolute top-[8.32px] left-[111px] w-[15.5px] h-[7.36px]"
              alt=""
              src="/arrow-2.svg"
            />
          </div>
        </div>
        <img
          className="absolute h-[4.86%] w-[2.52%] top-[59.3%] right-[63.17%] bottom-[35.84%] left-[34.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/plus.svg"
        />
        <img
          className="absolute h-[3.29%] w-[1.65%] top-[88.93%] right-[88.1%] bottom-[7.78%] left-[10.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/plus1.svg"
        />
        <img
          className="absolute h-[3.29%] w-[1.65%] top-[88.93%] right-[61.56%] bottom-[7.78%] left-[36.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/plus1.svg"
        />
        <img
          className="absolute h-[3.29%] w-[1.65%] top-[89.24%] right-[37.58%] bottom-[7.47%] left-[60.77%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/plus1.svg"
        />
        <div className="absolute top-[428px] left-[371px] font-medium">
          New Research node
        </div>
        <div className="absolute top-[603px] left-[102px] font-medium inline-block w-20 h-3.5">
          Add Skills
        </div>
        <div className="absolute top-[605px] left-[431px] font-medium inline-block w-20 h-3.5">
          New Team
        </div>
        <div className="absolute top-[607px] left-[731px] font-medium inline-block w-[84px] h-3.5">
          New Colab
        </div>
        <div className="absolute top-[60px] left-[944px] rounded-md bg-gray-1000 box-border w-[279px] h-[561px] text-smi text-lightgray-200 font-noto-sans border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[1px] left-[1px] rounded-t-md rounded-b-none bg-darkslateblue-400 box-border w-[278px] h-[38px] text-center text-xs text-white border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[0px] left-[0px] rounded-tl-md rounded-tr-none rounded-b-none bg-salmon-100 w-0.5 h-[37px]" />
            <div className="absolute top-[9px] left-[16px] text-smi leading-[21px] text-lightgray-200 text-left flex items-center w-[75.73px] h-[19px]">
              Astronomy
            </div>
            <div className="absolute top-[9px] left-[193px] rounded-3xl bg-slategray-200 w-[34.7px] h-5">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[20.9px] h-4">
                62K
              </div>
            </div>
            <div className="absolute top-[408px] left-[0px] box-border w-[231px] h-[38px] border-b-[1px] border-solid border-gray-400">
              <div className="absolute top-[7px] left-[201px] rounded-3xl bg-slategray-200 w-[34.66px] h-5">
                <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[20.86px] h-4">
                  33K
                </div>
              </div>
            </div>
            <div className="absolute top-[408px] left-[0px] box-border w-[231px] h-[38px] border-b-[1px] border-solid border-gray-400" />
          </div>
          <div className="absolute top-[447px] left-[1px] box-border w-[278px] h-[38px] text-sm border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[156px] h-[19px]">
              Economics, Econometric, Finance
            </div>
            <div className="absolute top-[8px] left-[203px] rounded-3xl bg-slategray-200 w-[34.66px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[20.86px] h-4">
                33K
              </div>
            </div>
          </div>
          <div className="absolute top-[485px] left-[0px] box-border w-[279px] h-[38px] text-sm border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[46px] h-[19px]">
              Energy
            </div>
            <div className="absolute top-[9px] left-[203px] rounded-3xl bg-slategray-200 w-[34.66px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[20.86px] h-4">
                33K
              </div>
            </div>
          </div>
          <div className="absolute top-[523px] left-[0px] box-border w-[279px] h-[38px] text-sm border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[86px] h-[19px]">
              Mathematics
            </div>
            <div className="absolute top-[8px] left-[203px] rounded-3xl bg-slategray-200 w-[34.66px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[20.86px] h-4">
                33K
              </div>
            </div>
          </div>
          <div className="absolute top-[52px] left-[1px] box-border w-[278px] h-[38px] text-sm border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[16px] left-[16px] leading-[21px] flex items-center w-[168px] h-[19px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Biochemistry, Genetics, Molecular Biology</p>
              </span>
            </div>
            <div className="absolute top-[9px] left-[193px] rounded-3xl bg-slategray-200 w-[38.45px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[24.65px] h-4">
                56M
              </div>
            </div>
          </div>
          <div className="absolute top-[103px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[15px] left-[18px] leading-[21px] flex items-center w-[100px] h-[19px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Neurosciences</p>
              </span>
            </div>
            <div className="absolute top-[9px] left-[196px] rounded-3xl bg-slategray-200 w-[32.02px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[18.22px] h-4">
                4M
              </div>
            </div>
          </div>
          <div className="absolute top-[154px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[152px] h-[19px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">{`Earth & Planetary Sciences
`}</p>
              </span>
            </div>
            <div className="absolute top-[8px] left-[194px] rounded-3xl bg-slategray-200 w-[39.53px] h-5 text-center text-2xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[25.73px] h-4">
                610K
              </div>
            </div>
          </div>
          <div className="absolute top-[205px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[10px] left-[15px] leading-[21px] flex items-center w-[71.07px] h-[19px]">
              Chemistry
            </div>
            <div className="absolute top-[9px] left-[199px] rounded-3xl bg-slategray-200 w-[28.03px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-[14.23px] h-4">
                6K
              </div>
            </div>
          </div>
          <div className="absolute top-[256px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[56.75px] h-[19px]">
              Medicine
            </div>
            <div className="absolute top-[9px] left-[197px] rounded-3xl bg-slategray-200 w-[31px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[3px] leading-[18px] font-medium flex items-center justify-center w-[25px] h-4">
                70M
              </div>
            </div>
          </div>
          <div className="absolute top-[307px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[9px] left-[16px] leading-[21px] flex items-center w-[110px] h-[19px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">{`Immunology & Microbiology
`}</p>
              </span>
            </div>
            <div className="absolute top-[7px] left-[198px] rounded-3xl bg-slategray-200 w-[33px] h-[22px] text-center text-xs text-white">
              <div className="absolute top-[3px] left-[7px] leading-[18px] font-medium flex items-center justify-center w-5 h-4">
                90k
              </div>
            </div>
          </div>
          <div className="absolute top-[358px] left-[1px] box-border w-[278px] h-[38px] border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[4px] left-[17px] leading-[21px] flex items-center w-[120px] h-[19px]">{`Agricultural & Biological Sciences`}</div>
            <div className="absolute top-[8px] left-[203px] rounded-3xl bg-slategray-200 w-[27.41px] h-5 text-center text-xs text-white">
              <div className="absolute top-[2px] left-[4px] leading-[18px] font-medium flex items-center justify-center w-5 h-4">
                66k
              </div>
            </div>
          </div>
          <div className="absolute top-[409px] left-[1px] box-border w-[278px] h-[38px] text-sm border-b-[1px] border-solid border-gray-400">
            <div className="absolute top-[7px] left-[16px] leading-[21px] flex items-center w-[116px] h-[19px]">
              Computer Science
            </div>
          </div>
        </div>
        <div className="absolute top-[30px] left-[1037px] text-smi leading-[21px] font-semibold font-noto-sans text-lightgray-200 flex items-center w-[101.64px] h-[21px]">
          Top Repositories
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

export default NewProject;
