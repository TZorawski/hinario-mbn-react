import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Locations() {
  const navigation = useNavigation();

  const LOCATIONS_LIST = [
    { city: 'CIDADE SEDE 1', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 2', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 3', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 4', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 5', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 6', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 7', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 8', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 9', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
    { city: 'CIDADE SEDE 10', uf: 'UF', address: 'Rua sdkghvnskdjghn, 111', phone: '(11) 11111-1111' },
  ]

  const ListItem = ({locationItem}) => (
    <View style={styles.listItem} >
      <Text style={styles.title}>{locationItem.city} - {locationItem.uf}</Text>
      <Text style={styles.title}>{locationItem.address}</Text>
      <Text style={styles.title}>Contato: {locationItem.phone}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={LOCATIONS_LIST}
          renderItem={({ item }) => <ListItem locationItem={item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  listItem: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
})