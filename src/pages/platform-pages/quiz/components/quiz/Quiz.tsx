import React from 'react';
import Questions from './Questions';
import Footer from 'src/components/footer/Footer';



const Survey: React.FC = () => {

    return (
        <>
            <section className='quiz u-margin-bottom-medium'>
                <h1 className='primary-header u-margin-bottom-small'>HPC Mathing quiz</h1>
                <Questions />
            </section>
            <Footer shown={true} />
        </>
    )
}

export default Survey;