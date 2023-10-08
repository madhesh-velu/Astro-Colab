import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const onAutoLayoutHorizontalClick = useCallback(() => {
    navigate("/search-page-2");
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
      <div
        className="absolute w-[calc(100%_-_927px)] top-[436px] right-[451px] left-[476px] rounded-md bg-gray-1400 box-border flex flex-row items-start justify-start py-1 pr-[5px] pl-[13px] cursor-pointer text-center text-sm text-gray-2700 border-[1px] border-solid border-darkslategray-400"
        onClick={onAutoLayoutHorizontalClick}
      >
        <div className="relative leading-[20px] flex items-center justify-center w-[495px] shrink-0">
          Explore the world of curious minds!...
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
    </div>
  );
};

export default SearchPage;
