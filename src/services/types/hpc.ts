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


export interface Step {
    id: string,
    question: string,
    title: string,
    body: string,
    order: number
}