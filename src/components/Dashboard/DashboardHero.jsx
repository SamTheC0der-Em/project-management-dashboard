import { Button } from "../ui/Button";
import Link from "../../assets/Link.svg";
import List from "../../assets/List.svg";
import Grid from "../../assets/Grid.svg";
import Separator from "../../assets/separator.svg";
import Plus from "../../assets/Plus.svg";
import Pencil from "../../assets/Pencil.svg";
import People from "../../assets/People.svg";
import Filter from "../../assets/Filter.svg";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import Ellipse4 from "../../assets/Ellipse4.svg";
import Ellipse5 from "../../assets/Ellipse5.svg";

import Calendar from "../../assets/calendar.svg";
import ChevronDown from "../../assets/ChevronDown.svg";

export const DashboardHero = () => {
  return (
    <section className="mt-2 flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0D062D] sm:text-4xl">
            Mobile App
          </h1>
          <Button>
            <img src={Pencil} />
          </Button>
          <Button>
            <img src={Link} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-[#5030E5] hover:text-[#3920b8]"
            >
              <img src={Plus} />
              Invite
            </Button>
          </div>
          <div className="flex items-center">
            <img src={Ellipse1} className="-ml-2 grid" />
            <img src={Ellipse2} className="-ml-2 grid" />
            <img src={Ellipse4} className="-ml-2 grid" />
            <img src={Ellipse5} className="-ml-2 grid" />
            <span className="-ml-2 grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-[#F4D7DC] text-base font-medium text-[#D25B70]">
              +2
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button className="flex rounded-md border border-[#787486] p-2">
            <div className="flex items-center gap-1.5">
              <img src={Filter} />
              Filter
            </div>

            <img src={ChevronDown} />
          </Button>
          <Button className="flex rounded-md border border-[#787486] p-2">
            <div className="flex items-center gap-1.5">
              <img src={Calendar} />
              Today
              <img src={ChevronDown} />
            </div>
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button className="flex items-center gap-1.5 rounded-md border border-[#787486] p-2">
            <img src={People} />
            Share
          </Button>
          <img src={Separator} />
          <div className="flex items-center gap-5.5">
            <Button>
              <img src={List} />
            </Button>

            <Button>
              <img src={Grid} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
