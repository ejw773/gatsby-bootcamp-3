import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Page</h1>
            <p>Reach me through <Link to="https://www.elijahwilcott.com" target="_blank">My Portfolio</Link>.</p>
        </Layout>
    )
}

export default ContactPage;