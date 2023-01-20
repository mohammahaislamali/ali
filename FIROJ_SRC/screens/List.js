import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Imagepath} from '../constants/image';
import ViewContainer from '../components/HOC/ViewContainer';
import {FULL_WIDTH} from '../constants/layout';
import Paragraph from '../components/UI/Paragraph';
import Colors from '../constants/Colors';
import Card from '../components/UI/Card';
import Clickble from '../components/HOC/Clizkable';
import {Tabbaritem, datauploade} from '../components/UI/Costeamareey';
import ModleContainer from '../components/HOC/ModleContainer';

const list = ({navigation}) => {
  const [like, setlike] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setdata] = useState([]);
  const handleIncrement = i => {
    let arr = [...datauploade];
    if (arr[i].id == i) {
      arr[i].qty = arr[i].qty + 1;
      setdata(arr);
    }
  };
  const handleDecriment = i => {
    let arr = [...datauploade];
    if (arr[i].id == i) {
      arr[i].qty = arr[i].qty - 1;
      setdata(arr);
    }
  };
  const [status, setstatus] = useState('All Cetagory');
  const [datalist, setdatalist] = useState(datauploade);
  const setsttusFilter = status => {
    if (status !== 'All Cetagory') {
      setdatalist([...datauploade.filter(e => e.status === status)]);
    } else {
      setdatalist(datauploade);
    }
    setstatus(status);
  };
  const renderItem = ({item, index}) => {
    return (
      <ViewContainer>
        <Clickble
          onPress={() => navigation.navigate('Add', {data: {item, index}})}>
          <ViewContainer style={styles.main}>
            <ViewContainer key={index} style={styles.itemcointer}>
              <View style={styles.itemlogo}>
                <Paragraph style={styles.greenpar}>Best Quantity</Paragraph>
                <Image style={styles.shortimage} source={item.Image} />
              </View>
              <ViewContainer style={styles.itembody}>
                <View style={styles.flex}>
                  <Paragraph style={styles.itemname}>{item.name}</Paragraph>
                  <Clickble onPress={() => setlike(!like)}>
                    <Image
                      style={styles.hrtimg}
                      source={
                        like == true ? Imagepath.Cartegry : Imagepath.dill
                      }
                    />
                  </Clickble>
                </View>
                <ViewContainer style={styles.flex}>
                  <Paragraph style={{marginVertical: 5}}>{item.grm}</Paragraph>
                  <View style={styles.flex2}>
                    <Clickble onPress={() => handleDecriment(item.id)}>
                      <View style={styles.view}>
                        <Paragraph style={styles.miness}>-</Paragraph>
                      </View>
                    </Clickble>
                    <Paragraph style={styles.suny}>{item.qty}</Paragraph>
                    <Clickble onPress={() => handleIncrement(item.id)}>
                      <View style={styles.view}>
                        <Paragraph style={styles.miness}>+</Paragraph>
                      </View>
                    </Clickble>
                  </View>
                </ViewContainer>
                <Paragraph style={styles.price}>{item.rs}</Paragraph>
                <View style={styles.longview}>
                  <Paragraph style={styles.text}>more Variants</Paragraph>
                </View>
              </ViewContainer>
            </ViewContainer>
          </ViewContainer>
        </Clickble>
      </ViewContainer>
    );
  };
  return (
    <ViewContainer style={styles.continer}>
      <View style={styles.secoundview}>
        <Card>
          <View style={styles.flex2}>
            <View style={styles.flex}>
              <Clickble onPress={() => navigation.goBack()}>
                <Image source={Imagepath.voctar6} style={styles.menu} />
              </Clickble>
              <Paragraph size={20} color="#fff" style={styles.refer}>
                Product list
              </Paragraph>
            </View>
            <View style={styles.flexDicler}>
              <Clickble onPress={() => navigation.navigate('Search')}>
                <Image source={Imagepath.search} style={styles.menu} />
              </Clickble>
              <Clickble onPress={() => setModalVisible(!modalVisible)}>
                <Image source={Imagepath.threelins} style={styles.menu} />
              </Clickble>
              <Clickble onPress={() => navigation.navigate('Cart')}>
                <Image source={Imagepath.addtocard} style={styles.menu} />
              </Clickble>
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.listtab}>
        {Tabbaritem.map(e => (
          <View>
            <Clickble
              style={[
                styles.btntab,
                status === e.status && styles.btntabActive,
              ]}
              onPress={() => setsttusFilter(e.status)}>
              <Image
                style={[
                  styles.imgtntab,
                  status === e.status && styles.imgtabActive,
                ]}
                onPress={() => setsttusFilter(e.status)}
                source={e.Image}
              />
            </Clickble>
            <Paragraph style={styles.Paragraph}>{e.status}</Paragraph>
          </View>
        ))}
      </View>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
      <Card>
        <ModleContainer show={modalVisible}>
          <Paragraph style={styles.filter}>Filetr by</Paragraph>
          <View style={styles.atoz}>
            <Card>
              <Clickble
                onPress={() => {
                  let temlist = datalist.sort((a, b) =>
                    a.name > b.name ? 1 : -1,
                  );
                  setdatalist(temlist);
                  setModalVisible(false);
                }}>
                <View style={styles.flexDicler}>
                  <View style={styles.bindu}></View>
                  <Paragraph style={styles.atozpargraph}>Sort by A-Z</Paragraph>
                </View>
              </Clickble>
            </Card>
          </View>
          <View style={styles.atoz}>
            <Card>
              <Clickble>
                <Clickble
                  onPress={() => {
                    let temlist = datalist.sort((a, b) =>
                      b.name > a.name ? 1 : -1,
                    );
                    setdatalist(temlist);
                    setModalVisible(false);
                  }}>
                  <View style={styles.flexDicler}>
                    <View style={styles.bindu}></View>
                    <Paragraph style={styles.atozpargraph}>
                      Sort by Z-A
                    </Paragraph>
                  </View>
                </Clickble>
              </Clickble>
            </Card>
          </View>
          <View style={styles.atoz}>
            <Card>
              <Clickble
                onPress={() => {
                  let temlist = datalist.sort((a, b) =>
                    a.rs > b.rs ? 1 : -1,
                  );
                  setdatalist(temlist);
                  setModalVisible(false);
                }}>
                <View style={styles.flexDicler}>
                  <View style={styles.bindu}></View>
                  <Paragraph style={styles.atozpargraph}>
                    Price Highest to Lowest
                  </Paragraph>
                </View>
              </Clickble>
            </Card>
          </View>
          <View style={styles.atoz}>
            <Card>
              <Clickble
                onPress={() => {
                  let temlist = datalist.sort((a, b) =>
                    b.rs > a.rs ? 1 : -1,
                  );
                  setdatalist(temlist);
                  setModalVisible(false);
                }}>
                <View style={styles.flexDicler}>
                  <View style={styles.bindu}></View>
                  <Paragraph style={styles.atozpargraph}>
                    Price Lowest to Highest
                  </Paragraph>
                </View>
              </Clickble>
            </Card>
          </View>
        </ModleContainer>
      </Card>
    </ViewContainer>
  );
};

export default list;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
  },
  flexDicler: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  refer: {
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  secoundview: {
    backgroundColor: Colors.green,
    height: 40,
  },
  listtab: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btntab: {
    width: FULL_WIDTH / 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.greybold,
    justifyContent: 'center',
    height: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  texttab: {
    fontSize: 20,
  },
  btntabActive: {
    borderColor: 'green',
    borderWidth: 2,
  },
  texttabActive: {
    color: '#000',
  },
  itemcointer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  itemlogo: {
    width: 90,
    height: 100,
  },
  itemimage: {
    width: 50,
    height: 50,
  },
  itembody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemname: {
    fontWeight: '400',
    fontSize: 17,
    color: '#000',
    width: 170,
  },
  itemstatus: {
    backgroundColor: Colors.green,
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12,
  },
  main: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 4,
  },
  imgtntab: {
    height: 30,
    width: 30,
    tintColor: 'green',
  },
  longview: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: 'green',
    marginVertical: 5,
  },
  text: {
    color: Colors.green,
  },
  hrtimg: {
    width: 20,
    height: 20,
    right: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view: {
    backgroundColor: 'green',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  miness: {
    fontSize: 30,
    color: '#fff',
    bottom: 5,
  },
  flex2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 10,
    top: 5,
  },
  suny: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  Paragraph: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#000',
  },
  shortimage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  greenpar: {
    textAlign: 'right',
    bottom: 7,
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.green,
  },
  menu: {
    marginHorizontal: 10,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  filter: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  atoz: {
    borderColor: '#000',
    padding: 10,
    marginVertical: 5,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
  },
  atozpargraph: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  bindu: {
    backgroundColor: Colors.green,
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth:2
  },
});
