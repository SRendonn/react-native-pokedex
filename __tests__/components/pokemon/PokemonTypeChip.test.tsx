import 'react-native';
import React from 'react';
import PokemonTypeChip, {
  PokemonTypeChipProps,
} from '../../../src/components/pokemon/PokemonTypeChip';
import { act, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../../src/util/test-utils';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('when using the PokemonTypeChip component', () => {
  afterEach(() => {
    mockedNavigate.mockRestore();
  });

  it('should render properly', () => {
    const pokemonTypeChipProps: PokemonTypeChipProps = {
      type: 'grass',
      hideText: false,
      onPress: undefined,
    };

    const view = renderWithProviders(
      <PokemonTypeChip {...pokemonTypeChipProps} />,
    );

    const chip = view.getByTestId('pokemon-type-chip');

    expect(chip).toBeDefined();
  });
});
