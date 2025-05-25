import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
};

export const Logo = ({ href }: Props) => {
  return (
    <div className="">
      <Link href={href || ""}>
        <Image
          src={"http://localhost:3000/img/Netflix_Logo_RGB.png"}
          width={100}
          height={50}
          alt="Logo Netflix"
          loading="lazy"
        />
      </Link>
    </div>
  );
};
