import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'

//only query for what youre going to use
const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello world</h1>
            <Link to="/about">About This Site</Link>
        </Layout>
    )
}

export default IndexPage;