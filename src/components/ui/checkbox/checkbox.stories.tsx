import { Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export const Uncontrolled = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}
