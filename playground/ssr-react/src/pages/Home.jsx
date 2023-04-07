import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import { Text } from "react-native";
import { Text as PaperText } from "react-native-paper";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Text>Home</Text>
      <PaperText>Home</PaperText>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
