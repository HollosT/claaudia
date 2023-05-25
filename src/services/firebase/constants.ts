import { AllHPC } from "../types/hpc/hpc";
import { UseCasesFilters, UseCasesType } from "../types/usecases";
import { v4 as uuidv4 } from "uuid";


export const DUMMY_CASES: UseCasesType[] = [
    {
      id: uuidv4(),
      type: AllHPC.AiCloudBuyIn,
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
      defaculty: UseCasesFilters.KRE,
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
      defaculty: UseCasesFilters.KRE,
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

