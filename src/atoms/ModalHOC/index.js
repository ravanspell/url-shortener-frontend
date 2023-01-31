import React, {PureComponent} from 'react';
import './modal.css';

const modalDefault = (WrappedComponent) => {
  class ModalDefaultHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener('keyup', this.handleKeyUp, false);
      document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
      document.addEventListener('keyup', this.handleKeyUp, false);
      document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleKeyUp(e) {
      if (e.key === "Escape") {
        this.handleClickOutside();
      }
    }

    handleClick(e) {
      if (this.node.contains(e.target)) {
        return;
      }
      this.handleClickOutside();
    }

    handleClickOutside() {
      this.props.onClickBack();
    }

    render() {
      const { id, showModal } = this.props;
      return (
        <div id={id || 'modal'} className={showModal ? "custom-modal" : "no-display-modal"}>
          <div className="modal-box" ref={(node) => { this.node = node; }}>
            <WrappedComponent
              {...this.props}
            />
          </div>
        </div>
      );
    }
  }
  return ModalDefaultHOC;
};

export default modalDefault;

