import { NetflixMedium } from "@/components/common/fonts";
import { whyToJoinData } from "@/utils/data";

export const BenefitsSection = () => {
  return (
    <section id="feature-benefits" className="relative lg:h-109 h-fit w-full">
      <div className="wrapper h-full w-full">
        <div className="heading h-16 flex items-center justify-start">
          <h2
            className={`text-white text-xl md:text-2xl ${NetflixMedium.className}`}
          >
            More Reasons to Join
          </h2>
        </div>
        <div className="cards md:flex-wrap md:flex items-center md:justify-around max-lg:gap-4 md:h-[calc(100%_-_4rem)] h-full max-md:space-y-4">
          {whyToJoinData.map((data, k) => (
            <BenefitCard data={data} key={k} />
          ))}
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  data: (typeof whyToJoinData)[0];
};
const BenefitCard = ({ data }: CardProps) => {
  return (
    <div className="benefit-card w-full h-42 md:w-59 lg:w-69 md:h-88 relative bg-linear-to-tl to-blue-custom from-purple-custom rounded-2xl px-4 py-4 md:py-8">
      <div className="wrapper w-full h-full space-y-4 flex flex-col items-start">
        <h4 className={`text-lg md:text-2xl text-white ${NetflixMedium.className}`}>
          {data.title}
        </h4>
        <p className="text-sm md:text-lg text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
};
