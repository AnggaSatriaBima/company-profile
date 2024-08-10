import { AppConfig } from "../utils/AppConfig";
type ILogoProps = {
  xl?: boolean;
};
const Logo = (props: ILogoProps) => {
  const size = props.xl ? "44" : "32";
  const fontStyle = props.xl ? "text-3xl" : "text-xl";

  return (
    <span className={`inline-flex items-center 70 antialiased ${fontStyle}`}>
      <img
        src="https://www.bmw.co.za/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
        alt=""
        className="h-12 mx-2 w-12"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
