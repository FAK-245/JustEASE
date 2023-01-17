import StackNavigation from "./src/Navigation/StackNavigation";
import { StatusBar } from "expo-status-bar";

import {store} from './src/redux/store/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
        <StackNavigation/>
        <StatusBar style="light" />
    </Provider>
  )
}