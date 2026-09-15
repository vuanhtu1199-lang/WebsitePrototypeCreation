import svgPaths from "./svg-hlp6ebxj1v";
import imgFrame5 from "./da27a46dc8078953aa73c2d2588b2b7193da4107.png";
import imgFrame6 from "./142b0b7396ef766d3115b4a7236c1bbe9aac27f8.png";
import imgContainer from "./995af0a91b969218e5730846fa0b595d97fc064b.png";
import imgImageConstructQueensland from "./09226c2e8d97c3c0c5923aa477aa8ef349cbed29.png";
import imgGoldCoastAirportInternationalTerminal91 from "./62b5fb7399a4c8e07cf4f8e8ad76993ccf2668ca.png";
import imgFrame7 from "./4e5394a6920318e4a6e974f3cd9674b0a5fe7dd6.png";
import imgFrame8 from "./4e616da646f44f330ed4425184c9032ef98089bb.png";
import imgFrame9 from "./ddb7aefbfc3acccd1672c9bdd2284e0d16d9c457.png";
import imgFrame10 from "./85c24732ddc9b63aa6887c9e01682297ee32eb7b.png";
import imgContainer1 from "./f0a5ae6d016f6e0b35305126c7e539647c478e77.png";
import imgImageDavidLansdell from "./8d29293451dd8fdfea0fc92f15f3b91f17684b40.png";
import imgImageQueenslandGovernment from "./afe076ce4c7ecd668cb18150ea361de4823d102a.png";
import imgImageBrisbaneAirport from "./d08b16d98b2970922879f37b72b2018bb4030d11.png";
import imgImageBrisbaneCityCouncil from "./eed8866d2447cde40b3ac449c31b845a6ca07f8b.png";
import imgImageDefence from "./794d6512373440c293f1f5b937f4c2036f196191.png";
import imgImageQueenslandHealth from "./837c8157faf2063b319f28be40562d69271536ea.png";
import imgImageQueenslandRail from "./b19a61d35b5930286cfc5def3d4442f671c427fa.png";
import imgImageTransurban from "./b067922edabb8532b905bb864b3054ffef48685f.png";
import imgImageAirservicesAustralia from "./d686d5bde99ec2c63c1ef080d3a749ba1d112069.png";
import imgImageEducation from "./b43a7d3e34803702798c223d5ecd64bd4c9519e7.png";
import imgImageHousing from "./5270e57075b8d535ff0d08953d66d4a1f1904d9c.png";
import imgImageYouthJustice from "./18b8158d1b409900526e85d8a6d8679b151f19ce.png";
import imgImageAirports from "./0e900319e754d23ebf4783ad2193a37703d90d43.png";
import imgImageQcs from "./03155c7a3b333db917e755eb7abe64a429ba658b.png";
import imgImageRegis from "./ca03546fe94b6752d299c57012918f86053fcb09.png";
import imgImageStVincents from "./2f62ae2c28533167af9b49ac90d935d6984961d0.png";
import imgImageBloomberg from "./b63759244a0d5c207c80d1ed6161d387855abed4.png";
import imgImageDavidLansdellDirector from "./3849eacacaa613d286caca5a991e26fa60175bda.png";
import imgImageConstructionBackground from "./c9a857ac12e83ad66507bb2254e207dabba94373.png";
type ProjectProps = {
  className?: string;
  breakpoint?: "Mobile";
  hover?: "Default";
  ratio?: "4:3" | "3:4";
};

function Project({ className, breakpoint = "Mobile", hover = "Default", ratio = "4:3" }: ProjectProps) {
  const isDefaultAnd34AndMobile = hover === "Default" && ratio === "3:4" && breakpoint === "Mobile";
  const isDefaultAnd43AndMobile = hover === "Default" && ratio === "4:3" && breakpoint === "Mobile";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <div className={`content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[335px] ${isDefaultAnd34AndMobile ? "h-[447px]" : "h-[251px]"}`}>
          {isDefaultAnd43AndMobile && (
            <>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame5} />
              <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
                      <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
                        <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
                          <g id="Layer_1">
                            <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
                  <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
                    <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
                      <g id="Layer_1">
                        <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
          {isDefaultAnd34AndMobile && (
            <>
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame5} />
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame6} />
              </div>
              <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
                      <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
                        <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
                          <g id="Layer_1">
                            <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
                  <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
                    <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
                      <g id="Layer_1">
                        <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
            </div>
            <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
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

function Container() {
  return (
    <div className="bg-[#0a1b3a] h-[968.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Section />
      <Banner />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[250.961px]" data-name="Paragraph">
      <IconMargin1 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">About Construct Queensland</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[35.52px] relative shrink-0 text-[#0a1b3a] text-[29.6px] tracking-[-0.74px] w-[335px]">Where Policy Intent Meets On-the-Ground Delivery</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[29.7px] relative shrink-0 text-[#475467] text-[18px] w-[335px]">{`Established in 2019 by Director David Lansdell, Construct Queensland operates at the executive echelon of infrastructure delivery. Having served as Construction Director and Executive Director for critical Queensland portfolios, we bridge commercial rigour with government governance. `}</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container18 />
      <Heading1 />
      <ParagraphMargin />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame10 />
      <div className="aspect-[844/676] relative shrink-0 w-full" data-name="Gold Coast Airport International Terminal 9 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoldCoastAirportInternationalTerminal91} />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
        <g id="Icon">
          <path d={svgPaths.p1ccfcf0} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#0a1b3a] text-[18px] w-full">{`Executive Secondment & Advisory`}</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Seamless integration into departmental delivery units, providing instant leadership uplift, clear delegations, and strategic accountability on public works.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch p-[24px] relative row-1 self-start shrink-0" data-name="Container">
      <Icon4 />
      <Frame6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
        <g id="Icon">
          <path d={svgPaths.p8a48180} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#0a1b3a] text-[18px] w-full">Modern Methods of Construction (MMC)</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Pioneered the Queensland Government MMC Programme in partnership with the Office of the Queensland Government Architect (OQGA), advancing modular and off-site delivery.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch p-[24px] relative row-2 self-start shrink-0" data-name="Container">
      <Icon5 />
      <Frame7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
        <g id="Icon">
          <path d={svgPaths.p6cfd400} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#0a1b3a] text-[18px] w-full">{`Programme Recovery & Cost Certainty`}</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Targeted high-value interventions that turn around distressed projects, restore stakeholder confidence, and establish ironclad constructability pathways under budget.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch p-[24px] relative row-3 self-start shrink-0" data-name="Container">
      <Icon6 />
      <Frame8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container15 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[170.32px]" data-name="Paragraph">
      <IconMargin2 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Selected Projects</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[32px] text-white tracking-[-0.8px] w-[335px]">Explore our landmark portfolio.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[335px]" data-name="Container">
      <Container26 />
      <Heading2 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[158.477_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p30053000} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon8 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex h-[49.195px] items-center justify-center left-0 top-[160.49px] w-[262.477px]" data-name="Link">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[209.688px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Link3 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text10 />
    </div>
  );
}

function Layer() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
          <Layer />
        </div>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[251px] items-start relative shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame7} />
      <Button />
      <Button1 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph8 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text13 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
          <Layer2 />
        </div>
      </div>
    </div>
  );
}

function Layer3() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[447px] items-start relative shrink-0 w-[335px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame5} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame6} />
      </div>
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph9 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text16 />
    </div>
  );
}

function Layer4() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
          <Layer4 />
        </div>
      </div>
    </div>
  );
}

function Layer5() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[251px] items-start relative shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame8} />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph10 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text19 />
    </div>
  );
}

function Layer6() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
          <Layer6 />
        </div>
      </div>
    </div>
  );
}

function Layer7() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer7 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[447px] items-start relative shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame9} />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph11 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text22 />
    </div>
  );
}

function Layer8() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="backdrop-blur-[17.143px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-start p-[4.286px] relative" data-name="Text">
          <Layer8 />
        </div>
      </div>
    </div>
  );
}

function Layer9() {
  return (
    <div className="relative shrink-0 size-[21.429px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
        <g id="Layer_1">
          <path d={svgPaths.p33b71300} fill="white" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer9 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[251px] items-start relative shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10} />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph12 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white w-full">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center pt-[56px] relative shrink-0 w-[1265px]">
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame4 />
          <Container27 />
        </div>
      </div>
      <Project className="relative shrink-0" />
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame9 />
          <Container28 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame11 />
          <Container29 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame12 />
          <Container30 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame13 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container24 />
      <Frame5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-start py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container23 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon9 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[143.445px]" data-name="Paragraph">
      <IconMargin3 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">Our Commitment</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[#111827] text-[32px] tracking-[-0.8px] whitespace-nowrap">Why Choose Us</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Heading3 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[29.7px] relative shrink-0 text-[#5b6574] text-[18px] w-[335px]">{`At Construct Queensland, we understand that choosing the right construction leadership partner is decisive for the success of your capital programme. Here is why government departments and institutional owners choose us: `}</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p10b1df80} fill="#E5B869" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Senior Executive Involvement</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="List Item">
      <Icon10 />
      <Text25 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p10b1df80} fill="#E5B869" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">On-Time, On-Budget Integrity</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="List Item">
      <Icon11 />
      <Text26 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p10b1df80} fill="#E5B869" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Safety and Compliance</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="List Item">
      <Icon12 />
      <Text27 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p10b1df80} fill="#E5B869" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Client-Centred Approach</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-4 self-stretch shrink-0" data-name="List Item">
      <Icon13 />
      <Text28 />
    </div>
  );
}

function List() {
  return (
    <div className="gap-x-[20px] gap-y-[16px] grid grid-cols-[_335px] grid-rows-[____24px_24px_24px_24px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[30px] relative shrink-0 w-full" data-name="List:margin">
      <List />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Paragraph14 />
      <ListMargin />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#0a1b3a] text-[32px] tracking-[-0.8px] whitespace-nowrap">100%</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-[143.5px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase w-[144px]">Programme Governance</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container40 />
      <Paragraph15 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#0a1b3a] text-[32px] tracking-[-0.8px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-[143.5px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase w-[144px]">Years of Experience</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container42 />
      <Paragraph16 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#0a1b3a] text-[32px] tracking-[-0.8px] whitespace-nowrap">24+</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-[143.5px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase w-[144px]">Completed Landmarks</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Container44 />
      <Paragraph17 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#0a1b3a] text-[32px] tracking-[-0.8px] whitespace-nowrap">16+</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-[143.5px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase w-[144px]">Government Clients</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Container46 />
      <Paragraph18 />
    </div>
  );
}

function Container38() {
  return (
    <div className="gap-x-[48px] gap-y-[40px] grid grid-cols-[__143.50px_143.50px] grid-rows-[__80px_80px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
      <Container43 />
      <Container45 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full" data-name="Container:margin">
      <Container38 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <ContainerMargin1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container47() {
  return (
    <div className="col-1 justify-self-stretch min-h-[280px] relative row-2 self-stretch shrink-0" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container32() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[_335px] grid-rows-[__743.96px_280px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container47 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[60px] relative shrink-0 w-[375px]" data-name="Section">
      <Container32 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon14 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[107.602px]" data-name="Paragraph">
      <IconMargin4 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">What We Do</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[#111827] text-[32px] tracking-[-0.8px] w-[335px]">Comprehensive Construction Services</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[29.7px] relative shrink-0 text-[#5b6574] text-[18px] w-[335px]">{`Senior-level construction leadership and delivery capability for complex, high-risk capital portfolios. `}</p>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph20 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Heading4 />
      <ParagraphMargin1 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-[158.477_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Discuss Engagement</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p3c2a0580} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon15 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex h-[49.195px] items-center justify-center left-0 top-0 w-[262.477px]" data-name="Link">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[49.195px] relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5b6574] text-[16px] whitespace-nowrap">Contact Us for Consultation</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[6px] relative shrink-0 w-[335px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b6574] text-[0px] whitespace-nowrap">
        <span className="leading-[24px] text-[16px]">{`Call us: `}</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[24px] text-[#0a1b3a] text-[16px]">0436 603 061</span>
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
      <Container56 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[36px] relative shrink-0 w-full" data-name="Container:margin">
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col h-[195.195px] items-start pt-[56px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <ContainerMargin2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container51 />
      <Container53 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#01</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">Executive Portfolio Leadership</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">Director-level secondment into your portfolio, with authority over governance, delegations and risk decisions.</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__24.30px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container60 />
      <Heading5 />
      <Paragraph22 />
    </div>
  );
}

function Container62() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#02</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[48.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] w-[265px]">Client-Sided Project Management</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">A low-friction extension of your existing delivery unit, holding the contractor and consultant interfaces day to day.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__48.59px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container62 />
      <Heading6 />
      <Paragraph23 />
    </div>
  );
}

function Container64() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#03</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">{`Business Cases & PAF Studies`}</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">Investment-grade business cases tested for constructability, cost and time viability before funding is committed.</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__24.30px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container64 />
      <Heading7 />
      <Paragraph24 />
    </div>
  );
}

function Container66() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#04</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[48.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] w-[265px]">Modern Methods of Construction</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">Modularisation, DfMA and off-site prefabrication, used to compress delivery schedules on social housing programmes.</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__48.59px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container66 />
      <Heading8 />
      <Paragraph25 />
    </div>
  );
}

function Container68() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#05</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[48.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] w-[265px]">Superintendent Contract Admin</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">Impartial superintendent services under AS 2124, AS 4000 and AS 4902, certifying claims, time extensions and completion.</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__48.59px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container68 />
      <Heading9 />
      <Paragraph26 />
    </div>
  );
}

function Container70() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#06</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[48.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] w-[265px]">Distressed Programme Recovery</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[265px]">Forensic intervention on stalled programmes. We reset the baseline and stage the works so live sites keep operating.</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[20px] gap-y-[16px] grid-cols-[__50px_265px] grid-rows-[__48.59px_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container70 />
      <Heading10 />
      <Paragraph27 />
    </div>
  );
}

function Container58() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container61 />
      <Container63 />
      <Container65 />
      <Container67 />
      <Container69 />
    </div>
  );
}

function Container57() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[1435.531px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container49() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[_335px] grid-rows-[__422.77px_1435.53px] h-[1906.305px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container57 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col items-start py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container48 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin5() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon16 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[107.602px]" data-name="Paragraph">
      <IconMargin5 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Trusted By</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[33.6px] relative shrink-0 text-[28px] text-white tracking-[-0.7px] w-[335px]">{`Key Statutory Authorities & Tier-1 Operators`}</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[780px] top-0 w-[335px]" data-name="Container">
      <Container74 />
      <Heading11 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-[96.469_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p3c2a0580} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon17 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex h-[49.195px] items-center justify-center left-0 top-[136.88px] w-[200.469px]" data-name="Link">
      <Text31 />
      <Text32 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[186.078px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Link5 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Light',sans-serif] font-light leading-[26.4px] relative shrink-0 text-[17.6px] text-white tracking-[-0.44px] w-[293px]">{`"Construct Queensland bridges the gap between executive policy intent and practical contractor execution. In high-risk brownfield and government portfolios, our sustained focus on constructability, cost certainty, and transparent governance delivers landmark results." `}</p>
    </div>
  );
}

function ImageDavidLansdell() {
  return (
    <div className="pointer-events-none relative shrink-0 size-[54px]" data-name="Image (David Lansdell)">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImageDavidLansdell} />
      <div aria-hidden className="absolute border-2 border-[#e5b869] border-solid inset-0" />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[18px] text-white whitespace-nowrap">David Lansdell</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase w-[223px]">Director — Construct Queensland | Former Executive Director, QLD Government</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[223px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[18px] relative shrink-0 w-full" data-name="Container">
      <ImageDavidLansdell />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#14161a] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start px-[20px] py-[24px] relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <Container76 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[44px] relative shrink-0 w-full" data-name="Container:margin">
      <Container75 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin6() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon18 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[116.563px]" data-name="Container">
      <IconMargin6 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Our Clients</p>
    </div>
  );
}

function Container81() {
  return <div className="bg-[rgba(255,255,255,0.45)] flex-[194.438_0_0] h-px min-w-px relative" data-name="Container" />;
}

function Container79() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[335px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function ImageQueenslandGovernment() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[131.422px]" data-name="Image (Queensland Government)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandGovernment} />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandGovernment />
    </div>
  );
}

function ImageBrisbaneAirport() {
  return (
    <div className="h-[52px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[87.117px]" data-name="Image (Brisbane Airport)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBrisbaneAirport} />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBrisbaneAirport />
    </div>
  );
}

function ImageBrisbaneCityCouncil() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[112.625px]" data-name="Image (Brisbane City Council)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBrisbaneCityCouncil} />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBrisbaneCityCouncil />
    </div>
  );
}

function ImageDefence() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[154.758px]" data-name="Image (Defence)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageDefence} />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageDefence />
    </div>
  );
}

function ImageQueenslandHealth() {
  return (
    <div className="h-[30px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[214.281px]" data-name="Image (Queensland Health)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandHealth} />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandHealth />
    </div>
  );
}

function ImageQueenslandRail() {
  return (
    <div className="h-[26px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[221.539px]" data-name="Image (Queensland Rail)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandRail} />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandRail />
    </div>
  );
}

function ImageTransurban() {
  return (
    <div className="h-[26px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[167.289px]" data-name="Image (Transurban)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageTransurban} />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageTransurban />
    </div>
  );
}

function ImageAirservicesAustralia() {
  return (
    <div className="h-[40px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[108.82px]" data-name="Image (Airservices Australia)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAirservicesAustralia} />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageAirservicesAustralia />
    </div>
  );
}

function ImageEducation() {
  return (
    <div className="h-[30px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Education)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEducation} />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageEducation />
    </div>
  );
}

function ImageHousing() {
  return (
    <div className="h-[28px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Housing)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageHousing} />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageHousing />
    </div>
  );
}

function ImageYouthJustice() {
  return (
    <div className="h-[29px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Youth Justice)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageYouthJustice} />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageYouthJustice />
    </div>
  );
}

function ImageAirports() {
  return (
    <div className="h-[42px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[123.523px]" data-name="Image (Airports)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAirports} />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageAirports />
    </div>
  );
}

function ImageQcs() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[131px]" data-name="Image (QCS)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQcs} />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQcs />
    </div>
  );
}

function ImageRegis() {
  return (
    <div className="h-[32px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[190.813px]" data-name="Image (Regis)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageRegis} />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageRegis />
    </div>
  );
}

function ImageStVincents() {
  return (
    <div className="h-[44px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[130.516px]" data-name="Image (St Vincents)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageStVincents} />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageStVincents />
    </div>
  );
}

function ImageBloomberg() {
  return (
    <div className="h-[32px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[153.719px]" data-name="Image (Bloomberg)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBloomberg} />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBloomberg />
    </div>
  );
}

function ImageQueenslandGovernment1() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[131.422px]" data-name="Image (Queensland Government)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandGovernment} />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandGovernment1 />
    </div>
  );
}

function ImageBrisbaneAirport1() {
  return (
    <div className="h-[52px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[87.117px]" data-name="Image (Brisbane Airport)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBrisbaneAirport} />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBrisbaneAirport1 />
    </div>
  );
}

function ImageBrisbaneCityCouncil1() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[112.625px]" data-name="Image (Brisbane City Council)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBrisbaneCityCouncil} />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBrisbaneCityCouncil1 />
    </div>
  );
}

function ImageDefence1() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[154.758px]" data-name="Image (Defence)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageDefence} />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageDefence1 />
    </div>
  );
}

function ImageQueenslandHealth1() {
  return (
    <div className="h-[30px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[214.281px]" data-name="Image (Queensland Health)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandHealth} />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandHealth1 />
    </div>
  );
}

function ImageQueenslandRail1() {
  return (
    <div className="h-[26px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[221.539px]" data-name="Image (Queensland Rail)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQueenslandRail} />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQueenslandRail1 />
    </div>
  );
}

function ImageTransurban1() {
  return (
    <div className="h-[26px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[167.289px]" data-name="Image (Transurban)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageTransurban} />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageTransurban1 />
    </div>
  );
}

function ImageAirservicesAustralia1() {
  return (
    <div className="h-[40px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[108.82px]" data-name="Image (Airservices Australia)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAirservicesAustralia} />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageAirservicesAustralia1 />
    </div>
  );
}

function ImageEducation1() {
  return (
    <div className="h-[30px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Education)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageEducation} />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageEducation1 />
    </div>
  );
}

function ImageHousing1() {
  return (
    <div className="h-[28px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Housing)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageHousing} />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageHousing1 />
    </div>
  );
}

function ImageYouthJustice1() {
  return (
    <div className="h-[29px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[240px]" data-name="Image (Youth Justice)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageYouthJustice} />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageYouthJustice1 />
    </div>
  );
}

function ImageAirports1() {
  return (
    <div className="h-[42px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[123.523px]" data-name="Image (Airports)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageAirports} />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageAirports1 />
    </div>
  );
}

function ImageQcs1() {
  return (
    <div className="h-[38px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[131px]" data-name="Image (QCS)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageQcs} />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageQcs1 />
    </div>
  );
}

function ImageRegis1() {
  return (
    <div className="h-[32px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[190.813px]" data-name="Image (Regis)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageRegis} />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageRegis1 />
    </div>
  );
}

function ImageStVincents1() {
  return (
    <div className="h-[44px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[130.516px]" data-name="Image (St Vincents)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageStVincents} />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageStVincents1 />
    </div>
  );
}

function ImageBloomberg1() {
  return (
    <div className="h-[32px] max-h-[56px] max-w-[240px] opacity-78 relative shrink-0 w-[153.719px]" data-name="Image (Bloomberg)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBloomberg} />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBloomberg1 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-[7030.844px]" data-name="Container">
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
      <Container101 />
      <Container102 />
      <Container103 />
      <Container104 />
      <Container105 />
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
      <Container111 />
      <Container112 />
      <Container113 />
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start overflow-clip py-[10px] relative shrink-0 w-[335px]" data-name="Container">
      <Container83 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[36px] relative shrink-0" data-name="Container:margin">
      <Container82 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col h-[168px] items-start pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <ContainerMargin4 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container72 />
      <ContainerMargin3 />
      <Container78 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-start py-[60px] relative shrink-0 w-full" data-name="Section">
      <Container71 />
    </div>
  );
}

function ImageDavidLansdellDirector() {
  return (
    <div className="h-[445.977px] relative shrink-0 w-full" data-name="Image (David Lansdell - Director)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDavidLansdellDirector} />
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#0a1b3a] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Container">
      <ImageDavidLansdellDirector />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin7() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon19 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex gap-[10px] h-[38px] items-start pb-[18px] relative shrink-0 w-[170.32px]" data-name="Paragraph">
      <IconMargin7 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">Executive Profile</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-start pb-[18px] relative shrink-0 w-[206px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[#111827] text-[32px] tracking-[-0.8px] whitespace-nowrap">David Lansdell</p>
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Container:margin">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#e5b869] text-[18px] w-[285px]">{`Director — Construct Queensland `}</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p27a39400} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Executive Director (QLD Gov)</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Icon20 />
      <Text33 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p27a39400} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] w-[257px]">Lendlease Senior Leadership Alumnus</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Icon21 />
      <Text34 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p27a39400} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] w-[257px]">Lead for MMC Programme Delivery (OQGA)</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Icon22 />
      <Text35 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p27a39400} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] w-[257px]">{`Corrections, Health & Aviation Expert`}</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <Icon23 />
      <Text36 />
    </div>
  );
}

function Container119() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_285px] grid-rows-[____24px_48px_48px_48px] relative shrink-0 w-[285px]" data-name="Container">
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28px] pt-[24px] relative shrink-0" data-name="Container:margin">
      <Container119 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p27a46300} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">0436 603 061</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 min-h-[44px] py-[8px] top-[22px]" data-name="Link">
      <Icon24 />
      <Text37 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Icon">
          <path d={svgPaths.p2aa90880} fill="#5B6574" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">dlansdell@constructqld.com.au</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 min-h-[44px] py-[8px] top-[88px]" data-name="Link">
      <Icon25 />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-[138.148_0_0] flex-col items-center min-w-px px-[20px] py-[8px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[16.8px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Connect on LinkedIn</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p2434d500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[38px]" data-name="Text">
        <Icon26 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex items-center justify-center left-0 top-[154px] w-[218.148px]" data-name="Link">
      <Text39 />
      <Text40 />
    </div>
  );
}

function Container124() {
  return (
    <div className="border-[#eef0f2] border-solid border-t h-[189.797px] relative shrink-0 w-[285px]" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container118() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch px-[24px] py-[32px] relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph32 />
      <Heading12 />
      <ContainerMargin5 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#5b6574] text-[16px] w-[285px]">{`Over 25 years across government and tier-1 delivery, including the QCS portfolio of works — with the institutional insight and senior-level visibility rarely accessible to external advisors. `}</p>
      <ContainerMargin6 />
      <Container124 />
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-white border border-[#eef0f2] border-solid grid grid-cols-[_333px] grid-rows-[__445.98px_826.77px] h-[1274.75px] overflow-clip relative shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Container">
      <Container117 />
      <Container118 />
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[60px] relative shrink-0 w-[375px]" data-name="Section">
      <Container116 />
    </div>
  );
}

function Container125() {
  return <div className="h-[1017.383px] relative shrink-0 w-full" data-name="Container" />;
}

function ImageConstructionBackground() {
  return (
    <div className="h-[122.734px] opacity-18 relative shrink-0 w-[184.25px]" data-name="Image (Construction background)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageConstructionBackground} />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[20px] top-[1034.65px] w-[375px]" data-name="Container">
      <ImageConstructionBackground />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_114)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_114">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin8() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon27 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <IconMargin8 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0a1b3a] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">{`ENGAGEMENT & CONSULTATION`}</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[#0a1b3a] text-[32px] tracking-[-0.8px] w-[384px]">Partner with Construct Queensland</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container130 />
      <Heading13 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#5b6574] text-[16px] w-full">{`Whether you require executive secondment to stabilise a high-risk portfolio, strategic advisory for PAF business cases, or expert client-sided project leadership, our directors are available for confidential consultations. `}</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container129 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[26.4px] relative shrink-0 text-[#0a1b3a] text-[22px] tracking-[-0.55px] whitespace-nowrap">Request a Consultation</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col h-[26.398px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading14 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[28.398px] items-start pb-[2px] relative shrink-0 w-full" data-name="Container:margin">
      <Container132 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">First Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[46.5px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-name="Text Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[16px] w-full">Enter your first name</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Last Name</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[46.5px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-name="Text Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[16px] w-full">Enter your last name</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[46.5px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-name="Email Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[16px] w-full">Enter your email address</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <EmailInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Phone Number</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[46.5px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-name="Phone Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[16px] w-full">Enter your phone number</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <PhoneInput />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Message</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[120px] items-start min-h-[120px] overflow-clip px-[14px] py-[12px] relative shrink-0 w-full" data-name="Text Area">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[16px] w-full">Outline your portfolio, programme requirements, or advisory needs...</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[149px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <TextArea />
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white tracking-[0.96px] uppercase whitespace-nowrap">Request a Consultation</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p30053000} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex items-center justify-center relative shrink-0 size-[46px]" data-name="Text">
      <Icon28 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex h-[49.195px] items-center justify-center min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <Text41 />
      <Text42 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white border-[#0a1b3a] border-solid border-t-2 content-stretch drop-shadow-[0px_4px_12px_rgba(10,27,58,0.05)] flex flex-col gap-[20px] items-start px-[20px] py-[28px] relative shrink-0 w-full" data-name="Form">
      <ContainerMargin7 />
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
      <Container137 />
      <Button10 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Form />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[20px] top-[80px] w-[335px]" data-name="Container">
      <Container128 />
      <Container131 />
    </div>
  );
}

function Section7() {
  return (
    <div className="bg-[#f0f4f8] content-stretch flex flex-col h-[1157.383px] items-start overflow-clip pb-[60px] pt-[80px] relative shrink-0 w-full" data-name="Section">
      <Container125 />
      <Container126 />
      <Container127 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute border border-[#161616] border-solid h-[26.398px] left-0 top-0 w-[163.047px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[14.4px] left-[12px] text-[#161616] text-[12px] top-[4.5px] tracking-[0.72px] uppercase whitespace-nowrap">Common Enquiries</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[26.398px] relative shrink-0 w-full" data-name="Container">
      <Container143 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[#161616] text-[32px] tracking-[-0.8px] w-[335px]">Frequently Asked Questions</p>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading15 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Heading2Margin />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#161616] text-[20px] tracking-[-0.5px] whitespace-nowrap">Have a Specific Programme Enquiry?</p>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6b7280] text-[16px] w-[320px]">Our executive leadership is available to discuss advisory mandates, programme recoveries, and procurement pathways.</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start pt-[18px] relative shrink-0 w-[335px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[0px] whitespace-nowrap">
        <span className="leading-[24px] text-[16px]">{`Call us: `}</span>
        <span className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] text-[#161616] text-[16px]">0436 603 061</span>
      </p>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col h-[188px] items-start pt-[40px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading16 />
      <ParagraphMargin2 />
      <Container145 />
    </div>
  );
}

function Container140() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container141 />
      <Container144 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">What sectors and project scopes does Construct Queensland specialise in?</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading17 />
      <Container149 />
    </div>
  );
}

function Container147() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container148 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">How do government departments and institutional clients engage your services?</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading18 />
      <Container152 />
    </div>
  );
}

function Container150() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container151 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">{`What is Construct Queensland’s role in Programme Recovery & Distressed Projects?`}</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading19 />
      <Container155 />
    </div>
  );
}

function Container153() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container154 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">Do you provide design management and Modern Methods of Construction (MMC) advisory?</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading20 />
      <Container158 />
    </div>
  );
}

function Container156() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container157 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">What contract administration and Superintendent services do you offer?</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading21 />
      <Container161 />
    </div>
  );
}

function Container159() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container160 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21.6px] relative shrink-0 text-[#161616] text-[16px] w-[287px]">How does Construct Queensland integrate with existing departmental delivery teams?</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p9106f00} fill="#161616" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[335px]" data-name="Container">
      <Heading22 />
      <Container164 />
    </div>
  );
}

function Container162() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container163 />
    </div>
  );
}

function Container146() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-start relative row-2 self-stretch shrink-0 w-[335px]" data-name="Container">
      <Container147 />
      <Container150 />
      <Container153 />
      <Container156 />
      <Container159 />
      <Container162 />
    </div>
  );
}

function Container139() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[_335px] grid-rows-[__315.20px_682.69px] relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container146 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container139 />
    </div>
  );
}

function Section8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[70px] pt-[60px] relative shrink-0 w-full" data-name="Section">
      <Container138 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}

function ImageConstructQueensland1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[95px]" data-name="Image (Construct Queensland)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageConstructQueensland} />
    </div>
  );
}

function LinkConstructQueensland() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Construct Queensland">
      <ImageConstructQueensland1 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[380px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[335px]">{`Specialist infrastructure advisory and executive project delivery practice, providing high-level construction leadership across Queensland Government portfolios and tier-1 assets. `}</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[157.87px] opacity-60 top-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#e5b869] text-[12px] whitespace-nowrap">•</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[297.61px] opacity-60 top-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#e5b869] text-[12px] whitespace-nowrap">•</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.45)] top-0 whitespace-nowrap">QBCC Licence #15243890</p>
      <Text43 />
      <p className="[word-break:break-word] absolute font-['Onest:Regular',sans-serif] font-normal leading-[18px] left-[171.95px] text-[12px] text-[rgba(255,255,255,0.45)] top-0 whitespace-nowrap">ABN 48 624 819 032</p>
      <Text44 />
      <p className="[word-break:break-word] absolute font-['Onest:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.45)] top-[28px] whitespace-nowrap">Brisbane, QLD</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <LinkConstructQueensland />
      <Paragraph33 />
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Quick Navigation</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">About</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Projects</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Why Us</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Services</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Clients</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Leadership</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">FAQs</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function NavigationFooterNavigation() {
  return (
    <div className="gap-x-[16px] gap-y-[10px] grid grid-cols-[__159.50px_159.50px] grid-rows-[____21px_21px_21px_21px] relative shrink-0 w-full" data-name="Navigation - Footer Navigation">
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function NavigationFooterNavigationMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Navigation - Footer Navigation:margin">
      <NavigationFooterNavigation />
    </div>
  );
}

function Container169() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[148px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container170 />
      <NavigationFooterNavigationMargin />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-start pb-[16px] relative shrink-0 w-[335px]" data-name="Container">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Head Office</p>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Brisbane City, QLD 4000</p>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[335px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">enquiries@constructqld.com.au</p>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container174 />
      <Container175 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p318e7a00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Follow Us</p>
    </div>
  );
}

function LinkFollowUsOnLinkedIn() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link - Follow Us on LinkedIn">
      <Icon35 />
      <Text45 />
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex h-[41px] items-center pt-[6px] relative shrink-0 w-[335px]" data-name="Container">
      <LinkFollowUsOnLinkedIn />
    </div>
  );
}

function Container171() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Container">
      <Container172 />
      <Container173 />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-start pb-[16px] relative shrink-0 w-[335px]" data-name="Container">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Acknowledgement of Country</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] w-full">{`Construct Queensland respectfully acknowledges the Traditional Custodians of the lands, winds, and waters on which we live and build across Queensland. We pay our deepest respects to Elders past, present, and emerging, and celebrate their continuing connection to culture, community, and country. `}</p>
    </div>
  );
}

function Container181() {
  return <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[335px]" data-name="Container" />;
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function Container177() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-4 self-start shrink-0" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Container166() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[_335px] grid-rows-[____206.38px_148px_144.80px_fit-content(100%)] relative shrink-0 w-full" data-name="Container">
      <Container167 />
      <Container169 />
      <Container171 />
      <Container177 />
    </div>
  );
}

function Container182() {
  return (
    <div className="[word-break:break-word] border-[rgba(255,255,255,0.1)] border-solid border-t font-['Onest:Regular',sans-serif] font-normal h-[100px] leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.45)] w-full" data-name="Container">
      <p className="absolute left-0 top-[24px] w-[335px]">{`Copyright © 2026 Construct Queensland Pty Ltd. All rights reserved. `}</p>
      <p className="absolute left-0 top-[78px] whitespace-nowrap">{`Site by Belver `}</p>
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Container:margin">
      <Container182 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]" data-name="Container">
      <Container166 />
      <ContainerMargin8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.08)] border-solid border-t content-stretch flex flex-col items-start pb-[28px] pt-[48px] relative shrink-0 w-full" data-name="Footer">
      <Container165 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Container />
      <Container14 />
      <Footer />
    </div>
  );
}

export default function ConstructQldMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Construct QLD - Mobile">
      <Body />
    </div>
  );
}