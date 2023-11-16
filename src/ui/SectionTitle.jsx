function SectionTitle({ children }) {
  return (
    <div className="w-[90%] md:w-[65%]">
      <h1 className="section-header text-[1.7rem] md:text-[2rem] font-medium  my-7 border-l-8 border-orange-600 pl-[1rem] md:pl-[2rem] flex flex-row items-center font-sectionHeader font">
        {children}
      </h1>
    </div>
  );
}

export default SectionTitle;
