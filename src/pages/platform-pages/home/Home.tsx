import { Link } from "react-router-dom"
import { ArrowRight, Divider } from "src/atoms"
import Footer from "src/components/footer/Footer"
import { StepImage } from "src/pages/introduction/components/stepper"
import platformRoutes from "src/services/router/platform-routes"
import { Preview } from "./components"

export interface PreviewType {
    icon: React.ReactNode;
    title: string;
    body: string;
    link: string;
    linkTitle: string;
}


const Home: React.FC = () => {
    const previews: PreviewType[] = [
        {
            icon: platformRoutes.dictionary.icon,
            title: 'Find out what is high-performance computing ',
            body: 'Learn more about HPC and related definitions. ',
            link: platformRoutes.dictionary.path,
            linkTitle: 'See Definitions Library'
        },
        {
            icon: platformRoutes.cases.icon,
            title: 'See use cases',
            body: "Identify different practices of how the HPC can be utilised in your work. ",
            link: platformRoutes.cases.path,
            linkTitle: 'See Use Cases'
        },
        {
            icon: platformRoutes.resources.icon,
            title: 'View the HPC resources',
            body: 'Find all HPC resources available to you',
            link: platformRoutes.resources.path,
            linkTitle: 'See HPC Resources'
        },
        {
            icon: platformRoutes.quiz.icon,
            title: 'Match the HPC with your needs ',
            body: 'Complete a quick quiz and find most suitable HPC for your work.',
            link: platformRoutes.quiz.path,
            linkTitle: 'Take the HPC Matchmaking Quiz'
        },
    ]

    return (
        <section className="home">
            <div className="home-container">
                <div className="home-header u-margin-bottom-small">
                    <div className="home-header--content">
                        <h1 className='primary-header u-margin-bottom-small'>Welcome to HPC Matchmaker</h1>
                        <p className="home-header--content-body">
                        Explore the high-performance computing possibilities available to you at Aalborg University and find out which HPC system fits your needs. Convenient cloud computing is accessible now at hand through your laptop. 
                        </p>
                        <Link className="home-header--content-link" to={platformRoutes.quiz.path}>Find out which HPC suits you best <ArrowRight /> </Link>
                    </div>
                    <div className="home-header--image">
                        <StepImage />
                    </div>
                </div>
                <div className="home-preview u-margin-top-small u-margin-bottom-medium">
                    <Divider />
                    <h4 className="home-preview--title u-margin-bottom-small u-margin-top-small">What can you do with HPC Matchmaker?</h4>
                    <div className="home-preview--container">
                        {previews.map(prev => (
                            <Preview key={prev.title} prev={prev} />
                        ))}
                    </div>
                </div>
                
            </div>
            <Footer shown={false} />
        </section>
    )
}

export default Home