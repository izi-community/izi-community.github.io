/** @jsx jsx */
import { css, jsx } from "@emotion/react";

interface Props {
  texts: string[];
}

export function ImageDescription(props: Props) {
  return (
    <div
      css={css`
        font-size: 12px;
        text-align: center;
        font-style: italic;
        > p:first-of-type {
          margin: 0;
        }
      `}
    >
      {props.texts.map((val) => {
        return <p key={val}>{val}</p>;
      })}
    </div>
  );
}
