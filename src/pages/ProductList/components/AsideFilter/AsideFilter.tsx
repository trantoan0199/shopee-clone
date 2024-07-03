import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import omit from 'lodash/omit'
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import InputNumber from 'src/components/InputNumber'
import InputV2 from 'src/components/InputV2/InputV2'
import RatingStars from 'src/components/RatingStars'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { Category } from 'src/types/category.type'
import { NoUndefinedField } from 'src/types/utils.type'
import { schema, Schema } from 'src/utils/rules'
import { useTranslation } from 'react-i18next'

interface Props {
  categories: Category[]
  queryConfig: QueryConfig
}

type FormData = NoUndefinedField<Pick<Schema, 'price_min' | 'price_max'>>

const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ queryConfig, categories }: Props) {
  const { category } = queryConfig

  const navigate = useNavigate()

  const { t } = useTranslation('home')

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false
  })

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        price_max: data.price_max,
        price_min: data.price_min
      }).toString()
    })
  })

  const handleRemoveAll = () => {
    navigate({
      pathname: path.home,
      search: createSearchParams(omit(queryConfig, ['price_max', 'price_min', 'category', 'rating_filter'])).toString()
    })
  }

  return (
    <div className='py-4'>
      <Link
        to={path.home}
        className={classNames('flex items-center font-bold capitalize', {
          'text-orange': !category
        })}
      >
        <svg viewBox='0 0 12 10' className='w-3 h-4 mr-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        {t('aside filter.all categories')}
      </Link>
      <div className='bg-gray-300 h-[1px] my-4' />
      <ul>
        {categories.map((categoryItem) => {
          const isActive = category === categoryItem._id
          return (
            <li className='py-2 pl-2' key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={classNames('relative px-2', {
                  'text-orange font-semibold': isActive
                })}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='fill-orange w-2 h-2 absolute top-1 left-[-10px]'>
                    <polygon points='4 3.5 0 0 0 7'></polygon>
                  </svg>
                )}

                {categoryItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to={path.home} className='flex items-center font-bold mt-4 uppercase'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='w-3 h-4 fill-current mr-3 stroke-current'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        {t('aside filter.filter search')}
      </Link>
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <div className='my-5'>
        <div>Khoảng giá</div>
        <form className='mt-2' onSubmit={onSubmit}>
          <div className='flex items-start'>
            {/* <Controller
              control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    {...field}
                    type='text'
                    className='grow'
                    classNameInput='p-1 w-full outline-none border border-gray-300 hover:border-gray-500 rounded-sm shadow-sm'
                    placeholder='₫ TỪ'
                    classNameError='hidden'
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_max')
                    }}
                  />
                )
              }}
            /> */}

            <InputV2
              control={control}
              name='price_min'
              type='number'
              className='grow'
              classNameInput='p-1 w-full outline-none border border-gray-300 hover:border-gray-500 rounded-sm shadow-sm'
              placeholder='₫ TỪ'
              classNameError='hidden'
              onChange={() => {
                trigger('price_max')
              }}
            />
            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Controller
              control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    {...field}
                    type='text'
                    className='grow'
                    classNameInput='p-1 w-full outline-none border border-gray-300 hover:border-gray-500 rounded-sm shadow-sm'
                    placeholder='₫ ĐẾN'
                    classNameError='hidden'
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_min')
                    }}
                  />
                )
              }}
            />
          </div>
          <div className='mt-1 text-red-400 text-center min-h-[1.25rem] text-sm'>{errors.price_max?.message}</div>
          <Button className='w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <RatingStars queryConfig={queryConfig} />
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <Button
        onClick={handleRemoveAll}
        className='w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'
      >
        Xoá tất cả
      </Button>
    </div>
  )
}
