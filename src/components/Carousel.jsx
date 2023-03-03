import { Animated, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import React, {useRef, useState} from 'react';
import Slides from '../data/itemsSlider';
import SlideItem from "./carousel/SlideItem";
import Pagination from './carousel//Pagination';


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
  
    const handleOnScroll = event => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )(event);
    };
  
    const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
      // console.log('viewableItems', viewableItems);
      setIndex(viewableItems[0].index);
    }).current;
  
    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;
  
    return (
      <View style={{display: 'grid', marginBottom: '60px'}}>
        <FlatList style={{width: '400px', justifySelf: 'center' }}
          data={Slides}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={Slides} scrollX={scrollX} index={index} />
      </View>
    );
  };
  
  export default Carousel;