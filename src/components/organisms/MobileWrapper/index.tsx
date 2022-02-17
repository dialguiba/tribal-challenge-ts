import { Button } from "@components/atoms/Button";
import { useMobile } from "@hooks/useMobile";
import { ReactSVG } from "react-svg";
import "./mobile-wrapper.scoped.scss";

interface Props {
  children: any;
  onButtonClick: () => void;
  goBackText?: string;
}

export const MobileWrapper = ({ children, onButtonClick, goBackText = "Back" }: Props) => {
  const [isMobile] = useMobile();
  return (
    <>
      {isMobile && (
        <div className="o-mobileWrapper">
          <Button backgroundColor="transparent" textColor="#000000" width="fit-content" padding="0" onClick={onButtonClick}>
            <ReactSVG src="/icons/left-arrow.svg" />
            {goBackText}
          </Button>
        </div>
      )}
      {children}
    </>
  );
};
