import ArticlesSection from "./ArticlesSection"
import HeroSection from "./HeroSection"
import SectionTitle from "./SectionTitle"

function Main() {
    return (
        <div className="flex flex-col items-center ">
            <SectionTitle>Najnowsze</SectionTitle>
            <HeroSection />
            <SectionTitle>Newsy</SectionTitle>
            <ArticlesSection type="newsy" key="newsy"/>
            <SectionTitle>Testy</SectionTitle>
            <ArticlesSection type="testy" key="testy"/>
            <SectionTitle>Relacje</SectionTitle>
            <ArticlesSection type="relacje" key="relacje"/>
            <SectionTitle>Felietony</SectionTitle>
            <ArticlesSection type="felietony" key="felietony"/>
        </div>
    )
}

export default Main
