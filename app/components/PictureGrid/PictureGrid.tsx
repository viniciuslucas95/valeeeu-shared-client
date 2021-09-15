import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { IStyleable } from '../../interfaces';
import { TouchableContainer } from '../TouchableContainer';
import { Picture } from './styles';
import { Unit } from '../../helpers';

const { vw } = Unit;

interface IProps extends IStyleable {
  columns: number;
  pictures: ImageSourcePropType[];
}

export function PictureGrid({ style, pictures, columns }: IProps) {
  if (pictures.length === 0) return null;
  if (columns <= 0) columns = 1;

  return (
    <FlatList
      data={pictures.slice(0, 6)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableContainer
          onPress={() => console.log(index + ' picture pressed')}
        >
          <Picture
            source={item}
            style={index > 2 ? { marginTop: vw(3) } : null}
          />
        </TouchableContainer>
      )}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        flexDirection: 'row',
      }}
      style={style}
    />
  );
}
