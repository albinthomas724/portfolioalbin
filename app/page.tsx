import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '../components/Hero'
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Footer/>
       </div>
    </main>
  );
}