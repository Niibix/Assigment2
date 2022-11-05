import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, FAB, List, Title } from 'react-native-paper';
import { homeStyle } from './home.style';

const HomeScreen = () => {

    const state = 2;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <MapView
        style={homeStyle.flex}
        initialRegion={{
          latitude: 60.451813,
          longitude: 22.266630,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}>
          {
            state == 1 ?
            <>
            <Marker
            description="Delivery person 1"
            coordinate={{ latitude: 60.451813, longitude: 22.266630 }}>
            <Image
              style={homeStyle.markerImage}
              source={require('C:\Users\Niko Pc\Documents\GitHub\Assigment2\assets\Cyclist.png')} />
          </Marker>
          <Marker
            description="Delivery person 2"
            coordinate={{ latitude: 60.451813, longitude: 22.266630 }}>
            <Image
              style={homeStyle.markerImage}
              source={require('C:\Users\Niko Pc\Documents\GitHub\Assigment2\assets\Cyclist.png')} />
          </Marker>
          <Marker
            description="Delivery person 3"
            coordinate={{ latitude: 60.451813, longitude: 22.266630 }}>
            <Image
              style={homeStyle.markerImage}
              source={require('C:\Users\Niko Pc\Documents\GitHub\Assigment2\assets\Cyclist.png')} />
          </Marker>
          </>
          : null
          }
          {
            state ==2 ?
            <Card>
              <Card.Content>
                <List.Item
                  title="20 €"
                  description="Total price of the delivery" />
              </Card.Content>
            </Card>
            :null
          }

      </MapView>
      {
        state == 1 ?
        <FAB
        icon="plus"
         style={homeStyle.fab} />
         : null
      }

    </SafeAreaView>
  )
}

export default HomeScreen;