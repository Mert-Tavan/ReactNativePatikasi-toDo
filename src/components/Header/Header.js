import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

const Header = props => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.counter}>{props.counter}</Text>
    </View>
  );
};

export default Header;