import React from 'react';
import styles from '../styles/alumniComponents.module.css'
import Image from 'next/image';

interface Alumni {
    id: number;
    src: string;
    name: string;
    position: string;
}

interface AlumniProps {
    alumniData: Alumni[];
}

const AlumniComponent: React.FC<AlumniProps> = ({ alumniData }) => {
    return (
        <div>
            <h2 className={styles.heading}>Alumni</h2>
            <ul className={styles['alumni-list']}>
                {alumniData.map((alumni) => (
                    <li key={alumni.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={alumni.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
                                <h3 className={styles['alumni-name']}> {alumni.name}</h3>
                                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{alumni.position}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumniComponent;
