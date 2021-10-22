import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '@root/redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch} from 'react-redux';
import {addTodo, getTodoRequest} from '@root/redux/todos/slice';
import {getUserRequest} from '@root/redux/user/slice';
import {useSelector} from '@root/redux/store';

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [todoText, setTodoText] = useState('');

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    dispatch(getTodoRequest());
    dispatch(getUserRequest());
  }, []);

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now().toString(),
        completed: false,
        title: todoText,
      }),
    );
    setTodoText('');
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <KeyboardAwareScrollView
              style={{flex: 1, width: '100%'}}
              keyboardShouldPersistTaps="always">
              <Text>{todos.loading ? 'loading' : null}</Text>
              <Text> {todos.list.length ? 'laoded' : null}</Text>
              {/*<Text>Add Todo</Text>*/}
              {/*<TextInput*/}
              {/*  style={styles.input}*/}
              {/*  placeholder="Todo Text"*/}
              {/*  placeholderTextColor="#aaaaaa"*/}
              {/*  onChangeText={(text) => setTodoText(text)}*/}
              {/*  value={todoText}*/}
              {/*  underlineColorAndroid="transparent"*/}
              {/*  autoCapitalize="none"*/}
              {/*/>*/}
              {/*<TouchableOpacity*/}
              {/*  style={styles.button}*/}
              {/*  onPress={(e) => handleAddTodo(e)}>*/}
              {/*  <Text style={styles.buttonTitle}>Log in</Text>*/}
              {/*</TouchableOpacity>*/}
            </KeyboardAwareScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
