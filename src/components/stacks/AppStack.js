import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from '../screens/IndexScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={IndexScreen}
                options={{
                    title: 'Movies app',
                    headerStyle: {
                        backgroundColor: '#003f5f'
                    },
                    headerTitleStyle: {
                        color: '#ffffff',
                    },
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack