"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './FarewellLanding.module.css';
import anime from 'animejs';
import Image from 'next/image';
import unesquoLogo from '../../../public/logo.png';
import image from '../../../public/OIP (17).jpeg';
import ProfileComponent from '../../Components/farewellProfile/ProfileComponent'; // Import the profile component
import type { StaticImageData } from 'next/image';

//===========================image imports start===============================
import tusharBhaiya from '../../../public/images/farewell/tusharBhaiya.jpg';
import dhirenBhaiya from '../../../public/images/farewell/dhirenBhaiya.jpg';
import ritikaDi from '../../../public/images/farewell/ritikaDi.jpg';
import ajiteshBhaiya from '../../../public/images/farewell/ajiteshBhaiya.jpg';
import abhinavBhaiya from '../../../public/images/farewell/abhinavBhaiya.jpg';
import shivamBhaiya from '../../../public/images/farewell/shivamBhaiya.jpg';
import suvinBhaiya from '../../../public/images/farewell/suvinBhaiya.jpg';
import kapilBhaiya from '../../../public/images/farewell/kapilBhaiya.jpg';
import adityaBhaiya from '../../../public/images/farewell/adityaBhaiya.jpg';
import akshayBhaiya from '../../../public/images/farewell/akshayBhaiya.png';
import aryanBhaiya from '../../../public/images/farewell/aryanBhaiya.jpg';
import pranitBhaiya from '../../../public/images/farewell/pranitBhaiya.jpg';
import arpanBhaiya from '../../../public/images/farewell/arpanBhaiya.png';
import amanBhaiya from '../../../public/images/farewell/amanBhaiya.jpg';
import kaushikBhaiya from '../../../public/images/farewell/kaushikBhaiya.png';
import sarahDi from '../../../public/images/farewell/sarahDi.jpg';
//===========================image import end==================================

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
  { src: akshayBhaiya, name: 'Akshay Raj', slug: 'Charm Spark', skills: ['Wacky', 'Pleasant'], description: "Saying goodbye to the one and only Akshay Bhaiya, who has been the heart and soul of UNESQUO. Your goofiness, infectious humor, and endless energy have brought so much joy and laughter to all of us. JASTESEEN AS Whether it was leading a quiz, sharing a joke, or just being your entertaining self, you always knew how to make every moment special. You're not just the life of the party; you're a loving friend who made UNESQUO feel like a family. We'll miss your fun-loving spirit and all the amazing times we've shared. Wishing you all the best in.. your next adventure. Keep shining, Bhaiya" },
  { src: aryanBhaiya, name: 'Aryan', slug: 'Quiz Juggernaut', skills: ['Debonair', 'Biztech Quiz Expert'], description: "As you embark on your next chapter, Aryan Bhaiya, we are filled with pride and excitement for all the remarkable adventures that await you. Your incisive mind and relentless competitive spirit have made working with you both a privilege and a delight. Your Biz Tech acumen has kept us perpetually on our toes, while your quizzing prowess has left us in a state of perpetual awe. Your insightful comments and engaging presence have enriched our discussions, making each interaction special. You've been more than a senior; you've been a mentor and a source of inspiration. Your unique presence and vibrant energy will be deeply missed. Farewell, and may your future be as your quiz answers-and twice as accurate bright "},
  { src: pranitBhaiya, name: 'Pranit', slug: 'Startup Socius', skills: ['Finbros', 'Ideapolitic'], description: "To Pranit bhaiya our finance virtuoso and startup aficionado, whose genial and approachable mecure has made him a cherished member of our team. His politically ideated perspectives and endless dialogues have kept Jus both informed and entertained. Whether navigating the intricacies of finance or ideating the next groundbreaking startup, your passion and expertise are unparalleled. As he ventures into new horizons, we know his legacy of insight and camaraderie will continue to inspire. Here's to Pranit bhaiya and the countless stimulating discussions we've shared. Cheers to your next adventure!" },
  { src: arpanBhaiya, name: 'Arpan Samuel Topno', slug: 'memory-13', skills: ['Skill 1', 'Skill 2'], description: "As we bid adieu to a remarkable member of UNESQUO, we recall your unique qualities. Your approachable nature and knack for integrating pop culture and memes made you a favorite among us juniors. You guided us through the ever-changing media Landscape with clarity and wisdom. Your strong opinions sparked lively debates, and your vast knowledge and eloquence left a lasting impression on everyone. Your humor and wit made even the simplest moments memorable. In UNESQUO your passion for quizzing and debating, combined with your friendly demeanor, made every meeting enjoyable . As you embark on new adventures, we are confident you will continue to inspire and lead with the same enthusiasm and brilliance. Your legacy of wit and wishdom will remain with us a testament to the profound pact you've had on us. Thank you, Arpan Bhaiya" },
  { src: amanBhaiya, name: 'Aman', slug: '', skills: ['Skill 1', 'Skill 2'], description: "Hey Aman Bhaiyal It's hard to say good bye UNESQUO just can't imagine itself without you. Your trivia genius and electric energy during quizzing sessions are legendary. But beyond that, you're an amazing friend who's become like family. We'll definitely miss your quirky trivia facts that always left us stumped, and your contagious laugh that filled every event with joy. Your willingness to help and endless encouragement made you a pillar of our team. As you embark on this new chapter, we want you to know that we'll miss you, Bhaiya. Though our paths may diverge for now but remember, the UNESQUO family is always here for you We'll always be your biggest cheerleaders, no matter... where life takes you. Best of luck for you new journey." },
  { src: kaushikBhaiya, name: 'Kaushik Patnaik', slug: 'memory-15', skills: ['Skill 1', 'Skill 2'], description: "As you step into your next adventure, we can't help but feel a mix of admiration and anticipation for all be great things ahead. Your sharp wind and playful streak have made working with you both a privilege and a joy. Your morbid wit has kept us all on our toes, laughing and pondering in equal measure. A man of few words, yet each one counts-your succinct and enigmatic nature has always added an air of mystery to our conversations. Your trivia prowess has left us in awe, while your eloquent speeches have inspired us time and again. You've been more than a senior; you've been a source of wisdom and amusement. We'll miss your unique presence and the vibrant energy you bring to every room. Here's to the unforgettable moments and the ma lives you've touched. Farewell, and may your future be as extraordinary as you are." },
  { src: sarahDi, name: 'Sarah Shruti Kujjur', slug: 'memory-15', skills: ['Skill 1', 'Skill 2'], description: "To Sarah Shruti Kujur, the epitome of cool and humility, whose peak sarcasm has kept us all thoroughly entertained. A true connoisseur of vodka and lover of mountains over beaches, Sarah's adventurous spirit As unmatched. Her 'chemical rizz' (we're still deciphering that one) and her knack for turning even the dullest moments into comedic gold have endeared her to all. Whether scaling a mountain or navigating life's complexities, Sarah's positivity and zest for travel are truly inspiring. As she embarks on new adventures, we know her legacy of laughter and exploration will continue to shine. Here's to Sarah, and the countless memories we've shared. Cheers to your next adventure!" }, 
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
