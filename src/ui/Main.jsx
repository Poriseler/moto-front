import ArticlesSection from './ArticlesSection';
import HeroSection from './HeroSection';
import SectionTitle from './SectionTitle';
import SocialMediaSection from './SocialMediaSection';

function Main() {
  return (
    <>
      <SocialMediaSection />
      <section className='flex flex-col items-center '>
        <SectionTitle>Najnowsze</SectionTitle>
        <HeroSection />
      </section>
      <section className='flex flex-col items-center '>
        <SectionTitle>Newsy</SectionTitle>
        <ArticlesSection type="newsy" key="newsy" />
      </section>
      <section className='flex flex-col items-center '>
        <SectionTitle>Testy</SectionTitle>
        <ArticlesSection type="testy" key="testy" />
      </section>
      <section className='flex flex-col items-center '>
        <SectionTitle>Relacje</SectionTitle>
        <ArticlesSection type="relacje" key="relacje" />
      </section>
      <section className='flex flex-col items-center '>
        <SectionTitle>Felietony</SectionTitle>
        <ArticlesSection type="felietony" key="felietony" />
      </section>
    </>
  );
}

export default Main;
