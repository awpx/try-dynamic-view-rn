import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({dataLetter}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.desc}>
        <Text style={styles.numLetter} > No Surat  : {dataLetter.letterNumber}</Text>
        <Text style={styles.descLetter} > Deskripsi : {dataLetter.description}</Text>
      </View>
      
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  desc: {
    flex: 1,
    marginLeft: 18,
  },
  numLetter: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  descLetter: {
    fontSize: 18,
  },
})
