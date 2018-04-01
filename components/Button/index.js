import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    );
}

Button.PropTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default Button;




{
    isCounting: true|false,
    counterDuration: 1500,
    elapsedTime: 0
}

