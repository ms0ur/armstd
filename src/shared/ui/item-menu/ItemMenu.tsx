import styles from './ItemMenu.module.scss';
import {FC} from 'react';
import Link from "next/link";

interface ItemMenuProps {
    name: string,
    type: 'dark' | 'light',
    href: string
}

export const ItemMenu: FC<ItemMenuProps> = ({ name, type, href}) => {
    return (
        <Link href={href} className={type === 'dark' ? styles.item : styles.itemDark}>{name}</Link>
    );
}