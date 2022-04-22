import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const parentVariant = {
  hidden: { opacity: 1 },
  visible: {
    delay: 0.5,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      // type: 'tween',
    },
  },
}

export const itemVariant = {
  hidden: { rotateX: -90 },
  visible: {
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const blackVariant = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: 'easeInOut',
      // type: 'tween',
    },
  },
}

export const environmentCss = css`
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';

  .about-wrapper {
    padding: 1rem;
  }
  .item-title {
    font-weight: 900;
    font-size: 7rem;
    line-height: 6rem;
    text-align: right;
    text-transform: uppercase;

    @media only screen and (max-width: 1200px) {
      font-size: 4rem;
      line-height: 3rem;
    }

    @media only screen and (max-width: 768px) {
      font-size: 3.2rem;
      line-height: 2.5rem;
    }
  }

  .black-line {
    display: flex;
    justify-content: center;
    background-color: black;
    margin: 2rem 0;
  }

  .thick {
    height: 6rem;
  }
  .thin {
    height: 3rem;
  }

  .contact-container {
    width: 100%;
    position: relative;
    z-index: 10;
    padding: 1rem;

    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;

      li {
        a {
          text-decoration: none;
          color: black;
          font-size: 1.25rem;
          font-weight: 600;
        }
      }
    }

    .web-view {
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .phone-view {
      display: none;

      @media only screen and (max-width: 768px) {
        display: flex;
      }
    }
  }
`
