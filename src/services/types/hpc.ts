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
    StratoRegular = 'Strato regular',
    StratoProjects = 'Strato projects',
    StratoBuyIn = 'Strato buy-in',
    AiCloud = 'AI Cloud',
    AiCloudBuyIn = 'AI Cloud buy-in',
    AiCloudProjects = 'AI Cloud projects',
}
