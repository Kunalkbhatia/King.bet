import Image from "next/image"
import kingLogo from "../../../public/chess-svgrepo-com.svg";
import Link from "next/link";
export const navlinks = [
    {   
        link: "Play",
        to: "/play",
        url: "https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"
    },
    {
        link: "Watch",
        to: "/watch",
        url: "https://www.chess.com/bundles/web/images/color-icons/watch.d42fed26.svg"
    },
    {
        link: "News",
        to: "/news",
        url: "https://www.chess.com/bundles/web/images/color-icons/newspaper.6e020a3f.svg",
    },
    {
        link: "Social",
        to: "/social",
        url: "https://www.chess.com/bundles/web/images/color-icons/friends.d2e3c382.svg"
    }
]
export default function SideBar() {
  return (
  <div className="w-[180px] h-screen bg-black bg-opacity-20">
    <div className="flex flex-col gap-8">
    {/* logo */}
    <div className="flex place-items-center">
        <Image src={kingLogo} alt="logo" width={40} height={40}/>
        <div className="text-5xl font-bold font-lilita">King<span className="text-xl">.bet</span></div>
    </div>
    {/* navlinks */}
    <div className="flex flex-col gap-5 p-2">
        {
            navlinks.map((link) => {
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
