import { css } from '@emotion/react'
import React, { useState } from 'react'
import Layout from '../../components/layout'

const MainPage: React.FC = () => {
  const data = [
    { top: '40%', left: '70%', width: '350px', height: '200px' },
    { top: '30%', left: '60%', width: '100px', height: '100px' },
    { top: '60%', left: '50%', width: '250px', height: '200px' },
    { top: '20%', left: '10%', width: '150px', height: '100px' },
    { top: '60%', left: '20%', width: '350px', height: '100px' },
    { top: '10%', left: '30%', width: '250px', height: '250px' },
  ]
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Layout>
      <div
        css={css`
          position: relative;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          max-width: 100%;
          max-height: 100%;
        `}
      >
        {data.map(({ top, left, width, height }) => (
          <div
            className="background"
            css={css`
              position: absolute;
              top: ${top};
              left: ${left};
              width: ${width};
              height: ${height};
            `}
          >
            <video
              autoPlay
              loop
              playsInline
              muted
              src={'/assets/v.mp4'}
              ref={(e: HTMLVideoElement | null) => {
                if (e !== null) {
                  e.currentTime = Math.random() * 100
                }
              }}
              css={css`
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
              `}
            />
          </div>
        ))}

        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-itmes: center;
          `}
        >
          <div
            css={css`
              margin: auto;
            `}
          >
            <h1
              css={css`
                letter-spacing: 1.125rem;
                font-size: 3rem;
                font-family: 'Chomsky';
              `}
            >
              DONGHA KANG
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MainPage
