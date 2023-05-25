import { Case } from "./components";
import { useFetchData } from "src/hooks";
import { getAllUseCasess } from "src/services/firebase/firebase.utils";
import { Loading } from "src/atoms";
import { useState } from "react";
import { AllHPC } from "src/services/types/hpc/hpc";
import Footer from "src/components/footer/Footer";
import Filter from "src/components/filter/Filter";
import { UseCasesFilters } from "src/services/types/usecases";


const Cases: React.FC = () => {
    const { data, loading } = useFetchData(getAllUseCasess);
    const [selectedFilter, setSelectedFilter] = useState<string | UseCasesFilters>('All');


    if (!data || loading) {
        return <Loading />
    }

    const handleDataFromChild = (data: string | UseCasesFilters) => {
        setSelectedFilter(data);
    };

    const filteredCases = selectedFilter === 'All' ?
        data :
        data.filter((item) => item.defaculty.includes(selectedFilter as UseCasesFilters));

    return (
        <>
            <section className="cases">
                <div className="cases-header u-margin-bottom-small">
                    <h1 className='primary-header u-margin-bottom-small'>Use cases</h1>
                    <p>Find out how high-performance computing systems and their characteristics can be effectively utilized in certain computing practices. </p>
                </div>
                <Filter title="Filter use cases by used PC" data={UseCasesFilters} handleChange={handleDataFromChild} />
                {filteredCases.map(useCase => (
                    <Case key={useCase.id} useCase={useCase} />
                ))}
            </section>
            <Footer shown={filteredCases.length > 2 ? true : false} />
        </>
    )
}

export default Cases;
