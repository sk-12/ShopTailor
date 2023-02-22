import {SafeAreaView, View, Text, Pressable, FlatList} from "react-native";
import {useState} from "react";
import {Divider} from "./Done.style";

const Done=()=>{
    const [state,setState]=useState(true);

    const data=[{
        name:'hello',
        key:'hi',
    },{
        name:'hello2',
        key:'hi2',
    }
    ]
    const [state1,setState1]=useState(data[0]);
    const renderItem=({item})=>{
        return(<View style={{width:"100%",height:50,backgroundColor:"black",}}>
            <Text style={{width:"100%",height:50,color:"white"}}>
                {item.name}
            </Text>
            <Text style={{width:"100%",height:50,color:"white"}}>
                {item.key}
            </Text>
        </View>)

    }
    return( <SafeAreaView style={{margin:40}}>
        <View style={{backgroundColor:"red",height:50,borderWidth:4,flexDirection:'row',padding:16}}>
            <Pressable style={{backgroundColor:"white",height:10,width:10,alignSelf:'flex-end'}} onPress={()=>{setState(!state)}}/>
            <View style={{width:"100%",height:20}}>
            <Text>{state1.name}</Text>
            <Text>{state1.key}</Text>
            </View>
        </View>
        {state?<FlatList renderItem={renderItem} data={data.slice(1)} ItemSeparatorComponent={<Divider/>}/>:<></>}

    </SafeAreaView>)

}
export default Done;
