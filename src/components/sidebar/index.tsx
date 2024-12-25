import Image from "next/image"
import kingLogo from "../../../public/chess-svgrepo-com.svg";
export default function SideBar() {
  return (
  <div className="w-[180px] h-screen bg-black bg-opacity-20">
    <div className="flex place-items-center">
    <Image src={kingLogo} alt="logo" width={40} height={40}/>
    <div className="text-5xl font-bold font-lilita">King<span className="text-xl">.bet</span></div>
    </div>
    <div></div>
  </div>
  );
}
