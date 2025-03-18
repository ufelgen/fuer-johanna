import { useState, useEffect } from "react";

export default function RandomImageFetch(collectionId) {
  const [data, setData] = useState([]);
  const accessKey = "DO-2ZSrlvG9NonSxNNbh2szxV1gXNj3tQqPiyDg8y_A";

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/collections/${collectionId}/photos?client_id=${accessKey}&per_page=10`
        );
        const data = await response.json();
        if (data.length > 0) {
          const randomImage = data[Math.floor(Math.random() * data.length)];
          setData(randomImage.urls.regular);
        }
      } catch (error) {
        console.error("du kannst gar nichts");
      }
    }
    startFetching();
  }, [collectionId]);
  return data;
}
