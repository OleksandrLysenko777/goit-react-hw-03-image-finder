import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
const INITIAL_VALUE = {
  inputQuery: '',
}

class Searchbar extends Component {
  state = {
    ...INITIAL_VALUE,
  };

  handleChange = event => {
    const inputQuery = event.currentTarget.value;
    this.setState({ inputQuery });
    
  };

  
  handleSubmit = event => {
    event.preventDefault();
    const { inputQuery } = this.state;
    
    this.props.getPhotos(inputQuery);
    if (this.state.inputQuery.trim() === '') {
      return Notiflix.Notify.info(
        'Please enter key words for search.'
      );
    }
 
  if (inputQuery !== 0) {
    Notiflix.Notify.success(`Hooray! We found images`);
  }
  

    this.setState({ inputQuery: '' });
  };

  render() {
    const { inputQuery } = this.state;


    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.btn + ' ' + css.search__btn}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            name="inputQuery"
            value={inputQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getPhotos: PropTypes.func.isRequired,
};

export default Searchbar;