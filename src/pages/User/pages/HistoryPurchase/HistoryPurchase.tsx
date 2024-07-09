import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { createSearchParams, Link } from 'react-router-dom'
import purchaseApi from 'src/apis/purchase.api'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import useQueryParams from 'src/hooks/useQueryParams'
import { PurchaseStatus } from 'src/types/purchase.type'
import { formatCurrency, generateNameId } from 'src/utils/utils'

enum PurchaseStatusKeys {
  all = 'all',
  waitForConfirmation = 'waitForConfirmation',
  waitForGetting = 'waitForGetting',
  inProgress = 'inProgress',
  delivered = 'delivered',
  cancelled = 'cancelled'
}

const purchaseTabs = [
  {
    status: purchasesStatus.all,
    name: PurchaseStatusKeys.all
  },
  {
    status: purchasesStatus.waitForConfirmation,
    name: PurchaseStatusKeys.waitForConfirmation
  },
  {
    status: purchasesStatus.waitForGetting,
    name: PurchaseStatusKeys.waitForGetting
  },
  {
    status: purchasesStatus.inProgress,
    name: PurchaseStatusKeys.inProgress
  },
  {
    status: purchasesStatus.delivered,
    name: PurchaseStatusKeys.delivered
  },
  {
    status: purchasesStatus.cancelled,
    name: PurchaseStatusKeys.cancelled
  }
]
export default function HistoryPurchase() {
  const queryParams: { status?: string } = useQueryParams()
  const { t } = useTranslation('home')
  const status: number = Number(queryParams.status) || purchasesStatus.all
  const { data: purchaseInCartData } = useQuery({
    queryKey: ['purchase', status],
    queryFn: () => purchaseApi.getPurchases({ status: status as PurchaseStatus })
  })
  const purchasesInCart = purchaseInCartData?.data.data
  const translatedPurchaseTabs = purchaseTabs.map((tab) => ({
    ...tab,
    name: t(`history.${tab.name}`)
  }))

  const purchaseTabsLink = translatedPurchaseTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: path.historyPurchase,
        search: createSearchParams({
          status: String(tab.status)
        }).toString()
      }}
      className={classNames('flex flex-1 items-center justify-center border-b-2 bg-white py-4 text-center', {
        'text-orange border-b-orange': status === tab.status,
        'border-b-black/90 text-gray-900': status !== tab.status
      })}
    >
      {tab.name}
    </Link>
  ))
  return (
    <div>
      <div className='overflow-x-auto'>
        <div className='min-w-[700px]'>
          <div className='sticky top-0 flex rounded-t-sm shadow-sm'>{purchaseTabsLink}</div>
          <div>
            {purchasesInCart?.map((purchase) => (
              <div key={purchase._id} className='mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm'>
                <Link
                  to={`${path.home}${generateNameId({ name: purchase.product.name, id: purchase.product._id })}`}
                  className='flex'
                >
                  <div className='flex-shrink-0'>
                    <img className='h-20 w-20 object-cover' src={purchase.product.image} alt={purchase.product.name} />
                  </div>
                  <div className='ml-3 flex-grow overflow-hidden'>
                    <div className='truncate'>{purchase.product.name}</div>
                    <div className='mt-3'>x{purchase.buy_count}</div>
                  </div>
                  <div className='ml-3 flex-shrink-0'>
                    <span className='truncate text-gray-500 line-through'>
                      ₫{formatCurrency(purchase.product.price_before_discount)}
                    </span>
                    <span className='ml-2 truncate text-orange'>₫{formatCurrency(purchase.product.price)}</span>
                  </div>
                </Link>
                <div className='flex justify-end'>
                  <div>
                    <span>{t('history.total')}</span>
                    <span className='ml-4 text-xl text-orange'>
                      ₫{formatCurrency(purchase.product.price * purchase.buy_count)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
