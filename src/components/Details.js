import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { DataTable } from 'react-native-paper'

const Details = ({dataLetter}) => {
  const [tableHead, setTableHead] = useState([
    // 'approved',
    // 'subject',
    // 'sender',
    // 'about',
  ])

  // let tableHead = []

  // dataLetter.listData ? dataLetter.listData.map(item => tableHead.push(Object.keys(item))) : console.log('loading')

  // dataLetter.listData ? console.log( Object.values(dataLetter.listData[0])) : console.log('wait')

  return (
    <View>
      <Text>This is Details</Text>
      {/* {dataLetter.listData ? dataLetter.listData.map((item) => <Text>{Object.values(dataLetter.listData)}</Text>) : <Text>Loadng...</Text>} */}
      {/* <FlatList 
        horizontal={false}
        data={dataLetter.listData}
        keyExtractor={item => item.id.toString()}
        // numColumns={3}
        renderItem={({item, index}) => <RenderItem item={item} />}
      /> */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Subject</DataTable.Title>
          <DataTable.Title >Sender</DataTable.Title>
        </DataTable.Header>

        {dataLetter.listData ? (
          dataLetter.listData.map(item => (
            <DataTable.Row>
            <DataTable.Cell>{item.subject}</DataTable.Cell>
            <DataTable.Cell >{item.sender}</DataTable.Cell>
          </DataTable.Row>
        ))
        ) : (
          <Text>Loadng...</Text>
        )}

        

      </DataTable>
    </View>
  )
}

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
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   margin: 1
  // }
})
