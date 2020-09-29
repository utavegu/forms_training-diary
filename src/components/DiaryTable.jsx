import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from "nanoid"

function DiaryTable({diaryData, onRemove: handleRemove}) {
  return (
    <table>
      <thead>
      <tr>
        <th>Дата (ДД.ММ.ГГ)</th>
        <th>Пройдено км</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
        {diaryData.map((currentRecord, currentID) => 
          <tr key={nanoid()}>
            <td>{currentRecord.date}</td>
            <td>{parseInt(currentRecord.distance * 10) / 10}</td>
            <td>
              <button onClick={() => handleRemove(currentID)}>Удалить</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

DiaryTable.propTypes = {
  props: PropTypes.shape({
    diaryData: PropTypes.array.isRequired,
  }
)};

export default DiaryTable

