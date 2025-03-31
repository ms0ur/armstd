import styles from './SearchBar.module.scss';
import React, {FC} from 'react';


export const SearchBar: FC = () => {
    return (
        <>
            <div>
                <input type="text" className={styles.contentSearchContainer} placeholder="Поиск"/>
            </div>
        </>
    );
}