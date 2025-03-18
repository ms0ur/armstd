import React, { FC } from 'react';
import styles from './Header.module.scss';
import {ItemMenu} from "@/shared/ui/item-menu/ItemMenu";

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentSearch}>
                    <input type="text" className={styles.contentSearchContainer} placeholder="Поиск..."/>
                </div>
                <div className={styles.contentMenu}>
                    <ItemMenu name={"Главная"} type={'dark'} />
                    <ItemMenu name={"Война и мир"} type={'dark'} />
                    <ItemMenu name={"Точное попадаение"} type={'dark'} />
                    <ItemMenu name={"Вежливые люди"} type={'dark'} />
                    <ItemMenu name={"Вольно!"} type={'dark'} />
                    <ItemMenu name={"Вещмешок"} type={'dark'} />
                </div>
            </div>
        </div>
    );
};