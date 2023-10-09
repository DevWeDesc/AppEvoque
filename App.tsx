import "react-native-gesture-handler";
import AppNavigator from "./src/routes/routes";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
