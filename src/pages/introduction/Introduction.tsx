import React from 'react';
import { Stepper } from './components/stepper';
import { Loading } from 'src/atoms';
import { getAllIntroduction } from 'src/services/firebase/firebase.utils';
import { useFetchData } from 'src/hooks';


const Introduction: React.FC = () => {
    const {data, loading, error} = useFetchData(getAllIntroduction) 


    if(loading || !data) {
        return <Loading />
    }

    if(error) {
        return <h1>{error.message}</h1>
    }

    return (
        <Stepper stps={data} />
    )
}

export default Introduction