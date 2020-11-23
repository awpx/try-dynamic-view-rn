import React, {} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper'

const Details = ({dataLetter}) => {

  return (
    
      <View>
        <Text style={{marginLeft: 20, fontSize: 20, fontWeight:'bold'}}>Details: </Text>
        {/* {dataLetter.listData ? dataLetter.listData.map((item) => <Text>{Object.values(dataLetter.listData)}</Text>) : <Text>Loadng...</Text>} */}
        {/* <FlatList 
          horizontal={false}
          data={dataLetter.listData}
          keyExtractor={item => item.id.toString()}
          // numColumns={3}
          renderItem={({item, index}) => <RenderItem item={item} />}
        /> */}
        <ScrollView horizontal={true} >
        <DataTable style={styles.tableContainer}>
          <DataTable.Header>
            <DataTable.Title style={styles.subject}><Text style={styles.subject}>Subject</Text></DataTable.Title>
            <DataTable.Title style={styles.sender}><Text style={styles.sender}>Sender</Text></DataTable.Title>
            <DataTable.Title style={styles.about}><Text style={styles.about}>About</Text></DataTable.Title>
            <DataTable.Title style={styles.approved}><Text style={styles.approved}>Approved</Text></DataTable.Title>
          </DataTable.Header>

          {dataLetter.listData ? (
            dataLetter.listData.map(item => 
              <DataTable.Row key={item.id}>
              <DataTable.Cell style={styles.subject}><Text style={styles.subject}>{item.subject}</Text></DataTable.Cell>
              <DataTable.Cell style={styles.sender}><Text style={styles.sender}>{item.sender}</Text></DataTable.Cell>
              <DataTable.Cell style={styles.about}><Text style={styles.about}>{item.about}</Text></DataTable.Cell>
              <DataTable.Cell style={styles.approved}><Text style={styles.approved}>{item.approved}</Text></DataTable.Cell>
            </DataTable.Row>
            
          )
          ) : (
            <Text>Loading...</Text>
          )}

        </DataTable>
        </ScrollView>
      </View>
    
  )
}
{/* <rowTable key={item.id} item={item} /> */}

// const RenderItem = ({ item }) => {
//   return(
//     <View style={styles.container} >
//       <Text style={styles.textList}>{item.subject}</Text>
//       <Text style={styles.textList}>{item.sender}</Text>
//     </View>
//   )
// }

export default Details

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 20,
    fontSize: 16,
  },
  subject: {
    fontSize: 16,
    marginLeft: 10,
    width: 150,
  },
  sender: {
    fontSize: 16,
    marginLeft: 10,
    width: 100,
  },
  about: {
    fontSize: 16,
    marginLeft: 10,
    width: 100,
  },
  approved: {
    fontSize: 16,
    marginLeft: 10,
    width: 100,
  }
})
