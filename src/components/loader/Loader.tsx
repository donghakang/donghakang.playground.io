import { css } from '@emotion/react'
import React from 'react'
import { Circles } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Circles
        ariaLabel="loading-indicator"
        width={50}
        height={50}
        color="black"
      />
    </div>
  )
}

export default Loader
