import Image from "next/image"
import kingLogo from "../../../public/chess-svgrepo-com.svg";
import Link from "next/link";
import { AssetsURL } from "@/utils";
export const Navlinks = [
    {   
        link: "Play",
        to: "/play",
        url: AssetsURL.play
    },
    {
        link: "Watch",
        to: "/watch",
        url: AssetsURL.watch,
    },
    {
        link: "News",
        to: "/news",
        url: AssetsURL.news,
    },
    {
        link: "Social",
        to: "/social",
        url: AssetsURL.social,
    }
]

export default function SideBar() {
  return (
  <div className="w-[180px] h-screen bg-black bg-opacity-20">
    <div className="flex flex-col gap-8">
    {/* logo */}
    <div className="flex items-baseline mt-2">
        <Image src={kingLogo} alt="logo" width={40} height={40}/>
        <div className="text-5xl font-bold font-lilita">King<span className="text-xl">.bet</span></div>
    </div>
    {/* navlinks */}
    <div className="flex flex-col gap-5 p-2">
        {
            Navlinks.map((link) => {
                return (
                    <div key={link.link} className="flex items-center gap-2">
                        <Image src={link.url} alt={link.link} width={30} height={30} />
                        <Link href={link.to} className="text-xl font-lilita">{link.link}</Link>
                    </div>
                )
            })
        }
    </div>

    <div className="flex flex-col gap-2 p-2 text-xl font-lilita">
        <Link href="/signup" className="bg-blue-400 p-2 rounded-md text-center">Sign Up</Link>
        <Link href="/signin" className="bg-white text-blue-400 p-2 rounded-md text-center">Sign In</Link>
    </div>
    </div>
  </div>
  );
}
