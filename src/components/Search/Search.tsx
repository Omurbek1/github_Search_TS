import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import React, { useRef } from 'react';
import { Button } from '../Button';


interface ISearch {
  hasError: boolean,
  onSubmit: (text: string) => void
}
export const Search = ({ hasError, onSubmit }: ISearch) => {
  const searchRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (event: React.FormEvent) => { }
  return (
    <form onSubmit={handleSubmit} ref={searchRef}>
      <div className={styles.search}>

        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          name='username'
          placeholder='Search Github username....' />
        {hasError && (
          <div className={styles.error}>
            No REsult
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
