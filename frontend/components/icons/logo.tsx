import Link from "next/link";

type Props = {
  href?: string;
};

export const Logo = ({ href }: Props) => {
  return (
    <div className="">
      <Link href={href || ""}>
        <img
          src={"http://localhost:3000/img/Netflix_Logo_RGB.png"}
          className="w-25 h-10 lg:w-48 lg:h-20"
          alt="Logo Netflix"
          loading="lazy"
        />
      </Link>
    </div>
  );
};
