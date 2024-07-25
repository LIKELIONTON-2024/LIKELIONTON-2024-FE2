import {Text, TouchableOpacity} from 'react-native';

export const Button = ({bgColor, onPress, text, color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 325,
        height: 51,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      }}>
      <Text style={{fontSize: 17, fontWeight: 'medium', color}}>{text}</Text>
    </TouchableOpacity>
  );
};
