import svgPaths from "./svg-0j6vmejxq5";
import imgFrame5 from "./da27a46dc8078953aa73c2d2588b2b7193da4107.png";
import imgVideo from "./1c78a27cb93b8e1864da822b18b0998077658673.png";
import imgImageConstructQueensland from "./09226c2e8d97c3c0c5923aa477aa8ef349cbed29.png";
import imgGoldCoastAirportInternationalTerminal91 from "./62b5fb7399a4c8e07cf4f8e8ad76993ccf2668ca.png";
import imgFrame6 from "./4e5394a6920318e4a6e974f3cd9674b0a5fe7dd6.png";
import imgFrame7 from "./142b0b7396ef766d3115b4a7236c1bbe9aac27f8.png";
import imgFrame8 from "./4e616da646f44f330ed4425184c9032ef98089bb.png";
import imgFrame9 from "./ddb7aefbfc3acccd1672c9bdd2284e0d16d9c457.png";
import imgFrame10 from "./85c24732ddc9b63aa6887c9e01682297ee32eb7b.png";
import imgContainer from "./f0a5ae6d016f6e0b35305126c7e539647c478e77.png";
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
  breakpoint?: "Desktop";
  hover?: boolean;
  ratio?: "4:3";
};

function Project({ className, breakpoint = "Desktop", hover = true, ratio = "4:3" }: ProjectProps) {
  const isHoverAnd43AndDesktop = hover && ratio === "4:3" && breakpoint === "Desktop";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame5} />
          {isHoverAnd43AndDesktop && (
            <>
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
        <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${!hover && ratio === "4:3" && breakpoint === "Desktop" ? "h-[56px]" : ""}`} data-name="Container">
          {isHoverAnd43AndDesktop && (
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white whitespace-nowrap">{`Brisbane Supreme Court & Justice Centre`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="absolute h-[900px] left-0 top-0 w-[1440px]" data-name="Video">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[900px] left-0 top-0 w-[1440px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 900' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -126.41 -127.74 0 1080 225)'><stop stop-color='rgba(229,184,105,0.1)' offset='0'/><stop stop-color='rgba(229,184,105,0)' offset='0.6'/></radialGradient></defs></svg>\"), linear-gradient(180deg, rgba(10, 27, 58, 0.68) 0%, rgba(6, 16, 36, 0.88) 100%)" }} data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#0a1b3a] h-[900px] left-0 overflow-clip top-0 w-[1440px]" data-name="Container">
      <Video />
      <Container2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start pt-[5.6px] relative shrink-0" data-name="Icon:margin">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 top-[3.41px]" data-name="Paragraph">
      <IconMargin />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.64px] uppercase whitespace-nowrap">Executive Construction Advisory</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[22px] relative shrink-0 w-[800px]" data-name="Heading 1">
      <div className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[64px] text-white tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[72px] mb-0 whitespace-pre">{`Certainty in Delivery, `}</p>
        <p className="leading-[72px] text-[#e5b869] whitespace-pre">Excellence in Leadership</p>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.92)] w-[740px]">{`Construct Queensland provides government departments and asset leaders with executive-tier construction leadership and delivery capability across complex, high-risk portfolios. `}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[136.563_0_0] flex-col items-center min-w-px px-[36px] py-[18px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0a1b3a] text-[18px] text-center whitespace-nowrap">Our Capabilities</p>
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
    <div className="bg-[#e5b869] border border-[#e5b869] border-solid content-stretch flex items-center justify-center relative shrink-0 w-[268.563px]" data-name="Link">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[118.906_0_0] flex-col items-center min-w-px px-[36px] py-[18px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">View Projects</p>
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
    <div className="border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex items-center justify-center relative shrink-0 w-[250.906px]" data-name="Link">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[18px] items-center pt-[42px] relative shrink-0 w-[800px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[800px] relative shrink-0 w-[800px]" data-name="Container">
      <Container5 />
      <Heading />
      <ParagraphMargin />
      <Container6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[54.72px] relative shrink-0 text-[#e5b869] text-[54.72px] tracking-[-1.6416px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[8px] relative shrink-0 w-[252.383px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">Years of Executive Experience</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start min-w-[290px] px-[36px] py-[30px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Paragraph1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[54.72px] relative shrink-0 text-[#e5b869] text-[54.72px] tracking-[-1.6416px] whitespace-nowrap">24+</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[8px] relative shrink-0 w-[252.383px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">Landmark Infrastructure Projects</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start min-w-[290px] px-[36px] py-[30px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Paragraph2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[54.72px] relative shrink-0 text-[#e5b869] text-[54.72px] tracking-[-1.6416px] whitespace-nowrap">$2B+</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[8px] relative shrink-0 w-[252.383px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">Capital Programme Oversight</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="backdrop-blur-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex flex-col items-start min-w-[290px] px-[36px] py-[30px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Paragraph3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Container">
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex h-[787px] items-center left-0 pb-[110px] pt-[130px] top-[113px] w-[1440px]" data-name="Section">
      <Container3 />
    </div>
  );
}

function ImageConstructQueensland() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (Construct Queensland)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageConstructQueensland} />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168.883px]" data-name="Link">
      <ImageConstructQueensland />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container15() {
  return (
    <div className="h-[40px] relative shrink-0 w-[45.789px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">About</p>
      <Container16 />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container17() {
  return (
    <div className="h-[40px] relative shrink-0 w-[63.211px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">Projects</p>
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[59.523px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">Why Us</p>
      <Container20 />
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container21() {
  return (
    <div className="h-[40px] relative shrink-0 w-[64.852px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">Services</p>
      <Container22 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-[52.648px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">Clients</p>
      <Container24 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#e5b869] h-[2px] left-0 top-[38px] w-0" data-name="Container" />;
}

function Container25() {
  return (
    <div className="h-[40px] relative shrink-0 w-[40.156px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.85)] top-[8px] whitespace-nowrap">FAQs</p>
      <Container26 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[86.609_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[19.2px] relative shrink-0 text-[#0a1b3a] text-[16px] text-center whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p30053000} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#d4a44f] border-[rgba(10,27,58,0.42)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#e5b869] border border-[#e5b869] border-solid content-stretch flex h-[49.195px] items-center justify-center relative shrink-0 w-[190.609px]" data-name="Link">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
      <Container25 />
      <Link3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Link2 />
      <Navigation />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0)] border-[rgba(255,255,255,0.08)] border-b border-solid content-stretch flex flex-col items-start left-0 py-[24px] top-0 w-[1440px]" data-name="Banner">
      <Container14 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0a1b3a] h-[900px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Section />
      <Banner />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px]" data-name="Paragraph">
      <IconMargin1 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">About</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] w-[519px]">Where Policy Intent Meets On-the-Ground Delivery</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[620px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#475467] text-[18px] w-full">{`Established in 2019 by Director David Lansdell, Construct Queensland operates at the executive echelon of infrastructure delivery. Having served as Construction Director and Executive Director for critical Queensland portfolios, we bridge commercial rigour with government governance. `}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Heading1 />
      <Paragraph5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Container28 />
      <Frame5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Frame6 />
      <div className="h-[502px] relative shrink-0 w-[626px]" data-name="Gold Coast Airport International Terminal 9 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoldCoastAirportInternationalTerminal91} />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[63px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="63" preserveAspectRatio="none" viewBox="0 0 63 63" width="63">
        <g id="Icon">
          <path d={svgPaths.p5abe8e0} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1b3a] text-[24px] w-full">{`Executive Secondment & Advisory`}</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#475467] text-[16px] w-full">Seamless integration into departmental delivery units, providing instant leadership uplift, clear delegations, and strategic accountability on public works.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-1 content-stretch flex flex-col gap-[40px] items-start justify-self-stretch p-[32px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Icon5 />
      <Frame3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g id="Icon">
          <path d={svgPaths.p398a6c00} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1b3a] text-[24px] w-full">Modern Methods of Construction (MMC)</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#475467] text-[16px] w-full">Pioneered the Queensland Government MMC Programme in partnership with the Office of the Queensland Government Architect (OQGA), advancing modular and off-site delivery.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-2 content-stretch flex flex-col gap-[40px] h-[360px] items-start justify-self-stretch p-[32px] relative row-1 self-start shrink-0" data-name="Container">
      <Icon6 />
      <Frame4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g id="Icon">
          <path d={svgPaths.p2b518e80} fill="#0A1B3A" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1b3a] text-[24px] w-full">{`Programme Recovery & Cost Certainty`}</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#475467] text-[16px] w-full">Targeted high-value interventions that turn around distressed projects, restore stakeholder confidence, and establish ironclad constructability pathways under budget.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="border-[#e5e7eb] border-l border-solid col-3 content-stretch flex flex-col gap-[40px] items-start justify-self-stretch p-[32px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Icon7 />
      <Frame7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start px-[80px] py-[100px] relative shrink-0 w-[1440px]" data-name="Section">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon8 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[170.32px]" data-name="Paragraph">
      <IconMargin2 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Selected Projects</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start pb-[18px] relative shrink-0 w-[540.164px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-1px] whitespace-nowrap">Explore our landmark portfolio</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[540.164px]" data-name="Container">
      <Container36 />
      <Heading2 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[96.469_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon9() {
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

function Text7() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon9 />
    </div>
  );
}

function Link4() {
  return (
    <div className="border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex h-[49.195px] items-center justify-center relative shrink-0 w-[200.469px]" data-name="Link">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Link4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame6} />
    </div>
  );
}

function Container37() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text8 />
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

function Text9() {
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

function Text10() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame5} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame7} />
      </div>
      <Button />
      <Button1 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph7 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white whitespace-nowrap">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame8} />
    </div>
  );
}

function Container39() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame9} />
    </div>
  );
}

function Container40() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10} />
    </div>
  );
}

function Container41() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center pt-[56px] relative shrink-0 w-[1265px]">
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame1 />
          <Container37 />
        </div>
      </div>
      <Project className="relative shrink-0" hover={false} />
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame8 />
          <Container38 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame9 />
          <Container39 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame10 />
          <Container40 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame11 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Frame2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-start overflow-clip px-[80px] py-[100px] relative shrink-0 w-full" data-name="Section">
      <Container33 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon10 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[143.445px]" data-name="Paragraph">
      <IconMargin3 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">Our Commitment</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#111827] text-[40px] tracking-[-1px] whitespace-nowrap">Why Choose Us</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Heading3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[560.461px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#475467] text-[18px] w-[561px]">{`At Construct Queensland, we understand that choosing the right construction leadership partner is decisive for the success of your capital programme. Here is why government departments and institutional owners choose us: `}</p>
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

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Senior Executive Involvement</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="List Item">
      <Icon11 />
      <Text11 />
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

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">On-Time, On-Budget Integrity</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="List Item">
      <Icon12 />
      <Text12 />
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

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Safety and Compliance</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="List Item">
      <Icon13 />
      <Text13 />
    </div>
  );
}

function Icon14() {
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

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Client-Centred Approach</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="List Item">
      <Icon14 />
      <Text14 />
    </div>
  );
}

function List() {
  return (
    <div className="gap-x-[20px] gap-y-[16px] grid grid-cols-[__270.23px_270.23px] grid-rows-[__24px_24px] relative shrink-0 w-full" data-name="List">
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

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Paragraph9 />
      <ListMargin />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] whitespace-nowrap">100%</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[256.227px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Programme Governance</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container50 />
      <Paragraph10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[256.234px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Years of Experience</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container52 />
      <Paragraph11 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] whitespace-nowrap">24+</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[256.227px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Completed Landmarks</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Container54 />
      <Paragraph12 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] whitespace-nowrap">16+</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start pt-[6px] relative shrink-0 w-[256.234px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#5b6574] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Government Clients</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Container56 />
      <Paragraph13 />
    </div>
  );
}

function Container48() {
  return (
    <div className="gap-x-[48px] gap-y-[40px] grid grid-cols-[__256.23px_256.23px] grid-rows-[__67px_67px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container51 />
      <Container53 />
      <Container55 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full" data-name="Container:margin">
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <ContainerMargin />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container57() {
  return (
    <div className="col-2 justify-self-end min-h-[550px] relative row-1 self-stretch shrink-0 w-[613px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container42() {
  return (
    <div className="gap-x-[60px] gap-y-[60px] grid grid-cols-[__560.46px_644.53px] grid-rows-[_605.98px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container57 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] px-[80px] py-[100px] relative shrink-0 w-[1425px]" data-name="Section">
      <Container42 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon15 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[107.602px]" data-name="Paragraph">
      <IconMargin4 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">What We Do</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#111827] text-[40px] tracking-[-1px] w-[512px]">Comprehensive Construction Services</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[511.063px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#475467] text-[18px] w-[512px]">{`Senior-level construction leadership and delivery capability for complex, high-risk capital portfolios. `}</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Heading4 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5b6574] text-[16px] whitespace-nowrap">Contact Us for Consultation</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[6px] relative shrink-0 w-[511.063px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5b6574] text-[0px] whitespace-nowrap">
        <span className="leading-[24px] text-[16px]">{`Call us: `}</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[24px] text-[#0a1b3a] text-[16px]">0436 603 061</span>
      </p>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Container65 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-[158.477_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p1122e100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon16 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex h-[49.195px] items-center justify-center left-0 top-0 w-[262.477px]" data-name="Link">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[49.195px] relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[56px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container66 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container61 />
      <Container63 />
    </div>
  );
}

function Container70() {
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

function Paragraph17() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">Director-level secondment into your portfolio, with authority over governance, delegations and risk decisions.</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container70 />
      <Heading5 />
      <Paragraph17 />
    </div>
  );
}

function Container72() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#02</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">Client-Sided Project Management</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">A low-friction extension of your existing delivery unit, holding the contractor and consultant interfaces day to day.</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container72 />
      <Heading6 />
      <Paragraph18 />
    </div>
  );
}

function Container74() {
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

function Paragraph19() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">Investment-grade business cases tested for constructability, cost and time viability before funding is committed.</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container74 />
      <Heading7 />
      <Paragraph19 />
    </div>
  );
}

function Container76() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#04</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">Modern Methods of Construction</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">Modularisation, DfMA and off-site prefabrication, used to compress delivery schedules on social housing programmes.</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container76 />
      <Heading8 />
      <Paragraph20 />
    </div>
  );
}

function Container78() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#05</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">Superintendent Contract Admin</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">Impartial superintendent services under AS 2124, AS 4000 and AS 4902, certifying claims, time extensions and completion.</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container78 />
      <Heading9 />
      <Paragraph21 />
    </div>
  );
}

function Container80() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[21.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[21.6px] relative shrink-0 text-[#0b0c0e] text-[16px] whitespace-nowrap">#06</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[24.297px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#0b0c0e] text-[18px] whitespace-nowrap">Distressed Programme Recovery</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[105.594px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#475467] text-[16px] w-[293px]">Forensic intervention on stalled programmes. We reset the baseline and stage the works so live sites keep operating.</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-b border-solid gap-x-[28px] gap-y-[28px] grid-cols-[___48px_292.97px_292.97px] grid-rows-[_105.59px] inline-grid py-[38px] relative shrink-0" data-name="Container">
      <Container80 />
      <Heading10 />
      <Paragraph22 />
    </div>
  );
}

function Container68() {
  return (
    <div className="border-[rgba(10,27,58,0.14)] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container71 />
      <Container73 />
      <Container75 />
      <Container77 />
      <Container79 />
    </div>
  );
}

function Container67() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[1096.563px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container59() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[__511.06px_689.94px] grid-rows-[_1096.56px] h-[1096.563px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container67 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col items-start py-[100px] relative shrink-0 w-full" data-name="Section">
      <Container58 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon17 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[107.602px]" data-name="Paragraph">
      <IconMargin5 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Trusted By</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[38.4px] relative shrink-0 text-[32px] text-white tracking-[-0.8px] whitespace-nowrap">{`Key Statutory Authorities & Tier-1 Operators`}</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[780px] relative shrink-0 w-[624.102px]" data-name="Container">
      <Container84 />
      <Heading11 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-[96.469_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon18() {
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

function Text18() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon18 />
    </div>
  );
}

function Link6() {
  return (
    <div className="border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex h-[49.195px] items-center justify-center relative shrink-0 w-[200.469px]" data-name="Link">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Link6 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Light',sans-serif] font-light leading-[36px] relative shrink-0 text-[24px] text-white tracking-[-0.6px] w-[1167px]">{`"Construct Queensland bridges the gap between executive policy intent and practical contractor execution. In high-risk brownfield and government portfolios, our sustained focus on constructability, cost certainty, and transparent governance delivers landmark results." `}</p>
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

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[18px] text-white whitespace-nowrap">David Lansdell</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Director — Construct Queensland | Former Executive Director, QLD Government</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[672px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-center pt-[28px] relative shrink-0 w-[1167px]" data-name="Container">
      <ImageDavidLansdell />
      <Container87 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#14161a] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start p-[48px] relative shrink-0 w-full" data-name="Container">
      <Paragraph24 />
      <Container86 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[44px] relative shrink-0 w-full" data-name="Container:margin">
      <Container85 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon19 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[116.563px]" data-name="Container">
      <IconMargin6 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Our Clients</p>
    </div>
  );
}

function Container91() {
  return <div className="bg-[rgba(255,255,255,0.45)] flex-[1124.438_0_0] h-px min-w-px relative" data-name="Container" />;
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1265px]" data-name="Container">
      <Container90 />
      <Container91 />
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

function Container95() {
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

function Container96() {
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

function Container97() {
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

function Container98() {
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

function Container99() {
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

function Container100() {
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

function Container101() {
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

function Container102() {
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

function Container103() {
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

function Container104() {
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

function Container105() {
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

function Container106() {
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

function Container107() {
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

function Container108() {
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

function Container109() {
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

function Container110() {
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

function Container111() {
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

function Container112() {
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

function Container113() {
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

function Container114() {
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

function Container115() {
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

function Container116() {
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

function Container117() {
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

function Container118() {
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

function Container119() {
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

function Container120() {
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

function Container121() {
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

function Container122() {
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

function Container123() {
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

function Container124() {
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

function Container125() {
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

function Container126() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0" data-name="Container">
      <ImageBloomberg1 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex gap-[56px] h-[61px] items-center left-[-90px] top-0 w-[7031px]" data-name="Container">
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
      <Container116 />
      <Container117 />
      <Container118 />
      <Container119 />
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[61px] relative shrink-0 w-[7031px]" data-name="Container">
      <Container94 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start justify-center overflow-clip py-[10px] relative shrink-0 w-[1265px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[36px] relative shrink-0" data-name="Container:margin">
      <Container92 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start pt-[56px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <ContainerMargin2 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Container82 />
      <ContainerMargin1 />
      <Container88 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-start py-[100px] relative shrink-0 w-full" data-name="Section">
      <Container81 />
    </div>
  );
}

function ImageDavidLansdellDirector() {
  return (
    <div className="h-[535.711px] relative shrink-0 w-full" data-name="Image (David Lansdell - Director)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDavidLansdellDirector} />
    </div>
  );
}

function Container128() {
  return (
    <div className="bg-[#0a1b3a] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Container">
      <ImageDavidLansdellDirector />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon20 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex gap-[10px] h-[38px] items-start pb-[18px] relative shrink-0 w-[170.32px]" data-name="Paragraph">
      <IconMargin7 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.56px] uppercase whitespace-nowrap">Executive Profile</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start pb-[18px] relative shrink-0 w-[258px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#111827] text-[40px] tracking-[-1px] whitespace-nowrap">David Lansdell</p>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Container:margin">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24.3px] relative shrink-0 text-[#e5b869] text-[18px] whitespace-nowrap">{`Director — Construct Queensland `}</p>
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

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Executive Director (QLD Gov)</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Icon21 />
      <Text19 />
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

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Lendlease Senior Leadership Alumnus</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Icon22 />
      <Text20 />
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

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">Lead for MMC Programme Delivery (OQGA)</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Icon23 />
      <Text21 />
    </div>
  );
}

function Icon24() {
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

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">{`Corrections, Health & Aviation Expert`}</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="col-2 content-stretch flex gap-[10px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Icon24 />
      <Text22 />
    </div>
  );
}

function Container130() {
  return (
    <div className="gap-x-[20px] gap-y-[14px] grid grid-cols-[__373.50px_373.50px] grid-rows-[__24px_24px] relative shrink-0 w-[767px]" data-name="Container">
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28px] pt-[24px] relative shrink-0" data-name="Container:margin">
      <Container130 />
    </div>
  );
}

function Icon25() {
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

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">0436 603 061</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Icon25 />
      <Text23 />
    </div>
  );
}

function Icon26() {
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

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0a1b3a] text-[16px] whitespace-nowrap">dlansdell@constructqld.com.au</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Icon26 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-[138.148_0_0] flex-col items-center min-w-px px-[20px] py-[8px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[16.8px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Connect on LinkedIn</p>
    </div>
  );
}

function Icon27() {
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

function Text26() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[38px]" data-name="Text">
        <Icon27 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex items-center justify-center relative shrink-0 w-[218.148px]" data-name="Link">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Container135() {
  return (
    <div className="border-[#eef0f2] border-solid border-t content-stretch flex gap-[22px] items-center pt-[22px] relative shrink-0 w-[767px]" data-name="Container">
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container129() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch p-[48px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph27 />
      <Heading12 />
      <ContainerMargin3 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#5b6574] text-[16px] w-[767px]">{`Over 25 years across government and tier-1 delivery, including the QCS portfolio of works — with the institutional insight and senior-level visibility rarely accessible to external advisors. `}</p>
      <ContainerMargin4 />
      <Container135 />
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-white border border-[#eef0f2] border-solid grid grid-cols-[__400px_863px] grid-rows-[_535.71px] h-[537.711px] overflow-clip relative shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] px-[80px] py-[100px] relative shrink-0 w-[1425px]" data-name="Section">
      <Container127 />
    </div>
  );
}

function Container136() {
  return <div className="h-[532.594px] max-w-[1440px] relative shrink-0 w-full" data-name="Container" />;
}

function ImageConstructionBackground() {
  return (
    <div className="h-[319.742px] max-w-[480px] opacity-24 relative shrink-0 w-[480px]" data-name="Image (Construction background)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageConstructionBackground} />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[80px] top-[452.85px] w-[1425px]" data-name="Container">
      <ImageConstructionBackground />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_126)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_126">
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
      <Icon28 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[242px]" data-name="Container">
      <IconMargin8 />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0a1b3a] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">{`ENGAGEMENT & CONSULTATION`}</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#0a1b3a] text-[40px] tracking-[-1px] w-[573px]">Partner with Construct Queensland</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch pr-[30px] relative row-1 self-center shrink-0" data-name="Container">
      <Container140 />
      <Heading13 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[26.4px] relative shrink-0 text-[#5b6574] text-[16px] w-[460px]">{`Whether you require executive secondment to stabilise a high-risk portfolio, strategic advisory for PAF business cases, or expert client-sided project leadership, our directors are available for confidential consultations. `}</p>
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

function Container142() {
  return (
    <div className="content-stretch flex flex-col h-[26.398px] items-start relative shrink-0 w-[522.5px]" data-name="Container">
      <Heading14 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch pb-[2px] relative row-1 self-stretch shrink-0" data-name="Container:margin">
      <Container142 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-[251.25px]" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">First Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-[251.25px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[14px] w-full">Enter your first name</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-[251.25px]" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Last Name</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-[251.25px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[14px] w-full">Enter your last name</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-[251.25px]" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-[251.25px]" data-name="Email Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[14px] w-full">Enter your email address</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Label2 />
      <EmailInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-[251.25px]" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Phone Number</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[44px] items-start justify-center overflow-clip px-[14px] py-[12px] relative shrink-0 w-[251.25px]" data-name="Phone Input">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[14px] w-full">Enter your phone number</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Label3 />
      <PhoneInput />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pb-[2px] relative shrink-0 w-[522.5px]" data-name="Label">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b3a] text-[14px] whitespace-nowrap">Message</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white border border-[rgba(10,27,58,0.35)] border-solid content-stretch flex flex-col h-[120px] items-start min-h-[120px] overflow-clip px-[14px] py-[12px] relative shrink-0 w-[522.5px]" data-name="Text Area">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e96a4] text-[14px] w-full">Outline your portfolio, programme requirements, or advisory needs...</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <Label4 />
      <TextArea />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-center px-[28px] py-[14px] relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[16.8px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Request a Consultation</p>
    </div>
  );
}

function Icon29() {
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

function Text28() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon29 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0a1b3a] border border-[#0a1b3a] border-solid col-2 content-stretch flex items-center justify-center justify-self-end relative row-5 self-stretch shrink-0" data-name="Button">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white border-[#0a1b3a] border-solid border-t-2 drop-shadow-[0px_4px_12px_rgba(10,27,58,0.05)] gap-x-[20px] gap-y-[20px] grid grid-cols-[__251.25px_251.25px] grid-rows-[_____28.40px_73px_73px_149px_49.20px] pb-[40px] pt-[38px] px-[40px] relative shrink-0 w-[602.5px]" data-name="Form">
      <ContainerMargin5 />
      <Container143 />
      <Container144 />
      <Container145 />
      <Container146 />
      <Container147 />
      <Button2 />
    </div>
  );
}

function Container141() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Form />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute gap-x-[60px] gap-y-[60px] grid-cols-[__602.50px_602.50px] grid-rows-[_532.59px] inline-grid left-[80px] top-[130px]" data-name="Container">
      <Container139 />
      <Container141 />
    </div>
  );
}

function Section7() {
  return (
    <div className="bg-[#f0f4f8] content-stretch flex flex-col h-[772.594px] items-start overflow-clip pb-[110px] pt-[130px] relative shrink-0 w-full" data-name="Section">
      <Container136 />
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute border border-[#161616] border-solid h-[26.398px] left-0 top-0 w-[163.047px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[14.4px] left-[12px] text-[#161616] text-[12px] top-[4.5px] tracking-[0.72px] uppercase whitespace-nowrap">Common Enquiries</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[26.398px] relative shrink-0 w-full" data-name="Container">
      <Container153 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[#161616] text-[40px] tracking-[-1px] whitespace-nowrap">Frequently Asked Questions</p>
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

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container152 />
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

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6b7280] text-[16px] w-[320px]">Our executive leadership is available to discuss advisory mandates, programme recoveries, and procurement pathways.</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start pt-[18px] relative shrink-0 w-[504.25px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[0px] whitespace-nowrap">
        <span className="leading-[24px] text-[16px]">{`Call us: `}</span>
        <span className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[24px] text-[#161616] text-[16px]">0436 603 061</span>
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-[158.477_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="max-h-[18.399999618530273px] max-w-[18.399999618530273px] relative shrink-0 size-[18.398px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3984" preserveAspectRatio="none" viewBox="0 0 18.3984 18.3984" width="18.3984">
        <g id="Icon">
          <path d={svgPaths.p1122e100} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.3)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon30 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute bg-[#0a1b3a] border border-[#0a1b3a] border-solid content-stretch flex h-[49.195px] items-center justify-center left-0 top-0 w-[262.477px]" data-name="Link">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[49.195px] relative shrink-0 w-full" data-name="Container">
      <Link10 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Container157 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-[504.25px]" data-name="Container">
      <Heading16 />
      <ParagraphMargin1 />
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container150() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container151 />
      <Container154 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] w-[633px]">What sectors and project scopes does Construct Queensland specialise in?</p>
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

function Container161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading17 />
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

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] w-[633px]">How do government departments and institutional clients engage your services?</p>
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

function Container164() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading18 />
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

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] w-[633px]">{`What is Construct Queensland’s role in Programme Recovery & Distressed Projects?`}</p>
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

function Container167() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading19 />
      <Container167 />
    </div>
  );
}

function Container165() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container166 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] w-[633px]">Do you provide design management and Modern Methods of Construction (MMC) advisory?</p>
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

function Container170() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading20 />
      <Container170 />
    </div>
  );
}

function Container168() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container169 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] whitespace-nowrap">What contract administration and Superintendent services do you offer?</p>
    </div>
  );
}

function Icon35() {
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

function Container173() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading21 />
      <Container173 />
    </div>
  );
}

function Container171() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container172 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[24.3px] relative shrink-0 text-[#161616] text-[18px] w-[633px]">How does Construct Queensland integrate with existing departmental delivery teams?</p>
    </div>
  );
}

function Icon36() {
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

function Container176() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-[680.75px]" data-name="Container">
      <Heading22 />
      <Container176 />
    </div>
  );
}

function Container174() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container175 />
    </div>
  );
}

function Container158() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-start relative row-1 self-stretch shrink-0 w-[680.75px]" data-name="Container">
      <Container159 />
      <Container162 />
      <Container165 />
      <Container168 />
      <Container171 />
      <Container174 />
    </div>
  );
}

function Container149() {
  return (
    <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[__504.25px_680.75px] grid-rows-[_561.27px] relative shrink-0 w-full" data-name="Container">
      <Container150 />
      <Container158 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Container149 />
    </div>
  );
}

function Section8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[120px] pt-[110px] relative shrink-0 w-full" data-name="Section">
      <Container148 />
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

function Paragraph28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[380px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[23.1px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[380px]">{`Specialist infrastructure advisory and executive project delivery practice, providing high-level construction leadership across Queensland Government portfolios and tier-1 assets. `}</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.45)] whitespace-nowrap">QBCC Licence #15243890</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#e5b869] text-[12px] whitespace-nowrap">•</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.45)] whitespace-nowrap">ABN 48 624 819 032</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#e5b869] text-[12px] whitespace-nowrap">•</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.45)] whitespace-nowrap">Brisbane, QLD</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Text32 />
      <Text33 />
      <Text34 />
      <Text35 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[544px]" data-name="Container">
      <LinkConstructQueensland />
      <Paragraph28 />
      <Container180 />
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Quick Navigation</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">About</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Projects</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Why Us</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Services</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Clients</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Leadership</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">FAQs</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function NavigationFooterNavigation() {
  return (
    <div className="gap-x-[16px] gap-y-[10px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[____21px_21px_21px_21px] relative shrink-0 w-full" data-name="Navigation - Footer Navigation">
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
      <Link18 />
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

function Container181() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[148px] items-start justify-center min-w-px relative" data-name="Container">
      <Container182 />
      <NavigationFooterNavigationMargin />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Brisbane City, QLD 4000</p>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[343.82px]" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">enquiries@constructqld.com.au</p>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container185 />
      <Container186 />
    </div>
  );
}

function Icon37() {
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

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Follow Us</p>
    </div>
  );
}

function LinkFollowUsOnLinkedIn() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link - Follow Us on LinkedIn">
      <Icon37 />
      <Text36 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex h-[41px] items-center pt-[6px] relative shrink-0 w-[343.82px]" data-name="Container">
      <LinkFollowUsOnLinkedIn />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Head Office</p>
      <Container184 />
      <Container187 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Container181 />
      <Container183 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e5b869] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap">Acknowledgement of Country</p>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Text37 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] w-full">{`Construct Queensland respectfully acknowledges the Traditional Custodians of the lands, winds, and waters on which we live and build across Queensland. We pay our deepest respects to Elders past, present, and emerging, and celebrate their continuing connection to culture, community, and country. `}</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container189 />
      <Paragraph29 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-[721px]" data-name="Container:margin">
      <Container188 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[721px]">
      <Frame13 />
      <ContainerMargin6 />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container179 />
      <Frame12 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.45)] whitespace-nowrap">{`Copyright © 2026 Construct Queensland Pty Ltd. All rights reserved. `}</p>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.45)] whitespace-nowrap">{`Site by Belver `}</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="border-[rgba(255,255,255,0.1)] border-solid border-t content-stretch flex items-center justify-between pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Container191 />
      <Container192 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[32px] relative shrink-0 w-full" data-name="Container:margin">
      <Container190 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[1440px] px-[80px] relative shrink-0 w-[1425px]" data-name="Container">
      <Container178 />
      <ContainerMargin7 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#061024] border-[rgba(255,255,255,0.08)] border-solid border-t content-stretch flex flex-col items-start pb-[36px] pt-[64px] relative shrink-0 w-full" data-name="Footer">
      <Container177 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Container />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}

export default function ConstructQldDesktopSm() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Construct QLD - Desktop SM">
      <Body />
    </div>
  );
}