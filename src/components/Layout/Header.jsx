import NotificationIcon from "../../assets/NotificationIcon.svg";
import MessageQuestionIcon from "../../assets/MessageQuestionIcon.svg";
import CalendarIcon from "../../assets/CalendarIcon.svg";
import ChevronDown from "../../assets/ChevronDown.svg";
import MaskGroup from "../../assets/MaskGroup.svg";
import { SearchInput } from "./SearchInput";
import { Menu } from "lucide-react";

export const Header = ({ onMenuClick }) => {
  return (
    <header className="flex shrink-0 items-center justify-between gap-2 border-b border-[#DBDBDB] bg-white px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-12 lg:py-5.5">
      <button
        type="button"
        aria-label="Open navigation"
        onClick={onMenuClick}
        className="grid size-10 shrink-0 place-items-center text-[#787486] md:hidden"
      >
        <Menu aria-hidden="true" size={20} />
      </button>
      <SearchInput />
      <div className="flex shrink-0 items-center gap-2 sm:gap-5">
        <button className="hidden text-[#787486] hover:text-indigo-600 sm:block">
          <img src={CalendarIcon} />
        </button>

        <button className="hidden text-[#787486] hover:text-indigo-600 sm:block">
          <img src={MessageQuestionIcon} />
        </button>

        <button className="relative text-[#787486] hover:text-indigo-600">
          <img src={NotificationIcon} />
        </button>

        <button className="flex items-center gap-2">
          <div className="mr-2 hidden text-right sm:mr-[22px] sm:block">
            <p className="text-base leading-100% font-medium text-[#0D062D]">
              Anima Agrawal
            </p>
            <p className="text-[14px] text-[#787486]">U.P, India</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src={MaskGroup}
              className="w-8 h-8 rounded-full object-cover"
            />

            <img src={ChevronDown} className="hidden shrink-0 sm:block" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
