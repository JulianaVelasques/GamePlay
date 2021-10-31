import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; //Para resolver problema com margin top no iphone

export const styles = StyleSheet.create({
  container: {
    flex: 1, //para ocupar a região total da pág.
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26, //Pego o tamanho da barra no Iphone e somo mais 26,
    //para o topo começar ali. Isso não irá rodar no Android
    marginBottom: 42,
  },
  content: {
    marginTop: 42,
  },
});
