import { Button } from "components/atoms/Button";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";
import "./mobile-wrapper.scoped.scss";

interface Props {
  children: any;
  onButtonClick: () => void;
}

export const MobileWrapper = ({ children, onButtonClick }: Props) => {
  const [isMobile] = useMobile();
  return (
    <>
      {isMobile && (
        <div className="o-mobileWrapper">
          <Button backgroundColor="transparent" textColor="#000000" width="fit-content" padding="0" onClick={onButtonClick}>
            <ReactSVG src="/icons/left-arrow.svg" />
            Back
          </Button>
        </div>
      )}
      {children}
    </>
  );
};
