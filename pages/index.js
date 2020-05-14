import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm fullstack software developer with interest in MERN (Mongo, Express, React, Nodejs)
          PERN (Postgres, Express, React, Nodejs), JAMSTACK and Laravel.</p>
        <p>I'm a tech enthusiast and like to keep myself updated about happenings in tech.</p>
        <p>I'm also currently open to javascript job offers in any of stacks above.</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="ailto:erickioko995@gmail.com"
            style={{
              backgroundColor: '#c3f',
              borderLeft: "10px solid yellow",
              borderRight: "10px solid yellow",
              borderTop: "10px solid orange",
              borderBottom: "10px solid orange",
              color: "#fff",
              padding: "3px"
            }}>
            send me email
          </a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}