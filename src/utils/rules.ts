import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  }
})

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_max, price_min } = this.parent as { price_min: string; price_max: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

const handleConfirmPasswordYup = (refString: string, t: ReturnType<typeof useTranslation>['t']) => {
  return yup
    .string()
    .required(t('account.confirm_password.required'))
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref(refString)], t('account.confirm_password.confirm'))
}

export const schema = (t: ReturnType<typeof useTranslation>['t']) =>
  yup.object().shape({
    email: yup
      .string()
      .required(t('account.required', { name: 'Email' }))
      .email(t('account.email'))
      .min(5, t('account.min_length', { min: 5, max: 160 }))
      .max(160, t('account.max_length', { min: 5, max: 160 })),
    password: yup
      .string()
      .required(t('account.required', { name: 'Password' }))
      .min(6, t('account.min_length', { min: 6, max: 160 }))
      .max(160, t('account.max_length', { min: 5, max: 160 })),
    confirm_password: handleConfirmPasswordYup('password', t),
    price_min: yup
      .string()
      .default('')
      .test({
        name: 'price-not-allowed',
        message: t('account.price'),
        test: testPriceMinMax
      }),
    price_max: yup
      .string()
      .default('')
      .test({
        name: 'price-not-allowed',
        message: t('account.price'),
        test: testPriceMinMax
      }),
    name: yup
      .string()
      .trim()
      .required(t('account.required', { name: 'Tên' }))
  })

export const userSchema = (t: ReturnType<typeof useTranslation>['t']) => {
  const baseSchema = schema(t) // Sử dụng schema đã định nghĩa

  const additionalSchema = yup.object().shape({
    name: yup.string().max(160, t('user.max_length', { max: 160 })),
    phone: yup.string().max(20, t('user.max_length', { max: 20 })),
    address: yup.string().max(160, t('user.max_length', { max: 160 })),
    avatar: yup.string().max(1000, t('user.max_length', { max: 1000 })),
    date_of_birth: yup.date().max(new Date(), t('user.date_of_birth')),
    password: baseSchema.fields['password'] as yup.StringSchema<string>, // Kế thừa ràng buộc từ schema gốc
    new_password: baseSchema.fields['password'] as yup.StringSchema<string>, // Kế thừa ràng buộc từ schema gốc
    confirm_password: handleConfirmPasswordYup('new_password', t) // Xử lý confirmation password
  })

  return additionalSchema
}

export type UserSchema = yup.InferType<ReturnType<typeof userSchema>>

export type Schema = yup.InferType<ReturnType<typeof schema>>
