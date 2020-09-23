import React from 'react'
import PropTypes from 'prop-types'

function TableRow({date, distance, onRemove: handleRemove}) {
  // Почему-то при попытке применить toFixed к дистансу при отображении ломает приложение
  return (
    <tr>
      <td>{date}</td>
      <td>{distance}</td>
      <td>
        <button>Редактировать</button>
        <button onClick={handleRemove}>Удалить</button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  props: PropTypes.shape({
    date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  }
)};

export default TableRow
