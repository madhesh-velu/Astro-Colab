import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GraphView = () => {
  const navigate = useNavigate();

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onCommunityForumTextClick = useCallback(() => {
    navigate("/communitiy-forum");
  }, [navigate]);

  const onResearchNodeTextClick = useCallback(() => {
    navigate("/research-node");
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

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-left text-xs text-txt-desactive font-subtitulos">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[859px] left-[454px] text-smi font-medium font-ubuntu text-whitesmoke-300 text-center inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1537px] h-[1269px] text-sm text-white font-lato">
        <div className="absolute top-[882px] left-[1058px] bg-lightslategray-300 shadow-[0px_-1px_0px_#21262d_inset] w-[741px] h-px [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[141px] left-[1069px] bg-gray-1900 w-[301px] h-[741px] flex flex-col items-center justify-start gap-[15px] mix-blend-lighten">
          <div className="box-border w-[232px] flex flex-row items-center justify-between py-1.5 px-3.5 text-base border-b-[1px] border-solid border-gray-2600">
            <b className="relative">BlockHole Fourm #13</b>
            <div className="rounded-11xl bg-white w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <img
                className="relative w-[22px] h-[22px]"
                alt=""
                src="/group-10.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame14.svg"
              />
              <div className="relative opacity-[0.7]">Threads</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame15.svg"
              />
              <div className="relative opacity-[0.7]">All DMs</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame16.svg"
              />
              <div className="relative opacity-[0.7]">Drafts</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame17.svg"
              />
              <div className="relative opacity-[0.7]">{`Mnetions & reactions`}</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame18.svg"
              />
              <div className="relative opacity-[0.7]">Saved items</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                alt=""
                src="/frame19.svg"
              />
              <div className="relative opacity-[0.7]">More</div>
            </div>
          </div>
          <div className="self-stretch h-[524px] flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px] text-center text-mini">
              <div className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0 opacity-[0.7]">
                ⭐️
              </div>
              <div className="relative text-sm text-left opacity-[0.7]">
                Index
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <b className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
                  #
                </b>
                <b className="relative text-sm text-left">reseachers-team</b>
              </div>
              <div className="self-stretch bg-gray-1700 flex flex-row items-center justify-between py-[3px] pr-4 pl-[22px]">
                <b className="relative inline-block w-[286px] shrink-0">
                  {" "}
                  # colab
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <b className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
                  #
                </b>
                <b className="relative text-sm text-left">team-finance</b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px]">
                <div className="flex flex-row items-center justify-start relative gap-[6px]">
                  <img
                    className="relative rounded-sm w-[18px] h-[18px] object-cover z-[0]"
                    alt=""
                    src="/alborz@2x.png"
                  />
                  <div className="absolute my-0 mx-[!important] top-[11px] left-[11.5px] rounded-[50%] bg-mediumseagreen box-border w-[9px] h-[9px] z-[1] border-[1.5px] border-solid border-darkslateblue-500" />
                </div>
                <div className="relative opacity-[0.7]">Astro-Lead</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[7px] pr-0 pl-3 gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame20.svg"
                />
                <div className="relative opacity-[0.7]">Channels</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <div className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0 opacity-[0.7]">
                  #
                </div>
                <div className="relative text-sm text-left opacity-[0.7]">
                  announcements
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <div className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0 opacity-[0.7]">
                  #
                </div>
                <div className="relative text-sm text-left opacity-[0.7]">
                  pr
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/group-9.svg"
                />
                <div className="relative opacity-[0.7]">Add channel</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[7px] pr-0 pl-3 gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame20.svg"
                />
                <div className="relative opacity-[0.7]">Direct messages</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px]">
                <div className="flex flex-row items-center justify-start relative gap-[6px]">
                  <img
                    className="relative rounded-sm w-[18px] h-[18px] object-cover z-[0]"
                    alt=""
                    src="/alborz1@2x.png"
                  />
                  <div className="absolute my-0 mx-[!important] top-[11px] left-[11.5px] rounded-[50%] bg-mediumseagreen box-border w-[9px] h-[9px] z-[1] border-[1.5px] border-solid border-darkslateblue-500" />
                </div>
                <div className="relative opacity-[0.7]">Community Lead ✨</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-3xs">
                <div className="w-[18px] flex flex-row items-center justify-start relative gap-[6px]">
                  <img
                    className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-sm w-[13px] h-[13px] object-cover z-[0]"
                    alt=""
                    src="/alborz2@2x.png"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[5.5px] left-[6.5px] rounded-10xs w-[15px] h-[15px] z-[1]"
                    alt=""
                    src="/vector12.svg"
                  />
                  <b className="absolute my-0 mx-[!important] top-[7px] left-[8px] inline-block w-[13px] h-[13px] shrink-0 z-[2]">
                    73
                  </b>
                </div>
                <div className="relative text-sm opacity-[0.7]">
                  Team-Astro, Astro-colab...
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/group-9.svg"
                />
                <div className="relative opacity-[0.7]">Add teammates</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[7px] pr-0 pl-3 gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame20.svg"
                />
                <div className="relative opacity-[0.7]">Apps</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px]">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="relative rounded-sm w-[18px] h-[18px] object-cover"
                    alt=""
                    src="/alborz3@2x.png"
                  />
                </div>
                <div className="relative opacity-[0.7]">Google Calendar</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[7px] pr-0 pl-3 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/frame21.svg"
              />
              <div className="relative opacity-[0.7]">Graph view</div>
              <div className="flex-1 flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0.7]"
                  alt=""
                  src="/frame18.svg"
                />
                <b className="relative opacity-[0.7]">Blackhole</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[4.89%] w-[11.28%] top-[70%] right-[66.38%] bottom-[25.11%] left-[22.34%] rounded-xl bg-deepskyblue [backdrop-filter:blur(20px)] text-sm text-primary-color">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
        <div className="absolute h-[33.33%] w-[43.53%] top-[33.33%] left-[38.82%] font-medium inline-block">
          Proveedor
        </div>
        <img
          className="absolute h-3/6 w-[14.12%] top-[25%] right-[68.24%] bottom-[25%] left-[17.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bipluslg.svg"
        />
      </div>
      <div className="absolute h-[5%] w-[11.35%] top-[86.22%] right-[66.23%] bottom-[8.78%] left-[22.42%] rounded-xl bg-deepskyblue [backdrop-filter:blur(20px)] text-sm text-primary-color">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
        <div className="absolute h-[33.33%] w-[43.53%] top-[33.33%] left-[38.82%] font-medium inline-block">
          Proveedor
        </div>
        <img
          className="absolute h-3/6 w-[14.12%] top-[25%] right-[68.24%] bottom-[25%] left-[17.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bipluslg1.svg"
        />
      </div>
      <div className="absolute h-[9.78%] w-[12.94%] top-[54.33%] right-[45.7%] bottom-[35.89%] left-[41.36%]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-bg-card w-[195px] h-[118px]" />
        <div className="absolute top-[42px] left-[65px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Block Hole
        </div>
        <div className="absolute top-[86px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <img
          className="absolute top-[94px] left-[167px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <div className="absolute top-[94px] left-[139px] font-medium">View</div>
        <div className="absolute top-[94px] left-[26px] w-[69px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Related
          </div>
          <img
            className="absolute top-[0px] left-[53px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
      </div>
      <div className="absolute h-[6.89%] w-[12.94%] top-[33.78%] right-[65%] bottom-[59.33%] left-[22.05%]">
        <div className="absolute top-[-97px] left-[0px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[-97px] left-[-270px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[41px] left-[-272px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[178px] left-[-268px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[320px] left-[-273px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[461px] left-[-277px] rounded-xl bg-gray-1000 w-[195px] h-[85px]" />
        <div className="absolute top-[-85px] left-[16px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Quantum Gravity and Black Holes
        </div>
        <div className="absolute top-[-79px] left-[-252px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Black Hole Formation
        </div>
        <div className="absolute top-[59px] left-[-254px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Black Hole Anatomy
        </div>
        <div className="absolute top-[196px] left-[-250px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Hawking Radiation
        </div>
        <div className="absolute top-[331px] left-[-254px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Supermassive Black Holes
        </div>
        <div className="absolute top-[479px] left-[-259px] text-sm font-medium text-txt-active inline-block w-[159px]">
          Stellar Evolution
        </div>
        <div className="absolute top-[-44px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[-44px] left-[-270px] rounded-t-none rounded-b-xl bg-gray-1100 w-[195px] h-8" />
        <div className="absolute top-[94px] left-[-272px] rounded-t-none rounded-b-xl bg-gray-1100 w-[195px] h-8" />
        <div className="absolute top-[231px] left-[-268px] rounded-t-none rounded-b-xl bg-gray-1100 w-[195px] h-8" />
        <div className="absolute top-[373px] left-[-273px] rounded-t-none rounded-b-xl bg-gray-1100 w-[195px] h-8" />
        <div className="absolute top-[514px] left-[-277px] rounded-t-none rounded-b-xl bg-gray-1100 w-[195px] h-8" />
        <img
          className="absolute top-[-36px] left-[167px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort1.svg"
        />
        <div className="absolute top-[-36px] left-[111px] font-medium">
          contribute
        </div>
        <div className="absolute top-[-36px] left-[-162px] w-[75px] h-4">
          <img
            className="absolute top-[0px] left-[59px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort1.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-medium">
            contribute
          </div>
        </div>
        <div className="absolute top-[102px] left-[-163px] w-[74px] h-4">
          <img
            className="absolute top-[0px] left-[58px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort1.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-medium">
            contribute
          </div>
        </div>
        <div className="absolute top-[239px] left-[-158px] w-[73px] h-4">
          <img
            className="absolute top-[0px] left-[57px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort1.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-medium">
            contribute
          </div>
        </div>
        <div className="absolute top-[381px] left-[-163px] w-[73px] h-4">
          <img
            className="absolute top-[0px] left-[57px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-medium">
            contribute
          </div>
        </div>
        <div className="absolute top-[522px] left-[-169px] w-[75px] h-4">
          <img
            className="absolute top-[0px] left-[59px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <div className="absolute top-[0px] left-[0px] font-medium">
            contribute
          </div>
        </div>
        <div className="absolute top-[-36px] left-[-251px] w-[76px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[60px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
        <div className="absolute top-[102px] left-[-254px] w-[77px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[61px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
        <div className="absolute top-[239px] left-[-250px] w-[77px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[61px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
        <div className="absolute top-[381px] left-[-252px] w-[74px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[58px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
        <div className="absolute top-[522px] left-[-259px] w-[77px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[61px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
        <div className="absolute top-[-36px] left-[12px] w-[83px] h-4">
          <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[61px]">
            Research
          </div>
          <img
            className="absolute top-[0px] left-[67px] w-4 h-4 overflow-hidden"
            alt=""
            src="/fluentflow16regular.svg"
          />
        </div>
      </div>
      <div className="absolute h-[7.11%] w-[12.94%] top-[40.56%] right-[65%] bottom-[52.33%] left-[22.05%] rounded-xl bg-gray-1000" />
      <div className="absolute h-[2.89%] w-[10.63%] top-[41.44%] left-[23.21%] text-sm font-medium text-txt-active inline-block">
        Black Hole Evaporation
      </div>
      <div className="absolute h-[2.78%] w-[12.94%] top-[46.33%] right-[65%] bottom-[50.89%] left-[22.05%] rounded-t-none rounded-b-xl bg-bg-dark-2" />
      <div className="absolute h-[1.4%] w-[5.54%] top-[47%] right-[71.68%] bottom-[51.6%] left-[22.78%]">
        <div className="absolute h-[88.72%] w-[73.04%] top-[0%] left-[0%] font-medium inline-block">
          Research
        </div>
        <img
          className="absolute h-[94.64%] w-[19.16%] top-[5.36%] right-[0%] bottom-[0%] left-[80.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/fluentflow16regular1.svg"
        />
      </div>
      <img
        className="absolute h-[1.33%] w-[1.08%] top-[47.11%] right-[65.8%] bottom-[51.56%] left-[33.12%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/biarrowupshort2.svg"
      />
      <div className="absolute h-[1.22%] w-[4.63%] top-[47.11%] left-[28.85%] font-medium inline-block">
        contribute
      </div>
      <div className="absolute h-[7%] w-[12.87%] top-[52.11%] right-[65.37%] bottom-[40.89%] left-[21.76%] rounded-xl bg-gray-1000" />
      <div className="absolute h-[7%] w-[12.94%] top-[69.56%] right-[65%] bottom-[23.44%] left-[22.05%] rounded-xl bg-gray-1000" />
      <div className="absolute h-[7%] w-[12.87%] top-[85.78%] right-[64.93%] bottom-[7.22%] left-[22.2%] rounded-xl bg-gray-1000" />
      <div className="absolute h-[2.78%] w-[10.56%] top-[53.22%] left-[22.92%] text-sm font-medium text-txt-active inline-block">
        Black Hole Thermodynamic
      </div>
      <div className="absolute h-[2.89%] w-[10.63%] top-[70.89%] left-[23.21%] text-sm font-medium text-txt-active inline-block">
        Gravitational Waves
      </div>
      <div className="absolute h-[2.78%] w-[11.35%] top-[87.33%] left-[23.28%] text-sm font-medium text-txt-active inline-block">
        Primordial Black Holes
      </div>
      <div className="absolute h-[2.56%] w-[12.87%] top-[57.89%] right-[65.37%] bottom-[39.56%] left-[21.76%] rounded-t-none rounded-b-xl bg-bg-dark-2" />
      <div className="absolute h-[2.56%] w-[12.94%] top-[75.33%] right-[65%] bottom-[22.11%] left-[22.05%] rounded-t-none rounded-b-xl bg-bg-dark-2" />
      <div className="absolute h-[2.67%] w-[12.87%] top-[91.56%] right-[64.93%] bottom-[5.78%] left-[22.2%] rounded-t-none rounded-b-xl bg-bg-dark-2" />
      <img
        className="absolute h-[1.22%] w-[1.08%] top-[58.56%] right-[66.16%] bottom-[40.22%] left-[32.75%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/biarrowupshort3.svg"
      />
      <img
        className="absolute h-[1.22%] w-[1.08%] top-[76%] right-[65.8%] bottom-[22.78%] left-[33.12%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/biarrowupshort4.svg"
      />
      <img
        className="absolute h-[1.33%] w-[1.08%] top-[92.22%] right-[65.8%] bottom-[6.44%] left-[33.12%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/biarrowupshort5.svg"
      />
      <div className="absolute h-[1.11%] w-[4.77%] top-[58.44%] left-[28.56%] font-medium inline-block">
        contribute
      </div>
      <div className="absolute h-[1.11%] w-[4.34%] top-[75.78%] left-[28.99%] font-medium inline-block">
        contribute
      </div>
      <div className="absolute h-[1.22%] w-[4.7%] top-[92.11%] left-[28.99%] font-medium inline-block">
        contribute
      </div>
      <div className="absolute h-[1.49%] w-[5.43%] top-[58.44%] right-[72.01%] bottom-[40.06%] left-[22.56%]">
        <div className="absolute h-[83.46%] w-[74.58%] top-[0%] left-[0%] font-medium inline-block">
          Research
        </div>
        <img
          className="absolute h-[89.02%] w-[19.56%] top-[10.98%] right-[0%] bottom-[0%] left-[80.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/fluentflow16regular2.svg"
        />
      </div>
      <div className="absolute h-[1.5%] w-[5.4%] top-[75.78%] right-[71.68%] bottom-[22.72%] left-[22.92%]">
        <div className="absolute h-[83.03%] w-[74.99%] top-[0%] left-[0%] font-medium inline-block">
          Research
        </div>
        <img
          className="absolute h-[88.57%] w-[19.67%] top-[11.43%] right-[0%] bottom-[0%] left-[80.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/fluentflow16regular3.svg"
        />
      </div>
      <div className="absolute h-[1.48%] w-[5.1%] top-[92.22%] right-[71.62%] bottom-[6.3%] left-[23.28%]">
        <div className="absolute h-[89.92%] w-[93.56%] top-[0%] left-[0%] font-medium inline-block">
          Research
        </div>
        <img
          className="absolute h-[89.53%] w-[20.81%] top-[10.47%] right-[0%] bottom-[0%] left-[79.19%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/fluentflow16regular4.svg"
        />
      </div>
      <div className="absolute h-[7.11%] w-[12.94%] top-[28.33%] right-[26.97%] bottom-[64.56%] left-[60.09%] text-sm text-txt-active">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[18px] left-[18px] font-medium inline-block w-[159px]">
          Astronomy
        </div>
        <div className="absolute top-[53px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <img
          className="absolute top-[61px] left-[167px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort1.svg"
        />
        <div className="absolute top-[61px] left-[98px] text-xs font-medium text-txt-desactive">
          View Nodes
        </div>
      </div>
      <div className="absolute h-[27.67%] w-[5.35%] top-[31.56%] right-[39.62%] bottom-[40.78%] left-[55.03%]">
        <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[98.38%] w-[84.89%] top-[0.78%] right-[7.83%] bottom-[0.84%] left-[7.28%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-11.svg"
        />
        <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[0%] bottom-[97.6%] left-[91.58%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[27.67%] w-[5.35%] top-[31.56%] right-[39.62%] bottom-[40.78%] left-[55.03%]">
        <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[98.38%] w-[84.89%] top-[0.78%] right-[7.83%] bottom-[0.84%] left-[7.28%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-11.svg"
        />
        <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[0%] bottom-[97.6%] left-[91.58%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[28.96%] w-[6.97%] top-[28.41%] right-[51.38%] bottom-[42.64%] left-[41.65%] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[98.3%] w-[85.04%] top-[0.83%] right-[107.32%] bottom-[0.88%] left-[-92.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-12.svg"
        />
        <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[183.16%] bottom-[97.6%] left-[-91.58%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[33.35%] w-[6.97%] top-[90.05%] right-[51.38%] bottom-[-23.41%] left-[41.65%] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-[2.4%] w-[8.42%] top-[-97.6%] right-[91.58%] bottom-[195.21%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[98.19%] w-[85.14%] top-[-99.07%] right-[107.26%] bottom-[100.88%] left-[-92.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-13.svg"
        />
        <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[183.16%] bottom-[97.6%] left-[-91.58%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[13.36%] w-[6.97%] top-[44.01%] right-[51.38%] bottom-[42.64%] left-[41.65%] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-[5.19%] w-[8.42%] top-[94.81%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[96.68%] w-[84.97%] top-[1.65%] right-[107.43%] bottom-[1.67%] left-[-92.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-14.svg"
        />
        <div className="absolute h-[5.19%] w-[8.42%] top-[0%] right-[183.16%] bottom-[94.81%] left-[-91.58%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[1%] w-[7.3%] top-[56.37%] right-[51.05%] bottom-[42.63%] left-[41.65%] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-[69.13%] w-[8.04%] top-[30.11%] right-[91.96%] bottom-[0.77%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[93.42%] w-[85.7%] top-[17.66%] right-[107.09%] bottom-[-11.08%] left-[-92.8%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-15.svg"
        />
        <div className="absolute h-[69.13%] w-[8.04%] top-[0%] right-[183.92%] bottom-[30.87%] left-[-91.96%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[17.09%] w-[6.97%] top-[73.79%] right-[51.38%] bottom-[9.12%] left-[41.65%] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-[5.19%] w-[8.42%] top-[-94.81%] right-[91.58%] bottom-[189.62%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[96.31%] w-[85.02%] top-[-98.15%] right-[107.38%] bottom-[101.83%] left-[-92.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-16.svg"
        />
        <div className="absolute h-[5.19%] w-[8.42%] top-[0%] right-[183.16%] bottom-[94.81%] left-[-91.58%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-400" />
      </div>
      <div className="absolute h-[5.22%] w-[5.35%] top-[87.44%] right-[77.66%] bottom-[7.33%] left-[16.99%] text-xl text-whitesmoke-200 font-coda">
        <img
          className="absolute h-[12.77%] w-[10.81%] top-[91.49%] right-[112.84%] bottom-[-4.26%] left-[-23.65%] rounded max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-72.svg"
        />
        <img
          className="absolute h-[93.61%] w-[105.53%] top-[6.39%] right-[7.98%] bottom-[0%] left-[-13.51%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-17.svg"
        />
        <div className="absolute h-[12.9%] w-[10%] top-[0%] right-[0%] bottom-[87.1%] left-[90%] rounded bg-bg-card box-border border-[1px] border-solid border-txt-desactive" />
        <div className="absolute h-[2847.87%] w-[1384.67%] top-[-1721.28%] right-[-963.05%] bottom-[-1026.6%] left-[-321.62%] box-border border-b-[1px] border-solid border-darkslategray-400">
          <img
            className="absolute top-[58px] left-[calc(50%_-_486.33px)] w-[977px] h-[862px]"
            alt=""
            src="/frame22.svg"
          />
          <div
            className="absolute top-[44px] left-[26px] inline-block w-[120px] cursor-pointer"
            onClick={onIntroducingOurInnovative1Click}
          >
            Astro Colab
          </div>
          <div className="absolute w-[calc(100%_-_511.66px)] top-[44px] right-[365.66px] left-[146px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] text-center text-sm text-white font-noto-sans border-[1px] border-solid border-darkslategray-400">
            <div className="relative leading-[20px] flex items-center justify-center w-[495px] shrink-0">
              Search or jump to…
            </div>
          </div>
        </div>
        <div className="absolute h-[102.13%] w-[1954.05%] top-[-1506.38%] right-[-1567.57%] bottom-[1504.26%] left-[-286.49%] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] flex flex-row items-center justify-start gap-[577px] text-center text-sm text-lightgray-200 font-noto-sans">
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
                  Graph View
                </div>
                <div className="rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-2xs-9 text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
                  <div className="relative leading-[18px] font-medium">
                    Beta
                  </div>
                </div>
              </div>
              <div className="absolute my-0 mx-[!important] top-[37px] left-[7.01px] rounded-md bg-salmon-100 w-[105.86px] h-0.5 z-[1]" />
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
              onClick={onResearchNodeTextClick}
            >
              Research Node
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
      </div>
      <div className="absolute h-[5%] w-[11.28%] top-[83.33%] right-[30.22%] bottom-[11.67%] left-[58.5%] rounded-xl bg-gray-900 [backdrop-filter:blur(20px)] text-sm text-cornflowerblue-200">
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
  );
};

export default GraphView;
