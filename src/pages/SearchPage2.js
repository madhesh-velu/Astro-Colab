import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage2 = () => {
  const navigate = useNavigate();

  const onFrameContainer9Click = useCallback(() => {
    navigate("/dashborad");
  }, [navigate]);

  return (
    <div className="relative bg-gray-1800 w-full h-[900px] overflow-hidden text-left text-smi text-gray-2800 font-noto-sans">
      <img
        className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[1440px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <div className="absolute top-[859px] left-[465px] font-medium font-ubuntu text-whitesmoke-300 text-center inline-block w-[535px]">
        © Team Astro Colab • Nasa Space App Challege 2023
      </div>
      <div className="absolute w-[calc(100%_-_927px)] top-[436px] right-[451px] left-[476px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] text-sm text-gray-2700 border-[1px] border-solid border-darkslategray-400">
        <div className="relative leading-[20px] flex items-center w-[495px] shrink-0">
          Quantum|
        </div>
      </div>
      <div className="absolute top-[320px] left-[411px] text-50xl font-secular-one text-white text-center inline-block w-[643px] h-[86px]">
        ASTRO COLAB
      </div>
      <div className="absolute top-[606px] left-[795px] text-inherit leading-[29px] font-inherit flex items-center w-[442px] h-[114px]">
        <ul className="m-0 pl-[19px]">
          <li className="mb-0">Nokia Opens 6G Lab Facility In Bengaluru.</li>
          <li className="mb-0">
            24 Agri Startups Recommended For Support From Pool of Rs 20 cr.
          </li>
          <li className="mb-0">
            International scientists make refined m of world's '8th continent'
            Zealandia.
          </li>
          <li className="mb-0">
            NASA's Perseverance Rover Sets Speed Record On Autopilot.
          </li>
          <li>What is NASA's Psyche mission?</li>
        </ul>
      </div>
      <div className="absolute top-[571px] left-[202px] text-inherit leading-[20px] font-inherit flex items-center w-[506px] h-[199px]">
        <ul className="m-0 pl-[19px]">
          <li className="mb-0">
            Flexible batteries Powering wearable technologies for healthcare and
            e-textiles.
          </li>
          <li className="mb-0">
            Generative artificial intelligence Expanding the boundaries of human
            endeavour
          </li>
          <li className="mb-0">
            Sustainable aviation fuel Moving the aviation industry towards
            net-zero carbon emissions..
          </li>
          <li className="mb-0">
            Designer phages Engineering viruses to augment human, animal and
            plant health.
          </li>
          <li>
            Metaverse for mental health Shared virtual spaces to improve mental
            health.
          </li>
        </ul>
      </div>
      <div className="absolute top-[552px] left-[222px] leading-[21px] font-semibold text-lightgray-200 flex items-center w-[143px] h-[19px]">
        Latest Research Papers
      </div>
      <div className="absolute top-[552px] left-[816px] leading-[21px] font-semibold text-lightgray-200 flex items-center w-[143px] h-[19px]">
        Latest News
      </div>
      <div
        className="absolute h-[31.11%] w-[39.86%] top-[53.11%] right-[28.61%] bottom-[15.78%] left-[31.53%] rounded-md bg-gray-600 overflow-hidden flex flex-col items-start justify-start cursor-pointer text-base text-lightslategray-100 font-poppins"
        onClick={onFrameContainer9Click}
      >
        <div className="bg-gray-300 w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border text-lightsteelblue-300">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-slategray-300 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-602.svg"
              />
            </div>
            <div className="relative font-medium">Quantum</div>
            <div className="relative font-medium text-lavender-200">
              Research
            </div>
          </div>
          <div className="relative font-medium">Journals</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-603.svg"
              />
            </div>
            <div className="relative font-medium">Quantum Qiskit</div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium">Channel</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-603.svg"
              />
            </div>
            <div className="relative font-medium">Quantum Cirq</div>
            <div className="relative font-medium text-silver-200">bot</div>
          </div>
          <div className="relative font-medium">Bot</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-604.svg"
              />
            </div>
            <div className="relative font-medium">Quantum PyQuil</div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium">Channel</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-604.svg"
              />
            </div>
            <div className="relative font-medium">OpenQASM</div>
            <div className="relative font-medium text-silver-200">tool</div>
          </div>
          <div className="relative font-medium">tool</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-604.svg"
              />
            </div>
            <div className="relative font-medium">Quantum Development Q#</div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium">Channel</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-604.svg"
              />
            </div>
            <div className="relative font-medium">
              Quantum Development Kit (QDK)
            </div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium">channel</div>
        </div>
        <div className="w-[574px] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="bg-darkslategray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="relative w-[30px] h-[30px] hidden"
                alt=""
                src="/frame-604.svg"
              />
            </div>
            <div className="relative font-medium">
              Quantum Information Software Kit (Qiskit)
            </div>
            <div className="relative font-medium text-silver-200">channel</div>
          </div>
          <div className="relative font-medium" />
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
    </div>
  );
};

export default SearchPage2;
