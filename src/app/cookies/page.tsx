import LandingPageLayout from "@/components/layouts/LandingPage/LandingPage";
import CookiePolicy from "@/components/views/CookiePolicy";

export default function Home() {
  return (
    <LandingPageLayout>
      <CookiePolicy />
    </LandingPageLayout>
  );
}
