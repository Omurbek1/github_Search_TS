import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import React, { useRef } from 'react';
import { Button } from '../Button';


interface ISearch {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFieldsd = {
  username:HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: ISearch) => {
  // const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFieldsd>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if (text) {
      onSubmit(text);
      event.currentTarget.reset()
    }
    // const text = searchRef.current ? searchRef.current.value : '';
    // if (text) {
    //   onSubmit(text);
    //   if (searchRef.current) 
    //     searchRef.current.value = '';
      
    // }
  }
  //!ToDO dsd

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>

        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          // ref={searchRef}
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
