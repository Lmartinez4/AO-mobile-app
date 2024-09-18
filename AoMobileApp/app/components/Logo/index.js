import { Image, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'
import logo from '../../../assets/ao-logo-small.png';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Link href="/AONest" style={styles.link}>
        <Image source={logo} />
      </Link>
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    height: 60,
  },
  link: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 10
  }
});
