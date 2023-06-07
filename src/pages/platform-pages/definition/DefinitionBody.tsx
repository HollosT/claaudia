import { useContext, useEffect, useState } from "react";
import Filter from "src/components/filter/Filter";
import { DEFINiTIONS_FILTER_INTRO, DefinitionTopic, DefinitionType } from "src/services/types/definition";
import { Definitions } from "./components";
import Search from "src/components/search/Search";
import { DefinitonContext } from "src/services/context/definition/definition-context";

import { getAllDefintions } from "src/services/firebase/firebase.utils";
import { useFetchData } from "src/hooks";
import { Divider } from "src/atoms";
import SkeletonDefinition from "./components/SkeletonDefinition";


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



const DefinitionBody: React.FC = () => {
    const {data, loading} = useFetchData(getAllDefintions)

    const { isFiltering, isSearching } = useContext(DefinitonContext)
    const [filteredDefinitions, setFilteredDefinitions] = useState(data);
    const [selectedFilter, setSelectedFilter] = useState<string | DefinitionTopic>('All');
    const [searchTerm, setSearchTerm] = useState("");
    const intro = DEFINiTIONS_FILTER_INTRO.find(def => def.topic === selectedFilter)

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
            data?.filter(item =>
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

    filteredDefinitions?.forEach((def) => {
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
            <Search handleChange={handleDataFromSearch} className="u-margin-bottom-medium" isFiltering={isFiltering} />

            <Filter isDefinition title="Or filter definitions by topic" data={DefinitionTopic} handleChange={handleDataFromFilter} isSearching={isSearching} />
            {intro && <p className="definition-explanation--body u-margin-bottom-small">{intro.body}</p>}
            <Divider />

            {loading ? <SkeletonDefinition iteration={3} /> : 
                    <>
                        <Definitions data={computing} />
                        <Definitions data={hardware} />
                        <Definitions data={compInf} />
                        <Definitions data={systemEnv} />
                        <Definitions data={dataClass} />
                    </>
             }

        </>
    )
}

export default DefinitionBody;