import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Searchbar.module.css';

export default function Searchbar ({ onSubmit }) {
    const [query, setQuery] = useState('');


    const handleChange = element => {
        setQuery(element.currentTarget.value)
        //this.setState({ query: element.currentTarget.value });
    };

    const handleSubmit = element => {
        element.preventDefault();
        onSubmit(query);
        // this.props.onSubmit(this.state.query);
        setQuery('');
    };

        return (
            <header className={styles.Searchbar}>
                <form onSubmit={handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        value={query}
                        onChange ={handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
