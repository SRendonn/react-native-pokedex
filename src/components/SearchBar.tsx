import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SearchInputProps = {
  onChangeText: Function;
  value: string;
};

const SearchBar = ({
  value = '',
  onChangeText = () => {},
}: SearchInputProps) => {
  return (
    <View style={styles.searchWrapper}>
      <Icon
        name="magnify"
        size={24}
        color={Colors.gray}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={(text) => onChangeText(text)}
        value={value}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'relative',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  searchIcon: {
    zIndex: 10,
    top: 12,
    left: 12,
    position: 'absolute',
  },
  searchInput: {
    position: 'relative',
    backgroundColor: Colors.lightGray,
    paddingLeft: 36,
    paddingRight: 16,
    fontSize: 16,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 9999,
  },
});

export default SearchBar;
