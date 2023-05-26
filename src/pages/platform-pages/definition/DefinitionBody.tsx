import { useContext, useEffect, useState } from "react";
import Filter from "src/components/filter/Filter";
import Footer from "src/components/footer/Footer";
import { DefinitionTopic, DefinitionType } from "src/services/types/definition";
import { Definitions } from "./components";
import Search from "src/components/search/Search";
import { DefinitonContext } from "src/services/context/definition/definition-context";

interface DefinitionBodyProps {
    data: DefinitionType[]
}

// Here is a code snippet for filtering and searching togehter
// ****************************************
// useEffect(() => {
//     const filteredByTopic = selectedFilter === 'All'
//         ? DUMMY_DEFINITIONS
//         : DUMMY_DEFINITIONS.filter((item) => item.topic.includes(selectedFilter as DefinitionTopic));

//     const filteredByQuery = filteredByTopic.filter(item =>
//         item.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredDefinitions(filteredByQuery);
// }, [selectedFilter, searchTerm]);



const DefinitionBody: React.FC<DefinitionBodyProps> = ({ data }) => {
    const { isFiltering, isSearching } = useContext(DefinitonContext)
    const [filteredDefinitions, setFilteredDefinitions] = useState(data);
    const [selectedFilter, setSelectedFilter] = useState<string | DefinitionTopic>('All');
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (data) {
            setFilteredDefinitions(
                selectedFilter === 'All' ?
                    data :
                    data.filter((item) => item.topic.includes(selectedFilter as DefinitionTopic))
            )
        }
    }, [selectedFilter, data])

    useEffect(() => {
        setFilteredDefinitions(
            data.filter(item =>
                item.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, data])

    const handleDataFromSearch = (query: string) => {
        setSearchTerm(query)
    }

    const handleDataFromFilter = (data: string | DefinitionTopic) => {
        setSelectedFilter(data);
    };

    const computing: DefinitionType[] = [];
    const hardware: DefinitionType[] = [];
    const compInf: DefinitionType[] = [];
    const systemEnv: DefinitionType[] = [];
    const dataClass: DefinitionType[] = [];

    filteredDefinitions.forEach((def) => {
        switch (def.topic[0]) {
            case DefinitionTopic.Computing:
                computing.push(def);
                break;
            case DefinitionTopic.HardwareComponents:
                hardware.push(def);
                break;
            case DefinitionTopic.CompInf:
                compInf.push(def);
                break;

            case DefinitionTopic.SystemEnv:
                systemEnv.push(def);
                break;
            case DefinitionTopic.DataClassification:
                dataClass.push(def);
                break;

            default:
                break;
        }
    });

    return (
        <>
            <Search handleChange={handleDataFromSearch} className="u-margin-bottom-small" isFiltering={isFiltering} />

            <Filter title="Or filter definitions by topic" data={DefinitionTopic} handleChange={handleDataFromFilter} isSearching={isSearching} />
            <Definitions data={computing} />
            <Definitions data={hardware} />
            <Definitions data={compInf} />
            <Definitions data={systemEnv} />
            <Definitions data={dataClass} />

            <Footer shown={filteredDefinitions.length > 2 ? true : false} />
        </>
    )
}

export default DefinitionBody;