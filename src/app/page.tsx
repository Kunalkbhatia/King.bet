import Image from "next/image";
import Chessboard from "@/components/board";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 mx-auto border-2 border-red-900 p-10 relative">
        <div className="relative">
          {/* First Image */}
          <Image 
            src="https://images.chesscomfiles.com/chess-themes/boards/glass/200.png" 
            alt="board" 
            width={700} 
            height={700} 
          />
          
         <Chessboard/>
          
        </div>
        <div className="">
          hello
        </div>
      </div>
    </div>
  );
}
