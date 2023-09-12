import Image from "next/image";
import Link from "next/link";
import Tooltip from '../components/Tooltip'

import HomeIcon from '../public/home.svg?component'
import CommunityIcon from '../public/community.svg?component'
import ExploreIcon from '../public/explore.svg?component'
import CalculatorIcon from '../public/calculator.svg?component'
import MarketIcon from '../public/markets.svg?component'
import OffsetIcon from '../public/offset.svg?component'
import HistoryIcon from '../public/history.svg?.component'
import LogoIcon from '../public/logo.png'

const sidebarItems = [
    {
        name: "Home",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        name: "Your Communities",
        href: "/communities",
        icon: CommunityIcon,
    },
    {
        name: "Explore Communities",
        href: "/explore",
        icon: ExploreIcon,
    },
    {
        name: "Voluntary Carbon Markets",
        href: "/markets",
        icon: MarketIcon,
    },
    {
        name: "Carbon Footprint Calculator",
        href: "/calculator",
        icon: CalculatorIcon,
    },
    {
        name: "Carbon Footprint History",
        href: "/history",
        icon: HistoryIcon,
    },
    {
        name: "Carbon Offsets History",
        href: "/offsets",
        icon: OffsetIcon,
    },
    {
        name: "Insights",
        href: "/trends",
        icon: OffsetIcon,
    },
];


export default function Sidebar() {
    return (
        <aside className="h-screen sticky top-0 w-18 border-r border-gray-200 bg-white flex-col items-center">
            <div className="flex h-18 w-18 items-center justify-center border-b border-gray-200 p-4">
                <Image src={LogoIcon} className="aspect-square w-12 h-12" alt="Circular Chain Logo" />
            </div>
            <ul className="flex flex-1 flex-col gap-y-4 pt-8 px-3">
                {sidebarItems.map(({ name, href, icon: Icon }) => (
                    <Link key={name} className="group relative aspect-square rounded-xl text-gray-400 p-2 hover:bg-mediumGreen" href={href}>
                        <Icon className="mt-2 h-6 w-6 stroke-current mx-auto hover:text-white" />
                        <Tooltip>
                            {name} <span className="text-gray-400" />
                        </Tooltip>
                    </Link>

                ))}
            </ul>
        </aside>
    )
}