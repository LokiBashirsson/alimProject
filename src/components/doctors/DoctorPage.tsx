import cls from './Doctors.module.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const doctors = [
  { id: 1, name: 'Доктор Иванов', specialty: 'Терапевт', experience: 10 },
  { id: 2, name: 'Доктор Петров', specialty: 'Хирург', experience: 12 },
  { id: 3, name: 'Доктор Сидоров', specialty: 'Педиатр', experience: 8 },
  { id: 4, name: 'Доктор Анна', specialty: 'Педиатр', experience: 10 },
];

export const DoctorPage = () => {
  const { id } = useParams<{ id: string }>();
  const doctorId = Number(id);

  const doctor = doctors.find((doc) => doc.id === doctorId);

  if (!doctor) {
    return <h2>Доктор не найден</h2>;
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rphipdb', 'template_7dyspts', e.target as HTMLFormElement, 'pCzyskmiFMjMX1I2x')
      .then(
        () => {
          setStatus('Сообщение отправлено!'); 
        },
        () => {
          setStatus('Ошибка при отправке сообщения.'); 
        }
      );
  };

  return (
    <div className={cls.Doctor}>
      <h1>{doctor.name}</h1>
      <p>Специализация: {doctor.specialty}</p>
      <p>Опыт: {doctor.experience} лет</p>
      <div className={cls.Doctors}>
      <h2>Написать сообщение</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Отправить</button>
      </form>
      <p>{status}</p> 
    </div>
    </div>
  );
};