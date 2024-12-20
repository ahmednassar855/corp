import reliabilityImage from "public/reliability.jpg";
import Hero from "@/components/hero";

export default function ReliabilityPage() {
  return (
    <Hero
      imgAlt="reliable"
      imgData={reliabilityImage}
      title="The most reliable based on our KPI"
    />
  );
}
