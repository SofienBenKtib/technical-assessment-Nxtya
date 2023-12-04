import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import MyFab from "./FAB";

interface ImageItem {
  id: number;
  thumbnailUrl: string;
  //liked: boolean;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  //const [favorites, setFavorites] = useState<ImageItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<ImageItem[]>([]);
  const navigation = useNavigation();

  // Fetching the images from the mock API using axios API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const data: ImageItem[] = response.data;
        const images = data.slice(0, 25);
        setImages(images);
        console.log("works perfectly!!!");
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleImagePress = (imageItem: ImageItem) => {
    // Navigate to the LikedImages screen and pass the selected imageItem as a parameter
    navigation.navigate("LikedImages", { selectedImageItem: imageItem });
  };

  const renderImageItem = ({ item }: { item: ImageItem }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
      <TouchableOpacity
        onPress={() => handleImagePress(item)}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 5,
        }}
      >
        <Text style={{ color: "white" }}>Add to favorites</Text>
        <Ionicons name="heart-circle-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderImageItem}
          numColumns={2}
        />
      </View>
      <View style={{ margin: 15 }}>
        <MyFab />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "black",
  },
  thumbnail: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default ImageGallery;
