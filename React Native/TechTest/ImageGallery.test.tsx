// ImageGallery.test.tsx
import React from "react";
import * as jest from "jest";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher

import ImageGallery from "./components/ImageGallery";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("axios");

describe("ImageGallery Component", () => {
  it("renders ImageGallery component with images", async () => {
    // Mocking Axios response
    require("axios").get.mockResolvedValue({
      data: [
        { id: 1, thumbnailUrl: "https://example.com/image1.jpg" },
        { id: 2, thumbnailUrl: "https://example.com/image2.jpg" },
      ],
    });

    const { getByText, getByTestId } = render(<ImageGallery />);

    await waitFor(() => {
      expect(getByTestId("image-item-1")).toBeInTheDocument();
      expect(getByTestId("image-item-2")).toBeInTheDocument();
    });
  });

  it("navigates to LikedImages screen on image press", async () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    // Mocking Axios response
    require("axios").get.mockResolvedValue({
      data: [{ id: 1, thumbnailUrl: "https://example.com/image1.jpg" }],
    });

    const { getByTestId } = render(<ImageGallery />);
    fireEvent.press(getByTestId("image-item-1"));

    await waitFor(() => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("LikedImages", {
        selectedImageItem: {
          id: 1,
          thumbnailUrl: "https://example.com/image1.jpg",
        },
      });
    });
  });
});
