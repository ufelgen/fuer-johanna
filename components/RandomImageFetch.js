import { useFetch } from "../helpers/useFetch";

export default function RandomImageFetch() {
  const image = useFetch(
    "https://api.unsplash.com/photos/random/?client_id=DO-2ZSrlvG9NonSxNNbh2szxV1gXNj3tQqPiyDg8y_A"
  );
  console.log("image in Fetch", image);

  return image;
}
