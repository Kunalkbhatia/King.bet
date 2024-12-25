import Image from "next/image";
import Link from "next/link";

export interface CustomLinkProps {
  text: string;
  url: string;
  switch?: boolean;
  to: string;
}

export default function CustomLink({ text, url, to, switch: isSwitch = false }: CustomLinkProps) {
  return (
    <Link
      href={to}
      className={`p-5 rounded-md flex justify-center items-center text-5xl w-full font-lilita gap-4 ${
        isSwitch ? "bg-blue-400" : "text-blue-400 bg-white"
      }`}
    >
      <Image
        src={url}
        alt={text}
        width={50}
        height={50}
      />
      <div>{text}</div>
    </Link>
  );
}