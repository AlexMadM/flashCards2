import { FC, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './back-button.module.scss'

type Props = {
  className?: string
  text?: string
}

export const BackButton: FC<Props> = ({ className, text = 'Back to Previous Page', ...rest }) => {
  const navigate = useNavigate()

  const backHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(-1)
  }

  const classes = clsx(s.button, className)

  return (
    <Button
      as={Link}
      className={classes}
      onClick={backHandler}
      relative={'path'}
      to={'..'}
      {...rest}
    >
      <Icon height={22} name={'arrow-back'} width={22} />
      <Typography className={s.text} variant={'body2'}>
        {text}
      </Typography>
    </Button>
  )
}
