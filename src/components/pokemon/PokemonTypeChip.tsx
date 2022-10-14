import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, PokemonTypeColors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTypeIcon } from '../../hooks/icons';
import { useAppDispatch } from '../../hooks/redux';
import { setCurrentTypeName } from '../../store/TypesSlice';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/navigation';
import type { StackNavigationProp } from '@react-navigation/stack';

type PokemonTypeChipProps = {
  type: string;
  hideText?: boolean;
  onPress?: Function;
};

const PokemonTypeChip = ({
  type,
  hideText = false,
  onPress,
}: PokemonTypeChipProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const iconName = useTypeIcon(type);

  return (
    <TouchableOpacity
      style={{
        ...styles.chip,
        backgroundColor: PokemonTypeColors[type] || PokemonTypeColors.normal,
      }}
      accessibilityLabel={type}
      onPress={() => {
        if (onPress) return onPress();
        dispatch(setCurrentTypeName(type));
        navigation.navigate('TypeDetail');
      }}>
      <Icon name={iconName} style={styles.icon} />
      {hideText ? <></> : <Text style={styles.type}>{type}</Text>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  chip: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: Colors.white,
    borderWidth: 2,
    padding: 4,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  type: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  icon: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default PokemonTypeChip;
