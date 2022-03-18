import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 50,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#a985d6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 45,
    borderRadius: 10
  },
  t1: {
    padding: 10,
    fontSize: 30,
    color: '#3d3b3f',
    fontWeight: 'bold',  
},
  t2: {
    padding: 10,
    fontSize: 18,
    color: '#383739' ,
  },
  error:{
    fontSize: 14,
    color: '#cb0606' ,
  },
  input: {
    padding: 20,
    backgroundColor: '#f0eff0',
    borderRadius: 10,
    
  },
});
