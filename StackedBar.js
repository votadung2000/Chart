// import React from 'react'
// import {
//   View,
//   Text,
// } from 'react-native'

// function StackedBar({ data, keys }) {
//   return (
//     <View style={{
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'flex-end',
//     }}
//     >
//       {data.map((item) => (
//         <View
//           key={item.country}
//           style={{
//             alignItems: 'center',
//             backgroundColor: '"rgba(225, 0, 0, 0.6)"',
//           }}
//         >
//           <View>
//             {
//               keys.map((key) => (
//                 <View
//                   style={{
//                     width: 50,
//                     height: item[key.key],
//                     backgroundColor: key.color,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                   key={key.key}
//                 >
//                   <Text style={{ fontSize: 10 }}>{item[key.key]}</Text>
//                 </View>
//               ))
//             }
//           </View>
//           <Text>{item.country}</Text>
//         </View>
//       ))}
//     </View>
//   )
// }

// export default StackedBar
