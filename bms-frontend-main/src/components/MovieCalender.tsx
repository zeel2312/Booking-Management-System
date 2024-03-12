import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';


interface MovieCalendarProps {
  bookingDetailsCallback: Function
}



const MovieCalendar = ({bookingDetailsCallback}: MovieCalendarProps) => {
  const [movieDate, setMovieDate] = useState<Date>(new Date());

  useEffect(() => {
    bookingDetailsCallback({date: dayjs(new Date(), {utc: true}).format()})
  }, [setMovieDate])


  const handleSelect = (date: any) => {

    setMovieDate(date)
    bookingDetailsCallback({date: dayjs(date?.$d, {utc: true}).format()})
  }

    return (
      <section>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            children
            components={[
              'StaticDatePicker',
            ]}
          ></DemoContainer>
          <DemoItem>
            <StaticDatePicker className='rounded' defaultValue={dayjs(new Date())} disablePast onChange={handleSelect} slotProps={{actionBar: {actions: ['cancel']}}}/>
          </DemoItem>
        </LocalizationProvider>
      </section>
    )
  }

export default MovieCalendar;