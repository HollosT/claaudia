import { Link } from "react-router-dom"
import { ArrowRight, Divider } from "src/atoms"
import Footer from "src/components/footer/Footer"
import { StepImage } from "src/pages/introduction/components/stepper"
import platformRoutes from "src/services/router/platform-routes"
import { Preview } from "./components"

interface PreviewType {
    icon: React.ReactNode;
    title: string;
    body: string;
    link: string;
    linkTitle: string;
}


const Home: React.FC = () => {
    const previews = [
        {
            icon: '',
            title: 'AAU HPC Resources',
            body: 'Find all HPC resources available for your research at AAU',
            link: platformRoutes.resources.path,
            linkTitle: 'See available resources'
        },
        {
            icon: '',
            title: 'AAU HPC HPC Matching quiz',
            body: 'Complete a quick quiz and find most suitable HPC for your work.',
            link: platformRoutes.quiz.path,
            linkTitle: 'Find out which HPC suits me best'
        },
        {
            icon: '',
            title: 'Definitions library',
            body: 'Find definitions and explanations related to HPC systems.',
            link: platformRoutes.dictionary.path,
            linkTitle: 'See definitions and explanations'
        },
        {
            icon: '',
            title: 'Use cases',
            body: "See how other researchers utilized HPC’s in their research.",
            link: platformRoutes.cases.path,
            linkTitle: 'See HPC use cases'
        },
    ]

    return (
        <section className="home">
            <div className="home-header">
                <div className="home-header--content">
                    <h1 className='primary-header u-margin-bottom-small'>Welcome to HPC Matchmaker by CLAAUDIA</h1>
                    <p className="home-header--content-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <Link to={platformRoutes.quiz.path}>Find out which HPC suits me best <ArrowRight /> </Link>
                </div>
                <div className="home-header--image">
                    <StepImage />
                </div>
            </div>
            <Divider />
            <div className="home-preview">
                <h4 className="home-preview--title">What can you do with HPC Matchmaker?</h4>
                <div className="home-preview--container">
                    <Preview />
                </div>
            </div>
            <Footer shown={false} />
        </section>
    )
}

export default Home