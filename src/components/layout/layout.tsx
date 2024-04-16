import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, Props>(({ className, ...rest }, ref) => {
  const classes = clsx(s.layout)

  return <div className={classes} ref={ref} {...rest} />
})
