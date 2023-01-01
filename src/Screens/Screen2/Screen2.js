import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Style from './Style'

const Screen2 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={Style.View1}>
           <Text style={Style.Text1}>Part E -</Text>
           <Text style={Style.Text1} >Gross Income</Text>
        </View>
    </SafeAreaView>
  )
}

export default Screen2