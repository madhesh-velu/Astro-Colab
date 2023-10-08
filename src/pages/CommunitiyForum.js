import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CommunitiyForum = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/profile-page");
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

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-white font-noto-sans">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-1300 w-[1440px] h-[900px] opacity-[0.5] mix-blend-hard-light" />
      <div className="absolute top-[859px] left-[454px] font-medium font-ubuntu text-whitesmoke-300 inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute top-[80px] left-[24px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1344px] flex flex-row items-center justify-start gap-[518px] text-sm text-lightgray-200">
        <div className="flex flex-row items-start justify-start py-[9px] pr-0 pl-[7px] gap-[16.7px]">
          <div
            className="relative leading-[30px] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="rounded-md flex flex-row items-start justify-start py-0 px-2 relative text-cornflowerblue-100">
            <div className="flex flex-row items-center justify-start py-0 pr-0 pl-0.5 gap-[4.83px] z-[0]">
              <div className="relative leading-[21px]">Community Forum</div>
              <div className="rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-2xs-9 text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
                <div className="relative leading-[18px] font-medium">Beta</div>
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[17.01px] rounded-md bg-salmon-100 w-[105.86px] h-0.5 z-[1]" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[23.81px] text-left text-cornflowerblue-100">
          <div
            className="relative leading-[21px] cursor-pointer"
            onClick={onProfileTextClick}
          >
            Profile
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
      <div className="absolute w-[calc(100%_-_420px)] top-[169px] right-[112px] left-[308px] rounded-md bg-mediumslateblue-600 box-border h-[681px] text-left font-lato border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] w-[963px] flex flex-col items-start justify-start text-base">
          <div className="self-stretch bg-gray-1000 flex flex-row items-center justify-between py-[9px] px-3.5 border-b-[1px] border-solid border-snow">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-extrabold">#Colab</div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/frame23.svg"
                />
              </div>
              <div className="relative text-2xs font-medium opacity-[0.7]">
                Track and coordinate social media
              </div>
            </div>
            <div className="rounded-10xs flex flex-row items-center justify-start py-[3px] pr-[9px] pl-[3px] gap-[9px] text-2xs border-[1px] border-solid border-gray-2500">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative rounded-12xs w-[23px] h-[23px] object-cover"
                  alt=""
                  src="/alborz4@2x.png"
                />
                <img
                  className="relative rounded-12xs w-[23px] h-[23px] object-cover ml-[-6px]"
                  alt=""
                  src="/alborz5@2x.png"
                />
                <img
                  className="relative rounded-12xs w-[23px] h-[23px] object-cover ml-[-6px]"
                  alt=""
                  src="/alborz-5@2x.png"
                />
              </div>
              <b className="relative opacity-[0.7]">74</b>
            </div>
          </div>
          <div className="self-stretch bg-gray-1000 flex flex-row items-center justify-start py-1.5 px-4 gap-[22px] text-xs text-lightgray-300 border-b-[1px] border-solid border-gray-2500">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative w-[13px] h-[13px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[13px] h-[13px]"
                  alt=""
                  src="/rectangle-21.svg"
                />
                <div className="absolute top-[4px] left-[4px] bg-gray-2900 w-[5px] h-px" />
                <div className="absolute top-[8px] left-[4px] bg-gray-2900 w-[5px] h-px" />
                <div className="absolute top-[6px] left-[2px] bg-gray-2900 w-[9px] h-px" />
              </div>
              <div className="relative font-medium opacity-[0.7]">
                Project brief
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="relative rounded-10xs w-[15px] h-[15px] object-cover"
                alt=""
                src="/image-61@2x.png"
              />
              <div className="relative font-medium opacity-[0.7]">
                Resources
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="relative rounded-10xs w-[15px] h-[15px] object-cover"
                alt=""
                src="/image-71@2x.png"
              />
              <div className="relative font-medium opacity-[0.7]">To do</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <img
                className="relative rounded-10xs w-[15px] h-[15px] object-cover"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="relative font-medium opacity-[0.7]">
                Jira board
              </div>
            </div>
            <img
              className="relative w-[18px] h-[18px]"
              alt=""
              src="/group-91.svg"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_672px)] top-[101px] right-[645px] left-[27px] rounded-md bg-mediumslateblue-600 box-border h-[206px] border-[1px] border-solid border-darkslategray-400">
          <img
            className="absolute top-[0px] left-[0px] rounded-md w-[291px] h-[206px] object-cover"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_637px)] top-[101px] right-[308px] left-[329px] rounded-md bg-mediumslateblue-600 box-border h-[206px] border-[1px] border-solid border-darkslategray-400" />
        <img
          className="absolute top-[101px] left-[329px] rounded-md w-[326px] h-[206px] object-cover"
          alt=""
          src="/image-10@2x.png"
        />
        <div className="absolute w-[calc(100%_-_678px)] top-[101px] right-[14px] left-[664px] rounded-md bg-mediumslateblue-600 box-border h-[206px] border-[1px] border-solid border-darkslategray-400" />
        <img
          className="absolute top-[101px] left-[664px] rounded-md w-[285px] h-[206px] object-cover"
          alt=""
          src="/image-111@2x.png"
        />
        <div className="absolute top-[318px] left-[14px] w-[716px] h-[177px] overflow-hidden flex flex-col items-start justify-end py-0 px-[18px] box-border gap-[10px] text-gray-100">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative rounded-10xs w-8 h-8 object-cover"
              alt=""
              src="/alborz-51@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-extrabold">{`Reseacher X `}</div>
                <div className="relative text-2xs font-medium text-white opacity-[0.7]">
                  11:55
                </div>
              </div>
              <div className="self-stretch relative font-medium text-white">
                Hi there! We're incredibly excited about our collaboration with
                your team to study black holes. Can you help us understand your
                work better?
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative rounded-10xs w-8 h-8 object-cover"
              alt=""
              src="/alborz6@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-extrabold">Reseacher 2</div>
                <div className="relative text-2xs font-medium text-white opacity-[0.7]">
                  11:56
                </div>
              </div>
              <div className="self-stretch relative font-medium text-white">
                {" "}
                Absolutely! Black holes are such intriguing cosmic objects.
                We're thrilled to work together. Think of them as enigmatic
                cosmic whirlpools, sucking in everything with their powerful
                gravity 👀 💀
              </div>
            </div>
          </div>
          <div className="self-stretch" />
        </div>
        <div className="absolute top-[447px] left-[14px] w-[716px] h-[126px] overflow-hidden flex flex-col items-start justify-end py-0 px-[18px] box-border gap-[10px] text-gray-100">
          <div className="self-stretch h-[39px] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative rounded-10xs w-8 h-8 object-cover"
              alt=""
              src="/alborz-51@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-extrabold">{`Reseacher X `}</div>
                <div className="relative text-2xs font-medium text-white opacity-[0.7]">
                  11:55
                </div>
              </div>
              <div className="self-stretch relative font-medium text-white">
                That's a fascinating analogy! How do you go about studying black
                holes?
              </div>
            </div>
          </div>
          <div className="self-stretch h-[67px] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative rounded-10xs w-8 h-8 object-cover"
              alt=""
              src="/alborz6@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-extrabold">Reseacher 2</div>
                <div className="relative text-2xs font-medium text-white opacity-[0.7]">
                  11:56
                </div>
              </div>
              <div className="self-stretch relative font-medium text-white">
                Well, our research involves both theoretical work and
                observations. We use cutting-edge telescopes and instruments to
                detect black holes indirectly by observing their effects on
                nearby matter and the surrounding space.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[573px] left-[0px] w-[963px] flex flex-col items-start justify-start p-[18px] box-border">
          <div className="self-stretch rounded bg-gray-500 overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-dimgray-300">
            <div className="self-stretch flex flex-row items-center justify-start py-[9px] px-2.5">
              <div className="relative bg-dimgray-400 w-px h-5" />
              <div className="relative font-medium opacity-[0.7]">
                Message #Colab
              </div>
            </div>
            <div className="self-stretch bg-gray-500 flex flex-row items-center justify-between py-1.5 pr-[15px] pl-1.5 border-t-[1px] border-solid border-gray-2500">
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/frame24.svg"
                  />
                  <div className="relative bg-dimgray-200 w-px h-[22px]" />
                </div>
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame25.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame26.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame27.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame28.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame29.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame30.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame31.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame32.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame33.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame34.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame35.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame36.svg"
                />
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/frame37.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[31px] left-[31px] text-xl font-coda text-whitesmoke-200 text-left inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative1Click}
      >
        Astro Colab
      </div>
      <div className="absolute w-[calc(100%_-_870px)] top-[31px] right-[717px] left-[153px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] text-sm border-[1px] border-solid border-darkslategray-400">
        <div className="relative leading-[20px] flex items-center justify-center w-[495px] shrink-0">
          Search or jump to…
        </div>
      </div>
      <div className="absolute h-[75.78%] w-[4.41%] top-[18.22%] right-[2.39%] bottom-[6%] left-[93.2%] rounded-md bg-mediumslateblue-600 box-border border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[4px] left-[2px] bg-gray-1000 box-border w-[59px] h-[673px] flex flex-col items-center justify-start py-2.5 px-1.5 gap-[17px] border-r-[1px] border-solid border-gray-2600">
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/quit.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/f.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/g.svg"
          />
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img className="relative w-5 h-5" alt="" src="/group-92.svg" />
          </div>
        </div>
      </div>
      <div className="absolute h-[74.78%] w-[19.02%] top-[19%] right-[79.25%] bottom-[6.22%] left-[1.74%] rounded-md bg-mediumslateblue-600 box-border text-left text-base font-lato border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[6px] left-[16px] bg-gray-800 h-[659px] flex flex-col items-center justify-start gap-[15px]">
          <div className="box-border w-[232px] flex flex-row items-center justify-between py-1.5 px-3.5 border-b-[1px] border-solid border-gray-2600">
            <b className="relative">BlockHole Fourm #13</b>
            <div className="rounded-11xl bg-white w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <img
                className="relative w-[22px] h-[22px]"
                alt=""
                src="/group-101.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-sm">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-center text-mini">
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-3 gap-[6px]">
              <div className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0 opacity-[0.7]">
                ⭐️
              </div>
              <div className="relative text-sm text-left opacity-[0.7]">
                Index
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] text-left text-sm">
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <b className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
                  #
                </b>
                <b className="relative text-sm text-left">reseachers-team</b>
              </div>
              <div className="self-stretch bg-steelblue-300 flex flex-row items-center justify-between py-[3px] pr-4 pl-[22px] text-center text-mini">
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <b className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0 opacity-[0.7]">
                    #
                  </b>
                  <b className="relative text-sm text-left opacity-[0.7]">
                    colab
                  </b>
                </div>
                <div className="relative w-[15.12px] h-[10.24px]">
                  <div className="absolute top-[5.12px] left-[0px] rounded-12xs bg-white w-[7.24px] h-[7.24px] [transform:_rotate(-45deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[4.12px] left-[3.88px] rounded-12xs bg-white box-border w-[9.24px] h-[9.24px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-steelblue-300" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-[3px] pr-0 pl-[22px] gap-[6px] text-center text-mini">
                <b className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
                  #
                </b>
                <b className="relative text-sm text-left">team-astroverse</b>
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
                <div className="relative inline-block w-[69px] shrink-0 opacity-[0.7]">
                  Astro-Lead
                </div>
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
          </div>
        </div>
      </div>
      <div className="absolute h-[27.67%] w-[5.35%] top-[31.56%] right-[40.06%] bottom-[40.78%] left-[54.59%]">
        <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border hidden border-[1px] border-solid border-mediumslateblue-400" />
        <img
          className="absolute h-[97.62%] w-[84.21%] top-[1.18%] right-[7.89%] bottom-[1.2%] left-[7.89%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/vector-11.svg"
        />
        <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[0%] bottom-[97.6%] left-[91.58%] rounded bg-bg-card box-border hidden border-[1px] border-solid border-mediumslateblue-400" />
      </div>
    </div>
  );
};

export default CommunitiyForum;
