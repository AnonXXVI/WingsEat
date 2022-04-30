import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import Meals from './Meals';
import { useState } from 'react';



export default function App() {
  var foodimage1 = require('./assets/english.jpg');
  var foodimage2 = require('./assets/easy.jpg');
  var foodimage3 = require('./assets/wings.jpg');
  var foodimage4 = require('./assets/hand.png');

  var bev1 =  require('./assets/coffee.jpg');
  var bev2 =  require('./assets/coffee2.jpg');
  var bev3 =  require('./assets/soft.jpg');

  const[ttAmount,setTotalPrice] = useState(0);

  return (
   
      <View style={styles.container}>
        
       <View style={styles.headerSection}>     
        <TouchableOpacity><FontAwesome name="location-arrow" size={24} color="black" /></TouchableOpacity>
         <View style={styles.header}><Text style={{fontWeight:'bold', fontSize: 32}}>WingsEats</Text>
         </View>
        <TouchableOpacity><AntDesign name="login" size={24} color="black" /></TouchableOpacity>
       </View>
      <View style={styles.titleSection}>
      <Text style={{fontWeight:'bold', fontSize:63}} >Menu</Text>
      </View>

      <View style={styles.foodSection}>
       <View style={styles.eat}><View style={styles.circle}><Image style={styles.meal} source={require('./assets/breakfast.png')}/></View>
        <Text style={{fontWeight:'bold', fontSize:15}}>Breakfast</Text>
         </View>
          <View style={styles.eat2}><View style={styles.circle}><Image style={styles.meal} source={require('./assets/burger.png')}/></View>
           <Text style={{fontWeight:'bold', fontSize:15}}>Lunch</Text>
           </View>
           <View style={styles.eat2a}><View style={styles.circle}><Image style={styles.meal} source={require('./assets/drinks.png')}/></View>
           <Text style={{fontWeight:'bold', fontSize:15}}>Drinks</Text>
           </View>
          <View style={styles.eat2}><View style={styles.circle}><Image style={styles.meal} source={require('./assets/snack.png')}/></View>
         <Text style={{fontWeight:'bold', fontSize:15}}>Snacks</Text>
        </View>
      </View>
      
      <ScrollView style={{marginTop:10}}>
      <View style={styles.mealOrder}>
        <Meals photo={foodimage1} mealName="English Breakfast" rating= "4.5" ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="5-8 minutes" description="Bread Bacon 2 Eggs" mealPrice={20}>
         </Meals>
           </View>
             <View style={styles.mealOrder}>
             <Meals photo={foodimage3} mealName="Wings Breakfast" rating= "4.0" ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="5-6 minutes" description="Bread Eggs Russian"  mealPrice={18}>
             </Meals>
            </View>
            <View style={styles.mealOrder}>
           <Meals photo={foodimage2} mealName="Easy Breakfast" rating= "4.3" ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="4-5 minutes" description="Bread and Eggs" mealPrice={15}>
          </Meals>
         </View>
        <View style={{backgroundColor: '#60A917', height:10,width:'100%'}}></View> 


       <View style={styles.mealOrder}>
      <Meals photo={bev1} mealName="Expresso" rating= "4.8" ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="Instant" description="Hot Serve" mealPrice={12}>
     </Meals>
     </View>    
      <View style={styles.mealOrder}>
       <Meals photo={bev2} mealName="Cappuccino" rating= "4.8" ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="Instant" description="Hot Serve" mealPrice={14}>
         </Meals>
           </View> 
            <View style={styles.mealOrder}>
            <Meals photo={bev3} mealName="Coca-Cola 330ml" rating= "4.5"  ttAmount={ttAmount} setTotalPrice={setTotalPrice} minutes="Instant" description="Cold Serve" mealPrice={8}>
           </Meals>
         </View>
        </ScrollView>


       <View style={styles.footer}>
      <View style={{width:'40%', justifyContent:'center', alignItems:'center',paddingTop:20}}>
      <Text style={{color:'#262626',fontWeight:'600', fontSize: 40,}}>Total Price</Text>
       <Text style={{fontSize:18, fontWeight:'bold', paddingBottom: 10}} >M{ttAmount}.00</Text>
        </View>
         <View style={{width:'60%', justifyContent:'center', alignItems:'center',paddingTop:20}}>
          <TouchableOpacity>
           <View style={styles.pay}>
           <Image style={{width:31, height:30}} source={foodimage4}></Image>
           <Text style={{color:'#fff',fontSize:34, fontWeight:'bold', paddingBottom:10}}>Pay</Text>
           </View>
          </TouchableOpacity>
        </View>
      </View>
     <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  headerSection: {
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row',
    marginTop: 30,
    padding:10
    
  },
  header: {
    alignItems:'center',
     justifyContent:'center', 
     backgroundColor:'#DCDCDC',
     borderRadius: 16,
     height: 50,
     width: 200
  },

  titleSection: {
    height: 100,
    padding: 10
  },

  foodSection: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height: 65,
    marginTop: 30,
    marginBottom:15,
    
  },
  eat: {
    borderRadius: 30,
    height:110,
    width:64,
    backgroundColor:'#60A917',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 20,
    
  },

  eat2: {
    borderRadius: 30,
    height:110,
    width:64,
    backgroundColor:'#DCDCDC',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#999'
  },

  eat2a: {
    borderRadius: 30,
    height:110,
    width:64,
    backgroundColor:'#60A917',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#999'
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#fff', 
    justifyContent:'center',
    alignItems:'center'
  },

  meal: {
    height: 30,
    width: 30,
  },

  mealOrder: {
    padding: 10,
    marginTop: 40
  },

  footer: {
    height: 100,
    width: '100%',
    backgroundColor:'#DCDCDC',
    borderRadius:20,
    flexDirection: 'row'
    
  },

  pay: {
    backgroundColor:'#000',
    height: 70,
    width: 130,
    borderBottomLeftRadius: 20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'space-evenly'

  }

});
