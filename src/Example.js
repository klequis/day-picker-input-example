import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { DateUtils } from 'react-day-picker'
import './style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import styled from 'styled-components'

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale })
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale })
}

const ExampleDiv = styled.div`
  padding-top: 50px;
`

export const Example = () => {

  const [_selectedDay, _setSelectedDay] = useState(undefined)

  const FORMAT = 'MM/dd/yyyy'

  const _dayChange = (day) => {
    _setSelectedDay(day)
  }

  console.log('_selectedDay', _selectedDay)
  return (
    <ExampleDiv>

      <DayPickerInput
        onDayChange={_dayChange}
        hideOnDayClick={false}
        placeholder="mm/dd/yyyy"
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
      />

      {_selectedDay ? (
        <p>You clicked {_selectedDay.toLocaleDateString()}</p>
      ) : (
        <p>Please select a day.</p>
      )}

    </ExampleDiv>
  )
}