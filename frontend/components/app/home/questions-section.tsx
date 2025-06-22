import { NetflixMedium } from "@/components/common/fonts";
import { cn } from "@/lib/utils";
import { frequentlyAskedQuestions } from "@/utils/data";
import { ClassValue } from "clsx";
import { Plus } from "lucide-react";

export const QuestionSection = () => {
  return (
    <section id="questions" className="relative h-screen w-full">
      <div className="questions_wrapper w-full h-full">
        <div className="heading md:h-20 h-12 flex items-end">
          <h2
            className={`text-white text-xl md:text-2xl ${NetflixMedium.className}`}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div
          id="questions_list"
          className="w-full h-[calc(100%_-_3rem)] md:h-[calc(100%_-_5rem)]"
        >
          <div className="list_wrapper w-full h-full flex flex-col justify-evenly">
            {frequentlyAskedQuestions.map((q, idx) => (
              <QuestionItem className="bg-white/10" question={q} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type QuestionItemProps = {
  question: { q: string; res: string };
  className: ClassValue;
};

const QuestionItem = ({ question, className }: QuestionItemProps) => {
  return (
    <div className={cn([className, "h-16 w-full"])}>
      <div className="wrapper h-full w-full flex items-center justify-between px-4 md:px-6 text-white">
        <h4 className="md:text-lg text-base">{question.q}</h4>
        <Plus />
      </div>
    </div>
  );
};
