import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View } from 'react-native';
import style from './style';

const CenterView = ({ children }) => {
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={style.main}>{children}</View>
    </KeyboardAvoidingView>
  );
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

export default CenterView;
