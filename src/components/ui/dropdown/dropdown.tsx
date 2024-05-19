import { ComponentPropsWithoutRef, FC, ReactNode, forwardRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
}
export const DropDown = forwardRef<any, DropdownProps>(
  ({ align = 'end', children, className, trigger }, ref) => {
    const [open, setOpen] = useState(false)

    const classes = clsx(s.trigger, className)

    return (
      <DropdownMenuRadix.Root onOpenChange={setOpen} open={open}>
        <DropdownMenuRadix.Trigger asChild className={classes} ref={ref}>
          {trigger ?? (
            <IconButton className={s.btn} icon={<Icon height={20} name={'more'} width={20} />} />
          )}
        </DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content
            align={align}
            className={s.content}
            forceMount
            onClick={event => event.stopPropagation()}
            sideOffset={8}
          >
            <div>
              <DropdownMenuRadix.Arrow asChild className={s.arrowBox}>
                <div className={s.arrow} />
              </DropdownMenuRadix.Arrow>
              <div className={s.itemsBox}>{children}</div>
            </div>
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    )
  }
)

export type DropDownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect?: (event: Event) => void
}

export const DropDownItem: FC<DropDownItemProps> = ({
  children,
  className,
  disabled,
  onSelect,
}) => {
  const classes = clsx(s.item, className)

  return (
    <DropdownMenuRadix.Item asChild className={classes} disabled={disabled} onSelect={onSelect}>
      {children}
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropDownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropDownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}) => {
  const classes = clsx(s.item, className)

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classes}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <div>
        {icon}
        <Typography variant={'body2'}>{text}</Typography>
      </div>
    </DropdownMenuRadix.Item>
  )
}
