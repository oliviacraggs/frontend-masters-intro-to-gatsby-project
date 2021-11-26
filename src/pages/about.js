import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout
            title="About This Site"
            description="More information about this site"
        >
            <h1>About This Site</h1>
            <Link to="/">Back To Home</Link>
        </Layout>
    )
}

export default IndexPage;