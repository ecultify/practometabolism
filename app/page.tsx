import { AssessmentTool } from '@/components/AssessmentTool';
import { Balance } from '@/components/Balance';
import { Doctor } from '@/components/Doctor';
import { Dynamics } from '@/components/Dynamics';
import { Explainer } from '@/components/Explainer';
import { Hero } from '@/components/Hero';
import { MeasuresBand } from '@/components/MeasuresBand';
import { NextSteps } from '@/components/NextSteps';
import { Numbers } from '@/components/Numbers';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';
import { Symptoms } from '@/components/Symptoms';
import { WaistPanel } from '@/components/WaistPanel';

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />               {/* Screen 1 */}
        <MeasuresBand />
        <Explainer />          {/* Hidden section */}
        <Dynamics />           {/* Screens 2 and 3 */}
        <Balance />            {/* Screen 4 */}
        <Numbers />            {/* Screen 5 */}
        <WaistPanel />         {/* Screen 5 panel */}
        <Symptoms />           {/* Screen 6 */}
        <AssessmentTool />     {/* Screen 7 */}
        <Doctor />             {/* Screen 8 */}
        <NextSteps />          {/* Screen 9 + interstitial */}
      </main>
      <SiteFooter />
    </>
  );
}
