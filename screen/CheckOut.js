import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import { Icon,Card } from 'react-native-elements';
import styles from '../style/StyleCheckOut';


const CheckOut = ({navigation}) => {
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.row}>
                    <Icon name ='arrow-back' size={50}/>
                    
                    <Icon name ='account-circle'size={50}/>
                </View>
                <View style={styles.upper}>
                    <Text style={styles.textTitle}>Hiling.id</Text>
                    <Text style={styles.textSubtittle}>Hasil Pencarian Penerbangan</Text>
                    <Text style={styles.textSubtittle}>(Tanggal Keberangkatan)</Text>
                </View> 
                <View style={styles.marginMain}>
                    <Card>
                        <View>
                        <Text style={styles.textSubtittle}>Hasil Pencarian Penerbangan</Text>
                        </View>
                    </Card>
                </View>              
            </ScrollView>
        </SafeAreaView>
    );
}

export default CheckOut;