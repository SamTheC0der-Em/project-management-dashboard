import Bulb from "../../assets/lamp.svg";
import { Button } from "../ui/Button";

export const ThoughtCard = ({ collapsed }) => {
  if (collapsed) return null;
  return (
    <div className="mt-auto p-3 relative">
      <div className=" bg-[#F5F5F5] rounded-xl p-3 text-center">
        <h3 className="text-sm font-medium text-gray-700">Thoughts Time</h3>
        <p className="text-[12px] text-[#787486] font-[400px] mt-2 leading-4">
          We don't have any tips for now. Do you have any ideas for your
          projects?
        </p>

        <Button
          className="w-full bg-white border font-medium border-gray-200
          rounded-sm text-sm py-2 mt-3 hover:bg-gray-100"
        >
          Write a message
        </Button>
      </div>
      <div className="grid place-items-center absolute -top-5 left-21.25 bg-[#f5f5f5] rounded-full w-11.25 h-11.25">
        <img src={Bulb} />
      </div>
    </div>
  );
};
