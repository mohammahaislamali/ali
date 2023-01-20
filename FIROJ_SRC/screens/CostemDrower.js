import { StyleSheet, Text, View, Image,Share } from 'react-native'
import React from 'react'
import ViewContainer from '../components/HOC/ViewContainer'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import Paragraph from '../components/UI/Paragraph'
import Clickable from '../components/HOC/Clizkable'
const CustomDrawerContent = ({navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'hello this is My . Project on Fruits and vegetables."https://play.google.com/store/apps/details?id=com.ifresh.customer&hl=en_IN&gl=US"',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ViewContainer>
      <ScrollView>
        <View style={styles.ifresh_Drawar_main_view}>
          <View style={styles.ifresh_Top_view}>
            <Image style={styles.ifresh_logo_view} source={icons.iFreshLogo} />
            <Paragraph size={35} color={'white'}>iƑɾҽʂհ</Paragraph>
            <Paragraph size={25} color={'white'}>Login?</Paragraph>
          </View>
        </View>
        <View style={styles.IconContainer}>
          <Clickable  style={styles.ALL_icons_Image} onPress={() =>navigation.toggleDrawer('Home')}>
            <Image style={styles.Home_Image} source={icons.home} />
            <View>
              <Paragraph style={styles.TEXTICONS}>Home</Paragraph>
            </View>
          </Clickable>
          <Clickable onPress={() =>navigation.navigate('Cart')} style={styles.ALL_icons_Image}>
            <Image style={styles.Home_Image} source={icons.cart} />
            <Paragraph style={styles.TEXTICONS}>Cart</Paragraph>
          </Clickable >
          <Clickable onPress={() =>navigation.navigate('Notification')}  style={styles.ALL_icons_Image}>
            <Image style={styles.Home_Image} source={icons.notification} />
            <Paragraph style={styles.TEXTICONS}>Notification</Paragraph>
          </Clickable >
          <Clickable onPress={() =>navigation.navigate('Wellet_Balance')} style={styles.ALL_icons_Image}>
            <Image style={styles.Home_Image} source={icons.wallet} />
            <Paragraph style={styles.TEXTICONS}>Wellet Balance</Paragraph>
          </Clickable >
        </View>
        <View style={styles.IconContainer}>
        <Clickable onPress={() =>navigation.navigate('Track_Order')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.truck} />
          <Paragraph style={styles.TEXTICONS}>Track Order</Paragraph>
        </Clickable >
        <Clickable onPress={() =>onShare()}  style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.ReferFriend} />
          <Paragraph style={styles.TEXTICONS}>Refer Friend</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('Refer_Earn')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.ReferEarn} />
          <Paragraph style={styles.TEXTICONS}>Refer & Earn</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('Coupon_Code')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.doubleerrow} />
          <Paragraph style={styles.TEXTICONS}>Coupon Code</Paragraph>
        </Clickable >
        </View>
        <View style={styles.IconContainer}>
        <Clickable onPress={() =>navigation.navigate('Contact_Us')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.contactus} />
          <Paragraph style={styles.TEXTICONS}>Contact Us</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('About_Us')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.aboutus} />
          <Paragraph style={styles.TEXTICONS}>About Us</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('Rate_Us')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.RateUs} />
          <Paragraph style={styles.TEXTICONS}>Rate Us</Paragraph>
        </Clickable >
        <Clickable  onPress={() =>onShare()}  style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.share} />
          <Paragraph style={styles.TEXTICONS}>Share App</Paragraph>
        </Clickable >
        </View>
        <View style={styles.IconContainer}>
        <Clickable onPress={() =>navigation.navigate('FAQ')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.faq} />
          <Paragraph style={styles.TEXTICONS}>FAQ</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('Terms_Condiations')}  style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.TermsCondition} />
          <Paragraph style={styles.TEXTICONS}>Terms & Conditions</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('Privecy_Policy')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.privacy} />
          <Paragraph style={styles.TEXTICONS}>Privacy Policy</Paragraph>
        </Clickable >
        </View>
        <View style={styles.IconContainer}>
        <Clickable onPress={() =>navigation.navigate('Address_List')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.addreshlist} />
          <Paragraph style={styles.TEXTICONS}>Address List</Paragraph>
        </Clickable >
        <Clickable onPress={() =>navigation.navigate('LogOut')} style={styles.ALL_icons_Image}>
          <Image style={styles.Home_Image} source={icons.logout} />
          <Paragraph style={styles.TEXTICONS}>LogOut</Paragraph>
        </Clickable >
        </View>
      </ScrollView>
    </ViewContainer>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
  ifresh_Drawar_main_view: {
    // borderWidth: 1,
  },
  ifresh_Top_view: {
    // borderWidth: 1,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey
  },
  ifresh_logo_view: {
    width: 70,
    height: 70,
    tintColor: "white",
  },
  IconContainer:{
   borderBottomWidth:1,
  },
  
  ALL_icons_Image: {
    padding: 10,
   
    alignItems: "center",
    flexDirection: 'row',
  },
  Home_Image: {
    width: 30,
    height: 30,
    tintColor:"gray",
  
  },
  TEXTICONS:{
     marginLeft:40,
  },
  EMPTY_VIEW: {
    borderBottomWidth: 0.9,
  },
})