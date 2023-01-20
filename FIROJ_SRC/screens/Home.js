import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ViewContainer from '../components/HOC/ViewContainer';
import FocusAwareStatusBar from '../components/UI/FocusAwareStatusBar';
import {FULLWIDTH, FULL_HEIGHT, FULL_WIDTH} from '../constants/layout';
import Paragraph from '../components/UI/Paragraph';
import Colors from '../constants/Colors';
import {Imagepath} from '../constants/image';
import Card from '../components/UI/Card';
import ScrollContainer from '../components/HOC/ScrollContainer';
import Clickble from '../components/HOC/Clizkable';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation, route}) => {
  let location = route?.params?.data;
  const [name, setname] = useState('');
  const [student, setstudent] = useState([]);
  const getdate = async () => {
    let name = await AsyncStorage.getItem('data1');
    if (name) {
      setstudent(JSON.parse(name));
    }
    setname(name);
    setstudent(JSON.parse(name));
  };
  useEffect(() => {
    getdate();
  }, [useIsFocused()]);

  return (
    <ViewContainer backgroundColor="#fff" style={styles.mainview}>
      <FocusAwareStatusBar backgroundColor={'#27ab46'} />
      <View style={styles.secoundview}>
        <Card>
          <View style={styles.flexdirecationsecound}>
            <View style={styles.flexdirecation}>
              <Clickble onPress={() => navigation.toggleDrawer()}>
                <Image style={styles.menu} source={Imagepath.menu} />
              </Clickble>
              <Paragraph size={20} style={styles.ifreshtext}>
                į.ƒŗęşђ
              </Paragraph>
            </View>

            <Image style={styles.addtocard} source={Imagepath.addtocard} />
          </View>
        </Card>
      </View>
      <ScrollContainer style={styles.threeview}>
        <Clickble onPress={() => navigation.goBack()}>
          <View style={styles.flexDirection}>
            <Image style={styles.map} source={Imagepath.map} />
            <Paragraph> Deliver to :</Paragraph>
            <Paragraph>
              {student?.selectArea} / {student?.selectCity}
            </Paragraph>
          </View>
        </Clickble>
        <Image style={styles.bottomimg} source={Imagepath.bottomimg} />
        <Paragraph textAlign="center" size={20}>
          Shop by Category
        </Paragraph>
        <Card>
          <View style={styles.flexdirecation}>
            <Clickble onPress={() => navigation.navigate('List')}>
              <View style={styles.box}>
                <Image style={styles.frutes} source={Imagepath.frutes} />
                <Paragraph size={13}>FRUITS & VEGETABLES</Paragraph>
              </View>
            </Clickble>
            <Clickble onPress={() => navigation.navigate('Dryfruets')}>
              <View style={styles.box}>
                <Image style={styles.frutes} source={Imagepath.DRY} />
                <Paragraph size={13}>DRY FRUITS</Paragraph>
              </View>
            </Clickble>
          </View>
        </Card>
        <Clickble onPress={() => navigation.navigate('Video')}>
          <Image style={styles.img} source={Imagepath.frpimg} />
        </Clickble>
        <Card>
          <Image style={styles.bottomimg1} source={Imagepath.frtimg2} />
          <Image style={styles.bottomimg1} source={Imagepath.frtimg3} />
          <View style={styles.viewbox}>
            <Card>
              <View style={styles.flexdirecationsecound}>
                <Paragraph color="green">Feature Product</Paragraph>
                <Clickble onPress={() => navigation.navigate('Viewall')}>
                  <Paragraph color="green" style={styles.Paragraph}>
                    View all
                  </Paragraph>
                </Clickble>
              </View>
              <View style={styles.flexdirecation}>
                <Clickble
                  onPress={() => navigation.navigate('Add', {data1: obj})}>
                  <View style={styles.mrc}>
                    <Image style={styles.mirchi} source={Imagepath.mirchi} />
                    <Paragraph>Green chili(hari mirchi)</Paragraph>
                  </View>
                </Clickble>

                <View>
                  <View style={styles.box2}>
                    <Image style={styles.patato} source={Imagepath.onions} />
                    <Paragraph>onions (प्याज़)</Paragraph>
                  </View>
                  <View style={styles.box2}>
                    <Image style={styles.patato} source={Imagepath.potato} />
                    <Paragraph>Potatoes (आलू)</Paragraph>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </Card>
      </ScrollContainer>
    </ViewContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  secoundview: {
    backgroundColor: Colors.green,
    height: 40,
  },
  mainview: {
    flex: 1,
  },
  threeview: {
    height: FULL_HEIGHT,
    backgroundColor: Colors.white,
  },
  menu: {
    height: 23,
    width: 23,
    tintColor: Colors.white,
  },
  flexdirecation: {
    flexDirection: 'row',
  },
  ifreshtext: {
    fontWeight: 'bold',
    marginHorizontal: 30,
    color: Colors.white,
  },
  flexdirecationsecound: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addtocard: {
    height: 25,
    width: 27,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  bottomimg: {
    height: 100,
    width: FULLWIDTH,
    resizeMode: 'cover',
  },
  box: {
    elevation: 8,
    backgroundColor: Colors.white,
    height: FULL_HEIGHT / 5,
    width: (FULL_WIDTH / 2) * 0.9,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  frutes: {
    height: FULL_HEIGHT / 17,
    width: FULL_WIDTH / 8,
    tintColor: Colors.green,
    marginVertical: 20,
  },
  img: {
    height: FULL_HEIGHT / 10,
    width: FULLWIDTH,
  },
  viewbox: {
    height: (FULL_HEIGHT / 2) * 0.9,
    marginVertical: 10,
    backgroundColor: Colors.white,
    elevation: 15,
  },
  Paragraph: {
    backgroundColor: Colors.green,
    padding: 5,
    color: Colors.white,
    marginRight: 20,
    borderRadius: 4,
  },
  mrc: {
    height: (FULL_HEIGHT / 3) * 1.1,
    width: FULL_WIDTH / 2,
    marginVertical: 15,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    top: 5,
  },
  box2: {
    elevation: 4,
    backgroundColor: Colors.white,
    height: FULL_HEIGHT / 6,
    width: (FULL_WIDTH / 2) * 0.7,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    marginHorizontal: 10,
  },
  mirchi: {
    height: FULL_HEIGHT / 7,
    width: FULL_WIDTH / 3,
  },
  patato: {
    height: (FULL_HEIGHT / 9) * 0.8,
    width: FULL_WIDTH / 5,
  },
  bottomimg1: {
    height: 100,
    width: FULLWIDTH,
    marginVertical: 7,
  },
  map: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  flexDirection: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    padding: 5,
  },
});
