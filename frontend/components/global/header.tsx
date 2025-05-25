import { HeaderActions } from "../partials/header-actions";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="absolute top-0 w-full h-22 z-999">
      <div className="header_wrapper max-w-[1071px] max-xl:px-4 m-auto w-full h-full flex items-center justify-between">
        <div className="logo">
          <Logo />
        </div>
        {/* Navigation */}
        <div className="actions">
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};
