
import { Input, Label, Loading } from "../atoms";


const Definition = () => {

    return (
        <div className="definition-container">
            <h1>Definition</h1>
            <Label for="range-test">Range</Label>
            <Input id="range-test" type="range" />
        </div>
    )
}

export default Definition;