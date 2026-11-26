import SearchIcon from "../../assets/SearchIcon.svg";
export const SearchInput = () => {
  return (
    <div className="flex h-11 min-w-0 w-full items-center gap-2 rounded-md bg-[#F5F5F5] px-3 py-2 sm:w-[417px] sm:max-w-[45vw]">
      <img src={SearchIcon} className="shrink-0" />

      <input
        type="text"
        placeholder="Search for anything..."
        className="bg-[#F5F5F5] outline-none text-xs w-full placeholder:text-[#787486]"
      />
    </div>
  );
};
