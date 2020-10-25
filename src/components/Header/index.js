import React from 'react';
import { Image, StyleSheet } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const styles = StyleSheet.create({
  imgLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
export default function Header() {
  return (
    <Container>
      <Image style={styles.imgLogo} source={logoImg} />
    </Container>
  );
}
