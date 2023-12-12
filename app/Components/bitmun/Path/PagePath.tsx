// PagePath.tsx

import React from 'react';
import styles from './pagePath.module.css';

interface PagePathProps {
  currentPage: string;
  path: string;
}

const PagePath: React.FC<PagePathProps> = ({ currentPage, path }) => {
  return (
    <div className={styles.pageHeader}>
      <span className={styles.pageName}>{currentPage}</span>
      <span className={styles.pagePath}>{path}</span>
    </div>
  );
};

export default PagePath;
