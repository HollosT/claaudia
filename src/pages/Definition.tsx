
import { Input, Label, Loading, Accordion } from "../atoms";


const Definition = () => {

    return (
        <div className="definition-container">
            <h1>Definition</h1>
            <Label for="range-test">Range</Label>
            <Input id="range-test" type="range" />
            <Loading />


            <Accordion title="Test accordion" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <Accordion isOpen title="Another test accordion" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <Accordion title="Yet another accordion" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
    )
}

export default Definition;