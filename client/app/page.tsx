import { fetchImage } from "@/lib/fetch";
import { Home } from "@/components/home";

export default async function HomePage() {
  const initImages = "forest";
  const images = await fetchImage(initImages);

  return <Home images={images} />;
}
