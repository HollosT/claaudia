import { UseCasesFilters } from "../usecases";

export enum SystemType {
  AICloud =  "AI Cloud",
  Strato = "Strato",
  LocalMachine = "Local Machines",
  UCloud = "UCloud"
}

export interface IntegrationType {
  gui: boolean,
  web_browser: boolean
}
export interface SkillType {
    linux: string,
    programming: string,
    ssh: boolean,
    containers: boolean
}

export interface ResourceAvailabilityType {
  payment: boolean,
  time_limitation: boolean,
  minimum_time : boolean,
  own_resources : boolean,
}

export interface HarwareSpecType {
  vcpu: number,
  vcpu_budget?: boolean,
  netwrok_storage: number,
  network_storage_plus?: boolean,
  network_storage_budget?: boolean,
  memory: number,
  memory_budget?: boolean,
  gpu: number,
  gpu_budget?: boolean,
  shared_temporary_storage: number,
  shared_temporary_storage_unlimited?: boolean,
}

export enum ProcessorsType {
  cpu = 'CPU',
  gpu = 'GPU',
  both = 'BOTH'
}

export interface QuizType {
  scienceArea: UseCasesFilters[],
  processors: ProcessorsType[],
}

export interface HPCType  {
  id: string,
  intro: string,
  useCase: string,
  application: string,
  type: SystemType,
  name: AllHPC,
  hardware_spec: HarwareSpecType,
  resource_availability: ResourceAvailabilityType,
  data: DataLevel[],
  integrations: IntegrationType,
  skill: SkillType,
  quiz?: QuizType,
};


export enum AllHPC {
    AiCloud = "AI Cloud regular",
    AiCloudBuyIn = "AI Cloud buy-in",
    AiCloudProjects = "AI Cloud projects",
    StratoRegular = "Strato regular",
    StratoProjects = "Strato projects",
    StratoBuyIn = "Strato buy-in",
    UCloud = "UCloud",
    LocalMachine = "Lenovo Thinpad P53",
}


export enum DataLevel {
  Public,
  Internal,
  Confidential,
  Sensitive,
}
export enum HPCCategory {
    NoHpc,
    Internal,
    Danish
}

export interface HPCIntroductionType {
  id: string;
  initial: string;
  name: string;
  link: string;
  subHpcs?: AllHPC[] | [];
  dataLevel: DataLevel[];
  additionalInfo?: string;
  category: HPCCategory
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



