/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import { CategoryCard } from './src/components/CategoryCard';
 import imgCategoryPath from './assets/utils/imgCategoryPath';

 const App = () => {

   return <CategoryCard title='Заявка на ремонт' img={imgCategoryPath.repair} />

 };

 const styles = StyleSheet.create({

 });

 export default App;
