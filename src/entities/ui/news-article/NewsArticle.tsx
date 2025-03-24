import {FC} from "react";
import styles from './NewsArticle.module.scss';
import Image from "next/image";
import DateIcon from '../../../assets/image/icons/date_icon.svg';


interface NewsArticleProps {
    image: string,
    rubric: string,
    rubric_link: string,
    time: Date,
    title: string,
    desc: string,
    link: string
}

export const NewsArticle: FC<NewsArticleProps> = ({image, rubric, rubric_link, time, title, desc, link}) => {
    return (
        <div className={styles.article}>
            <div className={styles.articleImage}>
                <Image src={image} width={'100'} height={'100'} alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentInfo}>
                    <div className={styles.contentInfoRubric}>
                        <a href={rubric_link}>{rubric}</a>
                        <div className={styles.contentInfoTime}>
                            <Image src={DateIcon} alt='' />
                            <div>{time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}</div>
                        </div>
                    </div>
                    <div className={styles.contentInfoText}>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className={styles.contentLink}>
                    <a href={link}>Читать статью</a>
                </div>
            </div>
        </div>
    );
}