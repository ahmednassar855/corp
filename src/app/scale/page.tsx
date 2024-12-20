import scaleImage from "public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgAlt="steel"
      imgData={scaleImage}
      title="Scale up your infinty."
    />
  );
}
