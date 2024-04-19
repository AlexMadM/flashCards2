import { useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

type Props = any & CheckboxProps

export const FormCheckbox = ({ control, disabled, name, ...rest }: Props) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({ control, disabled, name })

  return (
    <Checkbox
      {...rest}
      checked={value}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      ref={ref}
    />
  )
}
