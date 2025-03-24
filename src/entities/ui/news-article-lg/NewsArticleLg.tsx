import {FC} from "react";
import styles from './NewsArticleLg.module.scss';
import Image from "next/image";
import DateIcon from '../../../assets/image/icons/date_icon.svg';
import ShareIcon from '../../../assets/image/icons/share.svg';
import {TagElement} from "@/shared";


interface NewsArticleLGProps {
    image: string,
    rubric: string,
    rubric_link: string,
    time: Date,
    title: string,
    desc: string,
    tags: {name: string, link?: string}[],
    link: string
}

export const NewsArticleLG: FC<NewsArticleLGProps> = ({image, rubric, rubric_link, time, title, desc, tags, link}) => {
    return (
        <div className={styles.article}>
            <div className={styles.articleImage}>
                <Image src={image} width={'100'} height={'100'} alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentInfo}>
                    <div className={styles.contentInfoRubric}>
                        <a href={rubric_link}>{rubric}</a>
                        <div className={styles.contentInfoActions}>
                            <div className={styles.contentInfoTime}>
                                <Image src={DateIcon} alt='' />
                                <div>{time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}</div>
                            </div>
                            <div className={styles.contentInfoTime}>
                                <Image src={ShareIcon} alt='' />
                                <div>Поделиться</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentInfoText}>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className={styles.contentTags}>
                    {tags.map((tag, index) => (<TagElement name={tag.name} link={tag.link} type={"link"} act={index === 0 ? 'act' : 'nonact'} key={index}/>))}
                    <a className={styles.contentLink} href={link}>Читать статью</a>
                </div>
            </div>
        </div>
    );
}