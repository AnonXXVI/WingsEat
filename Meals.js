import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import {useState} from 'react'
import { TouchableOpacity } from 'react-native-web';

export default function dish({photo,rating,description,minutes,mealName,ttAmount,mealPrice,setTotalPrice}) {
    const [quantity,setQuantity] = useState(0);

    function pricing(){
        setQuantity(quantity + 1)
        setTotalPrice(ttAmount + mealPrice)
    }

    function subtractFromTotal(){

        setQuantity(quantity - 1)
        setTotalPrice(ttAmount - mealPrice)
    }

    return (
        <View>
         <ImageBackground style={styles.backImage} imageStyle={{borderRadius:43}}  source={photo}>
          <View style={styles.time}>
           <Text style={{fontWeight:'bold', fontSize:20}}>{minutes}</Text>
            </View>
             </ImageBackground>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
               <Text style={{fontWeight:'bold', fontSize:40}}>{mealName}</Text>
                <Text style={{fontWeight:'bold', fontSize:40}}>M{mealPrice}.00</Text>
                 </View>
                  <View style={{flexDirection:'row', marginTop:10}}>
                  <View style={styles.foodDetails}>
                  <Image style={styles.rate} source={require('./assets/star.png')}/>
                 <Text style={styles.detailsText}>{rating}</Text>
               </View>
              <View style={styles.foodDetails2}>
             <Text style={styles.detailsText}>{description}
            </Text>
             </View>
             <View style={styles.foodDetails3}>
              <Text style={styles.detailsText} onPress={subtractFromTotal}>-</Text>
               <Text style={styles.detailsText}>{quantity}</Text>
                <Text style={styles.detailsText} onPress={pricing}>+</Text>
               </View>
              </View>
            </View>


    )
}

const styles = StyleSheet.create({  
    backImage: {
        height: 250,
        //paddingTop:100
        justifyContent:'flex-end'  
    },

    time: {
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: '#FCFCFC',
        height: 60,
        width: 120,
        borderLeftWidth: 3,
        borderLeftColor:'#999',
        alignItems: 'center',
        justifyContent:'center'
    },

    foodDetails: {
        borderStyle:'solid',
        height: 33,
        borderRightWidth: 2,
        borderRightColor: '#999',
        width:'20%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingRight: 6,
        
    },

    foodDetails2: {
        borderStyle:'solid',
        height: 33,
        borderRightWidth: 2,
        borderRightColor: '#999',
        width:'60%',
        justifyContent:'center',
        flexDirection:'row',
        paddingRight: 6,
        alignItems:'center'
        
    },
    foodDetails3: {
        borderStyle:'solid',
        paddingLeft: 3,
        width:'20%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingRight: 6,
        
    },


    rate: {
        
        height: 29,
        width: 29,
    },

    detailsText: {
        fontSize:30,
        fontWeight:'bold'
    }
})