import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: font.size.lg,
          fontWeight: font.weight.bold as 'bold',
        }}>
        App Time!
        <FontAwesome name="glass" size={25} />
      </Text>
    </View>
  );
};

export default App;
