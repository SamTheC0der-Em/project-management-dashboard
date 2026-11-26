import onboardingImage from "../assets/onboarding.svg";
import moodboard1 from "../assets/moodboard1.svg";
import moodboard2 from "../assets/moodboard2.svg";
import mobileImage from "../assets/mobileImage.svg";
export const taskData = [
  {
    id: 1,
    title: "Brainstorming",
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    images: [],
    status: "todo",
    priority: "Low",
    comments: 4,
    attachments: 2,
   
  },
  {
    id: 2,
    title: "Research",
    description:
      "User research helps you to create an optimal product for users.",
    images: [],
    status: "todo",
    priority: "High",
    comments: 2,
    attachments: 1,
   
  },
  {
    id: 3,
    title: "Wireframes",
    description:
      "Low fidelity wireframes include the most basic content and visuals.",
    images: [],
    status: "todo",
    priority: "High",
    comments: 3,
    attachments: 0,
   
  },
  {
    id: 4,
    title: "Onboarding Illustrations",
    images: [onboardingImage],
    status: "in-progress",
    priority: "Low",
    comments: 4,
    attachments: 2,
  
  },
  {
    id: 5,
    title: "Moodboard",
    images: [moodboard1, moodboard2],
    status: "in-progress",
    priority: "Low",
    comments: 2,
    attachments: 3,
  
  },
  {
    id: 6,
    title: "Mobile App Design",
    images: [mobileImage],
    status: "done",
    priority: "Completed",
    comments: 3,
    attachments: 4,
 
  },
  {
    id: 7,
    title: "Design System",
    description: "It just needs to adapt the UI from what you did before ",
    images: [],
    status: "done",
    priority: "Completed",
    comments: 5,
    attachments: 2,
 
  },
];

export const taskDataByProject = {
  "Mobile App": taskData,
};
