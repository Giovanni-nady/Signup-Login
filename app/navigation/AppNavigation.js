import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.jsx';
import WelcomeScreen from '../screens/WelcomeScreen.jsx';
import LoginScreen from '../screens/LoginScreen.jsx';
import SignupScreen from '../screens/SignupScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='welcome' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}