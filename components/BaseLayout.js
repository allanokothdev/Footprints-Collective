import Sidebar from "./Sidebar";
import Activities from "./Activities"
import General from "../constants/General";

const BaseLayout = ({ children }) => {
    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <Sidebar />
            <div className="bg-white flex-col w-full">
                <div className="flex flex-row justify-between w-full sticky top-0 bg-white p-3 border-b-2 z-10 items-center">
                    <div>
                        <h1 className="text-black-300 text-xl font-bold">Hi, Welcome to Footprint Collective</h1>
                        <h2 className="mt-3/4 font-normal">Empowering Sustainable LIfestyles</h2>
                    </div>
                    <div className="flex rounded-full bg-darkGreen pr-5 h-10 items-center border border-darkGreen">
                        <img className="rounded-full bg-white float-left h-10 w-10 bg-contain" src={General.AVATAR}/> <span className="ml-3 text-white font-bold text-sm self-center line-clamp-1">Footprints Collective</span>
                    </div>
                </div>

                <div className="flex">
                    <main className="h-max w-2/3 bg-[white] overscroll-contain">{children}</main>
                    <Activities />
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;