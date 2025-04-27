import { View } from "react-native";
import Login from "./../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import "react-native-get-random-values";
export default function Index() {
  const user = auth?.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Redirect href={'/mytrip'} /> */}
      {/* {user?<Redirect href={'/mytrip'} />: <Login />} */}
      <Login/>
    </View>
  );
}
