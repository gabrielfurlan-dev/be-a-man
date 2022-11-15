import React from 'react';
import {Text} from 'native-base'
import { Image, View } from 'react-native';

// import { Container } from './styles';

export type UserProps = {
    name: string;
    email: string;
    picture: string;
}

type Props = {
    user: UserProps;
}

export function User({user} : Props) {
  return (
    <View>
        <Image source={{uri: user.picture}}></Image>
        <Text >
        {user.name}
        </Text>
    </View>
  );
}