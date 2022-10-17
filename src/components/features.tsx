/** @jsx jsx */

import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import { jsx, css } from "@emotion/react";
import { Fragment } from "react";

// React.ComponentType<React.ComponentProps<'svg'>>

type FeatureItem = {
  title: JSX.Element;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>feature_1</Translate>,
    img: require("@site/static/img/1.png").default,
    description: <Fragment></Fragment>,
  },
  {
    title: <Translate>feature_2</Translate>,
    img: require("@site/static/img/2.png").default,
    description: <Fragment></Fragment>,
  },
  {
    title: <Translate>feature_3</Translate>,
    img: require("@site/static/img/3.png").default,
    description: <Fragment></Fragment>,
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          css={css`
            border-radius: 16px;
            width: 280px;
          `}
          src={img}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures(): JSX.Element {
  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        padding: 2rem 0;
        width: 100%;
      `}
    >
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
