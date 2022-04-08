import { css } from '@emotion/react'
import React from 'react'
import Layout from '../../components/layout'

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1
          css={css`
            text-transform: uppercase;
          `}
        >
          About Page Coming soon...
        </h1>
      </div>
    </Layout>
  )
}

export default AboutPage
