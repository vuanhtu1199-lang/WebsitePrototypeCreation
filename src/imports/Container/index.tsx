import svgPaths from "./svg-mayngbnpg9";
import imgContainer from "./995af0a91b969218e5730846fa0b595d97fc064b.png";
import imgImageConstructQueensland from "./09226c2e8d97c3c0c5923aa477aa8ef349cbed29.png";

function Container2() {
  return <div className="absolute h-[968.5px] left-0 top-0 w-[375px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 375 968.5' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -77.892 -77.892 0 281.25 242.13)'><stop stop-color='rgba(229,184,105,0.1)' offset='0'/><stop stop-color='rgba(229,184,105,0)' offset='0.6'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(10, 27, 58, 0.68) 0%, rgba(6, 16, 36, 0.88) 100%)" }} data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[968.5px] left-0 overflow-clip top-0 w-[375px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0a1b3a] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
      </div>
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_6)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start pt-[5.25px] relative shrink-0" data-name="Icon:margin">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[21.75px] items-start left-0 top-[3.75px]" data-name="Paragraph">
      <IconMargin />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21.75px] not-italic relative shrink-0 text-[15px] text-white tracking-[0.6px] uppercase whitespace-nowrap">Executive Construction Advisory</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[35.2px] text-white tracking-[-1.056px] w-[335px] whitespace-pre-wrap">
        <p className="leading-[40.48px] mb-0">{`Certainty in Delivery, `}</p>
        <p className="leading-[40.48px] text-[#e5b869]">Excellence in Leadership</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[27.2px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.92)] w-[335px]">{`Construct Queensland provides government departments and asset leaders with executive-tier construction leadership and delivery capability across complex, high-risk portfolios. `}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[227_0_0] flex-col items-center min-w-px px-[24px] py-[16px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[19.8px] relative shrink-0 text-[#0a1b3a] text-[16.5px] text-center whitespace-nowrap">Our Capabilities</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="max-h-[23px] max-w-[23px] relative shrink-0 size-[23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
        <g id="Icon">
          <path d={svgPaths.p102e07c0} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#d4a44f] border-[rgba(10,27,58,0.42)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[58px]" data-name="Text">
        <Icon1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#e5b869] border border-[#e5b869] border-solid content-stretch flex items-center justify-center left-0 top-0 w-[335px]" data-name="Link">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[227_0_0] flex-col items-center min-w-px px-[24px] py-[16px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.8px] relative shrink-0 text-[16.5px] text-center text-white whitespace-nowrap">View Projects</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="max-h-[23px] max-w-[23px] relative shrink-0 size-[23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
        <g id="Icon">
          <path d={svgPaths.p102e07c0} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[58px]" data-name="Text">
        <Icon2 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex items-center justify-center left-0 top-[65.8px] w-[335px]" data-name="Link">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[119.594px] relative shrink-0 w-[335px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[460.5_0_0] flex-col items-start min-h-px relative w-[335px]" data-name="Container">
      <Container4 />
      <Heading />
      <Paragraph1 />
      <ContainerMargin />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#e5b869] text-[32px] tracking-[-0.96px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[289px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.88)] whitespace-nowrap">Years of Executive Experience</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start px-[22px] py-[20px] relative shrink-0 w-[335px]" data-name="Container">
      <Container8 />
      <Paragraph2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#e5b869] text-[32px] tracking-[-0.96px] whitespace-nowrap">24+</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[289px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.88)] whitespace-nowrap">Landmark Infrastructure Projects</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start px-[22px] py-[20px] relative shrink-0 w-[335px]" data-name="Container">
      <Container10 />
      <Paragraph3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#e5b869] text-[32px] tracking-[-0.96px] whitespace-nowrap">$2B+</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[289px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.88)] whitespace-nowrap">Capital Programme Oversight</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start px-[22px] py-[20px] relative shrink-0 w-[335px]" data-name="Container">
      <Container12 />
      <Paragraph4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[335px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[891.5px] items-start left-0 pb-[44px] pt-[32px] px-[20px] top-[77px] w-[375px]" data-name="Section">
      <Container3 />
      <Container6 />
    </div>
  );
}

function ImageConstructQueensland() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Image (Construct Queensland)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageConstructQueensland} />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116.109px]" data-name="Link">
      <ImageConstructQueensland />
    </div>
  );
}

function Text5() {
  return <div className="bg-white h-[2px] relative shrink-0 w-[30px]" data-name="Text" />;
}

function Text6() {
  return <div className="bg-white h-[2px] relative shrink-0 w-[30px]" data-name="Text" />;
}

function Text7() {
  return <div className="bg-white h-[2px] relative shrink-0 w-[30px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-between relative shrink-0 w-[30px]" data-name="Text">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function ButtonToggleNavigationMenu() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[44px] min-w-[44px] p-[10px] relative shrink-0" data-name="Button - Toggle navigation menu">
      <Text4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Link2 />
      <ButtonToggleNavigationMenu />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0)] border-[rgba(255,255,255,0.08)] border-b border-solid content-stretch flex flex-col items-start left-0 py-[16px] top-0" data-name="Banner">
      <Container13 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#0a1b3a] relative size-full" data-name="Container">
      <Container1 />
      <Section />
      <Banner />
    </div>
  );
}