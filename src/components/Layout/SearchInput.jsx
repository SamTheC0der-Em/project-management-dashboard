import SearchIcon from "../../assets/SearchIcon.svg";
export const SearchInput = () => {
  return (
    <div className="flex w-[417px] h-[44px] max-w-[45vw] items-center gap-2 rounded-md bg-[#F5F5F5] px-3 py-2">
      <img src={SearchIcon} />

      <input
        type="text"
        placeholder="Search for anything..."
        className="bg-[#F5F5F5] outline-none text-xs w-full placeholder:text-[#787486]"
      />
    </div>
  );
};
