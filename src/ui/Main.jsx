import ArticlesSection from "./ArticlesSection"
import HeroSection from "./HeroSection"
import SectionTitle from "./SectionTitle"

function Main() {
    return (
        <div className="flex flex-col items-center ">
            <SectionTitle>Najnowsze</SectionTitle>
            <HeroSection />
            <SectionTitle>Newsy</SectionTitle>
            <ArticlesSection />
            <SectionTitle>Testy</SectionTitle>
            <ArticlesSection />
            <SectionTitle>Relacje</SectionTitle>
            <ArticlesSection />
            <SectionTitle>Felietony</SectionTitle>
            <ArticlesSection />
        </div>
    )
}

export default Main
