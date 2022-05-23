import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

export default function Map({handleOnpress, puntos}) {
    
        return (
            <MapView
                style={styles.map}
                onLongPress={handleOnpress}
            >
              { puntos.map(x => 
               
              <Marker 
               key={x.name}
               coordinate={x.coordinate}
               title={x.name}
              />)}
            </MapView>
        )
    
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
    },
})