import { useState } from 'react';
import DatePicker from 'react-datepicker';
import datePickerStyle from '@components/feature/DatePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerCustom = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = Array.from(
    { length: new Date().getFullYear() + 1 - 2000 },
    (_, i) => new Date().getFullYear() - i,
  );
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            className={datePickerStyle.pButton}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {'<'}
          </button>
          <select
            className={datePickerStyle.pSelect}
            value={date.getFullYear()}
            onChange={({ target: { value } }) =>
              changeYear(Number.parseInt(value))
            }
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {`${option}년`}
              </option>
            ))}
          </select>

          <select
            className={datePickerStyle.pSelect}
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {`${option}월`}
              </option>
            ))}
          </select>

          <button
            className={datePickerStyle.pButton}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {'>'}
          </button>
        </div>
      )}
      formatWeekDay={(nameOfDay) => {
        switch (nameOfDay) {
          case 'Sunday':
            return '일';
          case 'Monday':
            return '월';
          case 'Tuesday':
            return '화';
          case 'Wednesday':
            return '수';
          case 'Thursday':
            return '목';
          case 'Friday':
            return '금';
          case 'Saturday':
            return '토';
          default:
            return '오류입니다';
        }
      }}
      selected={startDate}
      onChange={(date) => {
        setStartDate(date!);
        props.setDate(date);
      }}
      showIcon
      dateFormat="YY-MM-dd"
      className={datePickerStyle.calender}
    />
  );
};
