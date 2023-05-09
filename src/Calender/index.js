import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import MyMonthArray from '../Utils/Helper'
var d = new Date()

const Calender = ({
    fontSize = 16,
    primaryColor = '#2196F3',
    onPressDay = () => { },
    dateTextColor = 'black',
    currentDateTextColor = 'white',
    showCurrentDate = true,
    weekendBackgroundColor = 'gray',
    weekdaysBackgroundColor = 'white',
    emptyDaysBackgroundColor = 'lightgray',
    monthButtonTextColor = 'white',
    monthNameTextColor = 'black',
    backForwardIconTintColor = 'gray',
    plusMinusButtonContainerBackgroundColor = 'whitesmoke',
    plusMinusButtonContainerBorderColor = 'lightgray',
    plusMinusIconTintColor = 'gray',
    yearColor = 'black',
    yearSelectTextColor = 'black',
    selectButtonBackgroundColor = 'whitesmoke',
    selectButtonBorderColor = 'lightgray',
    containerStyle={},
    calenderItemContainerBorderColor = 'lightgray',
}) => {
    const [monthArr, setMonthArr] = useState([[], [], [], [], [], []])
    const [days, setDays] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    const [currentMonthIndex, setCurrentMonthIndex] = useState(d.getMonth())
    const [currentYear, setCurrentYear] = useState(d.getFullYear())
    const [monthNameArray, setMonthNameArray] = useState([
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ])
    const [showYearView, setShowYearView] = useState(false)

    useEffect(() => {
        setCalender(currentMonthIndex + 1)
    }, [])
    useEffect(() => {
        setCalender(currentMonthIndex + 1)
    }, [currentMonthIndex, currentYear])

    const setCalender = (month) => {
        setMonthArr(MyMonthArray(month, currentYear))
    }

    const getColor = (value, index) => {
        if (showCurrentDate && isCurrentDay(value)) {
            return primaryColor
        }
        else {
            if (value == -1) {
                return emptyDaysBackgroundColor
            }
            if (index == 0 || index == 6) {
                return weekendBackgroundColor
            }
            if (value != -1) {
                return weekdaysBackgroundColor
            }
        }
    }
    const isCurrentDay = (value) => {
        if (currentYear == d.getFullYear() && currentMonthIndex == d.getMonth() && value == d.getDate()) {
            return true
        }
        return false
    }

    const calendar = [];
    calendar.push(
        <View key={'a'} style={styles.daysNameRowContainer}>
            {days.map((value, index) => {
                return <View style={styles.calenderItem}
                    key={index.toString()}>
                    <Text style={{ color: primaryColor, fontSize: fontSize }}>{value}</Text>
                </View>
            })}
        </View>
    );
    for (let index = 0; index < 6; index++) {
        calendar.push(
            <View
                key={index.toString()}
                style={styles.dayContainer}>
                {monthArr[index].map((value, index) => {
                    return <TouchableOpacity
                        onPress={() => onPressDay()}
                        key={index.toString()}
                        style={[styles.calenderBoxItem, {
                            backgroundColor: getColor(value, index),
                            borderColor:calenderItemContainerBorderColor
                        }]}>
                        {value == -1 ? null : <Text style={{ color: showCurrentDate && isCurrentDay(value) ? currentDateTextColor : dateTextColor, paddingVertical: 8, fontSize:fontSize }}>{value}</Text>}
                    </TouchableOpacity>
                })}
            </View>
        );
    }

    return <View style={[styles.container,{
            ...containerStyle
        }]}>
            <View style={styles.topMonthContainer}>
                {
                    currentMonthIndex != 0
                        ?
                        <TouchableOpacity style={styles.backForwardIconContainer}
                            onPress={() => {
                                setCurrentMonthIndex(currentMonthIndex - 1)
                            }}>
                            <Image
                                resizeMode='contain'
                                source={require('../images/backIcon.png')}
                                style={[styles.backFronIconContainer,{tintColor:backForwardIconTintColor}]}
                            />
                        </TouchableOpacity>
                        :
                        null
                }
                {
                    currentMonthIndex != 0
                        ?
                        <Text style={{fontSize:fontSize, color:monthNameTextColor, marginLeft:4}}>
                            {monthNameArray[currentMonthIndex - 1]}
                        </Text>
                        :
                        null
                }
                <TouchableOpacity style={[styles.currentMonthContainer,{
                    backgroundColor: primaryColor,
                }]}
                    onPress={() => { setShowYearView(true) }}>
                    <Text style={{color:monthButtonTextColor, fontSize:fontSize}}>
                        {monthNameArray[currentMonthIndex] + "," + currentYear}
                    </Text>
                </TouchableOpacity>
                <Text style={{fontSize:fontSize, color:monthNameTextColor, marginRight:4}}>{monthNameArray[currentMonthIndex + 1]}</Text>
                {
                    currentMonthIndex != 11
                        ?
                        <TouchableOpacity style={styles.backForwardIconContainer}
                            onPress={() => {
                                setCurrentMonthIndex(currentMonthIndex + 1)
                            }}>
                            <Image
                                resizeMode='contain'
                                source={require('../images/forwardIcon.png')}
                                style={[styles.backFronIconContainer,{tintColor:backForwardIconTintColor}]}
                            />
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
            {
                showYearView
                    ?
                    <View style={styles.yearViewContainer}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems:'center' }}>
                                <TouchableOpacity
                                    onPress={() => setCurrentYear(currentYear - 1)}
                                    style={[styles.plusMinuButton,{
                                        backgroundColor:plusMinusButtonContainerBackgroundColor,
                                        borderColor:plusMinusButtonContainerBorderColor
                                    }]}>
                                    <Image
                                        resizeMode='contain'
                                        style={[styles.plusMinusIcon,{titleColor:plusMinusIconTintColor}]}
                                        source={require('../images/minusIcon.png')}
                                    />
                                </TouchableOpacity>
                                <View style={{ paddingHorizontal:20, }}>
                                    <Text style={{ color: yearColor, fontSize:fontSize }}>{currentYear}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setCurrentYear(currentYear + 1)}
                                    style={[styles.plusMinuButton,{
                                        backgroundColor:plusMinusButtonContainerBackgroundColor,
                                        borderColor:plusMinusButtonContainerBorderColor
                                    }]}>
                                    <Image
                                        resizeMode='contain'
                                        style={[styles.plusMinusIcon,{titleColor:plusMinusIconTintColor}]}
                                        source={require('../images/plusIcon.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => setShowYearView(false)}
                                style={[styles.yearButtonContainer, {
                                    backgroundColor:selectButtonBackgroundColor,
                                    borderColor:selectButtonBorderColor
                                }]}>
                                <Text style={{  color: yearSelectTextColor, fontSize:fontSize }}>{'SELECT'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View>
                        {calendar}
                    </View>
            }
        </View>
}

export default Calender

const styles = StyleSheet.create({
    backForwardIconContainer:{
        flex:1,
        height:40,
    },
    yearButtonContainer:{
        height:40,
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        marginTop:12,
        borderRadius:4,
    },
    backFronIconContainer:{
        height:'100%',
        width:'100%',
    },
    daysNameRowContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 8,
    },
    dayContainer: { 
        flexDirection: 'row', 
        alignSelf: 'center' 
    },
    plusMinuButton: {
        height: 40,
        width: 40,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    container: {
        padding:12,
        backgroundColor:'white',
    },
    topMonthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    plusMinusIcon:{
        height:24,
        width:24
    },
    currentMonthContainer: {
        paddingVertical: 12,
        marginHorizontal:8,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        paddingHorizontal:4,
    },
    yearViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    calenderItem: {
        flex: 1,
        alignItems: 'center',
    },
    calenderBoxItem: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})