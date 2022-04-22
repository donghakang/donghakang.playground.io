import { css } from '@emotion/react'
import React, { useState } from 'react'
import Layout from '../../components/layout'

const MainPage: React.FC = () => {
  const data = [
    { top: '40%', left: '70%', width: '25vw', height: '25vh' },
    { top: '30%', left: '60%', width: '8vh', height: '8vh' },
    { top: '60%', left: '50%', width: '20vw', height: '20vh' },
    { top: '20%', left: '10%', width: '9vw', height: '9vh' },
    { top: '60%', left: '20%', width: '25vw', height: '10vw' },
    { top: '10%', left: '30%', width: '12vw', height: '12vw' },
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
        {data.map(({ top, left, width, height }, index) => (
          <div
            key={index}
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
                font-family: 'Inter';

                @media only screen and (max-width: 768px) {
                  letter-spacing: 0.75rem;
                  font-size: 1.5rem;
                }
              `}
            >
              <span
                css={css`
                  font-family: 'Chomsky';
                  font-size: 3.25rem;

                  @media only screen and (max-width: 768px) {
                    font-size: 1.75rem;
                  }
                `}
              >
                D
              </span>
              <span>ONG</span>
              <span
                css={css`
                  font-family: 'Chomsky';
                  font-size: 3.25rem;

                  @media only screen and (max-width: 768px) {
                    font-size: 1.75rem;
                  }
                `}
              >
                H
              </span>
              A{' '}
              <span
                css={css`
                  font-family: 'Chomsky';
                  font-size: 3.25rem;

                  @media only screen and (max-width: 768px) {
                    font-size: 1.75rem;
                  }
                `}
              >
                K
              </span>
              ANG
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MainPage
