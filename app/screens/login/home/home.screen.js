import React from 'react';
import { Image, SafeAreaView, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FAB,Appbar, Menu } from 'react-native-paper';
import { ConfirmDeliveryCardComponent } from '../components/confirm-delivery-card/confirm-delivery-card.component';
import { SerachingDeliveryPersonComponent } from '../components/searching-delivery-person/searching-delivery-person.component';
import { homeStyle } from './home.style';

const HomeScreen = () => {

  const state = 3;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <Appbar>
        <Menu
        visible={true}
        onDismiss={()=> {}}
        anchor={
          <Appbar.Action
          icon="menu" />
        }>

        </Menu>
        <Appbar.Content title="Bike Boyz" />
      </Appbar>
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
          state == 2 ?
            <ConfirmDeliveryCardComponent />
            : null
        }
        {
          state == 2 ?
            <>
              <Marker
                description="Origin"
                coordinate={{ latitude: 60.451813, longitude: 22.266630 }}>
              </Marker>
              <Marker
                description="Destination"
                coordinate={{ latitude: 60.451813, longitude: 22.266630 }}>
              </Marker>
            </>
            : null
        }


      </MapView>
      {
        state == 1 ?
          <FAB
            icon="plus"
            style={homeStyle.fab} />
          : null
      }
      {
        state == 3 ?
          <SerachingDeliveryPersonComponent />
          : null
      }

    </SafeAreaView>
  )
}

export default HomeScreen;