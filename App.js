import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
const data = [
  {
    "Id": "1",
    "SoLieu": 5,
    "Thang": 1,
  },
  {
    "Id": "2",
    "SoLieu": 10,
    "Thang": 2,
  },
  {
    "Id": "3",
    "SoLieu": 15,
    "Thang": 3,
  },
  {
    "Id": "4",
    "SoLieu": 25,
    "Thang": 4,
  },
  {
    "Id": "5",
    "SoLieu": 35,
    "Thang": 5,
  },
  {
    "Id": "6",
    "SoLieu": 45,
    "Thang": 6,
  },
  {
    "Id": "7",
    "SoLieu": 150,
    "Thang": 7,
  },
  {
    "Id": "8",
    "SoLieu": 50,
    "Thang": 8,
  },
];
const Col = (heightData) => {
  let step = parseInt("1" + [...new Array(String(heightData).length - 1)].map(() => '0').join(""));
  let array = [];
  if (step <= 10) {
    step = 1;
    for (let index = 0; index < heightData / step; index++) {
      array.push(index * step);
    }
  }
  else {
    for (let index = 0; index < heightData / step; index++) {
      array.push(index * step);
    }
  }
  return array;
}

const App = () => {
  const maxData = Math.max(...data.map(d => d.SoLieu));
  const heightData = Math.ceil(maxData + (maxData * 0.1));
  const [mangGT, setMangGT] = useState(Col(heightData));

  const Chart = ({ heightChart, month }) => (
    <View
      style={[styles.vwChart, { height: `${(heightChart * 100) / heightData}%` }]} >
      <Text style={{ color: '#990000', fontWeight: 'bold' }}>{month}</Text>
    </View>
  );
  console.log('mangGT', mangGT)
  return (
    <View style={styles.container}>
      <Text style={styles.txtBieuDo}>{`Biểu Đồ Cột`}</Text>
      <View style={styles.body}>
        <View style={styles.vwSolieu}>
          {mangGT.map((item) => (
            <Text
              style={[
                styles.txtSolieu,
                {
                  height: item ? `${(item * 100) / heightData}%` : `5%`,
                }
              ]}
              key={item.toString()}
            >
              {String(item)}
            </Text>
          ))}
        </View>
        <View style={styles.vwTSChart}>
          {data.map((item) => (
            // <View style={[styles.vwTSChart, { height: `${(item * 100) / heightData}%` }]}  >
            <Chart month={item.Thang} heightChart={item.SoLieu} key={item.Id.toString()} />
            //   <Text>{item.Thang}</Text>
            // </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  txtBieuDo: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 15,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  vwChart: {
    width: '8%',
    backgroundColor: "rgba(225, 0, 0, 0.6)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    // paddingBottom: 10,
  },
  vwSolieu: {
    // paddingTop: 20,
    // width: '8%',
    flexDirection: 'column-reverse',
    // height: '100%',
    // justifyContent: 'space-between',
    // justifyContent: 'flex-end',
    // backgroundColor: 'red'
  },
  txtSolieu: {
    // justifyContent: 'space-between',
    fontSize: 11,
    position: 'absolute',
    // right: 0,
    left: 0,
    // textAlign: 'center',
    // borderTopWidth: 1,
    // borderTopColor: 'red',
    color: 'red',
    // fontWeight: 'bold',
  },
  vwTSChart: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },

})




// import React from 'react';
// import { View } from 'react-native';
// import StackedBar from './StackedBar'

// const data = [
//   {
//     'country': 'AD',
//     'hot dog': 25,
//     'burger': 81,
//     'sandwich': 105,
//     'kebab': 42,
//     'fries': 71,
//     'donut': 99,
//   },
//   {
//     'country': 'AE',
//     'hot dog': 35,
//     'burger': 61,
//     'sandwich': 15,
//     'kebab': 48,
//     'fries': 70,
//     'donut': 39,
//   },
//   {
//     'country': 'AF',
//     'hot dog': 45,
//     'burger': 60,
//     'sandwich': 48,
//     'kebab': 78,
//     'fries': 50,
//     'donut': 69,
//   },
//   {
//     'country': 'AG',
//     'hot dog': 155,
//     'burger': 30,
//     'sandwich': 58,
//     'kebab': 48,
//     'fries': 60,
//     'donut': 59,
//   },
// ];

// const keys = [
//   {
//     'key': 'hot dog',
//     'color': 'hsl(151, 70%, 50%)',
//   },
//   {
//     'key': 'burger',
//     'color': 'hsl(137, 70%, 50%)',
//   },
//   {
//     'key': 'sandwich',
//     'color': 'hsl(48, 70%, 50%)',
//   },
//   {
//     'key': 'kebab',
//     'color': 'hsl(67, 70%, 50%)',
//   },
//   {
//     'key': 'fries',
//     'color': 'hsl(116, 70%, 50%)',
//   },
//   {
//     'key': 'donut',
//     'color': 'hsl(191, 70%, 50%)',
//   },
// ];

// export default function App() {
//   return (
//     <View style={{ flex: 1,padding: 15, justifyContent: 'center'}}>
//       <StackedBar data={data} keys={keys} />
//     </View>
//   );
// }