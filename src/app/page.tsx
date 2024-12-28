import ChessBoard from "@/components/board";
import CustomLink from "@/components/customLink";
import { AssetsURL } from "@/utils";

export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-2 mx-auto p-10 relative h-screen">
        {/* Board */}
        <div>
          <ChessBoard/>
        </div>
        {/* About */}
        <div className="flex flex-col p-5 justify-around items-center">
          <div className="text-4xl text-center font-lilita">
            Bet and play chess online on the ultimate platform for strategy and
            stakes!
          </div>
          <div className="flex flex-col gap-5">
            <CustomLink
              to="/play"
              text="Play Online"
              url={AssetsURL.play}
              switch={true}
            />
            <CustomLink
              to="/play"
              text="Play Bots"
              url={AssetsURL.bot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
