import { css } from '@emotion/react'
import React, { Component, useState } from 'react'
import Environment from '../../components/environment'
import Layout from '../../components/layout'
import { motion } from 'framer-motion'
import { useProgress } from '@react-three/drei'
import * as Styled from './style'
import {
  itemVariant,
  parentVariant,
  blackVariant,
  environmentCss,
} from './style'
import Loader from '../../components/loader'

const AboutPage: React.FC = () => {
  const progress = useProgress()
  const [hoverMN, setHoverMN] = useState<boolean>(false)
  const [hoverOH, setHoverOH] = useState<boolean>(false)

  return (
    <>
      {progress.active && progress.progress !== 100 ? (
        <Loader />
      ) : (
        <Layout>
          <div css={environmentCss}>
            <Environment />
          </div>
          <Styled.AboutContainer>
            <div className="about-wrapper">
              <motion.div
                variants={parentVariant}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 className="item-title" variants={itemVariant}>
                  Creative Developer
                </motion.h1>
                <motion.h1 className="item-title" variants={itemVariant}>
                  FE Developer
                </motion.h1>
                <motion.div
                  variants={blackVariant}
                  className="black-line thick"
                ></motion.div>
                <motion.h1 className="item-title" variants={itemVariant}>
                  Based, Seoul
                </motion.h1>
                <motion.h1 className="item-title" variants={itemVariant}>
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
                  className="black-line thin"
                ></motion.div>
              </motion.div>
              <div className="contact-container">
                <ul className="web-view">
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
                <ul className="phone-view">
                  <li>
                    <a href={'https://www.instagram.com/donghakang/'}>I</a>
                  </li>
                  <li>
                    <a href={'https://github.com/donghakang'}>G</a>
                  </li>
                  <li>
                    <a href={'https://donghakang.github.io'}>B</a>
                  </li>
                  <li>
                    <a href={'mailto:dkang0602@gmail.com'}>M</a>
                  </li>
                </ul>
              </div>
            </div>
          </Styled.AboutContainer>
        </Layout>
      )}
    </>
  )
}

export default AboutPage
