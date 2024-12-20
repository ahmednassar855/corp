import performanceImage from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgAlt="welding"
      imgData={performanceImage}
      title="We serve hight quality application"
    />
  );
}
