import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import omit from 'lodash/omit'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { AppContext } from 'src/contexts/auth.context'
import Button from 'src/components/Button'
import path from 'src/constants/path'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup';

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
// const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
const registerSchema = (t: ReturnType<typeof useTranslation>['t']) =>
  yup.object().shape({
    email: schema(t).fields.email as yup.StringSchema<string>,
    password: schema(t).fields.password as yup.StringSchema<string>,
    confirm_password: schema(t).fields.confirm_password as yup.StringSchema<string>,
  });

export default function Register() {
  const { t } = useTranslation('home')
  const { t: ts } = useTranslation('message')

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema(ts))
  })

  const { setIsAuthenticated, setProfile } = React.useContext(AppContext)
  const navigate = useNavigate()

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate(path.home)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Serrer'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Serrer'
          //   })
          // }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <Helmet>
        <title>{t('register.title')}</title>
        <meta name='description' content={t('login.content')} />
      </Helmet>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>{t('register.register')}</div>
              <Input
                className='mt-8'
                name='email'
                type='email'
                register={register}
                placeholder={t('register.email')}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                name='password'
                type='password'
                register={register}
                autoComplete='on'
                placeholder={t('register.password')}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                name='confirm_password'
                type='password'
                register={register}
                placeholder={t('register.confirm_password')}
                autoComplete='on'
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-2'>
                <Button
                  type='submit'
                  className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                  isLoading={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                >
                  {t('register.login')}
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>{t('register.have_an_acc')}</span>
                <Link className='ml-1 text-red-400' to={path.login}>
                  {t('register.login')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
