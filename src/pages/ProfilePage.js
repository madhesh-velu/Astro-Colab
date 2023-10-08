import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
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

  const onComponent19ContainerClick = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/graph-view");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-2xs-9 text-lightgray-200 font-noto-sans">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[859px] left-[454px] text-smi font-medium font-ubuntu text-whitesmoke-300 inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[80px] left-[24px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1303px] flex flex-row items-center justify-start gap-[709px] text-sm">
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
                Profile
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[0.3px] rounded-md bg-salmon-100 w-[61px] h-0.5 z-[1]" />
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
      <div className="absolute w-[calc(100%_-_1042px)] top-[169px] right-[985px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-left border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[237px] left-[292px] w-[296px] h-[21px]" />
        <div className="absolute top-[238px] left-[39px] w-[96.75px] h-[19px] text-sm">
          <img
            className="absolute top-[3px] left-[calc(50%_-_48.38px)] w-4 h-4"
            alt=""
            src="/frame38.svg"
          />
          <div className="absolute top-[-1px] left-[19.84px] leading-[21px]">
            <span className="font-semibold">12k</span>
            <span className="text-lightslategray-200"> followers</span>
          </div>
        </div>
        <div className="absolute top-[237px] left-[142.63px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-sm">
          <div className="relative leading-[21px] flex items-center w-1.5 shrink-0">{`·  `}</div>
          <div className="relative leading-[21px]">
            <span className="font-semibold">30</span>
            <span className="text-lightslategray-200"> following</span>
          </div>
        </div>
        <img
          className="absolute top-[276px] left-[calc(50%_-_134.5px)] w-4 h-4"
          alt=""
          src="/frame39.svg"
        />
        <div className="absolute top-[272px] left-[60px] text-smi leading-[21px]">
          India
        </div>
        <img
          className="absolute top-[307px] left-[calc(50%_-_131.5px)] w-4 h-4"
          alt=""
          src="/frame40.svg"
        />
        <div className="absolute top-[303px] left-[63px] text-smi leading-[21px]">
          https://spaceappchallege23.com/
        </div>
        <div className="absolute top-[274px] left-[292px] flex flex-col items-start justify-start">
          <div className="relative w-[296px] h-[25px]" />
          <div className="relative w-[296px] h-[25px]" />
        </div>
        <img
          className="absolute bottom-[290px] left-[315px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/helpcircle1.svg"
        />
        <img
          className="absolute bottom-[290px] left-[283px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/vault1.svg"
        />
        <img
          className="absolute bottom-[290px] left-[251px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/settings1.svg"
        />
        <div className="absolute top-[344px] left-[40px] text-sm font-medium font-dm-sans text-plum-100">
          Skills
        </div>
        <div className="absolute bottom-[254px] left-[281px] w-[18px] h-[18px] overflow-hidden" />
        <div className="absolute bottom-[254px] left-[249px] w-[18px] h-[18px] overflow-hidden" />
        <div className="absolute bottom-[254px] left-[217px] w-[18px] h-[18px] overflow-hidden" />
        <div className="absolute top-[378px] left-[calc(50%_-_130.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
          <div className="relative leading-[18px] font-medium">
            Data Analyst
          </div>
        </div>
        <div className="absolute top-[407px] left-[calc(50%_+_42.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-khaki-200 border-[1px] border-solid border-khaki-100">
          <div className="relative leading-[18px] font-medium">JavaScript</div>
        </div>
        <div className="absolute top-[379px] left-[calc(50%_+_79.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-mediumaquamarine-200 border-[1px] border-solid border-darkcyan">
          <div className="relative leading-[18px] font-medium">SQL</div>
        </div>
        <div className="absolute top-[407px] left-[calc(50%_-_130.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-mediumslateblue-100 border-[1px] border-solid border-mediumslateblue-100">
          <div className="relative leading-[18px] font-medium">
            Quantum computing
          </div>
        </div>
        <div className="absolute top-[378px] left-[calc(50%_-_51.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-cornflowerblue-200 border-[1px] border-solid border-cornflowerblue-200">
          <div className="relative leading-[18px] font-medium">
            Machine learning
          </div>
        </div>
        <div className="absolute top-[407px] left-[calc(50%_-_9.34px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-salmon-100 border-[1px] border-solid border-salmon-100">
          <div className="relative leading-[18px] font-medium">Python</div>
        </div>
        <div className="absolute top-[378px] left-[calc(50%_+_51.81px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-center text-darkviolet border-[1px] border-solid border-darkviolet">
          <div className="relative leading-[18px] font-medium">AI</div>
        </div>
        <div className="absolute top-[481px] left-[29px] box-border w-[296px] h-[147px] text-smi border-t-[1px] border-solid border-gray-400">
          <div className="absolute top-[18px] left-[0px] leading-[21px] font-semibold flex items-center w-[101.64px] h-[21px]">
            Top Repositories
          </div>
          <div className="absolute top-[126px] left-[0px] w-[296px] h-[21px]" />
          <div
            className="absolute h-[30.61%] w-[52.7%] top-[36.73%] right-[44.93%] bottom-[32.65%] left-[2.36%] rounded-xl bg-gray-900 [backdrop-filter:blur(20px)] cursor-pointer text-sm text-cornflowerblue-200 font-subtitulos"
            onClick={onComponent19ContainerClick}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
            <div className="absolute h-full w-[51.92%] top-[0%] left-[39.1%] font-medium flex items-center">
              Create new
            </div>
            <img
              className="absolute h-[39.6%] w-[14.12%] top-[29.95%] right-[68.24%] bottom-[30.45%] left-[17.65%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/bipluslg2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[451px] left-[40px] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[9.140625px] pl-[9px] text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
          <div className="relative leading-[18px]">Beta</div>
        </div>
        <div className="absolute top-[454px] left-[89px] text-xs leading-[18px] text-cornflowerblue-100 flex items-center w-[127px] h-4">
          Based On Your Interest
        </div>
        <div className="absolute top-[526px] left-[36px]" />
      </div>
      <div
        className="absolute top-[32px] left-[31px] text-xl font-coda text-whitesmoke-200 text-left inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative1Click}
      >
        Astro Colab
      </div>
      <div className="absolute top-[197px] left-[-107px] w-[478px] h-[443px] text-left text-xl text-lavender-100 font-dm-sans">
        <b className="absolute top-[0px] left-[291px] text-lg">User Profile</b>
        <b className="absolute top-[130px] left-[258px]">Citizen Scientist</b>
        <div className="absolute top-[166px] left-[302px] text-sm font-medium text-mediumslateblue-300">
          Edit Profile
        </div>
        <div className="absolute top-[425px] left-[415px] text-sm font-medium text-mediumslateblue-300">
          Edit Skills
        </div>
        <b className="absolute top-[274px] left-[0px] text-white">Skills</b>
        <img
          className="absolute top-[42px] left-[302px] w-[71px] h-[71px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className="absolute top-[1370.42px] left-[1116.5px] leading-[18px] font-medium text-forestgreen-100">
        Data Analyst
      </div>
      <div className="absolute top-[1399.42px] left-[1137px] leading-[18px] font-medium text-mediumslateblue-100">
        Quantum computing
      </div>
      <div className="absolute h-[calc(100%_-_508px)] w-[calc(100%_-_983px)] top-[184px] right-[37px] bottom-[324px] left-[946px] overflow-hidden bg-[url('/public/frame41@3x.png')] bg-cover bg-no-repeat bg-[top] text-smi text-white">
        <div className="absolute top-[73px] left-[19px] text-mid leading-[21px] font-semibold text-left flex items-center w-[355px] h-32">
          Quantum dots, often referred to as semiconductor nanocrystals, are
          tiny particles on the nanoscale with unique optical and electronic
          characteristics arising from quantum mechanical effects,
          distinguishing them from larger particles.
        </div>
        <div className="absolute top-[30px] left-[191px] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-2xs-9 text-darkviolet border-[1px] border-solid border-darkslateblue-100">
          <div className="relative leading-[18px] font-medium">Hot</div>
        </div>
        <div
          className="absolute w-[calc(100%_-_134px)] top-[223px] right-[115px] left-[19px] rounded-md bg-gray-3000 box-border h-8 cursor-pointer border-[1px] border-solid border-silver-100"
          onClick={onFrameContainer4Click}
        >
          <div className="absolute top-[6px] left-[91.75px] leading-[20px] font-medium flex items-center justify-center w-[82.68px] h-[19px]">
            Graph View
          </div>
        </div>
        <div
          className="absolute w-[calc(100%_-_134px)] top-[277px] right-[115px] left-[19px] rounded-md bg-gray-3000 box-border h-8 cursor-pointer border-[1px] border-solid border-silver-100"
          onClick={onFrameContainer5Click}
        >
          <div className="absolute top-[6px] left-[91.75px] leading-[20px] font-medium flex items-center justify-center w-[82.68px] h-[19px]">
            Contribute
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_134px)] top-[331px] right-[115px] left-[19px] rounded-md bg-gray-3000 box-border h-8 text-xs-9 border-[1px] border-solid border-silver-100">
          <div className="absolute top-[6px] left-[91.75px] leading-[18px] font-medium flex items-center justify-center w-[82.68px] h-[19px]">
            Research Node
          </div>
        </div>
      </div>
      <b className="absolute h-[2.78%] w-[10.7%] top-[23.56%] left-[71.22%] text-mid leading-[30px] flex text-white items-center justify-center">
        Quantum dot 23
      </b>
      <img
        className="absolute h-[2.11%] w-[1.45%] top-[24%] right-[28.78%] bottom-[73.89%] left-[69.78%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-11@2x.png"
      />
      <div className="absolute w-[calc(100%_-_899px)] top-[181px] right-[449px] left-[450px] rounded-md bg-mediumslateblue-600 box-border h-[388px] text-left text-sm text-darkgray-100 font-poppins border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[17px] left-[-216px] rounded-[50%] bg-gray-200 shadow-[3px_3px_60px_rgba(255,_255,_255,_0.2)] w-[448px] h-[349px]" />
        <img
          className="absolute top-[38.77px] left-[0.82px] w-[258.52px] h-[304.49px]"
          alt=""
          src="/vector-18.svg"
        />
        <img
          className="absolute top-[90.07px] left-[-47.18px] w-[156.53px] h-[209.89px]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[173.36px] left-[-0.18px] w-[260.52px] h-[40.74px]"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="absolute top-[17.07px] left-[30.57px] w-[201.03px] h-[348.62px]"
          alt=""
          src="/group-2.svg"
        />
        <img
          className="absolute top-[45.74px] left-[14.16px] w-[163.11px] h-[290.55px]"
          alt=""
          src="/group-3.svg"
        />
        <div className="absolute top-[7px] left-[94px] font-medium inline-block w-36 h-4">
          {" "}
          30 classifications
        </div>
        <div className="absolute top-[40px] left-[166px] font-medium inline-block w-[116px] h-4">
          15 contributions
        </div>
        <div className="absolute top-[84px] left-[222px] font-medium inline-block w-[107px] h-4">
          20 Pull Request
        </div>
        <div className="absolute top-[135px] left-[251px] font-medium inline-block w-28 h-4">
          20 issue solved
        </div>
        <div className="absolute top-[232px] left-[257px] font-medium inline-block w-[95px] h-4">
          4 discovery
        </div>
        <div className="absolute top-[284px] left-[220px] font-medium inline-block w-[198px] h-4">
          20 merge request accepted
        </div>
        <div className="absolute top-[327px] left-[168px] font-medium inline-block w-[130px] h-4">
          10+ active cloabs
        </div>
        <div className="absolute top-[366px] left-[95px] font-medium inline-block w-[140px] h-4">
          30 Problems sloved
        </div>
        <div className="absolute top-[177px] left-[286px] text-xl font-medium text-white inline-block w-52 h-7">{`57 active days `}</div>
        <div className="absolute top-[164px] left-[286px] text-xs font-semibold text-blueviolet inline-block w-[47px] h-3.5">
          Streaks
        </div>
        <div className="absolute top-[189.85px] left-[270.62px] rounded-[50%] bg-orange w-[5.06px] h-[3.82px]" />
        <b className="absolute top-[13px] left-[361px] text-lg font-dm-sans text-lavender-100">
          User Activity
        </b>
      </div>
      <div className="absolute w-[calc(100%_-_487px)] top-[604px] right-[37px] left-[450px] rounded-md bg-mediumslateblue-600 box-border h-[221px] text-left text-xs border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[4px] left-[calc(50%_-_425.5px)] overflow-hidden flex flex-row items-start justify-start">
          <div className="overflow-hidden" />
        </div>
        <div className="absolute top-[calc(50%_-_65.5px)] left-[calc(50%_-_412px)] w-[824px] h-[15px]">
          <div className="absolute top-[0px] left-[33px] text-2xs leading-[18px]">
            Mar
          </div>
          <div className="absolute top-[0px] left-[63px] leading-[18px]">
            Apr
          </div>
          <div className="absolute top-[0px] left-[123px] leading-[18px]">
            May
          </div>
          <div className="absolute top-[0px] left-[198px] leading-[18px]">
            Jun
          </div>
          <div className="absolute top-[0px] left-[258px] leading-[18px]">
            Jul
          </div>
          <div className="absolute top-[0px] left-[333px] leading-[18px]">
            Aug
          </div>
          <div className="absolute top-[0px] left-[393px] leading-[18px]">
            Sep
          </div>
          <div className="absolute top-[0px] left-[453px] leading-[18px]">
            Oct
          </div>
          <div className="absolute top-[0px] left-[528px] leading-[18px]">
            Nov
          </div>
          <div className="absolute top-[0px] left-[588px] leading-[18px]">
            Dec
          </div>
          <div className="absolute top-[0px] left-[648px] leading-[18px]">
            Jan
          </div>
          <div className="absolute top-[0px] left-[723px] leading-[18px]">
            Feb
          </div>
          <div className="absolute top-[0px] left-[783px] text-2xs leading-[18px]">
            Mar
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_42.5px)] left-[calc(50%_-_412px)] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative w-[824px] h-[11px] text-2xs">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_401px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Sun
            </div>
          </div>
          <div className="relative w-[824px] h-[11px]">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-darkslateblue-200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Mon
            </div>
          </div>
          <div className="relative w-[824px] h-[11px]">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-darkslateblue-200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-darkslateblue-200 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Tue
            </div>
          </div>
          <div className="relative w-[824px] h-[11px]">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-darkslateblue-200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-darkslateblue-200 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Wed
            </div>
          </div>
          <div className="relative w-[824px] h-[11px] text-2xs">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-darkslateblue-200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-darkslateblue-200 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Thu
            </div>
          </div>
          <div className="relative w-[824px] h-[11px] text-2xs">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-darkslateblue-200 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-mediumslateblue-500 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2200" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Fri
            </div>
          </div>
          <div className="relative w-[824px] h-[11px]">
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_379px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_364px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_349px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_334px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_319px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_304px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_289px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_274px)] rounded-sm bg-blueviolet w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_259px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_244px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_229px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_214px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_199px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_184px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_169px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_154px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_139px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_124px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_109px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_94px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_79px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_64px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_49px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_34px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_19px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_4px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_11px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_26px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_41px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_56px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_71px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_86px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_101px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_116px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_131px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_146px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_161px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_191px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_206px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_221px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_236px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_251px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_266px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_281px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_296px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_311px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_326px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_341px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_356px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_371px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_386px)] rounded-sm bg-gray-700 w-[11px] h-[11px]">
              <div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_5.5px)] rounded-sm box-border w-[11px] h-[11px] border-[1px] border-solid border-gray-2300" />
            </div>
            <div className="absolute top-[-3px] left-[0px] leading-[18px]">
              Sat
            </div>
          </div>
        </div>
        <div className="absolute top-[178px] left-[41px] text-2xs leading-[18px] text-lightslategray-200 text-center flex items-center justify-center w-[180.25px] h-4">
          Learn how we count contributions
        </div>
        <div className="absolute top-[177px] left-[734.86px] w-[120.14px] h-[18px] text-center text-lightslategray-200">
          <div className="absolute top-[1px] left-[0px] leading-[18px] flex items-center justify-center w-[25.61px] h-4">
            Less
          </div>
          <img
            className="absolute top-[4px] left-[calc(50%_-_34.66px)] w-2.5 h-2.5 overflow-hidden"
            alt=""
            src="/frame42.svg"
          />
          <img
            className="absolute top-[4px] left-[calc(50%_-_21.37px)] w-2.5 h-2.5 overflow-hidden"
            alt=""
            src="/frame43.svg"
          />
          <img
            className="absolute top-[4px] left-[calc(50%_-_8.07px)] w-2.5 h-2.5 overflow-hidden"
            alt=""
            src="/frame44.svg"
          />
          <img
            className="absolute top-[4px] left-[calc(50%_+_5.23px)] w-2.5 h-2.5 overflow-hidden"
            alt=""
            src="/frame45.svg"
          />
          <img
            className="absolute top-[4px] left-[calc(50%_+_18.52px)] w-2.5 h-2.5 overflow-hidden"
            alt=""
            src="/frame46.svg"
          />
          <div className="absolute top-[1px] left-[88.59px] leading-[18px] flex items-center justify-center w-[31.75px] h-4">
            More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
