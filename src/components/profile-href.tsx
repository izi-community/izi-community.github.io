/** @jsx jsx */
import { css, jsx } from "@emotion/react";

interface Props {
  title: string
  profiles: {
    name: string;
    href: string;
  }[];
}

export function ProfileHref(props: Props) {
  return (
    <div
      css={css`
        font-size: 12px;
        text-align: center;
        font-style: italic;
        margin-bottom: calc(var(--ifm-leading-desktop) * 1rem);
        > p:first-of-type {
          margin: 0;
        }
      `}
    >
      <p>{props.title}</p>
      <div
        css={css`
          a {
            margin-right: 8px;
            &:last-of-type {
              margin-right: 0px;
            }
          }
        `}
      >
        {props.profiles.map((val) => {
          return (
            <a key={val.href} href={val.href}>
              {val.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
