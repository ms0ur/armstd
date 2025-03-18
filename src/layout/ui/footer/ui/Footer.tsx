'use client';
import React, { FC, useState } from 'react';
import styles from './Footer.module.scss';
import moreInfo from '@/assets/image/icons/moreInfo.svg';
import { ItemMenu } from "@/shared/ui/item-menu/ItemMenu";

export const Footer: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.footer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="/logoWhite.png" alt=""/>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentSearch}>
                        <input type="text" className={styles.contentSearchContainer} placeholder="Поиск..."/>
                    </div>
                    <div className={styles.contentMenu}>
                        <ItemMenu name={"Главная"} type={'light'} />
                        <ItemMenu name={"Война и мир"} type={'light'} />
                        <ItemMenu name={"Точное попадание"} type={'light'} />
                        <ItemMenu name={"Вежливые люди"} type={'light'} />
                        <ItemMenu name={"Вольно!"} type={'light'} />
                        <ItemMenu name={"Вещмешок"} type={'light'} />
                    </div>
                </div>
            </div>

            <div className={styles.moreInfo}>
                <h5
                    className={styles.moreInfoTitle}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    Подробная информация
                    <img
                        className={`${styles.moreInfoImage} ${isExpanded ? styles.rotated : ''}`}
                        src={moreInfo}
                        alt=""
                    />
                </h5>
                <div
                    className={`${styles.moreInfoContent} ${isExpanded ? styles.expanded : ''}`}
                >
                    <p className={styles.moreInfoText}>Сетевое издание «Еженедельник «ЗВЕЗДА» (zvezdaweekly.ru) (далее – Издание) является средством массовой информации и зарегистрировано в Федеральной службе по надзору в сфере связи, информационных технологий и массовых коммуникаций (Свидетельство о регистрации ЭЛ № ФС77–73041 от 06 июня 2018 года).</p>
                    <p className={styles.moreInfoText}>Учредителем является Открытое акционерное общество «Телерадиокомпания Вооруженных Сил Российской Федерации «ЗВЕЗДА» (ОАО «ТРК ВС РФ «ЗВЕЗДА»).</p>
                    <p className={styles.moreInfoText}>Главный редактор: Одноколенко О.Г.</p>
                    <p className={styles.moreInfoText}>
                        Контакты:<br />
                        Адрес: <a className={styles.link} href="https://yandex.ru/maps/">Россия, 129164, г. Москва, проспект Мира, д. 126</a><br />
                        E-mail: <a className={styles.link} href="mailto:info@zvezdaweekly.ru">info@zvezdaweekly.ru</a><br />
                        Тел: <a className={styles.link} href="tel:+74956830270">+7 (495) 683-0270</a>
                    </p>
                    <p className={styles.moreInfoText}>Издание может содержать информационную продукцию, предназначенную для лиц старше 18 лет.<br />На сайте zvezdaweekly.ru применяются рекомендательные технологии (информационные технологии предоставления информации на основе сбора, систематизации и анализа сведений, относящихся к предпочтениям пользователей сети «Интернет», находящихся на территории Российской Федерации).
                        <a className={styles.link} href="https://zvezdaweekly.ru/about/202311201546-7c816.html">Подробнее</a>
                    </p>
                    <p className={styles.moreInfoText}><a className={styles.link} href="https://zvezdaweekly.ru/about/pravo-zw">Правила использования материалов ОАО «ТРК ВС РФ «ЗВЕЗДА».</a></p>
                </div>
            </div>
        </div>
    );
};