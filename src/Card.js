import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ReadMore from '@expo/react-native-read-more-text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Card(props) {

    const [show,setShow] = React.useState(false)

    const ViewDetails = (show) => {
        setShow(!show)
        console.log(show)
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color:'orange'}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
     
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: 'orange'}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
     
      _handleTextReady = () => {
        // ...
      }

    return(
        <View style={styles.card}>
        <View>
        <ImageBackground source={{uri:props.data.image}} style={{height:295,width:windowWidth-42}} imageStyle={{borderTopLeftRadius:15,borderTopRightRadius:15}}>
            <View style={styles.top}>
                <View>
                    <Image source={{uri:props.data.userImage}} style={{height:41,width:41,borderRadius:9,margin:9,marginRight:0}} />
                </View>
                <View style={styles.col}>
                    <Text style={styles.name}>{props.data.name}</Text>
                    <Text style={styles.user}> by {props.data.username}</Text>
                </View>
            </View>
        </ImageBackground>
        </View>
        <View>
            <View style={styles.icons}>
            <FontAwesome5 style={styles.icon} name="fire" size={24} color="black" />
            <Ionicons style={styles.icon} name="chatbubble-outline" size={24} color="black" />
            <Feather style={styles.icon} name="send" size={24} color="black" />
            <FontAwesome5 style={styles.icon} name="bookmark" size={24} color="black" />
            </View>
        </View>
        <ReadMore
              numberOfLines={1}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
              <Text>
                {props.data.details}
              </Text>
        </ReadMore>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop:21,
        borderRadius:15,
        marginLeft:21,
        marginRight:21,
        backgroundColor:'white'
    },
    top:{
        flexDirection:'row',
        backgroundColor: 'rgba(52, 52, 52, 0.2)'
    },
    col:{
        flexDirection:'column',
        margin:9,
        marginLeft:0
    },
    name:{
        marginTop:0,
        marginLeft:5,
    },
    user:{
        fontSize:11,
        marginLeft:3
    },
    icons:{
        flexDirection:'row',
        margin:15,
    },
    icon:{
        marginLeft:windowWidth/8-20,
        marginRight:windowWidth/8-20
    },
    details:{
        marginLeft:11,
        marginRight:11,
        marginBottom:11
    }
})

export default Card;