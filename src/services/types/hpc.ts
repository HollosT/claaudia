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
    id: number,
    question: string,
    title: string,
    body: string,
    img: string,
    order: number
}