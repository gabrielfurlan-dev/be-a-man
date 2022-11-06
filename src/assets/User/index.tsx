import React from 'react';
import { Image, Text, View } from 'react-native';

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
        <Text>
        {user.name}
        </Text>
    </View>
  );
}