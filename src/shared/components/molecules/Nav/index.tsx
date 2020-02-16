import React, { FC } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Nav: FC = ({ children }) => {
  useStyles(styles)

  return (
    <nav>
      {/* add nav left */}

      <ul className={styles.navRight}>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  )
}
