import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps, type TextStyle, type ViewStyle } from 'react-native';

type OtpInputProps = TextInputProps & {
  height: number
  otpCount: number
  otpPlaceholder?: string
  style?: {
    container?: ViewStyle
    box?: ViewStyle
    text?: TextStyle
  }
}

export function OtpInput({
  height=50,
  value = '',
  otpCount,
  otpPlaceholder='-',
  style,
  ...props
}: OtpInputProps) {
  const [otp, setOtp] = useState(value)
  function handleOTPChange(otp: string) {
    setOtp(otp)
    props.onChangeText?.(otp)
  }

  let arr = new Array(otpCount) as string[]
  arr.fill('',0,otpCount)

  return (
    <View style={{ height }}>
      <TextInput
        inputMode="numeric"
        keyboardType="number-pad"
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        maxLength={otpCount}
        numberOfLines={1}
        {...props}
        value={otp}
        style={{ opacity: 0, minHeight:height }}
        onChangeText={handleOTPChange}
      />
      <View style={[
        $.container,
        style?.container,
        {
          transform: [
            { translateY: -height}
          ],
        }
      ]}>
     
        {arr.map((_, i) =>
        <View
            key={i}
            style={[$.box,style?.box]}>
            <Text style={[$.text, style?.text]}>{otp.charAt(i)||otpPlaceholder}</Text>
          </View>
        )
        }
      </View>
    </View>
  )
}

const $ = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 18,
    height:'100%',
    justifyContent: 'space-between',
    pointerEvents: 'none'
  },
  box: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:18,
    pointerEvents:'none'
  }
});