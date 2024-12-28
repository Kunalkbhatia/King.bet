import ChessBoard from "@/components/board";
import CustomLink from "@/components/customLink";

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
              url="https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"
              switch={true}
            />
            <CustomLink
              to="/play"
              text="Play Bots"
              url="https://www.chess.com/bundles/web/images/color-icons/cute-bot.32735490.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
