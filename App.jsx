import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './src/screens/loginScreen';
import VagasScreen from './src/screens/VagasScreen';
import CadastroScreen from './src/screens/CadastroScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Vagas" component={VagasScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>''
    )
}