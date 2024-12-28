import ChessBoard from "@/components/board";
import CustomLinkPlay, { CustomLinkPlayProps } from "@/components/customLinkPlay";
import { AssetsURL } from "@/utils";
import Image from "next/image";

const CustomLinkPlayData: CustomLinkPlayProps[] = [
  {
    title: "Play Online",
    description: "Play vs a person of similar skill",
    image: AssetsURL.play,
    to: "/online",
  },
  {
    title: "Play Bots",
    description: "Challenge a bot for practice",
    image: AssetsURL.bot,
    to: "/bots",
  },
  {
    title: "Play a Friend",
    description: "Invite a friend to a game",
    image: AssetsURL.handshake,
    to: "/friend",
  },
  {
    title: "Tournaments",
    description: "Join an arena where anyone can win",
    image: AssetsURL.tournament,
    to: "/tournament"
  }
]

export default function Play() {
  return (
    <div className="grid grid-cols-2 mx-auto p-10 relative h-screen gap-16">
        {/* Board */}
        <div>
          <ChessBoard/>
        </div>
        {/* About */}
        <div className="flex flex-col gap-10 p-5 items-center rounded-md bg-black bg-opacity-20">
            <div className="flex gap-2 items-center">
              <Image src={AssetsURL.play} alt="play" width={50} height={50} />
              <div className="text-5xl font-lilita">Play Chess</div>
            </div>
            <div className="flex flex-col gap-5">
                {
                  CustomLinkPlayData.map((link) => {
                    return <CustomLinkPlay key={link.title} title={link.title} description={link.description} to={link.to} image={link.image} />
                  })
                }
            </div>
        </div>
      </div>
  );
}
