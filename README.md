# @theboyofdream/rn-otp-input

Customizeable OTP input for react-native without refs/third-party dependancy.

## Installation

```sh
npm install @theboyofdream/rn-otp-input
# OR
yarn add @theboyofdream/rn-otp-input
# OR
bun add @theboyofdream/rn-otp-input
```

## Usage

```tsx
import { OtpInput } from '@theboyofdream/rn-otp-input'

const [otp, setOtp] = useState('')

<OtpInput
        height={50}
        otpCount={4}
        value={otp}
        onChangeText={setOtp}
      />
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
