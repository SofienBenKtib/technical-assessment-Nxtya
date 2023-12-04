import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Keyboard } from "./../node_modules/@types/react-native/Libraries/Components/Keyboard/Keyboard.d";

interface ImageItem {
  id: number;
  thumbnailUrl: string;
  //liked: boolean;
}
interface RouteParams {
  selectedImageId?: number;
}
// Get the selectedImageId parameter from the route

const LikedImages: React.FC = () => {
  const route = useRoute();
  const [previousItems, setPreviousItems] = useState<ImageItem[]>([]);
  // Extract the selectedImageItem parameter from the route
  const selectedImageItem: ImageItem | undefined =
    route.params?.selectedImageItem;

  const handleAddToFavorites = () => {
    if (selectedImageItem) {
      setPreviousItems((prevItems) => [...prevItems, selectedImageItem]);
    }
  };
  return (
    <View style={styles.container}>
      {selectedImageItem && (
        <>
          <Image
            source={{ uri: selectedImageItem.thumbnailUrl }}
            style={styles.thumbnail}
          />
        </>
      )}
    </View>
  );
};

export default LikedImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  thumbnail: {
    aspectRatio: 1,
    width: undefined,
    height: undefined,
  },
});
