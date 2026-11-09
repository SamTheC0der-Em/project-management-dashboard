import { Lightbulb } from "lucide-react";
export const ThoughtCard = ({collapsed}) => {
  if (collapsed) return null;
  return (
    <div className="mt-auto p-3">
      <div className="bg-[#F5F5F5] rounded-xl p-3 text-center">
        <div className="flex justify-center mb-2">
          <div className="relative bg-yellow-100 p-2 rounded-full">
            <Lightbulb size={17} className=" absolute left-1.5 top-2.5text-yellow-500" />
          </div>
        </div>

        <h3 className="text-sm font-medium text-gray-700">Thoughts Time</h3>

        <p className="text-[12px] text-[#787486] font-[400px] mt-2 leading-4">
          We don't have any tips for now. Do you have any ideas for your
          projects?
        </p>

        <button
          className="w-full bg-white border font-medium border-gray-200
          rounded-sm text-sm py-2 mt-3 hover:bg-gray-100"
        >
          Write a message
        </button>
      </div>
    </div>
  );
};
