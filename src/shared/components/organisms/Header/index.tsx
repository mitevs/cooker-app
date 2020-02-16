import React, { FC, useContext } from 'react'
import { Context } from '@shared/AppContext'
import { Nav } from '@shared/components/molecules/Nav'
import { Link } from '@shared/components/atoms/Link'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Header: FC = () => {
  useStyles(styles)
  const { user } = useContext(Context)

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {user ? (
          <Nav>
            <Link to="/recipes">recipes</Link>
            <Link to="/profile">profile</Link>
            <Link to="/logout">logout</Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
          </Nav>
        )}
      </div>
    </div>
  )
}
