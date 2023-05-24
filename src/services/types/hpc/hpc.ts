
export enum SystemType {
  AICloud,
  Strato,
  LocalMachine,
  UCloud
}

export interface IntegrationType {
  gui: boolean,
  web_browser: boolean
}
export interface SkillType {
    linux: boolean,
    programming: boolean,
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
  netwrok_storage: number,
  memory: number,
  gpu: number,
  shared_temporary_storage: number,
}

export interface HPCType  {
  id: string,
  intro: string,
  type: SystemType,
  name: AllHPC,
  hardware_spec: HarwareSpecType,
  resource_availability: ResourceAvailabilityType,
  data: DataLevel[],
  integrations: IntegrationType,
  skill: SkillType
};


export enum AllHPC {
    AiCloud = "AI Cloud",
    AiCloudBuyIn = "AI Cloud buy-in",
    AiCloudProjects = "AI Cloud projects",
    StratoRegular = "Strato regular",
    StratoProjects = "Strato projects",
    StratoBuyIn = "Strato buy-in",
}

export enum DataLevel {
  Public,
  Internal,
  Confidential,
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



