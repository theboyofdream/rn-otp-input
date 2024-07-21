import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { OtpInput } from '@theboyofdream/rn-otp-input'

export default function App() {

  const [otp, setOtp] = useState('')

  return (
    <View style={$.page}>
      <OtpInput
        height={50}
        otpCount={4}
        value={otp}
        onChangeText={setOtp}
      />
    </View>
  );
}

const $ = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato'
  }
});
