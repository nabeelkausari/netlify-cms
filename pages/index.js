import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import { attributes as blogAttributes, react as BlogContent } from '../content/blog.md';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    console.log(blogAttributes)
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ol>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ol>

          <BlogContent />
        </article>
      </>
    )
  }
}
