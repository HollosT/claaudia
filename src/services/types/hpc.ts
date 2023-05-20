enum ProcessingUnit {
    Cpu= 'CPU',
    Gpu = 'GPU'
}

export interface HPC {
    id: string;
    name: string;
    memory: number;
    memoryUnit: string;
    processingUnit: ProcessingUnit[];
}

export enum AllHPC {
    AiCloud = 'AI Cloud',
    AiCloudBuyIn = 'AI Cloud buy-in',
    AiCloudProjects = 'AI Cloud projects',
    StratoRegular = 'Strato regular',
    StratoProjects = 'Strato projects',
    StratoBuyIn = 'Strato buy-in',
}

export enum DataLevel {
    Free,
    Number,
    Private,
    Sensitive,
}

export interface HPCCategory {
    id: string,
    initial: string,
    name: string,
    subHpcs?: AllHPC[] | [], 
    dataLevel: DataLevel[],
    additionalInfo?: string
}
