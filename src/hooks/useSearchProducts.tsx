import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { Schema, schema } from 'src/utils/rules'
import useQueryConfig from './useQueryConfig'
import * as yup from 'yup'

type FormData = Pick<Schema, 'name'>

// const nameSchema = schema.pick(['name'])
const nameSchema = (t: ReturnType<typeof useTranslation>['t']) =>
  yup.object().shape({
    name: schema(t).fields.name as yup.StringSchema<string>
  })

export default function useSearchProducts() {
  const { t } = useTranslation('message')
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(nameSchema(t)),
    defaultValues: {
      name: ''
    }
  })

  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    return navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}
