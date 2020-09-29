import React, {useState} from 'react'
import PropTypes from 'prop-types'

function DiaryForm({onAdd: handleAdd}) {
  let [form, setForm] = useState({
    date: '',
    distance: '',
  });
  
  const handleChange = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    handleAdd(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input onChange={handleChange} value={form.date} type="text" id="date" name="date" pattern="(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.][0-9]{2}" required />
      </p>
      <p>
        <label htmlFor="distance">Пройдено км</label>
        <input onChange={handleChange} value={form.distance} type="text" id="distance" name="distance" pattern="^(?:[1-9]\d*|0)?(?:\.\d+)?$" required />
      </p>
      <button type="submit">Ок</button>
    </form>
  )
}

DiaryForm.propTypes = {
  props: PropTypes.shape({
    handleDateChange: PropTypes.func.isRequired,
  }
)};

export default DiaryForm

