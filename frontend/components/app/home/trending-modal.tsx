import { MouseEvent } from "react";
import { createPortal } from "react-dom";

type TrendingModalProps = {
  id: number;
  setIsOpen: (arg: boolean) => void;
};

export const TrendingModal = ({ setIsOpen, id }: TrendingModalProps) => {
  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return createPortal(
    <div
    className="background fixed top-0 left-0 w-full h-screen z-1000 bg-black/10"
      onClick={closeModal}
    >
      <div className="wrapper w-full h-screen relative flex items-center justify-center">
        <div className="modal md:w-128 md:h-128 h-1/2 w-1/2 bg-white/40 rounded-lg z-1100">
          <h3>{id}</h3>
        </div>
      </div>
    </div>,
    //@ts-expect-error may be null
    document?.getElementById("trending")
  );
};
