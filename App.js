import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen'; 
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();
const globalScreenOptions={
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTintColor: "white",
  headerTitleStyle:{color:'white'},
}
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen 
        name='Login'
         component={LoginScreen} 
        options={{headerTitleAlign: 'center',}}/>
        <Stack.Screen 
        name='Register'
         component={RegisterScreen} 
        options={{headerTitleAlign: 'center',}}/>
        <Stack.Screen 
        name='Home'
         component={HomeScreen} 
        options={{headerTitleAlign: 'center',}}/>
      </Stack.Navigator>
      
    
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:"center" ,justifyContent:"center"
  }
});

