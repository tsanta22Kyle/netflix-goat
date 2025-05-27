import { whyToJoinData } from "@/utils/data";

export const BenefitsSection = () => {
  return (
    <section id="feature-benefits" className="h-full md:max-h-108 w-full">
      <div className="wrapper h-full w-full">
        <div className="heading h-16 flex items-center justify-start">
          <h2 className="text-white text-2xl -font-medium">More Reasons to Join</h2>
        </div>
        <div className="cards flex items-center justify-between md:h-[calc(100%_-_4rem)] h-full">
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
    <div className="benefit-card md:max-h-88 max-h-41 w-full md:max-w-69 h-full relative bg-linear-to-tl to-blue-custom from-purple-custom rounded-2xl px-4 py-8">
      <div className="wrapper w-full h-full space-y-4">
        <h4 className="text-xl md:text-3xl -font-medium text-white">{data.title}</h4>
        <p className="text-lg text-muted-foreground -font-medium">{data.description}</p>
      </div>
    </div>
  );
};
