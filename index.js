import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const MultipleShadows = ({count, children, style, shadowStyles}) => {
  if (count !== shadowStyles.length) {
    console.error('Count must be equal to length of shadowStyles Array');
    return;
  }
  return (
    <View style={[style, shadowStyles.slice(-1)]}>
      {count <= 1 ? (
        children
      ) : (
        <MultipleShadows
          count={count - 1}
          children={children}
          shadowStyles={shadowStyles.slice(0, -1)}
        />
      )}
    </View>
  );
};

MultipleShadows.propTypes = {
  count: PropTypes.number,
  shadowStyles: PropTypes.arrayOf(PropTypes.object),
};

export default MultipleShadows;
