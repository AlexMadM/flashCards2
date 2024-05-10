import { Typography } from '@/components/ui/typography'
import * as SliderRadixUI from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  label?: string
  max?: number
  min?: number
  onChange?: (value: number[]) => void
  step?: number
  value: number[]
}
export const Slider = ({ label, max, min, onChange, step = 1, value }: SliderProps) => {
  return (
    <Typography as={'label'} className={s.label} variant={'body2'}>
      {label}
      <div className={s.body}>
        <Typography as={'h3'} className={s.value} variant={'body1'}>
          {value[0]}
        </Typography>
        <SliderRadixUI.Root
          className={s.line}
          max={max}
          min={min}
          onValueChange={onChange}
          step={step}
          value={value}
        >
          <SliderRadixUI.Track className={s.track}>
            <SliderRadixUI.Range className={s.range} />
          </SliderRadixUI.Track>
          <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb}>
            <div className={s.dot}></div>
          </SliderRadixUI.Thumb>
          <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb}>
            <div className={s.dot}></div>
          </SliderRadixUI.Thumb>
        </SliderRadixUI.Root>
        <div className={s.minMax}>
          <Typography as={'h3'} className={s.value} variant={'body1'}>
            {value[1]}
          </Typography>
        </div>
      </div>
    </Typography>
  )
}
