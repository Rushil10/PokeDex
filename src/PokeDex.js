import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getPokemons} from './redux/dataActions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import PokeCard from './PokeCard';

function PokeDex(props) {

    React.useEffect(() => {
        props.getPokemons()
    },[])

    const {pokemons} = props.data

    return (
        <View>
            <FlatList 
            keyExtractor={(item,index) => index.toString()}
            data={Object.assign(pokemons)}
            renderItem={data => <PokeCard pokemon={data.item} />}
            horizontal={false}
            numColumns={2}
            />
        </View>
    )
}

PokeDex.propTypes = { 
    data:PropTypes.object.isRequired,
    getPokemons:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data:state.data
})

const mapActionsToProps = {
    getPokemons
}

export default connect(mapStateToProps,mapActionsToProps)(PokeDex);