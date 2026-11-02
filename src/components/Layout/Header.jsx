import NotificationIcon from "../../assets/NotificationIcon.svg";
import MessageQuestionIcon from "../../assets/MessageQuestionIcon.svg";
import CalendarIcon from "../../assets/CalendarIcon.svg";

import ChevronDown from "../../assets/ChevronDown.svg";
import MaskGroup from "../../assets/MaskGroup.svg";
import { SearchInput } from "./SearchInput";
function Header() {
  return (
    <header className="h-16 shrink-0 bg-white border-b border-[#DBDBDB] flex items-center justify-between px-6">
      <SearchInput />
      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-indigo-600">
          <img src={CalendarIcon} />
        </button>

        <button className="text-gray-500 hover:text-indigo-600">
          <img src={MessageQuestionIcon} />
        </button>

        <button className="relative text-gray-500 hover:text-indigo-600">
          <img src={NotificationIcon} />
        </button>

        <button className="flex items-center gap-2">
          <img src={MaskGroup} className="w-8 h-8 rounded-full object-cover" />

          <div className="text-left">
            <p className="text-xs font-semibold text-gray-700">Anima Agrawal</p>

            <p className="text-[10px] text-gray-400">U.P, India</p>
          </div>

          <img src={ChevronDown} />
        </button>
      </div>
    </header>
  );
}

export default Header;
