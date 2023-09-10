import React from 'react';
import styles from '../styles/alumniComponents.module.css'
import Image from 'next/image';

interface Team {
    id: number;
    src: string;
    name: string;
    position: string;
}

interface AlumniProps {
    teamData: Team[];
}

const TeamComponent: React.FC<TeamProps> = ({ teamData }) => {
    return (
        <div>
            <h2 className={styles.heading}>Our Team</h2>
            <ul className={styles['alumni-list']}>
                {teamData.map((team) => (
                    <li key={team.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={team.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
                                <h3 className={styles['alumni-name']}> {team.name}</h3>
                                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{team.position}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamComponent;
