import React from 'react'
import StyleContext from 'isomorphic-style-loader/StyleContext'

export const stylesDecorator = (cb) => {
  const css = []
  let timer

  const insertCss = (...styles) => {
    const removeCss = styles.map((style) => css.unshift(style))

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      // inject all styles
      css.forEach((style) => style._insertCss())
    }, 0)

    return () => removeCss.forEach((dispose) => dispose())
  }

  return (
    <StyleContext.Provider value={{ insertCss }}>{cb()}</StyleContext.Provider>
  )
}
