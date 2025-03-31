import React, { FC } from 'react';
import styles from './Header.module.scss';
import {ItemMenu} from "@/shared/ui/item-menu/ItemMenu";
import {SearchBar} from "@/widgets/ui/search-bar/SearchBar";

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentSearch}>
                    <SearchBar />
                </div>
                <div className={styles.contentMenu}>
                    <ItemMenu href={''} name={"Главная"} type={'dark'} />
                    <ItemMenu href={''} name={"Война и мир"} type={'dark'} />
                    <ItemMenu href={''} name={"Точное попадаение"} type={'dark'} />
                    <ItemMenu href={''} name={"Вежливые люди"} type={'dark'} />
                    <ItemMenu href={''} name={"Вольно!"} type={'dark'} />
                    <ItemMenu href={''} name={"Вещмешок"} type={'dark'} />
                </div>
            </div>
        </div>
    );
};