enum ProcessingUnit {
  Cpu = "CPU",
  Gpu = "GPU",
}

export interface HPC {
  id: string;
  name: string;
  memory: number;
  memoryUnit: string;
  processingUnit: ProcessingUnit[];
}

export enum AllHPC {
  AiCloud = "AI Cloud",
  AiCloudBuyIn = "AI Cloud buy-in",
  AiCloudProjects = "AI Cloud projects",
  StratoRegular = "Strato regular",
  StratoProjects = "Strato projects",
  StratoBuyIn = "Strato buy-in",
}

export enum DataLevel {
  Free,
  Number,
  Private,
  Sensitive,
}

export interface HPCIntroductionType {
  id: string;
  initial: string;
  name: string;
  link: string;
  subHpcs?: AllHPC[] | [];
  dataLevel: DataLevel[];
  additionalInfo?: string;
}

export interface CategoryTabDataType {
  img: string;
  title: string;
  body: string;
}


export interface TabDataType {
  img?: string,
  title: string,
  body: string,
}
export interface TabValueType {
  value: number,
  data: TabDataType[],
}
export interface TabHeaderType {
  tab_title: string,
  isFaq: boolean,
  value: number,
}

export interface TabType {
  tab_header:TabHeaderType[];
  tab_value: TabValueType[];
}

export interface HPCCategoryType {
  id: string;
  name: string;
  introduction: string;
  tab: TabType;
  subs?: AllHPC[];
}
