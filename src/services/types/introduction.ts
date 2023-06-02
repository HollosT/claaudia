import { v4 as uuidv4 } from "uuid";

export interface Step {
  id: string;
  question: string;
  title: string;
  body: string;
  order: number;
}

export const INTRODUCTION_DATA: Step[] = [
  {
    id: uuidv4(),
    question: "What is HPC Matchmaker?",
    title: "Explore the possibilities of High-Performance Computing ",
    body: "HPC Matchmaker is a tool which gathers all the information you need to know about High-Performance Computing (HPC) resources available to you, in an accessible way. It also helps you to simplify the decision-making process of assessing the right fit for your current and future projects. ",
    order: 1,
  },
  {
    id: uuidv4(),
    question: "Who can benefit from HPC Matchmaker?",
    title:
      "Choose a powerful system to use in your next student or research project",
    body: "This tool aids all students and researchers at Aalborg University who need more computational power than they currently have access to. You can take advantage of HPC Matchmaker to find out which system and its characteristics fit your needs best. ",
    order: 2,
  },
  {
    id: uuidv4(),
    question: "What does HPC Matchmaker provide you?",
    title:
      "Find your own way of getting answers to your questions ",
    body: "Dive into many alternatives for exploring different systems, from use cases to matrix comparisons. You can also undertake a matchmaking quiz which will guide you to the best possible solution for your current needs. If you are new to the HPC topic, you can access the definitions library with all crucial terms and explanations. ",
    order: 3,
  },
];
