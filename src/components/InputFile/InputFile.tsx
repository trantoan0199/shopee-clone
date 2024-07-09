import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import config from 'src/constants/config'

interface Props {
  onChange?: (file?: File) => void
}

export default function InputFile({ onChange }: Props) {
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const { t } = useTranslation('product')

  const handleUploadFile = () => {
    fileInputRef.current?.click()
  }

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFormLocal = event.target.files?.[0]
    if (fileFormLocal && (fileFormLocal.size >= config.maxSizeUploadAvatar || !fileFormLocal.type.includes('image'))) {
      toast.error(t('input.message'), {
        position: 'top-center',
        autoClose: 1000
      })
    } else {
      onChange && onChange(fileFormLocal)
    }
  }
  return (
    <React.Fragment>
      <input
        type='file'
        accept='.jpg, .jpeg, .png'
        className='hidden'
        ref={fileInputRef}
        onChange={handleChangeFile}
        onClick={(event) => {
          ;(event.target as any).value = null
        }}
      />
      <button
        type='button'
        onClick={handleUploadFile}
        className='flex h-10 item-center justify-center text-center py-2 rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm'
      >
        {t('input.choice')}
      </button>
    </React.Fragment>
  )
}
