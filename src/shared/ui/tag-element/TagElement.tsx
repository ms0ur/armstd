import React, { FC } from 'react';
import styles from './TagElement.module.scss';
import TagImage from '../../../assets/image/icons/tag.svg';
import Image from 'next/image';

interface TagElementProps {
    name: string;
    link?: string;
    type?: 'link' | 'span';
    act?: 'act' | 'nonact';

}

export const TagElement: FC<TagElementProps> = ({ name, link, type = 'link', act = 'act' }) => {
    return (
        <>
            {type === 'link' ? (
                <a className={act === 'act' ? styles.tag + ' ' + styles.tagActive : styles.tag + ' ' + styles.tagNonactive} href={link} target="_blank" rel="noopener noreferrer">
                    <Image src={TagImage} alt=""/>
                    {name}
                </a>
            ) : (
                <span className={act === 'act' ? styles.tag + ' ' + styles.tagActive : styles.tag + ' ' + styles.tagNonactive}>
                    <Image src={TagImage} alt=""/>
                    {name}
                </span>
            )}
        </>
    );
};