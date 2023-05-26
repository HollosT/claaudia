
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


export interface DefintionsIntorFilterType {
        body: string,
        topic: DefinitionTopic | string
}

export const DEFINiTIONS_FILTER_INTRO:DefintionsIntorFilterType[]  = [
        {
                body: 'Find all definitions regarding supercomputing, hardware components, system infrastructure and environment, or data levels.',
                topic: 'All'
        },
        {
                body: 'Find out what is high-performance or cloud computing as well as get an understanding of powerful parallel processing.',
                topic: DefinitionTopic.Computing
        },
        {
                body: 'Learn about the hardware in high-performance computing systems and discover the possibilities you can utilise in your projects.',
                topic: DefinitionTopic.HardwareComponents
        },
        {
                body: 'Look into how high-performance computing systems are built and get insight into how their architecture enables the processing of high-computational tasks.',
                topic: DefinitionTopic.CompInf
        },
        {
                body: 'Learn what is important to know when working with or encountering high-performance computing systems and get an understanding of how to work in such an environment.',
                topic: DefinitionTopic.SystemEnv
        },
        {
                body: 'Delve into the Data Classification Model to find out what data categories you are working with and how you should handle that data. Keep in mind that different types of HPC are applicable for only certain data levels',
                topic: DefinitionTopic.DataClassification
        },
  
]