import {
  AllHPC,
  DataLevel,
  HPCCategory,
  HPCCategoryType,
  HPCIntroductionType,
  HPCType,
  ProcessorsType,
  SystemType,
} from "src/services/types/hpc/hpc";
import { v4 as uuidv4 } from "uuid";
import { UseCasesFilters } from "../usecases";

export const DUMMY_HPC_CATEGORY: HPCIntroductionType[] = [
  {
    id: uuidv4(),
    category: HPCCategory.NoHpc,
    initial: "LM",
    link: "/localmachine",
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
    link: "/ucloud",
    subHpcs: [],
    dataLevel: [
      DataLevel.Public,
      DataLevel.Internal,
      DataLevel.Confidential,
      DataLevel.Sensitive,
    ],
  },
];

export const STRATO_DATA: HPCCategoryType = {
  id: uuidv4(),
  name: "Strato",
  introduction:
    "Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time.",
  tab: {
    tab_header: [
      {
        tab_title: "General information",
        isFaq: false,
        value: 0,
      },
      {
        tab_title: "Benefits",
        isFaq: false,
        value: 1,
      },
      {
        tab_title: "Common use",
        isFaq: false,
        value: 2,
      },
      {
        tab_title: "FAQ",
        isFaq: true,
        value: 3,
      },
    ],
    tab_value: [
      {
        value: 0,
        data: [
          {
            img: "/assets/resources/resources-1.png",
            title: " Instances available at hand",
            body: "The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment. Strato Instances are virtual machines, that can be launched by the user when they need it. When the instance has been created, it can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs.",
          },
          {
            img: "/assets/resources/linux.png",
            title: "Linux based virtual computer",
            body: "Strato is a linux based virtual computer platform to support data driven research that needs additional processing capacity.",
          },
          {
            img: "/assets/resources/open-stack.png",
            title: "OpenStack platform flexibility ",
            body: "The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk. ",
          },
        ],
      },
      {
        value: 1,
        data: [
          {
            title: "Hardware possibilities",
            body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power when your research needs it. Additionally, network storage allows users to store and process large datasets.",
          },
          {
            title: "Adjust the size of the computer without losing your data ",
            body: "A major advantage is that it is possible to keep your setup and data and reduce the size of the computer again when you are done with heavy processing jobs (delete your instance and start a small computer from the boot disk), ensuring that all researchers have access to processing capacity when they need it.",
          }
        ],
      },
      {
        value: 2,
        data: [
          {
            title: "",
            body: "Some of the more common uses include training of models on GPUs, collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, simulation of physics and biomolecular models, testing of web applications, the teaching of advanced computational methods and testing of distributed computing systems. ",
          }
        ],
      },
      {
        value: 3,
        data: [
          {
            title: "Who has access to the Strato platform?",
            body: "Everybody with an AAU login can access Strato platform – students and researchers alike. From here you will be able to launch a virtual machine instance in minutes."
          },
          {
            title: "How do I connect to my virtual machine on Strato?",
            body: "The virtual machine instances are accessed from a terminal application found on your local computer that runs ssh (Secure Shell). Secure Shell is part of most modern operating systems, such as most distributions of Linux, macOS, and Windows 10. ",
          },
          {
            title: "Do I have access to GPU resources on my Strato virtual machines?",
            body: "Yes. However, GPU resources are in high demand, and thus require responsible administration of the supply. For this reason, there is a separate application process for getting access. Do note, that GPU resources can also be acquired in UCloud and AI Cloud.",
          },
          {
            title:
              "Can I have a GUI (Graphical user interface) with my Strato virtual machine?",
            body: "It is possible to keep your setup and data and reduce the size of the computer again, when you are done with heavy processing jobs. This ensures that all researchers have access to processing capacity when they need it.",
          },
          {
            title: "Am I allowed to work with confidential or sensitive data on my Strato virtual machine?",
            body: "No. Strato is only suitable for data classified as public or internal information according to AAU’s data classification model (classified as levels 0 and 1, respectively). You are not allowed to work with confidential and/or sensitive information. If you need to work with these types of data, consider AI Cloud Projects or UCloud. ",
          },
          {
            title: "What software can I run on my Strato virtual machine?",
            body: "All Strato virtual machine instances are launched from Linux images. Therefore, your software needs to be able to run on Linux. ",
          },
          {
            title: "Can I have virtual machine with Windows operating system??",
            body: "No. Due to licensing reasons the Strato platform does not offer Windows-based images. "
          },
          {
            title:
              "Can I have a graphical user interface (GUI) with my Strato virtual machine? ",
            body: "Yes. You can operate applications, that require graphical user interfaces (GUI) on your Strato virtual machines. It does however involve additional manual setup. Don’t forget that a CLAAUDIA team member is always there to help you. Get in touch with us if you need assistance.",
          },
          {
            title:
              "Can I use Strato VMs as part of my production setup?",
            body: "No. The Strato platform is for research purposes only.",
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
    "AI Cloud holds the university's largest collection of GPU resources and is specifically designed for running machine learning workloads. It's particularly well suited for researchers that work with large processes that can be run in parallel.",
  tab: {
    tab_header: [
      {
        tab_title: "General information",
        isFaq: false,
        value: 0,
      },
      {
        tab_title: "Benefits",
        isFaq: false,
        value: 1,
      },
      {
        tab_title: "Common use",
        isFaq: false,
        value: 2,
      },
      {
        tab_title: "FAQ",
        isFaq: true,
        value: 3,
      },
    ],
    tab_value: [
      {
        value: 0,
        data: [
          {
            img: "/assets/resources/resources-1.png",
            title: "Resource-sharing system",
            body: "Accessing AI Cloud is done from a terminal application found on your local computer. From here you log into a front-end node, where you can manage your files and submit your jobs to a queueing mechanism (Slurm). The job is then distributed to one of the GPU nodes in the cluster. Given that AI Cloud is a platform shared among many users, it is not a system where you install your software directly onto the system. Instead, you rely on software containers, that have all the necessary software libraries bundled up in a single file. ",
          },
          {
            img: "/assets/resources/resources-1.png",
            title: "Flexible platform",
            body: "AI Cloud is a collection – a cluster – of large GPU servers and typically requires that users provide a container required to run their job. This makes the platform exceptionally flexible to your individual needs. That flexibility requires you to be able to create or download the container delivering the software that you need.",
          }
        ],
      },
      {
        value: 1,
        data: [
          {
            title: "Powerful GPU processing",
            body: "The powerful GPU processors allow users to store and process large datasets much more efficiently than would be the case with pure CPU processing. At the same time, the AI Cloud platform is not designed for CPU-only computational tasks, and we have alternative recommended platforms, such as UCloud or Strato for those needs. ",
          }
        ],
      },
      {
        value: 2,
        data: [
          {
            title: "",
            body: "AI Cloud is particularly well suited for those that need to run machine learning workloads that can run in parallel, such as deep learning tasks, image recognition models, or large language models. Other types of applications utilising GPU acceleration are also well suited, such as genomic data processing. This system inherits the advantages of containerisation for the reproducibility of research, in that the container required to complete an analysis can be replicated identically by other researchers.",
          }
        ],
      },
      {
        value: 3,
        data: [
          {
            title: "Who has access to the AI Cloud platform?",
            body: "All researchers at AAU as well as students in relation to relevant projects when approved by supervisor.",
          },
          {
            title:
              "Am I allowed to work with confidential or sensitive data om AI Cloud?",
            body: "Not directly. In AI Cloud you are only allowed to work with public or internal information according to AAU’s data classification model (classified as levels 0 and 1, respectively). There is a solution within AI Cloud - AI Cloud Projects - specifically for working with confidential or sensitive data (classified as level 2 and 3) which you can get access to by sending your request to CLAAUDIA. ",
          },
          {
            title: "How do I connect to AI Cloud? ",
            body: "The virtual machine instances are accessed from a terminal application found on your local computer that runs ssh (Secure Shell). Secure Shell is part of most modern operating systems, such as most distributions of Linux, macOS, and Windows 10. ",
          },
          {
            title:
              "Can I use AI Cloud as a collaborative platform?",
            body: "It is possible to share files among different users on the cluster.",
          },
          {
            title: "What software can I run in AI Cloud? ",
            body: "In principle any software that can run under Linux since the operating system on the servers in AI Cloud is Linux. In many cases, it is necessary to encapsulate the software in a container to use it. The software must be able to utilise the (NVIDIA) GPUs in the platform. The GPUs cannot automatically accelerate software that was not designed for it. ",
          },
          {
            title:
              "Can I have a graphical user interface (GUI) in AI Cloud?",
            body: "No. As a rule of thumb, you can only operate applications through a command-line interface. AI Cloud is best suited for throughput-type computing: queue up your job and come back for the result later. If your project could benefit from running on a GPU cluster but demands an interactive graphical interface, consider Strato Projects or Strato buy-in option. ",
          }
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
          img: "/assets/resources/resources-1.png",
          title: "Linux based virtual computer",
          body: "Strato is a linux based virtual computer platform to support data driven research that needs additional processing capacity.",
        },
        {
          img: "/assets/resources/resources-1.png",
          title: "Network storage",
          body: "Network storage allows users to store and process large datasets.",
        },
        {
          img: "/assets/resources/resources-1.png",
          title: "OpenStack platform",
          body: "The OpenStack platform allows the user to change the size of the computer (processing capacity) that is connected to their boot disk.",
        },
        {
          img: "/assets/resources/resources-1.png",
          title: "Virtualized cluster of hardware",
          body: "The Strato platform is a cluster of hardware that is virtualised to create instances that essentially function as a regular computer environment.",
        },
        {
          img: "/assets/resources/resources-1.png",
          title: "Accessed on the local computer",
          body: "Strato can be accessed from a terminal application on the user's local computer. The required software can then be installed and configured to the user's needs.",
        },
      ],
    },
    {
      value: 1,
      data: [
        {
   
          title: "Additional RAM, CPU and GPU hardware",
          body: "By using Strato your research can benefit from additional RAM, CPU and GPU hardware. Strato can thus provide you with flexibility and additional computational power, when your research needs it.",
        },
        {

          title: "CPU Heavy tasks",
          body: "Collaboration on code development, creation of Jupyter Notebook and RStudio Server hosts, testing of web applications.",
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/1200px-OpenStack%C2%AE_Logo_2016.svg.png",
          title: "GPU Heavy tasks",
          body: "Training of models on GPUs, simulation of physics and biomolecular models, teaching of advanced computational methods and testing of distributed computing systems.",
        },
        {

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
subs: [AllHPC.LocalMachine],
};
export const UCLOUD_DATA = {
  id: uuidv4(),
  name: "UCloud",
  introduction: "Interactive HPC via the UCloud platform, allows the user to interact with a high-performance computer that is allocated purely to them. The platform offers web-hosted applications or access to dedicated virtual machines. In both cases CLAAUDIA can quickly and easily help users get access to additional resources.  ",
  tab: {
  tab_header: [
    {
      tab_title: "General information",
      isFaq: false,
      value: 0,
    },
    {
      tab_title: "Benefits",
      isFaq: false,
      value: 1,
    },
    {
      tab_title: "Common use",
      isFaq: false,
      value: 2,
    }
  ],
  tab_value: [
    {
      value: 0,
      data: [
        {
          img: "/assets/resources/resources-1.png",
          title: "Intuitive and user-friendly interface ",
          body: "UCloud provides an intuitive graphical user interface to powerful interactive high-performance computing and tools for data analytics and visualization. UCloud offers an “Apps” section preloaded with popular applications and more applications can be customized and uploaded on-demand. UCloud gives researchers access to the computing power they need, whenever they need it.",
        },
        {
          img: "/assets/resources/resources-1.png",
          title: "Good fit for first-time interaction with HPC",
          body: "UCloud platform is designed to make the interaction with high-performance computing more convenient and easier to understand. If you don't have a prior experience with any other HPC system, UCloud might be a perfect choice for you. ",
        }
      ],
    },
    {
      value: 1,
      data: [
        {
          title: "High accessibility ",
          body: "All cloud services are accessible via every type of device, from workstations to laptops and tablets. ",
        },
        {
          title: "Possibilities to work with different data levels ",
          body: "UCloud is highly secure and provides a safe environment to analyse each of the data levels, including sensitive and confidential data.",
        },
        {
          title: "Collaboration tool",
          body: "UCloud makes it easy to share data with your collaborators in secure virtual environments. With UCloud you can create and manage virtual workspaces dedicated to your projects, to share resources and work together with your collaborators. There is no limit to how many projects you create and how many team members you have in your project.",
        }
      ],
    },
    {
      value: 2,
      data: [
        {
          title: "",
          body: "UCloud is equipped with advanced data analytics tools for data processing and visualization. With UCloud you can provision anything from bare-bone virtual machines available via terminal to complete software solutions in just a few seconds. The cloud infrastructure natively supports multitenancy, with a separation between data and computing resources. Utilize UCloud for working with R statistics, prototyping or idea development, or just to test and explore HPC for the first time. ",
        }
      ],
    },
  ],
},
  subs: [AllHPC.UCloud],
};

export const STRATO_REGULAR: HPCType = {
  id: uuidv4(),
  intro: 'Self-managed software',
  useCase: 'Strato is a good choice for CPU-intensive processes. It allows for explorative research thanks to its interactive environment - for example running queries or specialized algorithms or working on descriptive data exploration.',
  application: 'No application process',
  type: SystemType.Strato,
  name: AllHPC.StratoRegular,
  hardware_spec: {
    vcpu: 16,
    netwrok_storage: 5000,
    memory: 32,
    gpu: 0,
    shared_temporary_storage: -1,
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
    programming: "C knowledge",
    ssh: true,
    containers: false
  },
  quiz: {
    scienceArea: [UseCasesFilters.KRR],
    processors: [ProcessorsType.cpu]
  }
};

export const STRATO_PROJECTS: HPCType= {
  id: uuidv4(),
  type: SystemType.Strato,
  intro: 'Self-managed software',
  useCase: 'Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data',
  application: 'Internal application process',
  name: AllHPC.StratoProjects,
  hardware_spec: {
    vcpu: 120,
    netwrok_storage: 5000,
    network_storage_plus: true,
    memory: 240,
    gpu: 6,
    shared_temporary_storage: -1,
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
    programming: "C knowledge",
    ssh: true,
    containers: false
  },
  quiz: {
    scienceArea: [UseCasesFilters.KRR],
    processors: [ProcessorsType.cpu, ProcessorsType.both]
  }
};
export const STRATO_BUY_IN: HPCType= {
  id: uuidv4(),
  intro: 'Self-managed software',
  useCase: 'Strato buy-in is a great for those whose projects require the interactivity of the Strato virtual machines’ environment but at the same time working with large amount of data. Starto buy-in enables you to add the hardware you need, so you can specify your own needs, which will be connected to the system.',
  application: 'Internal application process',
  type: SystemType.Strato,
  name: AllHPC.StratoBuyIn,
  hardware_spec: {
    vcpu: -1,
    vcpu_budget: true,
    netwrok_storage: -1,
    network_storage_budget: true,
    memory: -1,
    memory_budget: true,
    gpu: -1,
    gpu_budget: true,
    shared_temporary_storage: -1,
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
    programming: "C knowledge",
    ssh: true,
    containers: false
  },
  quiz: {
    scienceArea: [UseCasesFilters.KRR, UseCasesFilters.MLDL],
    processors: [ProcessorsType.cpu, ProcessorsType.both]
  }
};

export const AI_CLOUD_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-managed software',
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
    programming: "C knowledge",
    ssh: true,
    containers: true
  },
  quiz: {
    scienceArea: [UseCasesFilters.MLDL],
    processors: [ProcessorsType.gpu]
  }
}
export const AI_CLOUD_PROJECTS_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-managed software',
  type: SystemType.AICloud,
  useCase: 'AI Cloud Projects is the most fitting choice when it comes to intensive parallel processing with sensitive or confidential data, as this option can be tailored to suit for all data levels.',
  application: 'Internal application process',
  name: AllHPC.AiCloudProjects,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: 1000,
    network_storage_plus: true,
    memory: 256,
    gpu: 4,
    shared_temporary_storage: -1,
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
    programming: "C knowledge",
    ssh: true,
    containers: true
  },
  quiz: {
    scienceArea: [UseCasesFilters.MLDL],
    processors: [ProcessorsType.gpu]
  }
}
export const AI_CLOUD_BUYIN_DATA: HPCType = {
  id: uuidv4(),
  intro: 'Self-managed software',
  useCase: 'AI Cloud buy-in offers the opportunity to purchase the hardware that best suits your needs and to include it in the AI Cloud platform. It is convenient for transformer methods in deep learning, particularly when the analysis requires processing of exceptionally large datasets– particularly image or high definition video data.',
  application: 'Internal application process',
  type: SystemType.AICloud,
  name: AllHPC.AiCloudBuyIn,
  hardware_spec: {
    vcpu: -1,
    netwrok_storage: -1,
    network_storage_budget: true,
    memory: -1,
    memory_budget: true,
    gpu: -1,
    gpu_budget: true,
    shared_temporary_storage: -1,
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
    programming: "C knowledge",
    ssh: true,
    containers: true
  },
  quiz: {
    scienceArea: [UseCasesFilters.MLDL],
    processors: [ProcessorsType.gpu, ProcessorsType.both]
  }
}

export const UCLOUD: HPCType = {
  id: uuidv4(),
  intro: 'Not self-managed',
  useCase: 'AI Cloud is a great tool for training large language models – thanks to the powerful GPU processors it provides, it is possible to accelerate various cloud workloads via parallel data processing.',
  application: 'No application process',
  type: SystemType.UCloud,
  name: AllHPC.UCloud,
  hardware_spec: {
    vcpu: 64,
    netwrok_storage: 5000,
    network_storage_plus: true,
    memory: 384,
    gpu: -1,
    shared_temporary_storage: -1,
    shared_temporary_storage_unlimited: true,
  },
  resource_availability: {
    payment: false,
    time_limitation: true,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal, DataLevel.Confidential, DataLevel.Sensitive],
  integrations: {
    gui: true,
    web_browser: true
  },
  skill: {
    linux: "",
    programming: "Minimal programming skills",
    ssh: false,
    containers: false
  },
  quiz: {
    scienceArea: [UseCasesFilters.MLDL, UseCasesFilters.KRR],
    processors: [ProcessorsType.cpu]
  }
}
export const LENOVO: HPCType = {
  id: uuidv4(),
  intro: 'Mobile workstaion',
  useCase: 'No data available',
  application: 'Through AAU library',
  type: SystemType.LocalMachine,
  name: AllHPC.LocalMachine,
  hardware_spec: {
    vcpu: 8,
    netwrok_storage: 256,
    memory: 32,
    gpu: 1,
    shared_temporary_storage: 0,
  },
  resource_availability: {
    payment: false,
    time_limitation: false,
    minimum_time : false,
    own_resources : true,
  },
  data: [DataLevel.Public, DataLevel.Internal, DataLevel.Confidential, DataLevel.Sensitive],
  integrations: {
    gui: true,
    web_browser: true
  },
  skill: {
    linux: "Windows",
    programming: "",
    ssh: false,
    containers: false
  },
  quiz: {
    scienceArea: [UseCasesFilters.MLDL, UseCasesFilters.KRR],
    processors: [ProcessorsType.cpu, ProcessorsType.gpu, ProcessorsType.both]
  }
}


export const ALL_HPCS_DATA = [STRATO_REGULAR, STRATO_PROJECTS, STRATO_BUY_IN, AI_CLOUD_DATA, AI_CLOUD_PROJECTS_DATA, AI_CLOUD_BUYIN_DATA, UCLOUD, LENOVO]