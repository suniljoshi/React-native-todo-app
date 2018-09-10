import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 

  loginScreenButton:{
      textAlign:'center',
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#1E6738',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
  },
  addbtn:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  title : {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    backgroundColor:"#fff",
    height: "100%",
    width:"100%"
  },
 
  FormInput:{
    padding: 15,
    backgroundColor: '#EDEDED',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop:"5%",
    width :"90%",
    fontSize: 15
  },

  listitem:{
    marginLeft: '5%',
    marginTop:10,
    width :"90%",
	  backgroundColor: '#E1E1E1',
	  flexDirection: 'row',

  },

  listitemactive:{
    marginLeft: '5%',
    marginTop:10,
    width :"90%",
	  backgroundColor: 'green',
	  flexDirection: 'row',

  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 40,
    width:'75%',
    fontWeight:'bold',
  },

  tablestyle : {

    backgroundColor: 'orange',
    padding: 5,
    fontSize: 10,
  
  }

});