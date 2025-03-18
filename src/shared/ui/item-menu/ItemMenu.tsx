import styles from './ItemMenu.module.scss';
import { FC } from 'react';

interface ItemMenuProps {
    name: string,
    type: 'dark' | 'light'
}

export const ItemMenu: FC<ItemMenuProps> = ({ name, type }) => {
    return (
        <div className={type === 'dark' ? styles.item : styles.itemDark}>{name}</div>
    );
}