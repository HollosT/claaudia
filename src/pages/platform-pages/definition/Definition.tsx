import { useState } from "react";
import Filter from "src/components/filter/Filter";
import Footer from "src/components/footer/Footer";
import { DefinitionTopic, DefinitionType } from "src/services/types/definition";
import { v4 as uuidv4 } from 'uuid'
import { DefinitionItem } from "./components";
import { Input } from "src/atoms";

const DUMMY_DEFINITIONS: DefinitionType[] = [
    {
        id: uuidv4(),
        title: "HPC (High Performance Computing)",
        body: "High-performance computing (HPC) involves the use of powerful computing resources to perform computationally demanding tasks that are beyond the capability of traditional computing systems. HPC is used to process large datasets, perform simulations, and run resource-intensive applications, such as modelling climate patterns, simulating molecular behaviour, analysing genetic data, designing and testing products and structures, simulating fluid dynamics, optimizing manufacturing processes, identifying trends, and making predictions. HPC allows processing and analysis of complex data, leading to faster discoveries, more efficient processes, and better decision-making.",
        link: "https://google.com",
        linkTitle: "HPC",
        topic: [DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "Virtual Machine",
        body: "A virtual machine (VM) is a software environment that emulates a physical computer, including hardware components such as a CPU, memory, and storage. VMs are commonly used in HPC to create isolated environments for running scientific applications, providing users with the flexibility to customize and configure the environment to their specific needs without interfering with other users or applications running on the same hardware.",
        link: "https://google.com",
        linkTitle: "Virtual Machine",
        topic: [DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "CPU (Central Processing Unit)",
        body: "The CPU (Central Processing Unit) is the primary component of a computer that performs arithmetic, logic, and input/output operations. It is often referred to as the 'brain' of the computer. HPC systems typically use multiple CPUs or multicore processors to perform large-scale calculations in parallel, allowing for much faster processing of data and computation than can be achieved with a single CPU.",
        link: "https://google.com",
        linkTitle: "CPU",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "GPU (Graphics Processing Unit)",
        body: "The GPU (Graphics Processing Unit) is a specialized processor optimized for parallelizable tasks, such as image processing, scientific simulations, and machine learning. Unlike a CPU, which is optimized for single-threaded performance, a GPU can perform many computations simultaneously, making it ideal for the large-scale data processing needed in HPC. GPUs can be used alone or with CPUs to accelerate specific calculations, and many HPC systems have numerous GPUs to achieve maximum computational power.",
        link: "https://google.com",
        linkTitle: "GPU",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Command Line",
        body: "The command-line is a text-based interface used to interact with a computer system or program. Users enter commands and parameters to execute operations, typically without the use of a graphical user interface.",
        link: "https://google.com",
        linkTitle: "Command Line",
        topic: [DefinitionTopic.Components, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "GUI (Graphical User Interface)",
        body: "GUI (Graphical User Interface) is a type of user interface that uses visual representations of controls and elements to interact with a computer program or system. It allows users to interact with software in a more intuitive and user-friendly way compared to command-line interfaces.",
        link: "https://google.com",
        linkTitle: "GUI",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Linux",
        body: "Linux is a popular open-source operating system based on the Unix operating system. It is widely used in HPC environments due to its flexibility, performance, and ability to be customized for specific use cases.",
        link: "https://google.com",
        linkTitle: "Linux",
        topic: [DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Cluster",
        body: "A cluster is a group of computers that are connected to work as a single system. It is often used in HPC to distribute workloads across multiple systems to increase performance and processing power.",
        link: "https://google.com",
        linkTitle: "Cluster",
        topic: [DefinitionTopic.Software, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Node",
        body: "In the context of a cluster, a node is a single computer within the cluster that performs computations and communicates with other nodes in the cluster.",
        link: "https://google.com",
        linkTitle: "Node",
        topic: [DefinitionTopic.Components, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Containerisation",
        body: "Containerisation refers to the process of creating isolated software environments that contain all the necessary dependencies and configurations needed to run an application. Containers provide a lightweight and portable solution for deploying applications across different HPC systems without the need to modify the underlying operating system. This makes it easier to share and reproduce software environments and enables more efficient use of HPC resources by allowing multiple applications to run on the same node without interfering with each other.",
        link: "https://google.com",
        linkTitle: "Containerisation",
        topic: [DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Parallel Processing",
        body: "Parallel processing is the technique of dividing a single task into smaller parts that can be executed simultaneously on multiple processors or computing systems. It is often used in HPC to speed up computations and increase efficiency.",
        link: "https://google.com",
        linkTitle: "Parallel Processing",
        topic: [DefinitionTopic.Software, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "FLOPS (Floating-Point Operations Per Second)",
        body: "FLOPS (Floating-Point Operations Per Second) is a measure of a computer's processing power, specifically its ability to perform floating-point arithmetic operations. FLOPS is a common metric used to compare the performance of different supercomputers or processors. The higher the FLOPS rating, the faster the computer can perform calculations. HPC systems are designed to achieve very high FLOPS ratings, often in the millions or billions, to provide the processing power necessary for cutting-edge research and analysis.",
        link: "https://google.com",
        linkTitle: "FLOPS",
        topic: [DefinitionTopic.SomethingElse, DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "Petascale and Exascale Computing",
        body: "Petascale and exascale computing refer to the ability to perform one quadrillion (10^15) and one quintillion (10^18) calculations per second, respectively. These levels of performance are achieved using HPC systems with thousands or millions of processors working in parallel.",
        link: "https://google.com",
        linkTitle: "Petascale and Exascale Computing",
        topic: [DefinitionTopic.Components]
    },
]

const Definition: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | DefinitionTopic>('All');
    const [searchInput, setSearchInput] = useState<string>("")

    const handleDataFromChild = (data: string | DefinitionTopic) => {
        setSelectedFilter(data);
    };
    const filteredDefinitions = selectedFilter === 'All' ?
    DUMMY_DEFINITIONS :
    DUMMY_DEFINITIONS.filter((item) => item.topic.includes(selectedFilter as DefinitionTopic))
  
    return (
        <section className="definition">
            <div className="definition-header u-margin-bottom-small">
                <h1 className='primary-header u-margin-bottom-small'>Definitions library</h1>
                <p>Find out more about high-performance computing and the terminology within this topic to be able to understand what is relevant to you and what you need to know to successfully operate the systems you can access.</p>
            </div>
            {/* <Input
                name="definition"
                placeholder="Search for a specific definition"
                value={searchInput}
         
            /> */}
            <Filter title="Or filter definitions by topic" data={DefinitionTopic} handleChange={handleDataFromChild} />
            <h4 className="definition-items--title u-margin-top-small u-margin-bottom-small">Definitions & explanations</h4>
            {filteredDefinitions.map(item => (
                <DefinitionItem key={item.id} def={item} />
            ))}

            <Footer shown={filteredDefinitions.length > 2 ? true : false} />
        </section>

    )
}

export default Definition;