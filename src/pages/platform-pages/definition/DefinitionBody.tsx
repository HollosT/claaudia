import { useContext, useEffect, useState } from "react";
import Filter from "src/components/filter/Filter";
import Footer from "src/components/footer/Footer";
import { DefinitionTopic, DefinitionType } from "src/services/types/definition";
import { DefinitionItem } from "./components";
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
        if(data) {
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

    return (
        <>
            <Search handleChange={handleDataFromSearch} className="u-margin-bottom-small" isFiltering={isFiltering} />

            <Filter title="Or filter definitions by topic" data={DefinitionTopic} handleChange={handleDataFromFilter} isSearching={isSearching} />
            <h4 className="definition-items--title u-margin-top-small u-margin-bottom-small">Definitions & explanations</h4>
            {
                filteredDefinitions.length === 0 ?
                    <p>There is no mathing definition...</p>
                    :
                    filteredDefinitions.map(item => (
                        <DefinitionItem key={item.id} def={item} />
                    ))
            }

            <Footer shown={filteredDefinitions.length > 2 ? true : false} />
        </>
    )
}

export default DefinitionBody;