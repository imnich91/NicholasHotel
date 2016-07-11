import React, { Component } from 'react';
import Button from 'coreui/lib/components/Button';
import Modal from 'coreui/lib/components/Modal';

const buttons = [
  { displayText: 'Cancel', isCancel: true },
  { displayText: 'Submit', isDefault: true },
];

class ModalExample extends Component {

  state = { showModal: false }

  maybeRenderModal = () => this.state.showModal && (
    <Modal {...{ buttons }} onHide={this.toggleShowModal}>
      <div>
        <h4>Text in a modal</h4>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </div>
    </Modal>
  )

  toggleShowModal = () => this.setState({ showModal: !this.state.showModal })

  render = () => (
    <div className="example">
      <h3>Modal</h3>
      <Button actionType="secondary" onClick={this.toggleShowModal}>Open Modal</Button>
      {this.maybeRenderModal()}
    </div>
  )
}

export default ModalExample;
