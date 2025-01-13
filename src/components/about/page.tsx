import cls from './About.module.scss';
import medsestra from '../../assets/medsestra.png';
import doci from '../../assets/doci.png';

export const About = () => {
    return (
        <div className={cls.About}>
            <h3>Связаться</h3>
            <h2>О нас</h2>
            <div className={cls.AboutBox}>
                <div className={cls.AboutLeftSide}>
                    <div>Кровати пациентов <br /><span>150</span></div>
                    <div>Докторов <br /><span>187</span></div>
                    <div>Медсестр <br /><span>119</span></div>
                    <div>Счастливые пациенты <br /><span>1621</span></div>
                </div>
                <div className={cls.AboutMiddleSide}>
                    Наша больница оснащена самыми современными технологиями и оборудованием для оказания широкого спектра медицинских услуг, от неотложной помощи и хирургических вмешательств до программ реабилитации и профилактики заболеваний. Мы стремимся постоянно совершенствовать и расширять наши услуги, чтобы удовлетворить потребности нашего сообщества.
                    <img src={doci} alt="" />
                </div>
                <img src={medsestra} alt="" />
            </div>
        </div>
    )
}