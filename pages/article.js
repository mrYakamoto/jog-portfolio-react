import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import sanity from '../lib/sanity'
import styles from './styles/article'
import listStyles from './styles/list'

const query = `*[_type == "article" && _id == $id] {
  _id,
  title
}[0]
`

export default class Article extends React.Component {

  static async getInitialProps(req) {
    return {
      article: await sanity.fetch(query, {id: req.query.id})
    }
  }

  render() {
    const {article} = this.props
    return (
      <Layout>
        <div className="article">
          <div className="article__header">
            <h1>
              {article.title}
            </h1>
          </div>
        </div>
        <style jsx>{styles}</style>
        <style jsx>{listStyles}</style>
      </Layout>
    )
  }
}