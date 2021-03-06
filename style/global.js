'use strict';

import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        marginTop: 40,
        flex: 1
    },
    heading: {
        fontFamily: 'Berlin',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'white',
        height: 30,
        textDecorationLine: 'underline',
    },
    notification: {
        fontFamily: 'ArticulatCF-Light',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        borderRadius: 15,
        borderWidth: 0,
        borderColor: 'transparent',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 50,
        marginRight: 50,
    },
    balanceContainerWrap: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 20,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    balanceContainer: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 50,
    },
    balance: {
        fontFamily: 'Berlin',
        fontSize: 50,
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        paddingTop: 0,
        paddingBottom: 0,
    },
    balanceDecimal: {
        fontFamily: 'Berlin',
        fontSize: 20,
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        height: 20,
        borderWidth: 0,
        borderColor: 'transparent',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        paddingTop: 0,
        paddingBottom: 0,
    },
    contactItem: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 0,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'transparent',
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10,
    },
    contactItemText: {
        textAlign: 'left',
        fontFamily: 'ArticulatCF-Light',
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
    },
    contactInfoHeading: {
        textAlign: 'left',
        fontFamily: 'ArticulatCF-Light',
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        marginLeft: 20,
        textDecorationLine: 'underline',
        paddingTop: 5,
        paddingBottom: 5,
    },
    contactInfo: {
        textAlign: 'left',
        fontFamily: 'ArticulatCF-Light',
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        marginLeft: 20,
        paddingTop: 5,
        paddingBottom: 15,
    },
    generalText: {
        textAlign: 'center',
        fontFamily: 'ArticulatCF-Light',
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        marginLeft: 20,
        paddingTop: 5,
        paddingBottom: 15,
    },
    aboutText: {
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontFamily: 'ArticulatCF-Light',
        fontSize: 25,
        color: 'white',
        marginLeft: 10,
        marginTop: 20,
    },
});

