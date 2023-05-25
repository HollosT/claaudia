import {
  AllHPC,
  DataLevel,
  HPCCategory,
  HPCCategoryType,
  HPCIntroductionType,
  HPCType,
  SystemType,
} from "src/services/types/hpc/hpc";
import { v4 as uuidv4 } from "uuid";

export const DUMMY_HPC_CATEGORY: HPCIntroductionType[] = [
  {
    id: uuidv4(),
    category: HPCCategory.NoHpc,
    initial: "LM",
    link: "/strato",
    name: "Local machine",
    dataLevel: [
      DataLevel.Public,
      DataLevel.Internal,
      DataLevel.Confidential,
      DataLevel.Sensitive,
    ],
    additionalInfo: "Lenovo ThinkPad available to borrow at AAU",
  },
  {
    id: uuidv4(),
    initial: "S",
    category: HPCCategory.Internal,
    name: "Strato",
    link: "/strato",
    subHpcs: [AllHPC.StratoRegular, AllHPC.StratoBuyIn, AllHPC.StratoProjects],
    dataLevel: [DataLevel.Public, DataLevel.Internal],
  },
  {
    id: uuidv4(),
    initial: "AL",
    name: "AI Cloud",
    category: HPCCategory.Internal,
    link: "/aicloud",

    subHpcs: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn, AllHPC.AiCloudProjects],
    dataLevel: [DataLevel.Public, DataLevel.Internal],
  },
  {
    id: uuidv4(),
    initial: "UC",
    name: "UCLoud",
    category: HPCCategory.Danish,
    link: "/aicloud",
    subHpcs: [],
    dataLevel: [DataLevel.Public, DataLevel.Internal],
  },
];

export const STRATO_DATA: HPCCategoryType = {
  id: uuidv4(),
  name: "Strato",
  introduction:
    "Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time. ",
  tab: {
    tab_header: [
      {
        tab_title: "General information",
        isFaq: false,
        value: 0,
      },
      {
        tab_title: "Benefits & Common use",
        isFaq: false,
        value: 1,
      },
      {
        tab_title: "FAQ",
        isFaq: true,
        value: 2,
      },
    ],
    tab_value: [
      {
        value: 0,
        data: [
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Linux based virtual computer",
            body: "Strato is a linux based virtual computer platform to support data driven research that needs additional processing capacity.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Network storage",
            body: "Network storage allows users to store and process large datasets.",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png",
            title: "OpenStack platform",
            body: "The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Virtualized cluster of hardware",
            body: "The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Accessed on the local computer",
            body: "Strato can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs.",
          },
        ],
      },
      {
        value: 1,
        data: [
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Additional RAM, CPU and GPU hardware",
            body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power, when your research needs it.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "CPU Heavy tasks",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png",
            title: "GPU Heavy tasks",
            body: "Training of models on GPUs, simulation of physics and biomolecular models, teaching of advanced computational methods and testing of distributed computing systems.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Adjust the size of computer without losing data",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
        ],
      },
      {
        value: 2,
        data: [
          {
            title: "Who has access to the Strato platform?",
            body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power, when your research needs it.",
          },
          {
            title:
              "Do I have access to GPU resources on my Strato virtual machines?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title: "What software can I run on my Strato virtual machine?",
            body: "All Strato virtual machine instances are launched from Linux images. Therefore, your software needs to be able to run on Linux.",
          },
          {
            title:
              "Can I have a GUI (Graphical user interface) with my Strato virtual machine?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
          {
            title: "How do I connect to my virtual machine on Strato?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title:
              "Am I allowed to work with confidential or sensitive data on my Strato virtual machine?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
          {
            title: "Can I have virtual machine with Windows OS?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title:
              "Can I use Strato virtual machines as part of my production setup?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
        ],
      },
    ],
  },
  subs: [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn],
};

export const AICLOUD_DATA = {
  id: uuidv4(),
  name: "AI Cloud",
  introduction:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  tab: {
    tab_header: [
      {
        tab_title: "General information",
        isFaq: false,
        value: 0,
      },
      {
        tab_title: "Benefits & Common use",
        isFaq: false,
        value: 1,
      },
      {
        tab_title: "FAQ",
        isFaq: true,
        value: 2,
      },
    ],
    tab_value: [
      {
        value: 0,
        data: [
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Linux based virtual computer",
            body: "Strato is a linux based virtual computer platform to support data driven research that needs additional processing capacity.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Network storage",
            body: "Network storage allows users to store and process large datasets.",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png",
            title: "OpenStack platform",
            body: "The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Virtualized cluster of hardware",
            body: "The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Accessed on the local computer",
            body: "Strato can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs.",
          },
        ],
      },
      {
        value: 1,
        data: [
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Additional RAM, CPU and GPU hardware",
            body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power, when your research needs it.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "CPU Heavy tasks",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png",
            title: "GPU Heavy tasks",
            body: "Training of models on GPUs, simulation of physics and biomolecular models, teaching of advanced computational methods and testing of distributed computing systems.",
          },
          {
            img: "https://www.atominfo.hu/files/linux.png",
            title: "Adjust the size of computer without losing data",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
        ],
      },
      {
        value: 2,
        data: [
          {
            title: "Who has access to the Strato platform?",
            body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power, when your research needs it.",
          },
          {
            title:
              "Do I have access to GPU resources on my Strato virtual machines?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title: "What software can I run on my Strato virtual machine?",
            body: "All Strato virtual machine instances are launched from Linux images. Therefore, your software needs to be able to run on Linux.",
          },
          {
            title:
              "Can I have a GUI (Graphical user interface) with my Strato virtual machine?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
          {
            title: "How do I connect to my virtual machine on Strato?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title:
              "Am I allowed to work with confidential or sensitive data on my Strato virtual machine?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
          {
            title: "Can I have virtual machine with Windows OS?",
            body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
          },
          {
            title:
              "Can I use Strato virtual machines as part of my production setup?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
        ],
      },
    ],
  },
  subs: [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn],
};

export const LOCALMACHINE_DATA = {
  id: uuidv4(),
  name: "Local machine",
  introduction:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};
export const UCLOUD_DATA = {
  id: uuidv4(),
  name: "UCloud",
  introduction:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

export const STRATO_REGULAR: HPCType = {
  id: uuidv4(),
  intro: 'Self-manage software',
  useCase: 'Strato is a good choice for CPU-intensive processes. It allows for explorative research thanks to its interactive environment - for example running queries or specialized algorithms or working on descriptive data exploration.',
  application: 'No application process',
  type: SystemType.Strato,
  name: AllHPC.StratoRegular,
  hardware_spec: {
    vcpu: 16,
    netwrok_storage: 5000,
    memory: 32,
    gpu: 0,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: false,
    time_limitation: false,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal],
  integrations: {
    gui: true,
    web_browser: true
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: false
  }
};

export const STRATO_PROJECTS: HPCType= {
  id: uuidv4(),
  type: SystemType.Strato,
  intro: 'Self-manage software',
  useCase: 'Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data',
  application: 'Internal application process',
  name: AllHPC.StratoProjects,
  hardware_spec: {
    vcpu: 120,
    netwrok_storage: -1,
    memory: 240,
    gpu: 6,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: false,
    time_limitation: true,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal],
  integrations: {
    gui: true,
    web_browser: true
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: false
  }
};
export const STRATO_BUY_IN: HPCType= {
  id: uuidv4(),
  intro: 'Self-manage software',
  useCase: 'Strato buy-in is a great for those whose projects require the interactivity of the Strato virtual machines’ environment but at the same time working with large amount of data. Starto buy-in enables you to add the hardware you need, so you can specify your own needs, which will be connected to the system.',
  application: 'Internal application process',
  type: SystemType.Strato,
  name: AllHPC.StratoBuyIn,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: -1,
    memory: -1,
    gpu: -1,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: true,
    time_limitation: false,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal],
  integrations: {
    gui: true,
    web_browser: true
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: false
  }
};

export const AI_CLOUD_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-manage software',
  useCase: 'AI Cloud is a great tool for training large language models – thanks to the powerful GPU processors it provides, it is possible to accelerate various cloud workloads via parallel data processing.',
  application: 'Internal application process',
  type: SystemType.AICloud,
  name: AllHPC.AiCloud,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: 1000,
    memory: 1500,
    gpu: 16,
    shared_temporary_storage: 30000,
  },
  resource_availability: {
    payment: false,
    time_limitation: false,
    minimum_time : false,
    own_resources : false,
  },
  data: [DataLevel.Public, DataLevel.Sensitive],
  integrations: {
    gui: false,
    web_browser: false
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: true
  }
}
export const AI_CLOUD_PROJECTS_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-manage software',
  type: SystemType.AICloud,
  useCase: 'AI Cloud Projects is the most fitting choice when it comes to intensive parallel processing with sensitive or confidential data, as this option can be tailored to suit for all data levels.',
  application: 'Internal application process',
  name: AllHPC.AiCloudProjects,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: -1,
    memory: 256,
    gpu: 4,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: true,
    time_limitation: true,
    minimum_time : true,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal, DataLevel.Confidential, DataLevel.Sensitive],
  integrations: {
    gui: false,
    web_browser: false
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: true
  }
}
export const AI_CLOUD_BUYIN_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-manage software',
  useCase: 'AI Cloud buy-in offers the opportunity to purchase the hardware that best suits your needs and to include it in the AI Cloud platform. It is convenient for transformer methods in deep learning, particularly when the analysis requires processing of exceptionally large datasets– particularly image or high definition video data.',
  application: 'Internal application process',
  type: SystemType.AICloud,
  name: AllHPC.AiCloudBuyIn,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: -1,
    memory: -1,
    gpu: -1,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: true,
    time_limitation: false,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal, DataLevel.Confidential, DataLevel.Sensitive],
  integrations: {
    gui: false,
    web_browser: false
  },
  skill: {
    linux: "Linux",
    programming: "C",
    ssh: true,
    containers: true
  }
}


export const ALL_HPCS_DATA = [STRATO_REGULAR, STRATO_PROJECTS, STRATO_BUY_IN, AI_CLOUD_DATA, AI_CLOUD_PROJECTS_DATA, AI_CLOUD_BUYIN_DATA]