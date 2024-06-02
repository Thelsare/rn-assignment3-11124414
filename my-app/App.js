import { View,StyleSheet,ScrollView } from "react-native";
import Topframe1 from "./components/Topframe1";
import Searchbox from "./components/Searchbox";
import Categorysection from "./components/Categorysection";
import Ongsection from "./components/Ongsection";



export default function App() {
  return (
    <>
     
     <ScrollView>
        <View style={styles.container}>
          <Topframe1 />
          <Searchbox />
          <Categorysection />
          <Ongsection />
        </View>
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 52,
    padding: 20,
    backgroundColor: "#F7F0E8",
  },
});
