
import { useState } from "react";
import { Input, Button, Loading, Accordion } from "../atoms";
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

            <Accordion title="Test accordion" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
    )
}

export default Home;