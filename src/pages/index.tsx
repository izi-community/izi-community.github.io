/** @jsx jsx */

import clsx from "clsx";
import { jsx, css } from "@emotion/react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageFeatures } from "@site/src/components/features";
import Translate from "@docusaurus/Translate";


function HomepageHeader() {
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
        <h2 className="hero__title"><Translate>site_title</Translate></h2>
        <p className="hero__subtitle"><Translate>site_subtitle</Translate></p>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Link className="button button--secondary button--lg" to="/blog">
            <Translate>site_cta</Translate>
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
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
