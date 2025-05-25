import { HeaderActions } from "../partials/header-actions";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full h-14">
      <div className="header_wrapper max-w-[calc(1240px_-_1rem)] max-xl:px-4 m-auto w-full h-full flex items-center justify-between">
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
