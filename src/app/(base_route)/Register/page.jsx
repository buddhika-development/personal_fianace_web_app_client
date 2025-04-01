import { BackgroundBeams } from "@/components/ui/background-beams";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import RegistraitonFrom from '@/components/layouts/RegistrationForm'

export default function Register() {

  const slipping_words = [ "Simplify","Grow", "Save" , "Track", "Control"]

  return (
    <div className="w-full h-screen flex justify-arround items-center p-20">

      {/* welcome and greeting section with the warm welcome */}
      <div className="dark relative z-10 w-7/12">
      
              {/* main text area title with world flipper */}
              <div>
                <p className="text-5xl font-bold mb-3">Take charge and</p>
                <ContainerTextFlip words={slipping_words} />
                <p className="text-5xl font-bold mt-3">your finances today.</p>
              </div>
      
              {/* description about application and warlm welcome to join with us */}
              <div className="w-8/10 mt-8 text-[14px] text-zinc-400">
                <p>Join us to simplify your financial journey! Track spending, set budgets, and grow your savings effortlessly. With personalized insights and secure tools, we empower you to achieve your money goals—whether you’re saving for a dream or planning for the future. Start mastering your finances today!</p>
              </div>
              
            </div>

      {/* login form section */}
      <div className="w-[450px] relative z-8">
        <RegistraitonFrom />
      </div>


      <BackgroundBeams />
    </div>
  );
}
