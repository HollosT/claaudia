import { DefinitionTopic, DefinitionType } from "../types/definition";
import { AllHPC } from "../types/hpc/hpc";
import { UseCasesFilters, UseCasesType } from "../types/usecases";
import { v4 as uuidv4 } from "uuid";


export const DUMMY_CASES: UseCasesType[] = [
    {
      id: uuidv4(),
      type: AllHPC.AiCloudBuyIn,
      img: 'assets/usecases.png',
      defaculty: UseCasesFilters.MLDL,
      title: "Transformer methods with large amount of data",
      hpcs: [AllHPC.AiCloudBuyIn],
      features: [
        {
          feature: "Powerful GPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        },
        {
          feature: "Payment required",
        },
      ],
      body: "AI Cloud buy-in might be a relevant choice when working with transformer methods in deep learning, and when the analysis involves a great amount of data– particularly image or video data. In this scenario, a good practice would be to test your jobs locally on a smaller scale, and involve the HPC afterwards, as it might take even multiple days to finish – depending how large is the data set you are working on. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoProjects,
      defaculty: UseCasesFilters.MLDL,
      title: "Synthetic data generation and probabilistic graphical model ",
      hpcs: [AllHPC.StratoProjects],
      features: [
        {
          feature: "Powerful CPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        },
        {
          feature: "Possibility to integrate GPU",
        },
      ],
      body: "Integrate the joint power of CPU and GPU in an interactive environment provided by Strato Projects if you need to run your experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take advantage of the GPU available on this system and run the algorithms effectively.",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloudProjects,
      defaculty: UseCasesFilters.MLDL,
      title: "Synthetic data generation and probabilistic graphical model ",
      hpcs: [AllHPC.AiCloudProjects],
      features: [
        {
          feature: "Powerful CPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        }
      ],
      body: "Implement all data levels utilising artificial intelligence in your analysis. If you are planning to work on drug discovery acceleration and development, consider AI Cloud Projects which allows you to work on both sensitive and confidential data, which means you can store information concerning individuals' health. Involve deep learning algorithms for speed and capacity to train neural networks. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloud,
      defaculty: UseCasesFilters.MLDL,
      title: "Electricity price forecasting",
      hpcs: [AllHPC.AiCloud],
      features: [
        {
          feature: "Powerful CPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        }
      ],
      body: "Integrate machine learning in your project to identify patterns in electricity price forecasting and develop large models with the use of AI Cloud's access to a powerful GPU, which provides processing power capable of dealing with large and complex datasets. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloud,
      defaculty: UseCasesFilters.NLP,
      title: "Training large language models ",
      hpcs: [AllHPC.AiCloud],
      features: [
        {
          feature: "Powerful CPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        }
      ],
      body: "Train large language models thanks to the powerful GPU which AI Cloud provides. You can accelerate various cloud workloads in parallel data processing and develop models for human-robot interaction or image classification. Integrate large datasets in your projects and train your models on HPC servers.",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoProjects,
      defaculty: UseCasesFilters.NLP,
      title: "Developing natural language processing pipelines ",
      hpcs: [AllHPC.StratoProjects],
      features: [
        {
          feature: "Powerful CPU processinig",
        },
        {
          feature: "Data levels 0 and 1",
        },
        {
          feature: "Possibility to integrate GPU",
        },
      ],
      body: "Develop a natural language processing pipeline and create a set consisting of several natural language processing large language models. Involve extensive datasets in your projects with convenient memory and storage access possibilities of Strato Projects with the possibility of GPU integration. Work in an individual and interactive environment. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.UCloud,
      defaculty: UseCasesFilters.NLP,
      title: "Developing natural language processing frameworks ",
      hpcs: [AllHPC.UCloud],
      features: [
        {
          feature: "Graphical user interface",
        },
        {
          feature: "All data levels",
        },
        {
          feature: "No programming skills required",
        },
      ],
      body: "Consider UCloud Interactive HPC for building up a natural language processing framework for any language. Integrate entity recognition or subjectivity detection, or run tests on multiple natural language processing pipelines in order to create a state-of-the-art model, with the possibility of integrating all data levels. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoRegular,
      defaculty: UseCasesFilters.KRR,
      title: "Graph data management and knowledge graphs ",
      hpcs: [AllHPC.StratoRegular],
      features: [
          {
            feature: "Powerful CPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
      ],
      body: "If you are planning to carry out CPU-intensive processes in your project, consider integrating Strato, which allows for explorative research thanks to its interactive environment - for example running queries or specialized algorithms while working on the graph data. Suitable for those whose analysis involves measuring the efficiency of the code, and where the code algorithms play a great role in the project. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloud,
      defaculty: UseCasesFilters.KRR,
      title: "Knowledge graph embedding",
      hpcs: [AllHPC.AiCloud],
      features: [
          {
            feature: "Powerful GPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
      ],
      body: "Involve the powerful GPU provided by AI Cloud in your project to train different knowledge graph embedding models for many applications like entity recognition, clustering, or link prediction. Take advantage of parallel computing possibilities and integrate them in multi-relation learning of your models. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoRegular,
      defaculty: UseCasesFilters.TDM,
      title: "Text mining",
      hpcs: [AllHPC.StratoRegular],
      features: [
          {
            feature: "Powerful CPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
      ],
      body: "Tackle multi-dimensional problems involving text mining methods and consult utilizing Strato, which provides access to powerful CPU cores. Set up your own virtual environment, establish the connection between the files, settings and libraries, and work on your extensive data sets at any time, without the need of setting up the environment every time you start running the virtual machine and save time on training your models. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoBuyIn,
      defaculty: UseCasesFilters.TDM,
      title: "Data mining",
      hpcs: [AllHPC.StratoBuyIn],
      features: [
          {
            feature: "Powerful CPU and GPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
          {
            feature: "Payment required",
          },
      ],
      body: "If your project involves dealing with a great amount of unstructured data, consider integrating Strato buy-in for the implementation of various mathematical and statistical algorithms in an interactive environment allowing for fast and parallel computing. Involve multiple complex databases and data processing and choose the required hardware specifications yourself. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloud,
      defaculty: UseCasesFilters.CV,
      title: "Object recognition ",
      hpcs: [AllHPC.AiCloud],
      features: [
          {
            feature: "Powerful GPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          }
      ],
      body: "Consider involving AI Cloud for training large neural networks for object recognition. The powerful GPU allows for achieving high-performance processing by integrating parallel computing into your project, which will also make the training process faster. With AI Cloud, you can integrate large data sets into your analysis and run short sampling tests to make sure the further processes are correct, fast, and convenient. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoProjects,
      defaculty: UseCasesFilters.CV,
      title: "Training object detection model  ",
      hpcs: [AllHPC.StratoProjects],
      features: [
        {
            feature: "Powerful CPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
          {
            feature: "Possibility to integrate GPU",
          },
      ],
      body: "Train object detection models with the use of deep neural networks by integrating GPU in an explorative and interactive environment. The possibilities of Strato Projects allow you to run tasks on servers with powerful GPU to integrate training pipelines, and effectively train your models.  ",
    },
    {
      id: uuidv4(),
      type: AllHPC.StratoProjects,
      defaculty: UseCasesFilters.S,
      title: "Running parallel simulations ",
      hpcs: [AllHPC.StratoProjects],
      features: [
        {
            feature: "Powerful CPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          },
          {
            feature: "Possibility to integrate GPU",
          },
      ],
      body: "If you are planning to run several simulations in your project simultaneously, possibly also involving extensive data sets, you might consider applying for access to Strato Projects, which allows for parallel computing in an interactive environment of virtual machines. ",
    },
    {
      id: uuidv4(),
      type: AllHPC.AiCloud,
      defaculty: UseCasesFilters.S,
      title: "Running atomistic simulations ",
      hpcs: [AllHPC.AiCloud],
      features: [
        {
            feature: "Powerful GPU processinig",
          },
          {
            feature: "Data levels 0 and 1",
          }
      ],
      body: "Consider involving AI Cloud if in your project you are planning to run atomistic simulations. Powerful GPU processing is relevant when applying various methods for simulating materials and minerals on an atomic level, which might require running parallel simulations or many related scientific computing applications - which are supported by AI Cloud.  ",
    },
    
  ];

export const DUMMY_DEFINITIONS: DefinitionType[] = [
    {
      id: uuidv4(),
      title: "HPC (High Performance Computing)",
      body: "High-performance computing (HPC) involves the use of powerful computing resources to perform computationally demanding tasks that are beyond the capability of traditional computing systems. HPC is used to process large datasets, perform simulations, and run resource-intensive applications, such as modelling climate patterns, simulating molecular behaviour, analysing genetic data, designing and testing products and structures, simulating fluid dynamics, optimizing manufacturing processes, identifying trends, and making predictions. HPC allows processing and analysis of complex data, leading to faster discoveries, more efficient processes, and better decision-making.",
      topic: [DefinitionTopic.Computing],
    },
    {
      id: uuidv4(),
      title: "Cloud computing",
      body: "All the HPC systems presented on the HPC Matchmaker are systems accessible in the cloud. Cloud computing refers to on-demand delivery and access to computing resources -like applications, servers, or storage - via the Internet. This way the user can access the resources through their local machine from any location, which results in high accessibility and convenience of use. In the context of data analysis, cloud services allow users to perform high-demanding computational tasks in a relatively short time.",
      topic: [DefinitionTopic.Computing],
    },
    {
      id: uuidv4(),
      title: "Parallel processing ",
      body: "Parallel processing is the technique of dividing a single task into smaller parts that can be executed simultaneously on multiple processors or computing systems. It is often used in HPC to speed up computations and increase efficiency. The hardware component crucial for enabling parallel processing is GPU. ",
      topic: [DefinitionTopic.Computing],
    },
    {
      id: uuidv4(),
      title: "Virtual machine (VM)",
      body: "A virtual machine (VM) is a software environment that emulates a physical computer, including hardware components such as a CPU, memory, and storage. VMs are commonly used in HPC to create isolated environments for running scientific applications, providing users with the flexibility to customize and configure the environment to their specific needs without interfering with other users or applications running on the same hardware. ",
      topic: [DefinitionTopic.Computing],
    },

    {
      id: uuidv4(),
      title: "Central Processing Unit (CPU) ",
      body: "The Central Processing Unit - CPU - is the primary component of a computer that performs arithmetic, logic, and input/output operations. It is often referred to as the 'brain' of the computer. HPC systems typically use multiple CPUs or multicore processors to perform large-scale calculations in parallel, allowing for much faster processing of data and computation than can be achieved with a single CPU.",
      topic: [DefinitionTopic.HardwareComponents],
    },
    {
      id: uuidv4(),
      title: "Central Processing Unit (CPU) ",
      body: "The Central Processing Unit - CPU - is the primary component of a computer that performs arithmetic, logic, and input/output operations. It is often referred to as the 'brain' of the computer. HPC systems typically use multiple CPUs or multicore processors to perform large-scale calculations in parallel, allowing for much faster processing of data and computation than can be achieved with a single CPU.",
      topic: [DefinitionTopic.HardwareComponents],
    },
    {
      id: uuidv4(),
      title: " Graphics Processing Unit (GPU)",
      body: "The GPU (Graphics Processing Unit) is a specialized processor optimized for parallelizable tasks, such as image processing, scientific simulations, and machine learning. Unlike a CPU, which is optimized for single-threaded performance, a GPU can perform many computations simultaneously, making it ideal for the large-scale data processing needed in HPC. GPUs can be used alone or with CPUs to accelerate specific calculations, and many HPC systems have numerous GPUs to achieve maximum computational power. ",
      topic: [DefinitionTopic.HardwareComponents],
    },
    {
      id: uuidv4(),
      title: "HPC Memory",
      body: "Memory in high-performance computing plays a great role in providing fast and temporary storage of data to support data-intensive tasks. Memory stores the currently processed data in the system, which is especially important for simultaneous tasks run in parallel, where holding extensive and large data sets it's crucial and very important. ",
      topic: [DefinitionTopic.HardwareComponents],
    },
    {
      id: uuidv4(),
      title: "HPC Storage",
      body: "While storage on a regular local machine means long-term saving the data in the local drive for easy and fast access to it, the storage systems in HPC are slightly different. Since high-performance computing allows performing multiple tasks in parallel, the role of storage is to provide a vast I/O (input/output) to be able to scale out with the compute and enable the CPUs to 'work', while not overloading with data. ",
      topic: [DefinitionTopic.HardwareComponents],
    },
    
    {
      id: uuidv4(),
      title: "Cluster",
      body: "A cluster is a group of computers that are connected to work as a single system. It is often used in HPC to distribute workloads across multiple systems to increase performance and processing power. ",
      topic: [DefinitionTopic.CompInf],
    },
    {
      id: uuidv4(),
      title: "Node",
      body: "In the context of a cluster, a node is a single computer within the cluster that performs computations and communicates with other nodes in the cluster. ",
      topic: [DefinitionTopic.CompInf],
    },

    {
      id: uuidv4(),
      title: "Command-line",
      body: "The command-line is a text-based interface used to interact with a computer system or program. Users enter commands and parameters to execute operations, typically without the use of a graphical user interface.  ",
      topic: [DefinitionTopic.SystemEnv],
    },
    {
      id: uuidv4(),
      title: "Graphical User Interface (GUI)",
      body: "GUI (Graphical User Interface) is a type of user interface that uses visual representations of controls and elements to interact with a computer program or system. It allows users to interact with software in a more intuitive and user-friendly way compared to command-line interfaces.",
      topic: [DefinitionTopic.SystemEnv],
    },
    {
      id: uuidv4(),
      title: "Linux",
      body: "All HPC resources available through Aalborg University use Linux. Linux is a popular open-source operating system based on the Unix operating system. It is widely used in HPC environments due to its flexibility, performance, and ability to be customized for specific use cases.",
      topic: [DefinitionTopic.SystemEnv],
    },
    {
      id: uuidv4(),
      title: "Slurm",
      body: "Slurm is a management and job-scheduling queue system, which is used for Linux clusters. It requires users to specify commands and resources needed to run the job. Then, Slurm prioritizes the job according to prompted tasks and the resource availability, and adds the job to the queue, among other user's requests. Slurm is utilized in AI Cloud HPC. ",
      topic: [DefinitionTopic.SystemEnv],
    },
    {
      id: uuidv4(),
      title: "Containerisation",
      body: "Containerisation refers to the process of creating isolated software environments that contain all the necessary dependencies and configurations needed to run an application. Containers provide a lightweight and portable solution for deploying applications across different HPC systems without the need to modify the underlying operating system. This makes it easier to share and reproduce software environments and enables more efficient use of HPC resources by allowing multiple applications to run on the same node without interfering with each other. ",
      topic: [DefinitionTopic.SystemEnv],
    },

    {
      id: uuidv4(),
      title: " Data Classification Model ",
      body: "There are certain limitations to each of the HPC resources available through Aalborg University regarding the data levels which can be managed on them. Data Classification Model consist of predefined categories of data which determine how the data should be accessed and treated by those who handle it.",
      topic: [DefinitionTopic.DataClassification],
    }, 
    {
      id: uuidv4(),
      title: "Data level 0: Public information",
      body: "Information which is in the public domain, and where disclosure is not harmful to AAU. ",
      topic: [DefinitionTopic.DataClassification],
    }, 
    {
      id: uuidv4(),
      title: "Data level 1: internal information ",
      body: "The information which only users with a purely work-related need may and can have access to, and where a breach of confidentiality will have no or a low impact on AAU, private individuals, or partner(s).",
      topic: [DefinitionTopic.DataClassification],
    }, 
    {
      id: uuidv4(),
      title: "Data level 2: confidential information",
      body: "The information which only users with a purely work-related need may and can have access to, and where a breach of confidentiality will have semi-serious impacts for AAU, private individuals, or partner(s).",
      topic: [DefinitionTopic.DataClassification],
    }, 
    {
      id: uuidv4(),
      title: "Data level 3: sensitive information",
      body: "This is information which, by virtue of its personal, technical, commercial, or competitive nature and sensitivity, must be protected against unintentional access and disclosure. ",
      topic: [DefinitionTopic.DataClassification],
    }, 
];

