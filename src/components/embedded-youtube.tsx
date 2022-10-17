/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function EmbeddedYoutube(props: { url: string }) {
  return (
    <div
      css={css`
        text-align: center;
        margin-bottom: calc(var(--ifm-leading-desktop) * 1rem);
        iframe {
          max-width: 100%;
          max-height: calc((100vw - 40px) / (16 / 9));
        }
      `}
    >
      <iframe
        width="560"
        height="315"
        src={props.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
