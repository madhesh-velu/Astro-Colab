import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Codespace = () => {
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

  const onResearchNodeTextClick = useCallback(() => {
    navigate("/research-node");
  }, [navigate]);

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-left text-base text-whitesmoke-300 font-poppins">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[859px] left-[454px] text-smi font-medium font-ubuntu text-center inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[80px] left-[24px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1300px] flex flex-row items-center justify-start gap-[617.89px] text-center text-sm text-lightgray-200 font-noto-sans">
        <div className="flex flex-row items-start justify-start py-[9px] pr-0 pl-[7px] gap-[16.7px]">
          <div
            className="relative leading-[30px] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="rounded-md flex flex-row items-start justify-start py-0 px-2 relative">
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-0.5 gap-[4.83px] z-[0]">
              <div className="relative leading-[30px] font-semibold">
                Codespace
              </div>
              <div className="rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-2xs-9 text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
                <div className="relative leading-[18px] font-medium">Beta</div>
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[0.01px] rounded-md bg-salmon-100 w-[105.86px] h-0.5 z-[1]" />
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
            onClick={onResearchNodeTextClick}
          >
            Research Node
          </div>
          <div className="relative w-[46.39px] h-[21px] text-lightgray-200">
            <div className="absolute top-[0px] left-[0px] leading-[21px]">
              Filter
            </div>
            <div className="absolute top-[calc(50%_-_0px)] left-[38.39px] box-border w-2 h-1 border-t-[4px] border-solid border-lightgray-200 border-r-[4px] border-l-[4px]" />
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_768px)] top-[169px] right-[711px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] text-lightsteelblue-200 border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[12px] left-[12px] rounded-lg bg-darkslategray-500 overflow-hidden flex flex-row items-center justify-start py-2 px-4 gap-[12px] border-[2px] border-solid border-darkslategray-100">
          <div className="relative font-medium">MLbot.py</div>
          <img className="relative w-5 h-5" alt="" src="/icon-lineclose1.svg" />
        </div>
        <div className="absolute top-[12px] left-[140px] rounded-lg bg-darkslategray-600 overflow-hidden flex flex-row items-center justify-start py-2 px-4 text-lightslategray-100 border-[2px] border-solid border-darkslategray-300">
          <div className="relative font-medium">.env</div>
        </div>
        <div className="absolute top-[76px] left-[12px] flex flex-col items-end justify-start text-xl text-slategray-100 font-cabin">
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">1</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">2</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">3</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">4</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">5</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">6</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">7</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5 text-lightsteelblue-200">
            <b className="relative">8</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">9</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">10</b>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-2.5">
            <b className="relative">11</b>
          </div>
        </div>
        <div className="absolute top-[76px] left-[70px] w-[994px] flex flex-col items-start justify-start text-xl text-lightgray-100 font-cabin">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-1 px-0 text-plum-300">
            <b className="relative">
              <span>from</span>
              <span className="text-mediumaquamarine-100">{` discord.ext `}</span>
              <span>import</span>
              <span className="text-mediumaquamarine-100"> commands</span>
            </b>
          </div>
          <div className="self-stretch h-[31px] overflow-hidden shrink-0" />
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-1 px-0">
            <b className="relative inline-block w-[253px]">
              <span className="text-skyblue">bot</span>
              <span> =</span>
              <span className="text-mediumaquamarine-100"> commands</span>
              <span>.</span>
              <span className="text-mediumaquamarine-100">Bot</span>
              <span>(</span>
              <span className="text-darksalmon">{`">"`}</span>
              <span>)</span>
            </b>
          </div>
          <div className="self-stretch h-[31px] overflow-hidden shrink-0" />
          <div className="self-stretch h-[31px] overflow-hidden shrink-0" />
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-1 px-0 text-palegoldenrod">
            <b className="relative">
              <span>@</span>
              <span className="text-skyblue">bot</span>
              <span>.command</span>
              <span className="text-lightgray-100">(</span>
              <span className="text-darksalmon">"ping"</span>
              <span className="text-lightgray-100">)</span>
            </b>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-1 px-0">
            <b className="relative">
              <span className="text-steelblue-100">async</span>
              <span>{` `}</span>
              <span className="text-steelblue-100">def</span>
              <span>{` `}</span>
              <span className="text-palegoldenrod">ping</span>
              <span>(</span>
              <span className="text-skyblue">ctx</span>
              <span>{`: `}</span>
              <span className="text-mediumaquamarine-100">commands</span>
              <span>.</span>
              <span className="text-mediumaquamarine-100">Context</span>
              <span>):</span>
            </b>
          </div>
          <div className="rounded box-border w-[530px] flex flex-col items-start justify-start py-1 px-0 border-t-[2px] border-solid border-darkslategray-600 border-b-[2px] border-l-[2px]">
            <b className="relative">
              <span>{`    `}</span>
              <span className="text-plum-300">await</span>
              <span>{` `}</span>
              <span className="text-skyblue">ctx</span>
              <span>.</span>
            </b>
          </div>
          <div className="self-stretch h-[31px] overflow-hidden shrink-0" />
          <div className="self-stretch h-[31px] overflow-hidden shrink-0" />
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-1 px-0">
            <b className="relative">
              <span className="text-skyblue">bot</span>
              <span>.</span>
              <span className="text-palegoldenrod">run</span>
              <span>(</span>
              <span className="text-darksalmon">"x0bxusbuubcbdgfo"</span>
              <span>)</span>
            </b>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[32px] left-[31px] text-xl font-coda text-whitesmoke-200 inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative1Click}
      >
        Astro Colab
      </div>
      <div className="absolute w-[calc(100%_-_870px)] top-[32px] right-[719px] left-[151px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] text-center text-sm text-white font-noto-sans border-[1px] border-solid border-darkslategray-400">
        <div className="relative leading-[20px] flex items-center justify-center w-[495px] shrink-0">
          Search or jump to…
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_757px)] top-[497px] right-[56px] left-[701px] rounded-md bg-mediumslateblue-600 box-border h-[317px] border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[0px] left-[-7px] rounded-xl box-border w-[633px] h-[317px] overflow-hidden border-[1px] border-solid border-gray-2400">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:blur(24px)] opacity-[0.4]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dark-mode-background-primary" />
          </div>
          <div className="absolute right-[0px] bottom-[0px] w-[187px] h-[31px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-lg rounded-tr-none rounded-br-xl rounded-bl-none bg-dark-mode-tab-container-background box-border w-[187px] h-[31px] border-[1px] border-solid border-dark-mode-tab-outline-color" />
          </div>
          <div className="absolute top-[40px] left-[0px] rounded-t-none rounded-br-none rounded-bl-lg box-border w-[44.5px] h-[540px] overflow-hidden border-r-[1px] border-solid border-dark-mode-tab-outline-color">
            <div className="absolute h-full w-[98.88%] top-[0%] right-[1.12%] bottom-[0%] left-[0%] bg-gray-1500" />
          </div>
          <div className="absolute w-full top-[1px] right-[0%] left-[0%] rounded-t-xl rounded-b-none h-10 overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dark-mode-tab-container-background box-border border-b-[1px] border-solid border-dark-mode-tab-outline-color" />
            <div className="absolute top-[14px] left-[14px] w-[50px] h-3 hidden flex-row items-center justify-start gap-[7px]">
              <div className="relative rounded-[50%] bg-tomato w-3 h-3" />
              <div className="relative rounded-[50%] bg-goldenrod w-3 h-3" />
              <div className="relative rounded-[50%] bg-limegreen w-3 h-3" />
            </div>
          </div>
          <img
            className="absolute top-[8px] left-[320px] w-[201px] h-8"
            alt=""
            src="/componentstab1.svg"
          />
          <img
            className="absolute h-[0.69%] w-[0.53%] top-[6.21%] right-[30.48%] bottom-[93.1%] left-[68.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/polygon-2.svg"
          />
          <div className="absolute top-[41px] left-[112px] bg-linen w-[5px] h-px" />
          <div className="absolute top-[86px] left-[44px] box-border w-[268px] h-[491px] border-[1px] border-solid border-divider-color">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-1500" />
          </div>
          <img
            className="absolute top-[40px] left-[44px] w-[268px] h-[46px]"
            alt=""
            src="/navheader.svg"
          />
          <div className="absolute top-[39px] left-[323px] bg-gray-1500 w-[194px] h-px" />
          <img
            className="absolute h-[0.69%] w-[0.53%] top-[6.21%] right-[56.55%] bottom-[93.1%] left-[42.91%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/polygon-3.svg"
          />
          <img
            className="absolute top-[469px] left-[2px] w-10 h-[98px]"
            alt=""
            src="/sidedocksettings1.svg"
          />
          <div className="absolute top-[16px] left-[566px] w-[50px] h-3 flex flex-row items-center justify-start gap-[7px]">
            <div className="relative rounded-[50%] bg-tomato w-3 h-3" />
            <div className="relative rounded-[50%] bg-goldenrod w-3 h-3" />
            <div className="relative rounded-[50%] bg-limegreen w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="absolute top-[482px] left-[280px] rounded-md bg-gray-600 w-[540px] h-[280px] overflow-hidden flex flex-col items-start justify-start text-lightslategray-100">
        <div className="bg-gray-300 w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border text-lightsteelblue-300">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-slategray-300 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-605.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-lavender-200">author</div>
          </div>
          <div className="relative font-medium">User | Member</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-606.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">args</div>
          </div>
          <div className="relative font-medium">List</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">bot</div>
          </div>
          <div className="relative font-medium">Bot</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium">Channel</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">
              clean_prefix
            </div>
          </div>
          <div className="relative font-medium">str</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">command</div>
          </div>
          <div className="relative font-medium">Command</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">
              command_failed
            </div>
          </div>
          <div className="relative font-medium">boolean</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/frame-607.svg"
              />
            </div>
            <div className="relative font-medium">Property</div>
            <div className="relative font-medium text-silver-200">
              current_argument
            </div>
          </div>
          <div className="relative font-medium">str | None</div>
        </div>
        <div className="w-[540px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-dimgray-500 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[8.48px] h-[11.33px]"
                alt=""
                src="/.svg"
              />
            </div>
            <div className="relative font-medium">Method</div>
            <div className="relative font-medium text-silver-200">send</div>
          </div>
          <div className="relative font-medium">Message</div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_757px)] top-[165px] right-[56px] left-[701px] rounded-md bg-mediumslateblue-600 box-border h-[298px] text-lightsteelblue-100 border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[0px] left-[0px] bg-gray-1500 box-border w-[626px] h-[293px] overflow-hidden flex flex-col items-start justify-start py-5 px-7 gap-[10px] border-t-[2px] border-solid border-darkslategray-300">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-col items-center justify-start">
                <div className="relative font-medium">Terminal</div>
                <div className="relative rounded-xl bg-lightsteelblue-100 w-4 h-0.5" />
              </div>
              <div className="relative font-medium text-lightslategray-100">
                Output
              </div>
            </div>
            <img
              className="relative w-5 h-5"
              alt=""
              src="/icon-lineclose1.svg"
            />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-3 px-0 text-xs font-ubuntu-mono">
            <div className="self-stretch flex-1 relative whitespace-pre-wrap">
              <p className="m-0">Microsoft Windows [Version 10.0.19044.2728]</p>
              <p className="m-0">
                (c) Microsoft Corporation. All rights reserved.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`C:\Users\X>`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codespace;
