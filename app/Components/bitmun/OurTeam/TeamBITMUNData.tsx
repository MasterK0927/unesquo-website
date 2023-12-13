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


const teamData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Akshay Tripathi',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/penguin.jpeg',
    name: ' Kumar Harshwardhan',
    position: 'Director General',
  },
  {
    id: 4,
    src: '/images/chhavi.jpeg',
    name: 'Chhavi Rani',
    position: 'Deputy Director General',
  },
];

const delegateAffairsData = [
  {
    id: 1,
    src: '/images/shaurya.jpg',
    name: 'Shaurya Singh',
    position: 'Delegate Affairs',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Ayan Mitra',
    position: 'Delegate Affairs',
  },
  {
    id: 3,
    src: '/images/smoke_2.png',
    name: ' Shashwat Jha',
    position: 'Delegate Affairs',
  },
];

const executiveBoardData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
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
    src: '/images/gaurav.jpg',
    name: 'Gaurav Kumar Singh',
    position: 'Hospitality',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
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
    src: '/images/smoke_2.png',
    name: 'Sreejan Nidhi',
    position: 'Finance & Sponsorship',
  }
];

const logisticsResourcesData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
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
    src: '/images/smoke_2.png',
    name: 'Shashank Shekhar',
    position: 'Public Relations',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Kumar Shivam',
    position: 'Public Relations',
  },
];

const designContentData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
    name: 'Shreyansh Verma',
    position: 'Design & Content',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Lily',
    position: 'Design & Content',
  },
  {
    id: 3,
    src: '/images/smoke_2.png',
    name: 'Praharsh',
    position: 'Design & Content',
  }
];

const webTeamData = [
  {
    id: 1,
    src: '/images/nikhil.jpeg',
    name: 'Nikhil Verma',
    position: 'Web Team',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Manan Bansal',
    position: 'Web Team',
  },
  {
    id: 3,
    src: '/images/smoke_2.png',
    name: 'Harsh Narayan',
    position: 'Web Team',
  }
];

const culturalTeamData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
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
    src: '/images/smoke_2.png',
    name: 'Ambuj Mishra',
    position: 'Cultural',
  }
];

const TeamBITMUNPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <TeamBITMUNComponent teamData={teamData}/>
      <DelegateAffairsTeamComponent delegateAffairsData={delegateAffairsData}/>
      <ExecutiveBoardComponent executiveBoardData={executiveBoardData}/>
      <HospitalityComponent hospitalityData={hospitalityData}/>
      <FinanceSponsorshipComponent financeSponsorshipData={financeSponsorshipData}/>
      <LogisticsResourcesComponent logisticsResourcesData={logisticsResourcesData}/>
      <PublicRelationsComponent publicRelationsData={publicRelationsData}/>
      <DesignContentComponent designContentData={designContentData}/>
      <WebTeamComponent webTeamData={webTeamData}/>
      <CulturalTeamComponent culturalTeamData={culturalTeamData}/>
    </div>
  );
};

export default TeamBITMUNPage;
