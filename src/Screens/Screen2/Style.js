import {View, Text, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../utils/Theme';
const TextStyle = StyleSheet.create({
  View1: {
padding: 20
  },
  Text1: {
    fontSize: RFValue(20, 580),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  }
});
export default TextStyle;
