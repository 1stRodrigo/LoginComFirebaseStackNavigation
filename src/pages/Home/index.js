import React from "react";
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.areaHome}>
                <Text style={styles.textoInput}> SkateApp </Text>
                <Text style={styles.textoInput}> #Mo!$t&Fuc%ker*</Text>                
            </View>


            <View style={styles.areaInput}>
                <Text style={{color:"#FFF", textAlign: "center", fontSize: 18}}>Faça seu login:</Text>
                    <Text style={styles.textoInput}>Email:</Text>
                    <TextInput
                    style={styles.input}
                    />
                    
                    <Text style={styles.textoInput}>Senha:</Text>
                    <TextInput
                    style={styles.input}
                    />

                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.textoBtn}>Login</Text>
                    </TouchableOpacity>
            </View>

                        <TouchableOpacity style={{}}>
                            <Text style={{fontSize: 15, margin: 7,}}>Clique aqui para se cadastrar</Text>
                        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    areaHome:{
        backgroundColor: "#191919",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
    },
    areaInput:{
        width: "90%",
        backgroundColor: "#cf1212",
        margin: 8,
        padding: 10,
        borderRadius: 5,
    },
    textoInput:{
        color: "#fff",
        fontSize: 17,
        marginLeft: 3,
    },
    input:{
        borderBottomWidth: 1,
        borderColor: "#FFF",
        marginBottom: 40,
    },
    btnLogin:{
        backgroundColor: "#191919",
        borderRadius: 5,
    },
    textoBtn:{
        textAlign: "center",
        color: "#FFF",
        fontSize: 20,
        padding: 5,
    }
})