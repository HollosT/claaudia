import { Case, Filter } from "./components";
import { useFetchData } from "src/hooks";
import { getAllUseCasess } from "src/services/firebase/firebase.utils";
import { Loading } from "src/atoms";
import { useState } from "react";
import { AllHPC } from "src/services/types/hpc";
import Footer from "src/components/footer/Footer";


const Cases: React.FC = () => {
    const {data, loading} = useFetchData(getAllUseCasess);
    const [selectedFilter, setSelectedFilter] = useState<string | AllHPC>('All');


    if(!data || loading) {
        return <Loading />
    }

    const handleDataFromChild = (data: string | AllHPC) => {
        setSelectedFilter(data);
      };

    const filteredCases = selectedFilter === 'All' ?
    data :
    data.filter((item) => item.hpcs.includes(selectedFilter as AllHPC));

    return (
        <>
            <section className="cases">
                <div  className="cases-header u-margin-bottom-small">
                    <h1  className='primary-header u-margin-bottom-small'>Use cases</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <Filter data={AllHPC} handleChange={handleDataFromChild} />
                <div className="filter-results">
                        {filteredCases.map(useCase => (
                            <Case key={useCase.id} useCase={useCase} />
                        ))}
                </div>
            </section>
            <Footer shown={filteredCases.length > 2 ? true : false} />
        </>
    )
}

export default Cases;
