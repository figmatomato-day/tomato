import { useState } from 'react';
import svgPaths from "./imports/svg-nhvucrdahi";
import imgRectangle1 from "figma:asset/8281b8ba576186434c56ac510ffe4acf2618135e.png";
import imgGgProfile from "figma:asset/2556ed44a6c69eed507d043b644e7dd3c831ea0b.png";
import imgGgProfile1 from "figma:asset/a118ac40d03447eaacd5e76a600ac8a75cb09ca7.png";
import imgGgProfile2 from "figma:asset/33a4099e0addfd8fd597ec3a700d2f1c1291e216.png";
import imgGgProfile3 from "figma:asset/c975405d3bb367d2ddd3e48679fcfea1f084c24c.png";
import imgGgProfile4 from "figma:asset/485317fc6c75a3b19cb1febdc4b30e8720e3ac20.png";
import imgGgProfile5 from "figma:asset/8f6134717d1b66d7611be7ef9181220aaa19e0a3.png";
import imgRectangle6 from "figma:asset/9376c1239bd91cf7a914df0ed8cee08a174e0220.png";

function Button() {
  return (
    <div className="absolute bg-[#cccc40] box-border content-stretch flex gap-[10px] inset-[69.21%_44.32%_24.37%_44.32%] items-center justify-center px-[50px] py-[20px] rounded-[50px] cursor-pointer hover:bg-[#d4d450] transition-colors" data-name="버튼">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white uppercase whitespace-pre">TELL ME MORE</p>
    </div>
  );
}

function MainText() {
  return (
    <div className="absolute contents inset-[38.63%_29.01%_24.37%_29.01%]" data-name="텍스트">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[38.63%_29.01%_38.52%_29.01%] leading-[normal] not-italic text-[0px] text-center text-white uppercase">
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-0 text-[72px]">Lorem ipsum</p>
        <p className="mb-0 text-[40px]">&nbsp;</p>
        <p className="font-['Inter:Medium',_sans-serif] font-medium mb-0 text-[32px]">Eget quis commodo rhoncus ut.</p>
        <p className="font-['Inter:Medium',_sans-serif] font-medium text-[32px]">Posuere at lacus ante amet ligula.</p>
      </div>
      <Button />
    </div>
  );
}

function NavigationDot({ active }: { active: boolean }) {
  return (
    <div className={`relative shrink-0 ${active ? 'h-[15px] w-[35px]' : 'size-[15px]'}`}>
      <div className={`absolute ${active ? 'bg-[#cccc40]' : 'bg-white'} inset-0 rounded-[15px] cursor-pointer hover:bg-[#cccc40] transition-colors`} />
    </div>
  );
}

function Navigator() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  return (
    <div className="absolute content-stretch flex gap-[24px] inset-[95.54%_46.51%_2.83%_47.6%] items-center justify-center" data-name="네비게이터">
      <div onClick={() => setActiveSlide(0)}>
        <NavigationDot active={activeSlide === 0} />
      </div>
      <div onClick={() => setActiveSlide(1)}>
        <NavigationDot active={activeSlide === 1} />
      </div>
      <div onClick={() => setActiveSlide(2)}>
        <NavigationDot active={activeSlide === 2} />
      </div>
    </div>
  );
}

function MainSection() {
  return (
    <div className="absolute contents inset-[38.63%_29.01%_2.83%_29.01%]" data-name="메인 텍스트">
      <MainText />
      <Navigator />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute contents inset-0" data-name="메인">
      <div className="absolute inset-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-black inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle1} />
        </div>
      </div>
      <MainSection />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[919px] left-0 top-0 w-[1920px]" data-name="main">
      <HeroSection />
    </div>
  );
}

function MenuItem({ label, subItems }: { label: string; subItems: string[] }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-[140px] relative shrink-0 w-[82px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute bottom-[86.43%] content-stretch flex gap-[10px] items-center justify-center left-0 right-[41.46%] top-0">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer hover:text-[#cccc40] transition-colors">{label}</p>
      </div>
      <div 
        className={`absolute bg-[#cccc40] bottom-0 box-border content-stretch flex flex-col gap-[4px] items-start left-0 p-[20px] right-0 rounded-br-[20px] top-[22.86%] transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {subItems.map((item, i) => (
          <div key={i} className="h-[20px] relative shrink-0 w-[42px]">
            <p className="absolute bottom-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] left-0 not-italic text-[12px] text-nowrap text-white top-0 whitespace-pre cursor-pointer hover:underline">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[33px] items-center left-[calc(75%-132px)] top-[122px]">
      <MenuItem label="About" subItems={['sub 01', 'sub 02', 'sub 03']} />
      <MenuItem label="Portfolio" subItems={['sub 01', 'sub 02', 'sub 03']} />
      <MenuItem label="Contact" subItems={['sub 01', 'sub 02', 'sub 03']} />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[300px] top-[122px]" data-name="header">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] left-[300px] not-italic text-[40px] text-nowrap text-white top-[122px] whitespace-pre cursor-pointer">Figma</p>
      <Navigation />
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="bg-[#cccc40] overflow-clip relative rounded-[40px] shrink-0 size-[100px]" data-name="gg:profile">
      <div className="absolute inset-[28%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p7efca80} fill="white" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p15403b00} fill="white" fillRule="evenodd" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center px-[20px] py-0 relative shrink-0">
      <ProfileIcon />
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-center">
        <p className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium ml-[192.975px] mt-0 relative text-[25px] text-black text-nowrap translate-x-[-50%] whitespace-pre">Profile</p>
        <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal h-[57px] ml-[192.5px] mt-[57px] overflow-ellipsis overflow-hidden relative text-[#555555] text-[16px] translate-x-[-50%] w-[385px]">Lorem ipsum dolor sit amet consectetur. Etiam non sit at sed blandit aenean. In nec mauris lectus cursus. Facilisis nisl nullam laoreet urna interdum velit massa molestie id. Commodo viverra volutpat pulvinar viverra dignissim.</p>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[normal] not-italic relative shrink-0 w-[304px]">
      <p className="font-['Inter:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[40px] text-black text-center w-[min-content]">{title}</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#555555] text-[16px] text-nowrap whitespace-pre">{subtitle}</p>
    </div>
  );
}

function About() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[100px] h-[619px] items-center left-[300px] px-0 py-[100px] top-[919px] w-[1321px]" data-name="about">
      <SectionTitle title="About" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <div className="content-center flex flex-wrap gap-[23px] items-center justify-center relative shrink-0 w-full">
        {[...Array(3).keys()].map((_, i) => (
          <ProfileCard key={i} />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ image }: { image: string }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center px-[20px] py-0 relative shrink-0">
      <div className="relative rounded-[40px] shrink-0 size-[380px] overflow-hidden cursor-pointer hover:scale-105 transition-transform" data-name="gg:profile">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <div className="absolute bg-[#cccc40] inset-0 rounded-[40px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={image} />
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-center">
        <p className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium ml-[192.975px] mt-0 relative text-[25px] text-black text-nowrap translate-x-[-50%] whitespace-pre">design</p>
        <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal h-[14px] ml-[192.5px] mt-[57px] overflow-ellipsis overflow-hidden relative text-[#555555] text-[16px] translate-x-[-50%] w-[385px]">Lorem ipsum dolor sit amet consectetur. Etiam non sit at sed blandit aenean. In nec mauris lectus cursus. Facilisis nisl nullam laoreet urna interdum velit massa molestie id. Commodo viverra volutpat pulvinar viverra dignissim.</p>
      </div>
    </div>
  );
}

function Portfolio() {
  const portfolioImages = [
    imgGgProfile,
    imgGgProfile1,
    imgGgProfile2,
    imgGgProfile3,
    imgGgProfile4,
    imgGgProfile5
  ];
  
  return (
    <div className="absolute contents left-[0.5px] top-[1538px]" data-name="portfolio">
      <div className="absolute bg-[#ffffd3] h-[1409px] left-[0.5px] top-[1538px] w-[1920px]" />
      <div className="absolute box-border content-stretch flex flex-col gap-[100px] items-center left-[300px] px-0 py-[100px] top-[1538px] w-[1321px]">
        <SectionTitle title="Portfolio" subtitle="Lorem ipsum dolor sit amet consectetur." />
        <div className="content-center flex flex-wrap gap-[23px] items-center justify-center relative shrink-0 w-full">
          {portfolioImages.map((image, i) => (
            <PortfolioCard key={i} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    memo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[73px] ml-0 mt-0 relative w-[500px]">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name?"
          className="absolute bg-[#e3e3e3] inset-0 px-[29px] py-[25px] font-['Inter:Medium',_sans-serif] font-medium text-[#868686] text-[20px] placeholder:text-[#868686] border-none outline-none"
        />
      </div>
      <div className="[grid-area:1_/_1] h-[73px] ml-0 mt-[93px] relative w-[500px]">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your E-mail?"
          className="absolute bg-[#e3e3e3] inset-0 px-[29px] py-[25px] font-['Inter:Medium',_sans-serif] font-medium text-[#868686] text-[20px] placeholder:text-[#868686] border-none outline-none"
        />
      </div>
      <div className="[grid-area:1_/_1] h-[73px] ml-0 mt-[186px] relative w-[500px]">
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your number?"
          className="absolute bg-[#e3e3e3] inset-0 px-[29px] py-[25px] font-['Inter:Medium',_sans-serif] font-medium text-[#868686] text-[20px] placeholder:text-[#868686] border-none outline-none"
        />
      </div>
      <div className="[grid-area:1_/_1] h-[153px] ml-0 mt-[279px] relative w-[500px]">
        <textarea
          name="memo"
          value={formData.memo}
          onChange={handleChange}
          placeholder="memo"
          className="absolute bg-[#e3e3e3] inset-0 px-[29px] py-[25px] font-['Inter:Medium',_sans-serif] font-medium text-[#868686] text-[20px] placeholder:text-[#868686] border-none outline-none resize-none"
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[100px] items-center left-[300px] px-0 py-[100px] top-[2947px] w-[1321px]" data-name="contact">
      <SectionTitle title="Contact us" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <div className="content-center flex flex-wrap gap-[23px] items-center justify-center relative shrink-0 w-full">
        <ContactForm />
        <div className="h-[462px] relative shrink-0 w-[600px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative size-full overflow-x-hidden" data-name="피씨">
      <Main />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
