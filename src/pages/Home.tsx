
import { useState } from "react";
import { Input, Button, Loading } from "../atoms";
import { getAllHPCs } from "../services/firebase/firebase.utils";
import { HPC } from "../services/types/hpc";


const Home = () => {
    const [hpcs, setHpcs] = useState<HPC[] | undefined>()
    const [loading, setLoading] =useState(false)

    const getHPCs = async () => {
        setLoading(true)
        const hpcs = await getAllHPCs();
        setHpcs(hpcs)
        setLoading(false)
    }

    if(loading) {
        return <Loading />
    }


    return (
        <div className="home-container">
            <h1>Home</h1>
            <Input type="checkbox" />
            {hpcs && (
                <ul>
                {hpcs.map((hpc) => (
                    <li key={hpc.id}>{hpc.name}</li>
                ))}
                </ul>
            )}
            <Button onClick={getHPCs}> Click me! </Button>
        </div>
    )
}

export default Home;