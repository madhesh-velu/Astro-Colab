import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResearchNode = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/project-creation");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/codespace");
  }, [navigate]);

  const onIntroducingOurInnovative1Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

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

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-center text-smi text-white font-noto-sans">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1383px] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <div className="absolute top-[859px] left-[454px] font-medium font-ubuntu text-whitesmoke-300 inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute w-[calc(100%_-_768px)] top-[169px] right-[711px] left-[57px] rounded-md bg-mediumslateblue-600 box-border h-[648px] border-[1px] border-solid border-darkslategray-400">
        <div className="absolute top-[17px] left-[9px] leading-[21px] flex items-center w-[597px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <span>
                <b>
                  Discovering Faint and High Apparent Motion Rate Near-Earth
                  Asteroids Using A Deep Learning Program
                </b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0 text-mediumpurple">
              <span>
                <span>Franklin Wang, Jian Ge, Kevin Willis</span>
              </span>
            </p>
          </span>
        </div>
        <div className="absolute top-[142px] left-[36px] text-3xs leading-[21px] text-justify flex items-center w-[544px]">
          Although many near-Earth objects have been found by ground-based
          telescopes, some fast-moving ones, especially those near detection
          limits, have been missed by observatories. We developed a
          convolutional neural network for detecting faint fast-moving
          near-Earth objects. It was trained with artificial streaks generated
          from simulations and was able to find these asteroid streaks with an
          accuracy of 98.7% and a false positive rate of 0.02% on simulated
          data. This program was used to search image data from the Zwicky
          Transient Facility (ZTF) in four nights in 2019, and it identified six
          previously undiscovered asteroids. The visual magnitudes of our
          detections range from ~19.0 - 20.3 and motion rates range from ~6.8 -
          24 deg/day, which is very faint compared to other ZTF detections
          moving at similar motion rates. Our asteroids are also ~1 - 51 m
          diameter in size and ~5 - 60 lunar distances away at close approach,
          assuming their albedo values follow the albedo distribution function
          of known asteroids. The use of a purely simulated dataset to train our
          model enables the program to gain sensitivity in detecting faint and
          fast-moving objects while still being able to recover nearly all
          discoveries made by previously designed neural networks which used
          real detections to train neural networks. Our approach can be adopted
          by any observatory for detecting fast-moving asteroid streaks.
        </div>
        <div
          className="absolute w-[calc(100%_-_470px)] top-[592px] right-[434px] left-[36px] rounded-md bg-gray-3000 box-border h-8 cursor-pointer border-[1px] border-solid border-white"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[7px] left-[26px] leading-[20px] font-medium flex items-center justify-center w-[93px] h-[19px]">
            Contribute
          </div>
        </div>
        <div
          className="absolute w-[calc(100%_-_470px)] top-[592px] right-[255px] left-[215px] rounded-md bg-gray-3000 box-border h-8 cursor-pointer border-[1px] border-solid border-white"
          onClick={onFrameContainer1Click}
        >
          <div className="absolute top-[7px] left-[26px] leading-[20px] font-medium flex items-center justify-center w-[93px] h-[19px]">
            Codespace
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_470px)] top-[592px] right-[61px] left-[409px] rounded-md bg-gray-3000 box-border h-8 border-[1px] border-solid border-white">
          <div className="absolute top-[7px] left-[26px] leading-[20px] font-medium flex items-center justify-center w-[93px] h-[19px]">
            Graph view
          </div>
        </div>
        <div className="absolute top-[408px] left-[39px] text-3xs leading-[21px] font-light text-justify flex items-center w-[547px] h-[18px]">
          Key words: minor planets, asteroids: general – methods: data analysis
        </div>
        <div className="absolute top-[121px] left-[36px] text-xs-9 leading-[18px] font-medium text-left flex items-center w-[101px] h-[13px]">
          ABSTRACT
        </div>
        <div className="absolute top-[441px] left-[33px] text-inherit leading-[21px] font-inherit text-left flex items-center w-[509px] h-[105px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Access Paper:</p>
            <ul className="m-0 pl-[17px] text-cornflowerblue-100">
              <li className="mb-0">
                <a
                  className="text-[inherit]"
                  href="https://arxiv.org/pdf/2208.09098.pdf"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    Download PDF
                  </span>
                </a>
              </li>
              <li className="mb-0">
                <a
                  className="text-[inherit]"
                  href="https://arxiv.org/ps/2208.09098"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    PostScript
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="text-[inherit]"
                  href="https://arxiv.org/format/2208.09098"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    Other Formats
                  </span>
                </a>
              </li>
            </ul>
          </span>
        </div>
        <div className="absolute top-[563px] left-[32px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[550px] h-3" />
        <div className="absolute top-[426px] left-[36px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[550px] h-3" />
      </div>
      <div
        className="absolute top-[23px] left-[31px] text-xl font-coda text-whitesmoke-200 text-left inline-block w-[120px] cursor-pointer"
        onClick={onIntroducingOurInnovative1Click}
      >
        Astro Colab
      </div>
      <div className="absolute top-[86px] left-[31px] bg-gray-3100 shadow-[0px_-1px_0px_#21262d_inset] w-[1345px] flex flex-row items-center justify-start gap-[687px] text-sm text-lightgray-200">
        <div className="flex flex-row items-start justify-start py-[9px] pr-0 pl-[7px] gap-[16.7px]">
          <div
            className="relative leading-[30px] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="rounded-md w-[106px] flex flex-row items-start justify-start py-0 px-2 box-border relative">
            <div className="w-[91px] flex flex-row items-center justify-start py-0 pr-0 pl-0.5 box-border z-[0]">
              <div className="relative leading-[30px] font-semibold">
                Research Node
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[37px] left-[6.01px] rounded-md bg-salmon-100 w-[105.86px] h-0.5 z-[1]" />
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
      <div className="absolute top-[249px] left-[calc(50%_-_110.5px)] rounded-4xl-8 flex flex-row items-start justify-start py-[1.421875px] pr-[5.03125px] pl-1.5 text-2xs-9 text-forestgreen-100 border-[1px] border-solid border-forestgreen-300">
        <div className="relative leading-[18px]">
          <span className="font-medium">Data A</span>
          <b>nalysis</b>
        </div>
      </div>
      <div className="absolute top-[613px] left-[516px] flex flex-row items-center justify-start py-0 pr-[1.796875px] pl-0 text-left text-xs text-lightslategray-200">
        <img className="relative w-4 h-4" alt="" src="/frame13.svg" />
        <div className="relative leading-[18px]">1.7k</div>
      </div>
      <div className="absolute top-[614px] left-[584.64px] w-[52.52px] h-4 text-left text-2xs text-lightslategray-200">
        <div className="absolute top-[-1px] left-[15.3px] leading-[18px]">
          Python
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-md bg-steelblue-200 box-border w-3 h-3 border-[1px] border-solid border-gray-3200" />
      </div>
      <img
        className="absolute top-[183px] left-[1024px] w-[294px] h-[267px] object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <img
        className="absolute top-[498px] left-[702px] w-[624px] h-[314px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
      <div className="absolute top-[701px] left-[1308px] text-3xs leading-[21px] font-semibold text-justify flex items-center w-[31px] h-3">
        FSG
      </div>
      <div className="absolute w-[calc(100%_-_870px)] top-[23px] right-[726px] left-[144px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] text-sm border-[1px] border-solid border-darkslategray-400">
        <div className="relative leading-[20px] flex items-center justify-center w-[495px] shrink-0">
          Search or jump to…
        </div>
      </div>
      <div className="absolute h-[35.22%] w-[45.26%] top-[55.22%] right-[4.05%] bottom-[9.56%] left-[50.69%] rounded-md bg-mediumslateblue-600 box-border text-justify text-3xs border-[1px] border-solid border-darkslategray-400">
        <img
          className="absolute top-[0px] left-[425px] w-[200px] h-[60px] object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <div className="absolute top-[173px] left-[305px] leading-[21px] font-semibold flex items-center w-[46px] h-3">
          FSG91
        </div>
        <div className="absolute top-[261px] left-[53px] leading-[21px] font-semibold flex items-center w-[46px] h-3">
          FSG99
        </div>
        <div className="absolute top-[23px] left-[346px] leading-[21px] font-semibold flex items-center w-[46px] h-3">
          FSG80
        </div>
        <div className="absolute top-[249px] left-[402px] leading-[21px] font-semibold flex items-center w-[46px] h-3">
          FSG92
        </div>
        <div className="absolute top-[290px] left-[494px] leading-[21px] font-semibold flex items-center w-[46px] h-3">
          FSG96
        </div>
        <div className="absolute top-[4px] left-[7px] leading-[18px] font-semibold text-gray-2700 text-left flex items-center w-[205px] h-[158px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Magnitude: 1.35 (B-v: -0.09</p>
            <p className="m-0">Absolute Magnitude: -0.53</p>
            <p className="m-0">RAIDE 02000): 10h08m22.1s/+11058'02.9"</p>
            <p className="m-0">RAIDE (of date): 10h09m23s/+11052'24"</p>
            <p className="m-0">Hour angle/DE: 18h34r-n27s/+11052'24"</p>
            <p className="m-0">Az/Alt: +84056'17"/+13044'42"</p>
            <p className="m-0">Spectral Type: B7V</p>
            <p className="m-0">Distance: 77.49 Light Years</p>
            <p className="m-0">Parallax: 0.04209</p>
          </span>
        </div>
      </div>
      <div className="absolute h-[32.56%] w-[45.26%] top-[18.89%] right-[4.05%] bottom-[48.56%] left-[50.69%] rounded-md bg-mediumslateblue-600 box-border border-[1px] border-solid border-darkslategray-400">
        <img
          className="absolute top-[13px] left-[14px] w-[304px] h-[267px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
    </div>
  );
};

export default ResearchNode;
