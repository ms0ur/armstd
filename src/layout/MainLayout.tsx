import React, { FC, memo } from 'react';
import styles from './MainLayout.module.scss';
import { Header, Footer } from './ui/index';

interface IProps {
    children: React.ReactNode;
}

export const MainLayout: FC<IProps> = memo(function MainLayout({ children }) {
    return (
        <div className={styles.MainLayout}>
            <Header />
            {children}
            <Footer />
        </div>
    );
});
