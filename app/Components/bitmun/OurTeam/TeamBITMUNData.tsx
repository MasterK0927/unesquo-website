import React from 'react';
import styles from "../../../styles/alumniPage.module.css"
import TeamBITMUNComponent from './TeamBITMUNComponent';
import DelegateAffairsTeamComponent from './DelegateAffairsComponent';
import ExecutiveBoardComponent from './ExecutiveBoardComponent';
import HospitalityComponent from './HospitalityComponent';
import FinanceSponsorshipComponent from './FinanceSponsorshipComponent';
import LogisticsResourcesComponent from './LogisticsResourcesComponet';
import PublicRelationsComponent from './PublicRelationsComponent';
import DesignContentComponent from './DesignContentComponent';
import WebTeamComponent from './WebTeamComponent';
import CulturalTeamComponent from './CulturalTeamComponent';
import FacultyAdvisorComponent from './FacultyAdvisor';

const teamData = [
  {
    id: 1,
    src: '/images/webp/harsh.webp',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/webp/Akshay.webp',
    name: 'Akshay Tripathi',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/webp/penguin.webp',
    name: ' Kumar Harshwardhan',
    position: 'Director General',
  },
  {
    id: 4,
    src: '/images/webp/chhavi.webp',
    name: 'Chhavi Rani',
    position: 'Deputy Director General',
  },
];

const delegateAffairsData = [
  {
    id: 1,
    src: '/images/webp/Shaurya.webp',
    name: 'Shaurya Singh',
    position: 'Delegate Affairs',
  },
  {
    id: 2,
    src: '/images/webp/Ayan.webp',
    name: 'Ayan Mitra',
    position: 'Delegate Affairs',
  },
  {
    id: 3,
    src: '/images/webp/Shashwat.webp',
    name: ' Shashwat Jha',
    position: 'Delegate Affairs',
  },
];

const executiveBoardData = [
  {
    id: 1,
    src: '/images/webp/Priyanka.webp',
    name: 'Priyanka Sinha',
    position: 'Executive Board',
  },
  {
    id: 2,
    src: '/images/sumeet.jpg',
    name: 'Sumeet Kumar',
    position: 'Executive Board',
  },
];

const hospitalityData = [
  {
    id: 1,
    src: '/images/webp/gaurav.webp',
    name: 'Gaurav Kumar Singh',
    position: 'Hospitality',
  },
  {
    id: 2,
    src: '/images/webp/Aayushii.webp',
    name: 'Aayushii Singh',
    position: 'Hospitality',
  },
];

const financeSponsorshipData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
    name: 'Akshat',
    position: 'Finance & Sponsorship',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Arghya Mahanty',
    position: 'Finance & Sponsorship',
  },
  {
    id: 3,
    src: '/images/webp/sreejan.webp',
    name: 'Sreejan Nidhi',
    position: 'Finance & Sponsorship',
  }
];

const logisticsResourcesData = [
  {
    id: 1,
    src: '/images/webp/Arnav.webp',
    name: 'Arnav Roy',
    position: 'Logistics & Resources',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Shreya Suman',
    position: 'Logistics & Resources',
  },
];

const publicRelationsData = [
  {
    id: 1,
    src: '/images/webp/shasank.webp',
    name: 'Shashank Shekhar',
    position: 'Public Relations',
  },
  {
    id: 2,
    src: '/images/webp/Shivam.webp',
    name: 'Kumar Shivam',
    position: 'Public Relations',
  },
];

const designContentData = [
  {
    id: 1,
    src: '/images/webp/Shreyansh.webp',
    name: 'Shreyansh Verma',
    position: 'Design & Content',
  },
  {
    id: 2,
    src: '/images/webp/lily.webp',
    name: 'Lily',
    position: 'Design & Content',
  },
  {
    id: 3,
    src: '/images/webp/Praharsh.webp',
    name: 'Praharsh',
    position: 'Design & Content',
  }
];

const webTeamData = [
  {
    id: 1,
    src: '/images/webp/NikhilVerma.webp',
    name: 'Nikhil Verma',
    position: 'Web Team',
  },
  {
    id: 2,
    src: '/images/webp/Manan.webp',
    name: 'Manan Bansal',
    position: 'Web Team',
  },
  {
    id: 3,
    src: '/images/webp/HarshN.webp',
    name: 'Harsh Narayan',
    position: 'Web Team',
  }
];

const culturalTeamData = [
  {
    id: 1,
    src: '/images/webp/AdityaVerma.webp',
    name: 'Aditya Verma',
    position: 'Cultural',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Anurag Ghosh',
    position: 'Cultural',
  },
  {
    id: 3,
    src: '/images/webp/Ambuj.webp',
    name: 'Ambuj Mishra',
    position: 'Cultural',
  }
];

const facultyAdvisorData = [
  {
    id:1,
    src: '/images/webp/Vishal_sir.webp',
    name: 'Vishal Sir',
    position: 'Faculty Advisor',
    buttonSrc: 'https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=ppAc27nZtLrHFFnQ78nQIqqk4D%252bguThSyZBAVvPXAHI1jxxGNLsvtncM8Jsqz8CS'
  },
  {
    id:2,
    src: '/images/webp/Sudhansu-sir.webp',
    name: 'Sudhansu Sir',
    position: 'Faculty Advisor',
    buttonSrc: 'https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=C23P3ze4k4p0SpK5OxL6ww%253d%253d'
  }
]




const TeamBITMUNPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <TeamBITMUNComponent teamData={teamData} />
      <FacultyAdvisorComponent facultyAdvisorData={facultyAdvisorData} />
      <DelegateAffairsTeamComponent delegateAffairsData={delegateAffairsData} />
      <ExecutiveBoardComponent executiveBoardData={executiveBoardData} />
      <HospitalityComponent hospitalityData={hospitalityData} />
      <FinanceSponsorshipComponent financeSponsorshipData={financeSponsorshipData} />
      <LogisticsResourcesComponent logisticsResourcesData={logisticsResourcesData} />
      <PublicRelationsComponent publicRelationsData={publicRelationsData} />
      <DesignContentComponent designContentData={designContentData} />
      <WebTeamComponent webTeamData={webTeamData} />
      <CulturalTeamComponent culturalTeamData={culturalTeamData} />
    </div>
  );
};

export default TeamBITMUNPage;
