import NotificationIcon from "../../assets/NotificationIcon.svg";
import MessageQuestionIcon from "../../assets/MessageQuestionIcon.svg";
import CalendarIcon from "../../assets/CalendarIcon.svg";
import ChevronDown from "../../assets/ChevronDown.svg";
import MaskGroup from "../../assets/MaskGroup.svg";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  return (
    <header className="h-16 shrink-0 bg-white border-b border-[#DBDBDB] flex items-center justify-between px-12 py-12">
      <SearchInput />
      <div className="flex items-center gap-5">
        <button className="text-[#787486] hover:text-indigo-600">
          <img src={CalendarIcon} />
        </button>

        <button className="text-[#787486] hover:text-indigo-600">
          <img src={MessageQuestionIcon} />
        </button>

        <button className="relative text-[#787486] hover:text-indigo-600">
          <img src={NotificationIcon} />
        </button>

        <button className="flex items-center gap-2">
          <div className="text-right mr-[22px]">
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

            <img src={ChevronDown} className="shrink-0" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
