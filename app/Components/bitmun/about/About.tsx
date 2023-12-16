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
                    BITMUN, Birla Institute of Technology Model United Nations, is the annual Model UN conference of Birla Institute of Technology, Mesra. It is a congregation of international relations enthusiasts, who debate & negotiate to find solutions to real world problems. These delegates, hailing from the state & beyond, engage in lively and intense debates, and draft resolutions that can be quite complex and detailed. In the tapestry of humanity, we are woven together with threads of diversity, each strand representing a unique story, background, and perspective. It is through the celebration and understanding of our differences that we truly unlock the potential for greatness. The need for the future policy makers, to endure the faculty, of how the world has resisted the crisis of armament looming over us on one hand to an impending socio-economic crisis on the other.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Years</h3>
                    <p className={styles.countingAnimation}>3</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Delegates</h3>
                    <p className={styles.countingAnimation}>250+</p>
                </div>
                <div className={styles.gridItem}>
                    <h3 className={styles.h3}>Committees</h3>
                    <p className={styles.countingAnimation}>11</p>
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
