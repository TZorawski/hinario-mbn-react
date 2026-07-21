import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';

export default function Locations() {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  const LOCATIONS_LIST = [
    { city: 'São Paulo (SEDE)', uf: 'SP', address: 'Av. Imirim, 2496 - Bairro Imirim', phone: '(11) 2256-0914', responsible: 'Pr. José Kim (Beom Seop Kim)' },
    { city: 'Guarulhos', uf: 'SP', address: 'Rua Claudino Barbosa 132, Macedo', phone: '(11) 97495-2244', responsible: 'Pr. Diego Kim' },
    { city: 'Caraguatatuba', uf: 'SP', address: 'Av. Antonio Francisco Pascoal Peliciari, 957 - Bairro Canta Galo', phone: ' (11) 96183-8520', responsible: 'Pr. Willy Aguilera' },
    { city: 'Porto Alegre', uf: 'RS', address: 'Av. Antônio de Carvalho, 2059 - Jardim Carvalho', phone: '(51) 98205-6702', responsible: 'Pr. Marcos Kim' },
    { city: 'Brasilia', uf: 'DF', address: 'QND 20, Casa 20 - Taguatinga Norte', phone: '(61) 99377-6610', responsible: 'Pr. Davi Lee' },
    { city: 'Rio de Janeiro', uf: 'RJ', address: 'Rua Augusto de Azevedo Santos, lt 03 - Campo Grande', phone: '(11) 99320-5621', responsible: 'Pr. Paulo Jung' },
    { city: 'Teresina', uf: 'PI', address: 'Rua Dr.Area Leão, 2080 - Bairro Monte Castelo', phone: '(86) 99929-4233', responsible: 'Pr. Jair Belém' },
    { city: 'Belo Horizonte', uf: 'MG', address: 'Rua Central, 1155 - Jardim Leblon', phone: '(31) 98316-0545', responsible: 'Miss. Simeão Kim' },
    { city: 'Goiânia', uf: 'GO', address: 'R. Recife, 75 - Quadra 1, Lote 19 - St. Urias Magalhães', phone: '(62) 99236-2448', responsible: 'Pr. Isaque Kwon' },
    { city: 'Curitiba', uf: 'PR', address: 'Rua Colombo, 704 - Bairro Ahú', phone: '(11) 99769-0269', responsible: 'Miss. Júlio Han' },
  ]

  const ListItem = ({locationItem}) => (
    <View style={[styles.listItem, isLandscape && styles.listItemLandscape]} >
      <Text style={styles.titleItem}>{locationItem.city} - {locationItem.uf}</Text>
      <Text style={styles.textItem}><Text style={styles.headerTextItem}>Endereço:</Text>{locationItem.address}</Text>
      <Text style={styles.textItem}><Text style={styles.headerTextItem}>Contato:</Text> {locationItem.phone}</Text>
      <Text style={styles.textItem}><Text style={styles.headerTextItem}>Responsável:</Text> {locationItem.responsible}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={isTablet && !isLandscape ? styles.listContentTablet : undefined}
          data={LOCATIONS_LIST}
          renderItem={({ item }) => <ListItem locationItem={item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  listContentTablet: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  listItem: {
    backgroundColor: COLORS.cards,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  listItemLandscape: {
    maxWidth: '100%',
    marginHorizontal: 0,
  },
  titleItem: {
    fontSize: 22,
    fontWeight: 400,
    width: '100%',
    textAlign: 'center',
    marginBottom: 8
  },
  textItem: {
    fontSize: 18,
    textAlign: 'left',
  },
  headerTextItem: {
    fontSize: 20,
    textAlign: 'left',
  },
})