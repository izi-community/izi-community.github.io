/** @jsx jsx */

import clsx from "clsx";
import { jsx, css } from "@emotion/react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageFeatures } from "@site/src/components/features";
import {useColorMode} from '@docusaurus/theme-common';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const {colorMode, setColorMode} = useColorMode();
  console.log(colorMode)

  return (
    <header
      className={clsx("hero", 'hero--primary')}
      css={css`
        padding: 4rem 0;
        text-align: center;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 996px) {
          padding: 2rem;
        }
      `}
    >
      <div className="container">
        <h2 className="hero__title">{siteConfig.title}</h2>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Link className="button button--secondary button--lg" to="/blog">
            iZi Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
