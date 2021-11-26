import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Seo from './seo.js'

const Layout = ({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) => {
    const data = useStaticQuery(graphql`
      query GetSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    //Result of query ends up in 'data'. Inside of 'data' are objects
    const meta = data?.site?.siteMetadata ?? {} //?. will return empty string if no data

    return (
        <>
            <Seo 
                title={title} 
                description={description} 
                image={image} 
                path={path}
            />
            <header>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout;