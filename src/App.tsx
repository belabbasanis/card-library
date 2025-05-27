import { Tilt } from './components/motion-primitives/tilt';
import { BorderTrail } from './components/motion-primitives/border-trail';
import { ProgressiveBlur } from './components/motion-primitives/progressive-blur';
import { ProfileCard } from './components/motion-primitives/profile-card';
import { FormCard } from './components/motion-primitives/form-card';

function App() {
  return (
    <div className="h-screen w-full flex justify-center bg-black gap-24 overflow-hidden">
      {/* left column */}
      <div className="flex flex-col justify-center w-[300px]">
        <ProfileCard />
      </div>

      {/* center column */}
      <div className="flex flex-col items-center gap-4 overflow-y-auto pr-2 py-8">
        {/* card 5 – form card */}
        <FormCard />
        
        {/* card 1 – tilt + border trail + image */}
        <Tilt rotationFactor={8} isReverse>
          <div className="relative flex-shrink-0 w-[379px] rounded-xl overflow-hidden ">
            <BorderTrail className="rounded-xl" size={120} />
            <div className="flex flex-col border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900">
              <img
                src="/landingPagePersuasion.png"
                alt="landingPagePersuasion"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold leading-snug text-zinc-950 dark:text-zinc-50">
                  Buy My 7-Week Course
                </h1>
                <span className="mb-2 text-base text-zinc-300">Go from 0 to your Dream Destination</span>
                <p className="text-base text-white font-semibold">$59.99</p>
              </div>
            </div>
          </div>
        </Tilt>

        {/* card 2 – image left, text right */}
        <div className="flex-shrink-0 flex items-center gap-4 rounded-xl bg-zinc-900 p-4 w-[379px] card-gradient-border">
          <img
            src="/mentalToughness.png"
            alt="mental toughness"
            className="h-16 w-16 rounded-md object-cover"
          />
          <div className="text-left">
            <h1 className="font-bold leading-snug text-white text-base">
              Mental Toughness
            </h1>
            <span className="mb-2 text-base text-zinc-300">Seek Discomfort</span>
            <p className="text-base text-white font-semibold">FREE</p>
          </div>
        </div>

        {/* card 3 – progressive blur */}
        <div className="relative flex-shrink-0 w-[379px] h-[379px] overflow-hidden rounded-xl card-gradient-border">
          <img
            src="/mvpPlaybook.png"
            alt="Benjamin Spiers - Moonlight 2023"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
            blurIntensity={6}
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="flex flex-col items-start gap-0 px-5 py-4">
              <p className="text-base font-bold text-white">The MVP Playbook</p>
              <span className="mb-2 text-base text-zinc-300">Everything you need to get started</span>
              <p className="text-base text-white font-semibold">$59.99</p>
            </div>
          </div>
        </div>

        {/* card 4 – progressive blur */}
        <div className="relative flex-shrink-0 w-[379px] h-[379px] overflow-hidden rounded-xl  glass-radial card-gradient-border">
          <img
            src="https://cdn.cosmos.so/2d774ea0-4b4f-4d9f-a634-6b6c5a130e91?format=jpeg"
            alt="Benjamin Spiers - Moonlight 2023"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
            blurIntensity={6}
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="flex flex-col items-start gap-0 px-5 py-4">
              <p className="text-base font-bold text-white">Startup Bootstrap Workbook</p>
              <span className="mb-2 text-base text-zinc-300">Conquer the VC world like Rome</span>
              <div className="flex items-center gap-2">
                <p className="text-base text-white font-semibold">$39.99</p>
                <p className="text-base text-zinc-400 line-through">$99.99</p>
              </div>
            </div>
          </div>
        </div>

        {/* card Rally – image left, text right */}
        <div className="flex-shrink-0 flex items-center gap-8 rounded-full bg-zinc-900 p-4 w-[379px] card-gradient-border-rounded">
          <img
            src="/whiteLogo.png"
            alt="mental toughness"
            className="h-9 w-9 rounded-md object-cover"
          />
          <div className="text-center">
            <h1 className="font-bold leading-snug text-white text-base text-centerflex-1 text-center font-bold text-white leading-snug text-base">
              Join UGCWithMarcus on Rally
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;