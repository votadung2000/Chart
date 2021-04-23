import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
const data = [
  {
    "Id": "1",
    "SoLieu": 130,
    "Thang": 1,
  },
  {
    "Id": "2",
    "SoLieu": 190,
    "Thang": 2,
  },
  {
    "Id": "3",
    "SoLieu": 300,
    "Thang": 3,
  },
  {
    "Id": "4",
    "SoLieu": 240,
    "Thang": 4,
  },
  {
    "Id": "5",
    "SoLieu": 500,
    "Thang": 5,
  },
  {
    "Id": "6",
    "SoLieu": 520,
    "Thang": 6,
  },
  {
    "Id": "7",
    "SoLieu": 710,
    "Thang": 7,
  },
  {
    "Id": "8",
    "SoLieu": 660,
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
