import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onCommunityForumTextClick = useCallback(() => {
    navigate("/communitiy-forum");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    navigate("/support");
  }, [navigate]);

  const onCodeSpaceTextClick = useCallback(() => {
    navigate("/codespace");
  }, [navigate]);

  const onEditProfileTextClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onViewProfileTextClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/");
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
                Settings
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
          <div className="relative leading-[21px]">Settings</div>
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
      <div className="absolute w-[calc(100%_-_132px)] top-[169px] right-[75px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-left text-base text-lavender-100 border-[1px] border-solid border-darkslategray-400">
        <b className="absolute top-[26px] left-[31px] text-[24px] text-cornflowerblue-100">
          Setting
        </b>
        <b className="absolute top-[449px] left-[90px]">Enable sync</b>
        <b className="absolute top-[510px] left-[90px]">
          Enable 2 step verification
        </b>
        <b className="absolute top-[562px] left-[90px]">Enable One-time PIN</b>
        <img
          className="absolute top-[451px] left-[379px] w-3.5 h-3.5"
          alt=""
          src="/component-3.svg"
        />
        <img
          className="absolute top-[508px] left-[382px] w-3.5 h-3.5"
          alt=""
          src="/component-3.svg"
        />
        <div className="absolute top-[448px] left-[376px] w-[39px] h-5">
          <div className="absolute top-[0px] left-[0px] w-[39px] h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dimgray-100" />
          </div>
          <img
            className="absolute top-[3px] left-[3px] w-3.5 h-3.5"
            alt=""
            src="/component-3.svg"
          />
        </div>
        <div className="absolute top-[505px] left-[376px] w-[39px] h-5">
          <div className="absolute top-[0px] left-[0px] w-[39px] h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dimgray-100" />
          </div>
          <img
            className="absolute top-[3px] left-[3px] w-3.5 h-3.5"
            alt=""
            src="/component-3.svg"
          />
        </div>
        <div className="absolute top-[560px] left-[376px] w-[39px] h-5">
          <div className="absolute top-[0px] left-[0px] w-[39px] h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dimgray-100" />
          </div>
          <img
            className="absolute top-[3px] left-[3px] w-3.5 h-3.5"
            alt=""
            src="/component-3.svg"
          />
        </div>
        <img
          className="absolute top-[84px] left-[46px] rounded-3xs w-[780px] h-[310px]"
          alt=""
          src="/rectangle-11.svg"
        />
        <div className="absolute top-[119px] left-[91px] w-[211px] h-60 text-sm text-lavender-300 font-dm-sans">
          <div className="absolute top-[0px] left-[44px] w-[167px] h-[18px] text-lavender-100">
            <div className="absolute top-[0px] left-[0px] font-medium">
              General
            </div>
            <div className="absolute top-[0px] left-[164px] rounded-tl-12xs rounded-tr-none rounded-br-none rounded-bl-12xs bg-mediumslateblue-300 w-[3px] h-[18px]" />
          </div>
          <div className="absolute top-[54px] left-[44px] w-[63px] h-[18px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Networks
            </div>
            <img
              className="absolute h-[111.11%] w-[31.75%] top-[961.11%] right-[-57.14%] bottom-[-972.22%] left-[125.4%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/iconlylightmessage.svg"
            />
          </div>
          <div className="absolute top-[110px] left-[44px] w-16 h-[18px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Accounts
            </div>
            <img
              className="absolute h-[111.11%] w-[31.25%] top-[1272.22%] right-[-54.69%] bottom-[-1283.33%] left-[123.44%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/iconlylightgraph.svg"
            />
          </div>
          <div className="absolute top-[166px] left-[0px] w-[151px] h-5">
            <div className="absolute top-[0px] left-[44px] font-medium">{`About & Privacy`}</div>
            <img
              className="absolute h-full w-[13.25%] top-[0%] right-[86.75%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconlylight3-user1.svg"
            />
          </div>
          <div className="absolute top-[222px] left-[44px] w-[135px] h-[18px]">
            <div className="absolute top-[0px] left-[0px] font-medium">{`Reports & Feedback`}</div>
          </div>
        </div>
        <div className="absolute top-[117px] left-[436px] w-[131px] h-[178px] flex flex-col items-start justify-start gap-[29px]">
          <div className="relative font-medium">Add account</div>
          <div className="relative font-medium">Change password</div>
          <div className="relative font-medium">Change language</div>
          <div className="relative font-medium">New Codespace</div>
          <div className="relative font-medium">Multiple account</div>
        </div>
        <img
          className="absolute h-[3.09%] w-[1.6%] top-[35.34%] right-[91.53%] bottom-[61.57%] left-[6.87%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/iconlylight3-user2.svg"
        />
        <img
          className="absolute h-[2.98%] w-[1.12%] top-[18.21%] right-[91.93%] bottom-[78.81%] left-[6.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon.svg"
        />
        <img
          className="absolute w-[1.6%] top-[171px] right-[91.69%] left-[6.71%] max-w-full overflow-hidden h-5"
          alt=""
          src="/interface-essentialsignal.svg"
        />
        <img
          className="absolute w-[1.6%] top-[282px] right-[91.53%] left-[6.87%] max-w-full overflow-hidden h-5"
          alt=""
          src="/interface-essentialcommand.svg"
        />
        <img
          className="absolute w-[1.6%] top-[338px] right-[91.53%] left-[6.87%] max-w-full overflow-hidden h-5"
          alt=""
          src="/interface-essentialalerttriangle.svg"
        />
        <div className="absolute top-[305px] left-[572px] text-2xs-9 leading-[18px] font-medium font-noto-sans text-forestgreen-100 text-center">
          Beta
        </div>
        <div className="absolute w-[calc(100%_-_958px)] top-[17px] right-[21px] left-[937px] rounded-md bg-mediumslateblue-600 box-border h-[377px] text-center text-2xs-9 font-noto-sans border-[1px] border-solid border-darkslategray-400">
          <div className="absolute top-[11px] left-[12px] w-[214px] h-[212px] text-left text-sm font-dm-sans">
            <b className="absolute top-[0px] left-[85px] text-lg">
              User Profile
            </b>
            <b className="absolute top-[124px] left-[72px] text-base">
              Citizen Scientist
            </b>
            <div
              className="absolute top-[163px] left-[55px] font-medium text-mediumslateblue-300 cursor-pointer"
              onClick={onEditProfileTextClick}
            >
              Edit Profile
            </div>
            <div
              className="absolute top-[163px] left-[137px] font-medium text-mediumslateblue-300 cursor-pointer"
              onClick={onViewProfileTextClick}
            >
              View Profile
            </div>
            <div className="absolute top-[194px] left-[0px] font-medium text-plum-100">
              Skills
            </div>
            <img
              className="absolute top-[40px] left-[97px] w-[71px] h-[71px] object-cover"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <img
            className="absolute bottom-[156px] left-[257px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/helpcircle1.svg"
          />
          <img
            className="absolute bottom-[156px] left-[225px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/vault1.svg"
          />
          <img
            className="absolute bottom-[156px] left-[193px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/settings1.svg"
          />
          <div className="absolute top-[238px] left-[calc(50%_-_135.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
            <div className="relative leading-[18px] font-medium">
              Data Analyst
            </div>
          </div>
          <div className="absolute top-[267px] left-[calc(50%_+_37.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-khaki-200 border-[1px] border-solid border-khaki-100">
            <div className="relative leading-[18px] font-medium">
              JavaScript
            </div>
          </div>
          <div className="absolute top-[239px] left-[calc(50%_+_74.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-mediumaquamarine-200 border-[1px] border-solid border-darkcyan">
            <div className="relative leading-[18px] font-medium">SQL</div>
          </div>
          <div className="absolute top-[267px] left-[calc(50%_-_135.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-mediumslateblue-100 border-[1px] border-solid border-mediumslateblue-100">
            <div className="relative leading-[18px] font-medium">
              Quantum computing
            </div>
          </div>
          <div className="absolute top-[238px] left-[calc(50%_-_56.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-cornflowerblue-200 border-[1px] border-solid border-cornflowerblue-200">
            <div className="relative leading-[18px] font-medium">
              Machine learning
            </div>
          </div>
          <div className="absolute top-[267px] left-[calc(50%_-_14.34px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-salmon-100 border-[1px] border-solid border-salmon-100">
            <div className="relative leading-[18px] font-medium">Python</div>
          </div>
          <div className="absolute top-[238px] left-[calc(50%_+_46.81px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-darkviolet border-[1px] border-solid border-darkviolet">
            <div className="relative leading-[18px] font-medium">AI</div>
          </div>
          <div className="absolute w-[calc(100%_-_27px)] top-[325px] right-[15px] left-[12px] rounded-md bg-gray-3000 box-border h-8 text-smi text-white border-[1px] border-solid border-plum-200">
            <div className="absolute top-[6px] left-[89px] leading-[20px] font-medium flex items-center justify-center w-[93px] h-[19px]">
              Create Projects
            </div>
          </div>
        </div>
        <div className="absolute top-[589px] left-[1088px] w-[76px] h-[21px] font-dm-sans">
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
        <div className="absolute top-[571px] left-[1024px] w-[205px] h-14 font-dm-sans">
          <div
            className="absolute top-[0px] left-[0px] rounded-lg bg-mediumslateblue-200 w-[205px] h-14 cursor-pointer"
            onClick={onRectangle8Click}
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

export default Settings;
