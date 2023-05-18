
export enum DefinitionTopic {
    Components = 'Components',
    Software = 'Software',
    SomethingElse = 'Something else',
}

export interface DefinitionType {
        id: string,
        title: string,
        body: string,
        link: string,
        linkTitle: string,
        topic: DefinitionTopic[]
}