import React from 'react';
import { StyleSheet, Text, View ,TextInput, Button, FlatList, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import { styles } from './globalcss';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      text:'',
      tasks:[],
      editedIndex: null,
      isHideUpdate: false
  }
  }


  addTask = () => {
    if(!this.state.text){
      alert("Can't enter blank task !");
      return
    }
    let taskListNew = this.state.tasks;
    let uniquekey = Math.round(new Date().getTime()/1000)
    taskListNew.push({key:uniquekey,taskname :this.state.text,status:'active'})
    this.setState({  tasks : taskListNew, text:''});
  }


  toggleStatus = (item) =>{
    let indexOfItem = this.state.tasks.map(function(e) { return e.taskname; }).indexOf(item.taskname);
    let taskList = this.state.tasks;
    if(item.status == 'active'){
      taskList[indexOfItem].status = 'completed';
    }
    else{
      taskList[indexOfItem].status = 'active';
    }
    this.setState({  tasks: taskList});
  }


  cancelUpdate = () =>{
    this.setState({ text:'', isHideUpdate: false});
  }


  editTask = (item) =>{
    var editPosition = this.state.tasks.map(function(e) { return e.taskname; }).indexOf(item.taskname);
    this.setState({ 
      text:item.taskname,
      isHideUpdate : true
    });
    this.setState({editedIndex: editPosition})
  } 

  deleteTask = (item) => {
    let filtereddata = this.state.tasks.filter(function( obj ) {
      return obj.key !== item.key;
    });
    this.setState({  tasks:filtereddata, text:'', isHideUpdate: false});
  }

  updateTask = () =>{
    if(!this.state.text){
      alert("Can't update blank task !");
      return
    }
    let updateTasks = this.state.tasks;
    updateTasks[this.state.editedIndex].taskname = this.state.text;
    this.setState({  tasks:updateTasks, text:'', isHideUpdate: false});
  }

  render() {
    return (
      
      <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
        <TextInput  ref={txt => { this.textInput = txt }} value={this.state.text} clearButtonMode="always" placeholder="Type.." style={styles.FormInput} onChangeText={(text) => this.setState({text})}  />
        { !this.state.isHideUpdate && 
          <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={this.addTask.bind(this)}
          underlayColor='#fff'>
          <Text style={styles.addbtn}>Add Task</Text>
      </TouchableOpacity>
      }

      { this.state.isHideUpdate && 
             <View>   <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={this.updateTask.bind(this)}
                underlayColor='#fff'>
                <Text style={styles.addbtn}>Update Task</Text>
      </TouchableOpacity>
       <TouchableOpacity
       style={styles.loginScreenButton}
       onPress={this.cancelUpdate.bind(this)}
       underlayColor='#fff'>
       <Text style={styles.addbtn}>Cancel</Text>
      </TouchableOpacity>
      </View>
      }        
        <FlatList 
          data = {this.state.tasks}
		  renderItem={({item}) => 
		  		<View style={[styles.listitemactive, item.status == "active" && styles.listitem]} >
					<Text style={styles.item} onPress={() => this.toggleStatus(item)}>{item.taskname}</Text> 
          
          <TouchableHighlight onPress={ () => this.editTask(item)} >
            <Image source={require('./edit.png')} style = {{width: 28, margin:6,height: 28}}/>
          </TouchableHighlight>

         <TouchableHighlight onPress={ () => this.deleteTask(item)} >
           <Image source={require('./delete.png')} style = {{width: 28, margin:6,height: 28}} />
        </TouchableHighlight>
         
				</View>
        }
        extraData = {this.state}  />

      </View>
         
    );
  }
}


