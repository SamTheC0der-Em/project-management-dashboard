import SearchIcon from "../../assets/SearchIcon.svg";
export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md px-3 py-2 w-64">
      <img src={SearchIcon} />

      <input
        type="text"
        placeholder="Search for anything..."
        className="bg-[#F5F5F5] outline-none text-xs w-full placeholder:text-[#787486]"
      />
    </div>
  );
};
