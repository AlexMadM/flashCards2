import { ProfileInfo } from '@/components/header/profile-info'
import { Avatar } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Meta } from '@storybook/react'

import { DropDown, DropDownItem, DropDownItemWithIcon } from './'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/Drop-down Menu',
} satisfies Meta<typeof DropDown>

export default meta

export const Default = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <p style={{ margin: 0 }}>This is default drop-down-menu button:</p>
        <div>
          <DropDown>
            <>
              <DropDownItemWithIcon
                icon={<Icon name={'play'} />}
                onSelect={() => {}}
                text={'Learn'}
              />
              <DropDownItemWithIcon
                icon={<Icon name={'edit'} />}
                onSelect={() => {}}
                text={'Edit'}
              />
              <DropDownItemWithIcon
                icon={<Icon name={'trash-bin'} />}
                onSelect={() => {}}
                text={'Delete'}
              />
            </>
          </DropDown>
        </div>
      </div>
    )
  },
}

export const WithProfile = {
  render: () => {
    const userData = {
      avatar: '',
      email: 'frontend-dev@gmail.com',
      name: 'Aleksei',
    }

    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <p style={{ margin: 0 }}>There is the avatar is button for menu:</p>
        <div>
          <DropDown
            trigger={
              <button style={{ all: 'unset', cursor: 'pointer' }}>
                <Avatar userName={userData.name} />
              </button>
            }
          >
            <DropDownItem>
              <ProfileInfo {...userData} />
            </DropDownItem>
            <DropDownItemWithIcon
              icon={<Icon name={'user'} />}
              onSelect={() => {}}
              text={'My profile'}
            />
            <DropDownItemWithIcon
              icon={<Icon name={'logout'} />}
              onSelect={() => {}}
              text={'Sign out'}
            />
          </DropDown>
        </div>
      </div>
    )
  },
}
