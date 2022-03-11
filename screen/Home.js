import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/StyleHomePage';
import { Icon } from 'react-native-elements';

const Home = ({navigation}) => {

    const [textKeberangkatan, onChangeKeberangkatan] = React.useState(null);
    const [textTujuan, onChangeTujuan] = React.useState(null);
    const [textWaktu, onChangeWaktu] = React.useState(null);
    return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.row}>
                    <Icon name ='menu' size={50}/>
                    <Icon name ='account-circle'size={50}/>
                </View>
                <View style={styles.centerView}>

                   <View style={styles.marginV}>
                        <Text style={styles.textTitle}>Hiling.id</Text>
                   </View>
                   <View style={styles.boxmain}>
                       <View style={styles.margins}>
                           <Text style={styles.textSubtittle}>Lokasi Keberangkatan</Text>
                           <TextInput 
                               style={styles.textInput}
                               onChangeText={onChangeKeberangkatan}
                               value={textKeberangkatan}
                               placeholder="Tulis..."/>
                            <Text style={styles.textSubtittle}>Lokasi Tujuan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText={onChangeTujuan}
                                value={textTujuan}
                                placeholder="Tulis..."/>
                            <Text style={styles.textSubtittle}>Waktu Keberangkatan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText={onChangeWaktu}
                                value={textWaktu}
                                placeholder="DD-MM-YY"/>
                            <Button
                                title="Cari"
                                //onPress={() => Alert.alert('Simple Button pressed')}
                                />
                       </View>
                   </View>
                </View>
                <View style={styles.copyright}>
                    <Text>copyright by Abdurrachman Farras-119140052</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;