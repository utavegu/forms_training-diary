import React, {useState} from 'react'
import DiaryForm from './DiaryForm'
import DiaryTable from './DiaryTable'
import DiaryModel from '../models/DiaryModel'

// В идеале - редактирование тоже прикрутить после курса + сторадж

function TrainingDiary() {
  const [diary, setDiary] = useState([
    new DiaryModel("17.09.20", 5.2),
    new DiaryModel("19.09.20", 3.46),
    new DiaryModel("21.09.20", 8.241),
  ])

  const handleAdd = (data) => {
    const dateFromForm = data.date;
    let distanceFromForm = data.distance;

    diary.forEach(currentRecord => {
      if (currentRecord.date === dateFromForm) {
        setDiary(prevDiary => prevDiary.filter(diaryItem => diaryItem.date !== currentRecord.date))
        distanceFromForm = Number(currentRecord.distance) + Number(distanceFromForm);
      };
    });

    setDiary(prevDiary => [...prevDiary, new DiaryModel(dateFromForm, distanceFromForm)])
  }

  const handleRemove = id => {
    // Я запамятовал, можно ли сразу обратиться ко 2 параметру, если я заведомо знаю, что не буду использовать первый...
    setDiary(prevDiary => prevDiary.filter((currentItem, currentId) => currentId !== id));
  }

  // Странный момент, но эта конструкция работала, даже когда была внутри консоль лога... баг?
  // Переделать: привести дату к unix-формату (миллисекундам) и сортировать эти значения.
  diary.sort((a, b) => {
    return (
      (b.date.substring(6,8) + b.date.substring(3,5) + b.date.substring(0,2)) - (a.date.substring(6,8) + a.date.substring(3,5) + a.date.substring(0,2))
      )
    });
 
  return (
    <div className="workspace">
      <DiaryForm onAdd={handleAdd} />
      <DiaryTable diaryData={diary} onRemove={handleRemove} />
    </div>
  )
}

export default TrainingDiary

