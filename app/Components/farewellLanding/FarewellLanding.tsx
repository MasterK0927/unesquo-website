"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './FarewellLanding.module.css';
import anime from 'animejs';
import Image from 'next/image';
import unesquoLogo from '../../../public/logo.png';
import image from '../../../public/OIP (17).jpeg';
import ProfileComponent from '../../Components/farewellProfile/ProfileComponent'; // Import the profile component
import type { StaticImageData } from 'next/image';

//==============image imports start=================
import tusharBhaiya from '../../../public/images/farewell/tusharBhaiya.jpg';
import dhirenBhaiya from '../../../public/images/farewell/dhirenBhaiya.jpg';
import ritikaDi from '../../../public/images/farewell/ritikaDi.jpg';
import ajiteshBhaiya from '../../../public/images/farewell/ajiteshBhaiya.jpg';
import abhinavBhaiya from '../../../public/images/farewell/abhinavBhaiya.jpg';
import shivamBhaiya from '../../../public/images/farewell/shivamBhaiya.jpg';
import suvinBhaiya from '../../../public/images/farewell/suvinBhaiya.jpg';
import kapilBhaiya from '../../../public/images/farewell/kapilBhaiya.jpg';
import adityaBhaiya from '../../../public/images/farewell/adityaBhaiya.jpg';
//==============image import end====================

type Person = {
  src: StaticImageData;
  name: string;
  slug: string;
  skills: string[];
  description: string;
};

const initialImages: Person[] = [
  { src: tusharBhaiya, name: 'Jaddu Tushar Kanthi', slug: 'HomeLander', skills: ['Pop Culture Guru', 'Trivia Hunter'], description: "To Tushar Bhaiya, our Master Storyteller and Pop Culture Enthusiast, As we bid you adieu from UNESQUO, we're reminded of the mark you've left. You effortlessly turned casual chats into captivating life experiences. From being part of club discussions to being the life of the party you had a grand era with UNESQUO much like Napolean's. Your intellectual prowess, akin to Homelander's always cooked something brilliant. College was a whirlwind of laughter and memorable moments but there is nothing we can't do, but miss your presence. As you embark on new adventures, know that your stories, humor, and camaraderie will be missed. Here's to your next chapter, Tushar Bhaiyal Thanks for being the hero, this club deserves" },
  { src: dhirenBhaiya, name: 'Dhiren Kumar', slug: 'Engima Knight', skills: ['Shadow Orchestrator', 'Design Legend'], description: "DEAR DHIREN BHAIYA, AS YOU PREPARE TO EMBARK ON A NEW CHAPTER OF YOUR JOURNEY, WE GATHER TO BID YOU A BITTERSWEET FAREWELL. YOUR UNWAVERING LOYALTY AND RELENTLESS DEDICATION TO OUR CLUB HAVE BEEN THE BEDROCK OF OUR SUCCESS THROUGHOUT THE YEARS. YOUR STOIC PRESENCE, LIKE A STEADY LIGHTHOUSE IN TURBULENT WATERS, HAS GUIDED US THROUGH CHALLENGES WITH QUIET STRENGTH AND UNWAVERING RESOLVE. YOUR ENIGMATIC AURA, SHROUDED IN MYSTERY, HAS INTRIGUED AND INSPIRED US ALL. LIKE A MODERN-DAY BATMAN, YOU'VE OPERATED IN THE SHADOWS, SILENTLY ORCHESTRATING OUR TRIUMPHS AND ENSURING OUR SAFETY WITHOUT SEEKING RECOGNITION OR PRAISE.AS YOU VENTURE INTO NEW HORIZONS, KNOW THAT YOUR LEGACY WITHIN UNESQUO WILL ENDURE AS A TESTAMENT TO YOUR UNPARALLELED DEDICATION AND UNWAVERING COMMITMENT" },
  { src: ritikaDi, name: 'Ritika', slug: 'Aurora Vertuoso', skills: ['Leadership Magic', 'Creative Spark'], description: "Ritika Di, your tenure with us has been nothing short of enchanting. Your courageous Leadership, profound wisdom, and boundless creativity have left an indelible mark on our hearts. As you embark on a new chapter, LAST SEEN AS our team is deeply grateful for the magic you've brought into our lives. One of the most accomplished women here, your departure leaves a void that no spell can fill. May your journey be as vibrant and enriching as the worlds you've painted with your words and deeds. Remember, you will always have a home with us at Unesquo. Farewell, Ritika Di, and best wishes for the future." },
  { src: ajiteshBhaiya, name: 'Ajitesh Harshit', slug: 'Pacesetter', skills: ['Exceptional Orator', 'Proficient Multitasker'], description: "Ajitesh Bhaiya, you are a true legend, a walking encyclopedia with unparalleled knowledge, captivating pblic speaking skills, and a friendly, approachable demeanor that makes everyone feel at ease. Your multitasking prowess is awe-inspiring, as you effortlessly manage activities, excel academically, and still find time for friends. As you leave UNESQUO, we are saddened but forever grateful for the indelible mark you have left on each of us. Your incredible future awaits, and we will cherish the memories we shared together. Ajitesh Bhaiya you will always hold a special place in the hearts of all UNESQUOites. Your incredible future awaits, and we wish you all the best as you embark on this new journey." },
  { src: abhinavBhaiya, name: 'Abhinav Mahanti', slug: 'Versatile Virtuoso', skills: ['Trivia Wiz', 'Sports Fanatic'], description: "Dear Abhinav Bhaiya, As you embark on your next adventure, weat UNESQUO HQ want to send you off with a heartfelt farewell. Your genius in solving problems made you our Professor X, while your coding skills were pure Jedi mastery. On the field, you were our Futsal Ronaldo LAST BEER AS with moves smoother than Neo dodging bullets. Beyond all this, your Deadpool-like humor and unwavering friendship brightened our days, turning any situation into a laugh riot. From epic quiz nights to spontaneous futsal matches, you made every moment legendary. We'll miss you more than a fan misses the final season of Game of Thrones (but way less disappointing). Stay in touch, and may your future be filled with epic triumphs and hilarious adventures Your UNESQUO Fam" },
  { src: shivamBhaiya, name: 'Shivam Raj', slug: 'Pixel Ace', skills: ['Trivia Buff', 'Designer'], description: "FAREWELL, SHIVAM BHAIYA! THE CLUB WON'T BE THE SAME WITHOUT YOUR QUIET WISDOM. YOU WERE A TRUE KNOWLEDGEHOUND, A TRIVIA WHIZ WHO ALWAYS IMPRESSED US WITH YOUR POP CULTURE FANATICISM. THOUGH RESERVED, YOUR LOVE FOR THE CLUB SHONE THROUGH. YOUR GOATED DESIGNS TRULY PLAYED A GREAT PART IN ESTABLISHIN THE CLUB'S UNIQUENESS. YOU WERE A LOYAL MEMBER, ALWAYS THERE TO LEND A HAND (OR ANSWER A BRAIN TEASER!). WE'LL MISS YOUR PRESENCE, BUT KNOW YOU'RE OFF TO CONQUER NEW THINGS. KEEP EXPLORING, KEEP QUIZZING, AND DON'T FORGET TO GEEK OUT" },
  { src: suvinBhaiya, name: 'Suvin Singh', slug: 'Zen Guardian', skills: ['Skrenk', 'Debonair'], description: "WE ADMIRE THE CALM AND COMPOSED WAY YOU HANDLE EVERYTHING THAT COMES YOUR WAY. YOUR ABILITY TO STAY COOL UNDER PRESSURE AND YOUR AMIABLE NATURE MAKE YOU SUCH A PLEASURE TO BE AROUND YOU HAVE AN INCREDIBLE KNACK FOR MAKING EVERYONE FEEL AT EASE, EVEN WHEN THINGS GET TOUGH. YOUR DEEP THOUGHTS AND INSIGHTFUL PERSPECTIVES ARE TRULY INSPIRING. IT'S NOT JUST YOUR OUTER POISE, BUT THE DEPTH OF YOUR CHARACTER THAT STANDS OUT. THANK YOU FOR BEING THE WONDERFUL PERSON YOU ARE. IT'S ALWAYS A JOY TO TALK TO YOU, AND WE FEEL FORTUNATE TO KNOW YOU. YOUR PRESENCE WILL BE GREATLY MISSED, BUT WE KNOW YOU WILL CONTINUE TO BRING POSITIVE CHANGE WHEREVER YOU GO." },
  { src: kapilBhaiya, name: 'Kapil Lohni', slug: 'Luminary', skills: ['Nurturing', 'Versatile Taste'], description: "TO KAPIL BHAIYA, SAYING GOODBYE FEELS IMPOSSIBLE. YOUR PRESENCE AT UNESQUO HAS BEEN A BLESSING, LIKE A PERSONAL SOUNDTRACK OF SOULFUL BALLADS AND VIBRANT ROCK ANTHEMS. YOUR WAY WITH WORDS, ECLECTIC TASTE IN MUSIC AND FILMS, AND ABILITY TO TURN MUNDANE MOMENTS INTO PHILOSOPHICAL DEBATES HAVE ENRICHED US ALL. MORE THAN THAT, YOU'VE BEEN OUR HEART, OFFERING UNWAVERING SUPPORT AND CONNECTION. AS YOU EMBARK ON NEW ADVENTURES, KNOW YOUR LEGACY WILL REMAIN WITH US FOREVER CHERISHED WITH LOVE AND GRATITUDE." },
  { src: adityaBhaiya, name: 'Aditya Verma', slug: 'Golden Support', skills: ['Work Ethic', 'Team Player'], description: "'Description for Person 9'Dear Aditya Bhaiya, College may be over, but the memories we made here won't be forgotten. You're the hardest-working guy with a heart of gold, always there to lend a hand (even if you might get a little fired up FASTER sometimes!). You were the best partner-in- crime for after-class fun, especially when it came to crushing romantic web-series marathons. Don't worry, your surprisingly deep knowledge and decent common sense will be missed (almost as much as your love for Sting!). All the best on your next adventure, Aditya bhaiya. We'll miss you, but know you'll do great things!" },
  { src: image, name: 'Person 10', slug: 'memory-10', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 10' },
  { src: image, name: 'Person 11', slug: 'memory-11', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 11' },
  { src: image, name: 'Person 12', slug: 'memory-12', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 12' },
  { src: image, name: 'Person 13', slug: 'memory-13', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 13' },
  { src: image, name: 'Person 14', slug: 'memory-14', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 14' },
  { src: image, name: 'Person 15', slug: 'memory-15', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 15' },
];

const FarewellLanding: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<Person[]>(initialImages);
  const [loading, setLoading] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      anime.timeline()
        .add({
          targets: gridRef.current.children,
          translateY: [100, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: anime.stagger(150)
        })
        .add({
          targets: gridRef.current.children,
          scale: [0.8, 1],
          easing: 'easeOutElastic(1, .8)',
          duration: 750,
          delay: anime.stagger(100, { start: 500 })
        });
    }
  }, [images]);

  const loadMoreImages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newImages: Person[] = Array(10).fill({
        src: image,
        name: 'New Person',
        slug: 'new-memory',
        skills: ['Skill 1', 'Skill 2'],
        description: 'Description for New Person',
      });
      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
    }, 1000);
  };

  const handleImageClick = (index: number) => {
    setLoading(true);
    const person = images[index];
    setTimeout(() => {
      setLoading(false);
      setSelectedPerson(person);
    }, 3000);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.rippleTextContainer}>
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className={styles.rippleText}
              style={{
                '--random-x': `${Math.random() * 100 - 50}vw`,
                '--random-y': `${Math.random() * 100 - 50}vh`,
              } as React.CSSProperties}
            >
              UNESQUO
            </span>
          ))}
        </div>
        <div className={styles.finalLogoContainer}>
          <Image src={unesquoLogo} alt="UNESQUO Logo" className={styles.finalLogo} />
          <p className={styles.finalText}>BIT MESRA</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Farewell Wall</h1>
        <p className={styles.subtitle}>Celebrating Memories of Our Graduates</p>
      </header>
      <div className={styles.gridContainer} ref={gridRef}>
        {images.map((person, index) => (
          <div key={index} onClick={() => handleImageClick(index)} className={`${styles.gridItem} ${index % 5 === 0 ? styles.gridItemLarge : ''}`}>
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.aircraftIcon}>✈️</span>
                <h2 className={styles.h2}>{person.name}</h2>
                <p className={styles.p}>Enjoyed the view from above the clouds.</p>
              </div>
            </div>
            <Image src={person.src} alt={`Memory ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.bottomSection}>
        <button onClick={loadMoreImages} className={styles.loadMoreButton} disabled={loading}>
          {loading ? 'Loading...' : 'Load More Memories'}
        </button>
        <footer className={styles.footer}>
          <p className={styles.p}>Thank you for being part of our journey. Best wishes for your future endeavors!</p>
        </footer>
      </div>
      {selectedPerson && (
        <div className={styles.profileModal}>
          <ProfileComponent person={selectedPerson} />
          <button className={styles.closeButton} onClick={() => setSelectedPerson(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FarewellLanding;
