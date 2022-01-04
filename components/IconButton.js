import * as React from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';

// const ButtonComponent = ({icon, color}) => (
//   <IconButton
//     size={20}
//     onPress={() => console.log('Pressed')}
//   />
// );
const IconButton = ({ title, onPress, icon }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
      {icon}
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
  });

export default IconButton;