import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../styles";
import Header from "./Header";

const UserDetails = () => {
  return (
    <>
      <Header />
      <View style={styles.userDeatilsContainer}>
        {/* Name */}
        <View style={styles.blockUserName}>
          <View style={styles.icon}>
            <Icon name="person-circle" size={36} style={{ color: "#eee" }} />
          </View>
          <View style={styles.headingTextHolder}>
            <Text style={styles.headingPlaceHolder}>Name</Text>
            <Text numberOfLines={1} style={styles.userDetailsText}>
              Dambi Dsouza
            </Text>
          </View>
        </View>
        {/* Name */}
        <View style={styles.lineDivider} />
        {/* Email */}
        <View style={styles.blockUserName}>
          <View style={styles.icon}>
            <Icon name="md-mail" size={28} style={{ color: "#eee" }} />
          </View>
          <View style={styles.headingTextHolder}>
            <Text style={styles.headingPlaceHolder}>Email</Text>
            <Text numberOfLines={1} style={styles.userDetailsText}>
              dambi@gmail.com
            </Text>
          </View>
        </View>
        {/* Email */}
        <View style={styles.lineDivider} />
        {/* posts */}
        <TouchableOpacity style={styles.blockUserName}>
          <View style={styles.icon}>
            <Icon name="layers" size={28} style={{ color: "#eee" }} />
          </View>
          <View style={styles.headingTextHolder}>
            <Text style={styles.headingPlaceHolder}>Posts</Text>
            <Text style={styles.userDetailsText}>Your Posts</Text>
          </View>
          <Icon
            name="md-chevron-forward"
            size={28}
            style={{ color: "#C8FFE0" }}
          />
        </TouchableOpacity>
        {/* Adds */}
      </View>

      {/* Logout and privacy ploicy */}
      <View style={styles.userDeatilsContainer}>
        {/* privacy */}
        <TouchableOpacity style={styles.blockUserName}>
          <View style={styles.icon}>
            <Icon
              name="information-circle-sharp"
              size={28}
              style={{ color: "#eee" }}
            />
          </View>
          <View style={styles.headingTextHolder}>
            <Text style={styles.headingPlaceHolder}>
              Help center and privacy
            </Text>
            <Text style={styles.userDetailsText}>Click here</Text>
          </View>
          <Icon
            name="ios-open-outline"
            size={28}
            style={{ color: "#C8FFE0" }}
          />
        </TouchableOpacity>
        <View style={styles.lineDivider} />
        {/* logout */}
        <TouchableOpacity style={styles.blockUserName}>
          <View style={styles.icon}>
            <Icon name="log-out" size={28} style={{ color: "#eee" }} />
          </View>
          <View style={styles.headingTextHolder}>
            <Text style={styles.headingPlaceHolder}>User Status</Text>
            <Text style={styles.userDetailsText}>Logout</Text>
          </View>
          <Icon
            name="md-chevron-forward"
            size={28}
            style={{ color: "#C8FFE0" }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserDetails;
