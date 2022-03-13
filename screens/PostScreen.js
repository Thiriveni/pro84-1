import React, { Component } from 'react';
import { Text, View } from 'react-native';

renderItem=({item: post}) => {
    return <PostCard post={post} naviagtion={this.props.navigation} />
}

export default class PostScreen extends Component {
   
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>PostScreen</Text>
            </View>
        )
    }
}