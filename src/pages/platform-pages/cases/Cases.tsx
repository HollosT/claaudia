import {  CasesBody } from "./components";
import { useState } from "react";
import Footer from "src/components/footer/Footer";
import Filter from "src/components/filter/Filter";
import { UseCasesFilters } from "src/services/types/usecases";


const Cases: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | UseCasesFilters>('All');

    const handleDataFromChild = (data: string | UseCasesFilters) => {
        setSelectedFilter(data);
    };

   
    return (
        <>
            <section className="cases">
                <div className="cases-header u-margin-bottom-small">
                    <h1 className='primary-header u-margin-bottom-small'>Use cases</h1>
                    <p>Find out how high-performance computing systems and their characteristics can be effectively utilized in certain computing practices. </p>
                </div>
                <Filter title="Filter use cases by used PC" data={UseCasesFilters} handleChange={handleDataFromChild} />
                <CasesBody selectedFilter={selectedFilter} />
            </section>
            <Footer shown={true} />
        </>
    )
}

export default Cases;
