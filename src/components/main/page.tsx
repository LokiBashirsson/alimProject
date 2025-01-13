import cls from './Main.module.scss';
import like from '../../../public/like.svg';
import peoples from '../../../public/peoples.svg';
import awards from '../../../public/awards.svg';
import hearts from '../../../public/hearts.svg';
import review1 from '../../assets/review1.jpg';
import review2 from '../../assets/review2.jpg';
import review3 from '../../assets/review3.jpg';
import review4 from '../../assets/review4.jpg';

const Reviews = [
    { id: 1, name: 'Мистер Марк Ханнери', image: review1, description: 'Исключительный уход и превосходный сервис - больница, которая действительно ставит пациентов на первое место.', rating: 3 },
    { id: 2, name: 'Мистер Майк Кларк', image: review2, description: 'Эффективная, надежная и заботящаяся о благополучии своих пациентов больница, которой вы можете доверять.', rating: 2 },
    { id: 3, name: 'Мистер Джон Иннис', image: review3, description: 'Высококвалифицированный персонал, современное оборудование и комфортная обстановка - идеальный выбор для медицинского обслуживания.', rating: 5 },
    { id: 4, name: 'Г-н Усман Кабир', image: review4, description: 'Больница, которая делает все возможное, чтобы обеспечить сострадательный уход с индивидуальным подходом.', rating: 4 },
    { id: 5, name: 'Мистер Марк Ханнери', image: review1, description: 'Исключительный уход и превосходный сервис - больница, которая действительно ставит пациентов на первое место.', rating: 3 },
    { id: 6, name: 'Мистер Майк Кларк', image: review2, description: 'Эффективная, надежная и заботящаяся о благополучии своих пациентов больница, которой вы можете доверять.', rating: 2 },
]

export const Main = () => {
    return (
        <>
            <div className={cls.Main}>
                <div>
                    <h5>Получите точное лечение после постановки точного диагноза</h5>
                    <h3>Цифровое управление больницей в одном месте</h3>
                    <a href="/doctors">Написать</a>
                </div>
            </div>
            <div className={cls.Home}>
                <div className={cls.homeBlur}>
                    <div className={cls.homeBlur_box}>
                        <div>
                            <h2>Качество</h2>
                            <img src={like} alt="" />
                            <h1>100%</h1>
                        </div>
                        <div>
                            <h2>Квалифицированные врачи</h2>
                            <img src={peoples} alt="" />
                            <h1>145</h1>
                        </div>
                        <div>
                            <h2>Награды</h2>
                            <img src={awards} alt="" />
                            <h1>150</h1>
                        </div>
                        <div>
                            <h2>Счастливые пациенты</h2>
                            <img src={hearts} alt="" />
                            <h1>7856</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.MainFooter}>
                <h2>постоянное предоставление качественных медицинских услуг <br />
                    с улыбкой поднимает настроение и вдохновляет наших пациентов.</h2>
                <h1>Наше наследие</h1>
                <div className={cls.MainFooter_boxes}>
                    {Reviews.map((e: any) => {
                        return (<div>
                            <img src={e.image} alt="" />
                            <div>
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                                <div>Рейтинг: {e.rating}/5

                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}