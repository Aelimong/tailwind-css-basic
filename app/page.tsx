import FriendListItem from "./components/FriendListItem";
import WeatherCard from "./components/WeatherCard";
import WorkCard from "./components/WorkCard";

export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center gap-6 bg-pink-50 px-11 py-11 *:font-mono">
      {/* 첫번째 화면 */}
      <div className="w-1/3 relative py-6 max-w-[400px] bg-white">
        <div className="mb-4 text-[32px] font-black px-3">Weather</div>
        <div className="flex flex-col gap-3 px-3">
          <WeatherCard
            cityName="Casius"
            countryAndTime="Mars, 12AM"
            temp="85"
            cardBgColor="bg-white"
            cardFontColor="text-black"
            weatherIconColor="fill-black"
            weatherType="rainy"
          />
          <WeatherCard
            cityName="Dlacria"
            countryAndTime="Mars, 12AM"
            temp="85"
            cardBgColor="bg-yellow-400"
            cardFontColor="text-black"
            weatherIconColor="fill-black"
            weatherType="rainy"
          />
          <WeatherCard
            cityName="New York"
            countryAndTime="USA, 12AM"
            temp="85"
            cardBgColor="bg-green-400"
            cardFontColor="text-black"
            weatherIconColor="fill-black"
            weatherType="sunny"
          />
          <WeatherCard
            cityName="Zomato"
            countryAndTime="India, 12AM"
            temp="20"
            cardBgColor="bg-orange-600"
            cardFontColor="text-white"
            weatherIconColor="fill-white"
            weatherType="snowy"
          />
        </div>
        <div className="w-full absolute bottom-10 flex justify-center">
          <div className="size-12 flex justify-center items-center rounded-full border border-b-4 border-black">
            <svg
              className="size-8"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* 두번째 화면 */}
      <div className="w-1/3 relative py-6 max-w-[400px] bg-white">
        {/* Close Icon */}
        <div className="w-full flex px-3 mb-4">
          <div className="size-10 flex justify-center items-center rounded-full border border-b-4 border-black">
            <svg
              className="size-6"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        {/* Contents Area */}
        <div className="text-base px-3 text-center mb-2">SIMPLE TAG</div>
        <div className="mb-4 text-[32px] text-center font-black px-3">
          Work with best
          <br />
          designers
        </div>
        <div className="grid grid-cols-2 gap-4 px-3 mb-[30px]">
          <WorkCard bgColor="bg-yellow-400" />
          <WorkCard bgColor="bg-green-400" />
          <WorkCard bgColor="bg-pink-400" />
          <WorkCard bgColor="bg-orange-600" />
        </div>
        <div className="px-3">
          <button className="w-full font-bold text-base bg-blue-700 text-white p-3 rounded-lg">
            Let' get it done
          </button>
        </div>
      </div>
      {/* 세번째 화면 */}
      <div className="w-1/3 py-6 bg-yellow-400 max-w-[400px]">
        {/* Back Icon */}
        <div className="w-full flex px-3 mb-6">
          <div className="size-10 flex justify-center items-center rounded-full border border-b-4 border-black">
            <svg
              className="size-6"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center w-custom text-2xl px-3 font-semibold text-center">
            Friends
          </div>
        </div>
        {/* Search Area */}
        <div className="px-3 mb-5">
          <div className="w-full flex gap-2 bg-white p-2 border rounded-lg border-b-4 border-black">
            <input
              type="text"
              placeholder="Search with love ..."
              className="w-full border-none"
            />
            <div className="">
              <svg
                className="size-6"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {/* Friends List */}
        <div className="px-3 flex flex-col gap-4">
          <FriendListItem
            bgImage="avatar1"
            isInvited={false}
            friendName="Bill Rizer"
            friendJob="Planet Designer"
          />
          <FriendListItem
            bgImage="avatar2"
            isInvited={false}
            friendName="Genbei Yagy"
            friendJob="Planet Designer"
          />
          <FriendListItem
            bgImage="avatar1"
            isInvited={true}
            friendName="Lancy Neo"
            friendJob="Rogue corp"
          />
          <FriendListItem
            bgImage="avatar3"
            isInvited={false}
            friendName="Bill Rizer"
            friendJob="Hard corps"
          />
          <FriendListItem
            bgImage="avatar4"
            isInvited={false}
            friendName="Konami"
            friendJob="Xenon Creator"
          />
        </div>
      </div>
    </main>
  );
}
