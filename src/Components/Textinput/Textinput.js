import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../Screens/Login/Style";
// import styles from '../../Screens/Signup/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import Theme from "../../Utils/Theme";
const Textinput = (props) => {
  const {
    Emailinput,
    CompanyNameinput,
    Passwordinput,
    Usernameinput,
    confirminput,
    PhoneNumberinput,
    label,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    maxLength,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    onBlur,
    handleBlur,
    editable,
    isPasswordSecure,
    handleChange,
    inputpassword,
    iconName,
    onEyePress,
    cursorColor,
  } = props;
  return (
    <>
      {Emailinput === true ? (
        <TextInput
          cursorColor={"#d75f4f"}
          label={label}
          value={value}
          placeholderTextColor={Theme.newGrey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          style={{
            ...styles.inputstyle,
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : Passwordinput === true ? (
        <TextInput
          cursorColor={"#d75f4f"}
          label={label}
          value={value}
          placeholderTextColor={Theme.newGrey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPasswordSecure}
          style={{
            ...styles.inputstyle,
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : PhoneNumberinput === true ? (
        <TextInput
          cursorColor={"#d75f4f"}
          label={label}
          value={value}
          placeholderTextColor={Theme.newGrey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          style={{
            ...styles.inputstyle,
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : Usernameinput === true ? (
        <TextInput
          cursorColor={"#d75f4f"}
          label={label}
          value={value}
          placeholderTextColor={Theme.newGrey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          style={{
            ...styles.inputstyle,
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : CompanyNameinput === true ? (
        <TextInput
          cursorColor={"#d75f4f"}
          label={label}
          value={value}
          placeholderTextColor={Theme.newGrey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          style={{
            ...styles.inputstyle,
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : confirminput === true ? (
        <View style={styles.inputpassword}>
          <TextInput
            cursorColor={"#d75f4f"}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Theme.newGrey}
            style={{ flex: 1, backgroundColor: "#FAFAFA" }}
            autoCapitalize="none"
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
          />

          <TouchableOpacity>
            <Ionicons
              name={iconName}
              // name={'eye-off-sharp'}
              size={18}
              onPress={onEyePress}
            />
          </TouchableOpacity>
        </View>
      ) : inputpassword === true ? (
        <View style={styles.inputpassword}>
          <TextInput
            cursorColor={"#d75f4f"}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Theme.newGrey}
            style={{ flex: 1, backgroundColor: "#FAFAFA" }}
            autoCapitalize="none"
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
          />

          <TouchableOpacity>
            <Ionicons
              name={iconName}
              // name={'eye-off-sharp'}
              size={18}
              onPress={onEyePress}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default Textinput;
