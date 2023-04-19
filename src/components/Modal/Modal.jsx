import { Component } from 'react';
import css from '../styles/Styles.module.css';
// import css from '../styles/Styles';

export class Modal extends Component {
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
    window.removeEventListener('click', this.onBackdrop);
  }
  componentDidMount = () => {
    window.addEventListener('keydown', this.onEsc);
    window.addEventListener('click', this.onBackdrop);
  };

  onEsc = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onBackdrop = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.toggleModal();
    }
  };

  render() {
    const { urlImage } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={urlImage} alt="" />
        </div>
      </div>
    );
  }
}
