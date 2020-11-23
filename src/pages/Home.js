import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import axios from 'axios'
import Header from '../components/Header'
import Details from '../components/Details'

const Home = () => {
  const [dataType, setDataType] = useState('public')
  const [dataLetter, setDataLetter] = useState({})

  useEffect(() => {
    getData()

    // dataLetter.listData.map(item => console.log(Object.keys(item)))
    // console.log(dataLetter.listData)

  }, [dataType])

  const getData = async () => {
    try {
      const {data} = await axios.get('http://10.0.2.2:3004/data')

      //dynamic: setDataType(tipe datanya)

      //using filter
      // const resultDataType = data.filter(item => item.type === dataType)

      //using find
      const resultDataType = data.find(item => item.type === dataType)

      setDataLetter(resultDataType )
      console.log(resultDataType )
      
    } catch (error) {
      console.log(error)
    }
  }

  // const getData = async () => {
  //   try {
  //     const {data} = await axios.get('http://10.0.2.2:3004/data')

  //     if (dataType === 'public') {
  //       const dataPublic = data.filter(item => item.type === 'public')
  //       setDataLetter(dataPublic)
  //       console.log(dataPublic)

  //     } else if(dataType === 'secret') {
  //       const dataSecret = data.filter(item => item.type === 'secret')
  //       setDataLetter(dataSecret)
  //       console.log(dataSecret)
  //     }
      
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center',}}>
        <TouchableOpacity>
          <Text style={styles.btnType} onPress={() => setDataType('public')}>Public</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDataType('secret')}>
          <Text style={styles.btnType}>Secret</Text>
        </TouchableOpacity>
      </View>

      <Header dataLetter={dataLetter} />
      <Details dataLetter={dataLetter} />
      
    </View>
  )

  // const [viewType, setViewType] = useState('public')
  // return (
  //   <View>
  //     <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center',}}>
  //       <TouchableOpacity>
  //         <Text style={styles.btnType} onPress={() => setViewType('public')}>Public</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={() => setViewType('secret')}>
  //         <Text style={styles.btnType}>Secret</Text>
  //       </TouchableOpacity>
  //     </View>

  //     {viewType ===  'public' ? (
  //       <Public />
  //     ) : (
  //       <Secret />
  //     )}
      
  //   </View>
  // )
  
}

export default Home

const styles = StyleSheet.create({
  btnType: {
    backgroundColor: '#ddd',
    margin: 15,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize:18,
  }
})
