import platformRoutes from 'src/services/router/platform-routes';
import { AllHPC, DataLevel, HPCCategoryType, HPCIntroductionType } from 'src/services/types/hpc/hpc';
import { v4 as uuidv4 } from 'uuid'


export const DUMMY_HPC_CATEGORY: HPCIntroductionType[] = [
    {
        id: uuidv4(),
        initial: 'LM',
        link: '/strato',
        name: 'Local machine',
        dataLevel: [DataLevel.Free, DataLevel.Number, DataLevel.Private, DataLevel.Sensitive],
        additionalInfo: 'Lenovo ThinkPad available to borrow at AAU'
    },
    {
        id: uuidv4(),
        initial: 'S',
        name: 'Strato',
        link: '/strato',
        subHpcs: [AllHPC.StratoRegular, AllHPC.StratoBuyIn, AllHPC.StratoProjects],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
    {
        id: uuidv4(),
        initial: 'AL',
        name: 'AI Cloud',
        link: '/aicloud',

        subHpcs: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn, AllHPC.AiCloudProjects],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
    {
        id: uuidv4(),
        initial: 'UC',
        name: 'UCLoud',
        link: '/aicloud',
        subHpcs: [],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
]

export const STRATO_DATA = {
    id: uuidv4(),
    name: 'Strato',
    introduction: 'Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time. ',
    tab: {
        tab_header: [
            {
                tab_title: 'General information',
                value: 0,
            },
            {
                tab_title: 'Benefits',
                value: 1,
            },
            {
                tab_title: 'Common use',
                value: 2,
            },
            {
                tab_title: 'Getting access',
                value: 3,
            },
            {
                tab_title: 'FAQ',
                value: 4,
            },
        ],
        tab_value: [
            {
                value: 0,
                data: [
                    {
                        img: 'https://www.atominfo.hu/files/linux.png',
                        title: 'Linux based virtual computer',
                        body: 'Network storage allows users to store and process large datasets.'
                    },
                    {
                        img: 'https://www.atominfo.hu/files/linux.png',
                        title: 'Network storage',
                        body: 'Network storage allows users to store and process large datasets.'
                    },
                    {
                        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png',
                        title: 'OpenStack platform',
                        body: 'The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk.'
                    },
                    {
                        img: 'https://www.atominfo.hu/files/linux.png',
                        title: 'Virtualized cluster of hardware',
                        body: 'The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment.'
                    },
                    {
                        img: 'https://www.atominfo.hu/files/linux.png',
                        title: 'Accessed on the local computer',
                        body: "Strato can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs."
                    },
                ]
            },
            {
                value: 1,
                data: ['Interactive', 'good', 'easy']
            }, 
            {
                value: 0,
                data: ['sensitive data', 'engineering', 'language model' ]
            }
        ]
    },

    subs: [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn]
}

export const AICLOUD_DATA: HPCCategoryType = {
    id: uuidv4(),
    name: 'AI Cloud',
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    // tab: [
    //      {
    //         tab_title: 'General information',
    //         value: 1,
    //         data: [
    //             {
    //                 img: 'https://www.atominfo.hu/files/linux.png',
    //                 title: 'Linux based virtual computer',
    //                 body: 'Network storage allows users to store and process large datasets.'
    //             },
    //             {
    //                 img: 'https://www.atominfo.hu/files/linux.png',
    //                 title: 'Network storage',
    //                 body: 'Network storage allows users to store and process large datasets.'
    //             },
    //             {
    //                 img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png',
    //                 title: 'OpenStack platform',
    //                 body: 'The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk.'
    //             },
    //             {
    //                 img: 'https://www.atominfo.hu/files/linux.png',
    //                 title: 'Virtualized cluster of hardware',
    //                 body: 'The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment.'
    //             },
    //             {
    //                 img: 'https://www.atominfo.hu/files/linux.png',
    //                 title: 'Accessed on the local computer',
    //                 body: "Strato can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs."
    //             },
    //         ]
    //     } ,
    //      {
    //         tab_title: 'Benefits',
    //         value: 2,
    //         data: ['Interactive', 'good', 'easy']
    //     }, 
    //      {
    //         tab_title: 'Common use',
    //         value: 3,
    //         data: ['sensitive data', 'engineering', 'language model' ]
    //     } 
    // ],
    // subs: [AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn]
}

export const LOCALMACHINE_DATA: HPCCategoryType = {
    id: uuidv4(),
    name: 'Local machine',
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  
}
export const UCLOUD_DATA: HPCCategoryType = {
    id: uuidv4(),
    name: 'UCloud',
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  
}