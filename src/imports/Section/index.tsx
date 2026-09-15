import svgPaths from "./svg-l3nuv4179w";
import imgFrame5 from "./da27a46dc8078953aa73c2d2588b2b7193da4107.png";
import imgFrame6 from "./4e5394a6920318e4a6e974f3cd9674b0a5fe7dd6.png";
import imgFrame7 from "./142b0b7396ef766d3115b4a7236c1bbe9aac27f8.png";
import imgFrame8 from "./4e616da646f44f330ed4425184c9032ef98089bb.png";
import imgFrame9 from "./ddb7aefbfc3acccd1672c9bdd2284e0d16d9c457.png";
import imgFrame10 from "./85c24732ddc9b63aa6887c9e01682297ee32eb7b.png";
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_104)" id="Icon">
          <path d="M8 0H0V8H8V0Z" fill="#E5B869" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_104">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start pt-[4.9px] relative shrink-0" data-name="Icon:margin">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19.594px] items-start left-0 top-[4.1px] w-[170.32px]" data-name="Paragraph">
      <IconMargin />
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase whitespace-nowrap">Selected Projects</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41.695px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start pb-[18px] relative shrink-0 w-[540.164px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-1px] whitespace-nowrap">Explore our landmark portfolio</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[540.164px]" data-name="Container">
      <Container3 />
      <Heading />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[96.469_0_0] flex-col items-center min-w-px px-[28px] py-[14px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Icon1() {
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

function Text1() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.38)] border-l border-solid content-stretch flex h-full items-center justify-center relative shrink-0 w-[46px]" data-name="Text">
      <Icon1 />
    </div>
  );
}

function Link() {
  return (
    <div className="border border-[rgba(255,255,255,0.25)] border-solid content-stretch flex h-[49.195px] items-center justify-center relative shrink-0 w-[200.469px]" data-name="Link">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Link />
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

function Container4() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Government & Justice`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-start left-[16px] px-[9px] py-[4px] top-[16px]" data-name="Button">
      <Text2 />
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

function Text3() {
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

function Text4() {
  return (
    <div className="backdrop-blur-[17.143px] bg-[#d4a44f] content-stretch flex items-start p-[4.286px] relative shrink-0" data-name="Text">
      <Layer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center right-[16px] top-[16px]" data-name="Button">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Frame3() {
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

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e5b869] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">Brisbane CBD, QLD</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Paragraph1 />
      <p className="[word-break:break-word] font-['Onest:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-white whitespace-nowrap">{`Brisbane Supreme Court & Justice Centre`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame8} />
    </div>
  );
}

function Container6() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame9} />
    </div>
  );
}

function Container7() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[363px] items-start relative shrink-0 w-[484px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10} />
    </div>
  );
}

function Container8() {
  return <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center pt-[56px] relative shrink-0 w-[1265px]">
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame1 />
          <Container4 />
        </div>
      </div>
      <Project className="relative shrink-0" hover={false} />
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame3 />
          <Container5 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame4 />
          <Container6 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame5 />
          <Container7 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <Frame6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Frame2 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-start px-[80px] py-[100px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}