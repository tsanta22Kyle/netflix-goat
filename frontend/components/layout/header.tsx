import { Button } from "../ui/button";
import { Logo } from "../icons/logo";

export const Header = () => {
  return (
    <header id="header" className="absolute top-0 w-full h-22 z-999">
      <div className="header_wrapper max-w-[69rem] max-xl:px-4 m-auto w-full h-full flex items-center justify-between">
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


const HeaderActions = () => (
  <div>
    <Button variant={"destructive"} size={"sm"} className="-font-medium">Sign In</Button>
  </div>
);
