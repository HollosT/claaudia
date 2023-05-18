import { Filter } from "./components";

const Cases: React.FC = () => {

    return (
        <main className="cases">
            <div className="cases-header u-margin-bottom-small">
                <h1 className='primary-header u-margin-bottom-small'>Use cases</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <Filter />
        </main>
    )
}

export default Cases;