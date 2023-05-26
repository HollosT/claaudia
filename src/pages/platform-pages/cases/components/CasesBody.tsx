import { Case } from ".";
import { useFetchData } from "src/hooks";
import { getAllUseCasess } from "src/services/firebase/firebase.utils";
import { Loading } from "src/atoms";
import { UseCasesFilters } from "src/services/types/usecases";
import SkeletonCase from "./skeleton/SkeletonCase";


const CasesBody: React.FC<{selectedFilter : string | UseCasesFilters}> = ({selectedFilter}) => {
    const { data, loading } = useFetchData(getAllUseCasess);
 
    const filteredCases = selectedFilter === 'All' ?
        data :
        data?.filter((item) => item.defaculty.includes(selectedFilter as UseCasesFilters));

    return (
        <>
                {   loading ?
                    <SkeletonCase iteration={4} />
                    :
                    filteredCases?.map(useCase => (
                        <Case key={useCase.id} useCase={useCase} />
                    ))
                }
        </>
    )
}

export default CasesBody;
