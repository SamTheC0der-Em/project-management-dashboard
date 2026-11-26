import { Button } from "../ui/Button";
import Link from "../../assets/Link.svg";
import List from "../../assets/List.svg";
import Grid from "../../assets/Grid.svg";
import Separator from "../../assets/separator.svg";
import Plus from "../../assets/Plus.svg";
import Pencil from "../../assets/Pencil.svg";
import People from "../../assets/people.svg";
import Filter from "../../assets/filter.svg";
import { avatars } from "../../data/profileImage";
import Calendar from "../../assets/calendar.svg";
import ChevronDown from "../../assets/ChevronDown.svg";

export const DashboardHero = ({
  projectName,
  filter,
  setFilter,
  todayOnly,
  setTodayOnly,
}) => {
  return (
    <section className="mt-2 flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0D062D] sm:text-4xl">
            {projectName}
          </h1>
          <Button>
            <img src={Pencil} />
          </Button>
          <Button>
            <img src={Link} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button className="inline-flex items-center gap-1.5 text-xs text-[#5030E5] hover:text-[#3920b8]">
            <img src={Plus} />
            Invite
          </Button>
          <div className="flex items-center pl-2" aria-label="Project members">
            {avatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                className="-ml-2  rounded-full border-2 border-white object-cover"
                style={{ zIndex: index + 1 }}
              />
            ))}
            <span className="-ml-2 grid size-10 place-items-center rounded-full border-2 border-white bg-[#F4D7DC] text-xs font-medium text-[#D25B70] ">
              +2
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <label className=" inline-flex h-8 items-center gap-1.5 rounded-md border border-[#787486] px-2.5 text-xs text-[#787486]">
            <img src={Filter} alt="" className="size-3.5" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="max-w-15.5 bg-transparent  outline-none"
            >
              <option value="all">Filter</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>

          <Button
            onClick={() => setTodayOnly((current) => !current)}
            className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs transition ${
              todayOnly
                ? "border-[#5030E5] bg-[#f2efff] text-[#5030E5]"
                : "border-[#787486] text-[#787486] hover:bg-[#f7f6fc]"
            }`}
          >
            <img src={Calendar} />
            Today
            <img src={ChevronDown} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#787486] px-2.5 text-xs text-[#787486] hover:bg-[#f7f6fc]">
            <img src={People} />
            Share
          </Button>
          <img src={Separator} />
          <div className="flex items-center gap-1">
            <Button className="grid place-items-center rounded-md bg-[#5030E5]">
              <img src={List} />
            </Button>
            <Button className="grid  place-items-center rounded-md text-[#787486] hover:bg-[#f0eef9]">
              <img src={Grid} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
