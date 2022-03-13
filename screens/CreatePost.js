import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions, ScrollView, TextInput } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker"

let customFonts = {
	"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			previewImage:"Image_1",
			dropDownHeight:40
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (!this.state.fontsLoaded) {
			return <AppLoading />
		} else {
			let preview_Images={
				"Image_1":require("../assets/image_1.jpg"),
				"Image_2":require("../assets/image_2.jpg"),
				"Image_3":require("../assets/image_3.jpg"),
				"Image_4":require("../assets/image_4.jpg"),
				"Image_5":require("../assets/image_5.jpg"),
				"Image_6":require("../assets/image_6.jpg"),
				"Image_7":require("../assets/image_7.jpg"),
			}
			return(
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Post</Text>
					</View>

				</View>

				<View style={styles.fieldsContainer}>
                  <ScrollView>
					  <Image
					  source={preview_Images[this.state.previewImage]}
					  style={styles.previewImage}
					  >
					  </Image>
					  <View style={{height:RFValue(this.state.dropDownHeight)}}>
                       <DropDownPicker
					   items={[
						   {label:"Image-1",value:"Image_1"},
						   {label:"Image-2",value:"Image_2"},
						   {label:"Image-3",value:"Image_3"},
						   {label:"Image-4",value:"Image_4"},
						   {label:"Image-5",value:"Image_5"},
                           {label:"Image-6",value:"Image_6"},
                           {label:"Image-7",value:"Image_7"}

					   ]}
					   defaultValue={this.state.previewImage}
					   containerStyle={{height:40,borderRadius:20,marginBottom:10}}
					   onOpen={()=>{
						   this.setState({dropDownHeight:170})
					   }}
					   onClose={()=>{
						this.setState({dropDownHeight:40})
					}}
                    style={{backgroundColor:"transparent"}}
                    itemStyle={{
                        justifyContent:"flex-start"
                    }}
                    dropDownStyle={{backgroundColor:"#2a2a2a"}}
                    labelStyle={{
                        color:"white"
                    }}
                    arrowStyle={{
                        color:"white"
                    }}
                    onChangeItem={item=>
                    this.setState({
                        previewImage:item.value
                    })
                    }
					   />

					   
					  </View>
                      <TextInput
                      style={styles.inputFont}
                      onChangeText={caption=>this.setState({caption
                    })}
                    placeholder={"Caption"}
                    placeholderTextColor="white"
                      />
				  </ScrollView>
				</View>

			</View>)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans"
	},
	fieldsContainer: {
		flex: 0.85
	  },
	  previewImage: {
		width: "93%",
		height: RFValue(250),
		alignSelf: "center",
		borderRadius: RFValue(10),
		marginVertical: RFValue(10),
		resizeMode: "contain"
	  },
	  inputFont: {
		height: RFValue(40),
		borderColor: "white",
		borderWidth: RFValue(1),
		borderRadius: RFValue(10),
		paddingLeft: RFValue(10),
		color: "white",
		fontFamily: "Bubblegum-Sans"
	  },
	  inputFontExtra: {
		marginTop: RFValue(15)
	  },
	  inputTextBig: {
		textAlignVertical: "top",
		padding: RFValue(5)
	  }
	
})