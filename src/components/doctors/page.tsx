import { Link } from 'react-router-dom';
import cls from './Doctors.module.scss';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import doctor4 from '../../assets/doctor4.png';

const doctors = [
  { id: 1, name: 'Доктор Иванов', img:doctor1, specialty: 'Терапевт' },
  { id: 2, name: 'Доктор Петров', img:doctor2, specialty: 'Хирург' },
  { id: 3, name: 'Доктор Сидоров', img:doctor3, specialty: 'Педиатр' },
  { id: 3, name: 'Доктор Анна', img:doctor4, specialty: 'Педиатр' },
];

export const Doctors = () => {
  return (
    <div className={cls.Doctors}>
      <h1>Наши доктора</h1>
      <div className={cls.doctorsList}>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
                
              <Link to={`/doctor/${doctor.id}`}><img src={doctor.img} alt="" /> <h2>{doctor.name}</h2><p>Специализация: {doctor.specialty}</p></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
