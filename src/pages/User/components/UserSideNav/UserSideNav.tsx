import classNames from 'classnames'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/auth.context'
import { getAvatarUrl } from 'src/utils/utils'

export default function UserSideNav() {
  const { profile } = React.useContext(AppContext)
  return (
    <div>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10'>
          <img src={getAvatarUrl(profile?.avatar)} alt='avatar' className='w-full h-full object-cover' />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>{profile?.name || profile?.email}</div>
          <Link to={path.profile} className='flex items-center capitalize text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className='mt-7'>
        <NavLink
          to={path.profile}
          className={({ isActive }) =>
            classNames('flex items-center capitalize  transition-colors', {
              'text-orange': isActive,
              'text-gray-500': !isActive
            })
          }
        >
          <div className='h-[22px] w-[22px] mr-3'>
            <img
              className='h-full w-full'
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
            />
          </div>
          Tài khoản của tôi
        </NavLink>
        <NavLink
          to={path.changePassword}
          className={({ isActive }) =>
            classNames('flex items-center capitalize mt-4  transition-colors', {
              'text-orange': isActive,
              'text-gray-500': !isActive
            })
          }
        >
          <div className='h-[22px] w-[22px] mr-3'>
            <img
              className='h-full w-full'
              src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
              alt=''
            />
          </div>
          Đổi mật khẩu
        </NavLink>
        <NavLink
          to={path.historyPurchase}
          className={({ isActive }) =>
            classNames('flex items-center capitalize mt-4  transition-colors', {
              'text-orange': isActive,
              'text-gray-500': !isActive
            })
          }
        >
          <div className='h-[22px] w-[22px] mr-3'>
            <img
              className='h-full w-full'
              src='https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078'
            />
          </div>
          Đơn mua
        </NavLink>
      </div>
    </div>
  )
}
