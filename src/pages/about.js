import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>            <h1>About</h1>
            <p>I'm a guy learning full-stack development.</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}

export default AboutPage;