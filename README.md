# react-native-customized-calendar

## Introduction
A React-Native calendar component to show a calendar. This calendar is fully customized, you can modify it as per your need.
* Navigate to different date, month and year
* Handle date with custom onPress function

Calender View             |  Year Selection
:-------------------------:|:-------------------------:
<img width="348" alt="Screenshot 2023-05-09 at 5 37 39 PM" src="https://github.com/JamzWork/CustomComponents/assets/132579206/05523d75-6ed6-4f1a-8d2e-41a4b3dd5dc1">| <img width="342" alt="Screenshot 2023-05-09 at 5 57 48 PM" src="https://github.com/JamzWork/ProductsListing/assets/132579206/7ee4caf0-ee94-4a11-bc6f-cb4179490e0c">

## Installation

If using yarn:

```
yarn add react-native-customized-calendar
```

If using npm:

```
npm i react-native-customized-calendar
```


## Usage

```
import Calender from 'react-native-customized-calendar'
```

Simply place a `<Calender />` tag for showing calendar.

```
<View style={{ flex:1, }}>
        <Calender />
    </View>
```


## Documentation

### Calender Component
| Name                                    | Description                                                                   | Default    | Type    |
|-----------------------------------------|-------------------------------------------------------------------------------|------------|---------|
| fontSize                                | Font size of entire component                                                 | 16         | Int     |  
| primaryColor                            | Primary color of component                                                    | #2196F3    | String  | 
| onPressDay                              | OnPress function of calender cell                                             | ()=>{}     | Func    |
| dateTextColor                           | Color of date text                                                            | black      | String  | 
| currentDateTextColor                    | Color of current date text                                                    | white      | String  |
| showCurrentDate                         | From this props you can set either current date should be highlight or not    | True       | Bool    |
| weekendBackgroundColor                  | Weekend cell column background color                                          | gray       | String  |
| weekdaysBackgroundColor                 | Weekdays cell column background color                                         | white      | String  |
| emptyDaysBackgroundColor                | Background color of empty cell                                                | lightgray  | String  |
| monthButtonTextColor                    | Current selected month name text color                                        | white      | String  |
| monthNameTextColor                      | Next and previous month name text color                                       | black      | String  |
| backForwardIconTintColor                | Back and Forward Icon tint color                                              | gray       | String  |
| plusMinusButtonContainerBackgroundColor | Year increment and decrement button background color                          | whitesmoke | String  |
| plusMinusButtonContainerBorderColor     | Year increment and decrement button border color                              | lightgray  | String  |
| plusMinusIconTintColor                  | Plus minus button icon tint color                                             | gray       | String  |
| yearColor                               | Year text color                                                               | black      | String  |
| yearSelectTextColor                     | Year select button text color                                                 | black      | String  |
| selectButtonBackgroundColor             | Year select button background color                                           | whitesmoke | String  |
| selectButtonBorderColor                 | Year select button border color                                               | lightgray  | String  |
| containerStyle                          | Container style for additional styling                                        | {}         | Object  |
| calenderItemContainerBorderColor        | Calender cell border color                                                    | lightgray  | String  |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Jaweed Shuja

## License
[MIT](./LICENSE)

