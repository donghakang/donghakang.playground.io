import { css } from '@emotion/react'
import React, { Component, useState } from 'react'
import Environment from '../../components/environment'
import Layout from '../../components/layout'
import { motion } from 'framer-motion'
import { useProgress } from '@react-three/drei'

const parentVariant = {
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

const itemVariant = {
  hidden: { rotateX: -90 },
  visible: {
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const blackVariant = {
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

const AboutPage: React.FC = () => {
  const progress = useProgress()
  const [hoverMN, setHoverMN] = useState<boolean>(false)
  const [hoverOH, setHoverOH] = useState<boolean>(false)

  return (
    <>
      {progress.active && progress.progress !== 100 ? (
        <div>Loading.</div>
      ) : (
        <Layout>
          <div
            css={css`
              width: 70vw;
              height: 100vh;
              position: absolute;
              top: 0;
              left: 0;
            `}
          >
            <Environment />
          </div>
          <div
            css={css`
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              font-family: 'Inter';
            `}
          >
            <div>
              <motion.div
                variants={parentVariant}
                initial="hidden"
                animate="visible"
                css={css`
                  /* position: absolute; */
                  line-height: 6rem;
                  padding: 1rem;
                `}
              >
                <motion.h1
                  variants={itemVariant}
                  css={css`
                    margin-top: 5rem;
                    font-size: 7rem;
                    font-weight: 900;
                    text-align: right;
                    text-transform: uppercase;
                  `}
                >
                  Creative Developer
                </motion.h1>
                <motion.h1
                  variants={itemVariant}
                  css={css`
                    font-weight: 900;
                    font-size: 7rem;
                    text-align: right;
                    text-transform: uppercase;
                  `}
                >
                  FE Developer
                </motion.h1>
                <motion.div
                  variants={blackVariant}
                  css={css`
                    display: flex;
                    justify-content: center;
                    /* width: 10px; */
                    margin: 2rem 0;
                    height: 6rem;
                    background-color: black;
                  `}
                ></motion.div>
                <motion.h1
                  variants={itemVariant}
                  css={css`
                    font-weight: 900;
                    font-size: 7rem;
                    text-align: right;
                    text-transform: uppercase;
                  `}
                >
                  Based, Seoul
                </motion.h1>
                <motion.h1
                  variants={itemVariant}
                  css={css`
                    font-weight: 900;
                    font-size: 7rem;
                    text-align: right;
                    text-transform: uppercase;
                  `}
                >
                  <span
                    onMouseOver={() => setHoverMN(true)}
                    onMouseOut={() => setHoverMN(false)}
                    css={css`
                      position: relative;
                      cursor: pointer;
                      z-index: 10;
                    `}
                  >
                    {hoverMN ? 'MN' : '612'}
                  </span>{' '}
                  /{' '}
                  <span
                    onMouseOver={() => setHoverOH(true)}
                    onMouseOut={() => setHoverOH(false)}
                    css={css`
                      position: relative;
                      cursor: pointer;
                      z-index: 10;
                    `}
                  >
                    {hoverOH ? 'OH' : '330'}
                  </span>
                </motion.h1>
                <motion.div
                  variants={blackVariant}
                  css={css`
                    display: flex;
                    justify-content: center;
                    /* width: 10px; */
                    margin: 2rem 0;
                    height: 3rem;
                    background-color: black;
                  `}
                ></motion.div>
              </motion.div>
              <div
                css={css`
                  width: 100%;
                  position: relative;
                  z-index: 10;
                  padding: 1rem;
                `}
              >
                <ul
                  css={css`
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
                  `}
                >
                  <li>
                    <a href={'https://www.instagram.com/donghakang/'}>
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href={'https://github.com/donghakang'}>GITHUB</a>
                  </li>
                  <li>
                    <a href={'https://donghakang.github.io'}>BLOG</a>
                  </li>
                  <li>
                    <a href={'mailto:dkang0602@gmail.com'}>MAIL</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}

export default AboutPage
