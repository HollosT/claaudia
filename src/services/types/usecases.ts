import { AllHPC } from "./hpc"

interface Features {
    feature: string
}

export interface UseCasesType  {
    id: string,
    type: string,
    title: string,
    hpcs: AllHPC[],
    features: Features[],
    body: string
}