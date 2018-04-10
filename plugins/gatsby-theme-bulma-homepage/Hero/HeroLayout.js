import React from "react"
import Link from "gatsby-link"
import Img from 'gatsby-image'
import SimpleNav from "../../gatsby-theme-bulma-layout/Simple/SimpleNav"
import SiteLinks from "../shared-components/SiteLinks"

class HeroLayout extends React.Component {
  render() {
    const {siteMetadata} = this.props.data.site

    return (
      <SimpleNav sitemetadata={siteMetadata} location={this.props.location}>
        <section className="hero is-medium is-secondary">
          <div className="hero-body">
            <div className="columns is-centered is-vcentered has-text-centered">
              <div className="column is-one-third">
                <Img className="image" Tag="figure" sizes={this.props.data.file.childImageSharp.sizes} />
              </div> 
              <div className="column">
                <h3 className="subtitle">
                  Hi, I am
                </h3>
                <h1 className="title">
                  <Link to={`/`}>
                    Jacob Bolda
                  </Link>
                </h1>
                <h2 className="subtitle">
                  Structural Engineer
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-fourthary is-medium">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-one-quarter">
                <SiteLinks {...this.props} />
              </div>
              <div className="column">
                <div className="content" dangerouslySetInnerHTML={{__html: this.props.data.about.childMarkdownRemark.html}} />
              </div>
            </div>
          </div>
        </section>
        <section className="section is-thirdary">
          {this.props.children}
        </section>
      </SimpleNav>
    )
  }
}

export default HeroLayout
