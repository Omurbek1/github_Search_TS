import styles from './UserTitle.module.scss';

import React from 'react';
import { LocalGithubUser } from '../../types';


interface UserTitleProps extends Pick<LocalGithubUser,
  'name' | 'login' | 'created'> { }
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinDate = localDate.format(new Date(created))
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinDate}</span>
    </div>
  )
};
