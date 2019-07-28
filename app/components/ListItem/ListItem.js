import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItemComponent = (props) => {
    const name = `${capitalizeFirstLetter(props.name.first)}  ${capitalizeFirstLetter(props.name.last)}`;
        return (
            <TouchableHighlight onPress={props.onPress} underlayColor={colors.rowUnderlay}>
                    <ListItem
                        // leftAvatar={{ rounded: true, source: { uri: this.props.picture.thumbnail } }}
                        leftAvatar={<Image source={{ uri: props.picture.thumbnail }} style={styles.avatar}/>}
                        title={name}
                        titleStyle={styles.name}
                        subtitle={props.email}
                        subtitleStyle={styles.email}
                        rightIcon={<Icon name={Platform.OS === 'ios' ? "ios-arrow-forward" : "md-arrow-forward"} size={25} color={colors.subtleText} />}
                    />
            </TouchableHighlight>
        )
}

export default ListItemComponent;