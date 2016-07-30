import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';

export default (ComposedComponent) => {
  const Authentication = compose(
    lifecycle({
      componentWillMount() { if (!this.props.authenticated) this.context.router.push('/') },
      componentWillUpdate(nextProps) { if (!nextProps.authenticated) this.context.router.push('/') }
    })
  )(ComposedComponent)

  Authentication.contextTypes = { router: React.PropTypes.object }

  const mapStateToProps = (state) => ({ authenticated: state.authenticated })

  return connect(mapStateToProps)(Authentication);
}
