import { NetflixMedium } from "@/components/common/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { frequentlyAskedQuestions } from "@/utils/data";
import { ClassValue } from "clsx";

export const QuestionSection = () => {
  return (
    <section id="questions" className="relative h-fit w-full">
      <div className="questions_wrapper w-full h-full">
        <div className="heading md:h-20 h-12 flex items-center">
          <h2
            className={`text-white text-xl md:text-2xl ${NetflixMedium.className}`}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div id="questions_list" className="w-full h-fit">
          <div className="list_wrapper w-full h-full flex flex-col justify-evenly">
            {frequentlyAskedQuestions.map((q, idx) => (
              <QuestionItem className="" question={q} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type QuestionItemProps = {
  question: { q: string; res: string[] };
  className: ClassValue;
};

const QuestionItem = ({ question, className }: QuestionItemProps) => {
  return (
    <div className={cn([className, "h-fit w-full"])}>
      <Accordion type="multiple" className="h-full text-white">
        <AccordionItem value={question.q} className="h-full bg-[#2D2D2D] mt-2">
          <AccordionTrigger className="h-21 flex items-center hover:no-underline px-4 md:px-6 hover:bg-[#414141]">
            <h4 className="md:text-2xl text-lg">{question.q}</h4>
          </AccordionTrigger>
          <AccordionContent className="md:text-2xl px-4 md:px-6 py-4">
            {question.res.map((r) => {
              if (r === "") {
                return <p className="h-4"></p>;
              }
              return <p>{r}</p>;
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
