
export enum DefinitionTopic {
   Computing = "Computing",
   HardwareComponents = "Hardware components",
   CompInf = "Computing infrastructure",
   SystemEnv = "System environment",
   DataClassification = "Data classification",
}

export interface DefinitionType {
        id: string,
        title: string,
        body: string,
        topic: DefinitionTopic[]
}