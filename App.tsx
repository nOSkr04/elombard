import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import { SWRConfig } from "swr";
import Navigation from "./src/navigation/navigation-container";
import useCachedResources from "./src/hooks/use-cached-resources";

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SWRConfig>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gesture}>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </SWRConfig>
  );
};

const styles = StyleSheet.create({
  toast: {
    marginBottom: 100,
  },
  gesture: {
    flex: 1,
  },
});

export default App;
