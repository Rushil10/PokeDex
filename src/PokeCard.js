import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PokeCard(props) {

    const [image,setImage] = React.useState(null)
    const [downloaded,setDownloaded] = React.useState(false)

    React.useState(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
        .then(res => {
            setImage(res.data.sprites.front_default)
        })
        .catch(er => {
            console.log(err)
        })

    },[])

    const onDownloadHandle = () => {
        MediaLibrary.requestPermissionsAsync()
        if(downloaded) {
            setDownloaded(false)
        } else {
            setDownloaded(true)
            const fileUri = FileSystem.documentDirectory + `${props.pokemon.name}.png`;
            FileSystem.downloadAsync(
                image,
                fileUri
            )
            .then(({ uri }) => {
                console.log('Finished downloading to ', uri);
                MediaLibrary.saveToLibraryAsync(uri)
                console.log("Saved")
            })
        }
    }

    return (
        <View style={styles.card}>
            <View style={styles.textView}>
            <Text style={styles.text}>{props.pokemon.name}</Text>
            </View>
            <View>
            <Image source={{uri:image}} style={{height:129,width:129}} />
            </View>
            <TouchableOpacity onPress={() => onDownloadHandle()}>
            {downloaded ? <FontAwesome style={{marginBottom:5}} name="heart" size={24} color="red" /> : <Feather style={{marginBottom:5}} name="heart" size={24} color="black" />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:windowWidth/2-25,
        marginLeft:5,
        marginRight:5,
        margin:4.5,
        flex:1,
        alignItems:'center',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:15,
        borderColor:'gray'
    },
    text:{
        fontSize:15,
    },
    textView:{
        marginTop:5,
        flexDirection:'row'
    }
})

export default PokeCard;