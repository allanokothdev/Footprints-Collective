import Sidebar from "./Sidebar";
import Activities from "./Activities"

const WideLayout = ({ children }) => {
    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <Sidebar />
            <div className="bg-white flex-col w-full">
                <div className="w-full sticky top-0 bg-white p-3.5 border-b-2 z-10">
                    <h1 className="text-black-300 text-xl font-bold">Hi Allan, Welcome to Footprint Collective</h1>
                    <h2 className="mt-3/4 font-normal">Empowering Sustainable LIfestyles</h2>
                </div>

                <main className="h-max w-full bg-[white]">{children}</main>
            </div>
        </div>
    );
};

export default WideLayout;