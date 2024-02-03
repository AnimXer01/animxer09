import { getTopAnimes } from "@/API/request";
import Animes from "./../Components/Animes";
import PopularAnimes from "./../Components/PopularAnimes";

const page = async () => {
  const popular = await getTopAnimes();
  return (
    // Chapters And Top Anime Divider
    <div className="color-text min-h-screen mx-auto grid max-w-screen-2xl grid-cols-1 gap-2 px-0 py-5 md:gap-5 md:px-16 md:py-16 lg:grid-cols-[70%,30%]">
      {/* Left */}
      <div className="flex w-full flex-col gap-5  ">
        {/* Filtering Actions */}
        <div>FILTER</div>

        {/* Animes */}
        <Animes key="anime-feed" recents />
      </div>
      {/* Right */}
      <PopularAnimes key="anime-popular" animes={popular} />
    </div>
  );
};

export default page;
