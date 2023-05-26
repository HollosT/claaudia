import { AllHPC } from "./hpc/hpc";


export enum UseCasesFilters {
  MLDL = 'Machine & Deep Learning', 
  NLP = 'Natural Language Processing (NLP)', 
  KRE = 'Knowledge Representation and Reasoning', 
  TDM = 'Text & Data Mining', 
  CV = 'Computer Vision ', 
  S = 'Simulation', 
}

interface Features {
  feature: string;
}

export interface UseCasesType {
  id: string;
  type: AllHPC;
  title: string;
  defaculty: UseCasesFilters;
  hpcs?: AllHPC[];
  features: Features[];
  body: string;
  img?: string;
}
