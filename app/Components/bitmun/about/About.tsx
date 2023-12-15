// BitmunAboutUs.tsx

import React from 'react';
import styles from './AboutUs.module.css';
import Image from 'next/image';
import image from '@/public/images/bitcoin.jpg'

const BitmunAboutUs: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Section 1 */}
            <div className={styles.flexBox}>
                <div className={styles.subFlexBox}>
                    <Image src={image}  alt="BITMUN Difference" className={styles.img} width={100} height={400} />
                </div>
                <div className={styles.subFlexBoxContent}>
                    <h2 className={styles.h2}>What is MUN?</h2>
                    <p className={styles.p}>
                        Model United Nations (MUN) is a simulation of the United Nations where participants
                        represent various countries and debate on international issues. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, provident quo sint accusamus consequatur earum? Quis natus ut impedit unde? Maiores consectetur expedita tempora architecto cum, veritatis magnam porro accusantium excepturi nesciunt veniam provident quibusdam in. Culpa pariatur velit possimus, at ipsam esse eum fugit unde quisquam molestias, adipisci iure!
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className={styles.flexBox}>
                <div className={styles.subFlexBox}>
                    <Image src={image} alt="BITMUN Difference" className={styles.img} width={100} height={400} />
                </div>
                <div className={styles.subFlexBoxContent}>
                    <h2 className={styles.h2}>The BITMUN Difference</h2>
                    <p className={styles.p}>
                        BITMUN stands out with its unique approach to MUN, fostering innovation and excellence
                        in diplomatic discourse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum, perspiciatis at asperiores voluptates delectus voluptatum itaque ea? Vitae fugit temporibus labore voluptates et praesentium ipsam sed reprehenderit necessitatibus dolor velit alias provident mollitia vero, quod omnis. Nesciunt, vero numquam quos nisi cumque aliquam consectetur totam. Id minus quos iste.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Years</h3>
                    <p className={styles.countingAnimation}>5</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Delegates</h3>
                    <p className={styles.countingAnimation}>500+</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Committees</h3>
                    <p className={styles.countingAnimation}>10</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Domains</h3>
                    <p className={styles.countingAnimation}>5</p>
                </div>
            </div>

            {/* Section 4 */}
            <div className={styles.whyParticipate}>
                <h2 className={styles.underline}>Why should you participate?</h2>
                <p className={styles.whyContent}>
                    Participating in BITMUN provides a unique opportunity to enhance your diplomatic and
                    negotiation skills, connect with like-minded individuals, and gain a deeper understanding
                    of global issues.
                </p>
            </div>
        </div>
    );
};

export default BitmunAboutUs;
