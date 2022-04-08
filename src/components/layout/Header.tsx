import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        z-index: 99;
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
      `}
    >
      <ul
        css={css`
          padding: 0 2rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          list-style-type: none;
        `}
      >
        <li
          css={css`
            * {
              text-decoration: none;
              font-family: 'Chomsky';
              font-size: 2rem;
              color: black;
            }
          `}
        >
          <Link to="/">D</Link>
        </li>
        <li
          css={css`
            * {
              text-decoration: none;
              font-family: 'Chomsky';
              font-size: 2rem;
              color: black;
            }
          `}
        >
          <Link to="/about">I</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
