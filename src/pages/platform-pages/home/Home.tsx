import { Link } from "react-router-dom"
import { ArrowRight, Divider } from "src/atoms"
import Footer from "src/components/footer/Footer"
import platformRoutes from "src/services/router/platform-routes"
import { HomeImage, Preview } from "./components"

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
            title: 'Explore HPC Definitions ',
            body: 'Expand your knowledge of HPC and related terms.',
            link: platformRoutes.dictionary.path,
            linkTitle: 'See Definition Library'
        },
        {
            icon: platformRoutes.cases.icon,
            title: 'Discover HPC Applications ',
            body: "Dive into diverse examples of how HPC can enhance your research and work. ",
            link: platformRoutes.cases.path,
            linkTitle: 'See Use Cases'
        },
        {
            icon: platformRoutes.resources.icon,
            title: 'Access HPC Resources',
            body: 'View a collection of available HPC resources and compare the systems for a better overview of their characteristics.',
            link: platformRoutes.resources.path,
            linkTitle: 'See HPC Resources'
        },
        {
            icon: platformRoutes.matchmaking.icon,
            title: 'Find Your Ideal HPC Solution',
            body: 'Take a matchmaking quiz to identify the most suitable HPC option for your specific needs.',
            link: platformRoutes.matchmaking.path,
            linkTitle: 'Take the HPC Matchmaking Quiz'
        },
    ]

    return (
        <section className="home">
            <div className="home-container">
                <div className="home-header u-margin-bottom-small">
                    <div className="home-header--content ">
                        <h1 className='primary-header home-header--content-title'>Welcome to HPC Matchmaker</h1>
                        <p className="home-header--content-body home-header--content-body_first">
                            CLAAUDIA is a research support unit at Aalborg University which provides you with assistance in accessing and using high-performance computing (HPC) resources in your work and projects.  </p>    
                        <p className="home-header--content-body">Explore the computing possibilities available to you at AAU and find out which HPC system fits your individual needs. Convenient cloud computing is accessible now at hand through your laptop.</p>
                        <div className="home-header--action-container">
                            <Link className="home-header--content-link" to={platformRoutes.quiz.path}>Find out which HPC suits you best <ArrowRight /> </Link>
                        </div>
                    </div>
                    <div className="home-header--image">
                        <HomeImage />
                    </div>
                </div>
                <div className="home-preview u-margin-top-small u-margin-bottom-medium">
                    <Divider />
                    <h4 className="home-preview--title u-margin-bottom-medium u-margin-top-small">What can you do with HPC Matchmaker?</h4>
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