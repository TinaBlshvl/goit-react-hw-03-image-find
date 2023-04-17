import { Component } from 'react';
// import css from '../styles/Styles';
import css from '../styles/Styles.module.css';

export class Button extends Component {
  static = {
    page: 1,
  };

  handleClick = () => {
    this.setState({ page: this.props.numberPage + 1 }, () => {
      this.props.loadMore(this.state.page);
    });
  };

  render() {
    return (
      <button className={css.button} onClick={this.handleClick} type="button">
        Load more
      </button>
    );
  }
}
