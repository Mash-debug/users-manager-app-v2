import { Strings } from "../constants/strings.js";
import { Paths } from "../constants/paths.js";
import { Colors } from "../constants/colors.js";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export const useButtonsNav = (onClick) => {
  return <>
    <Link to={Paths.login} onClick={onClick}>
      <Button
        size="large"
        style={{
          boxShadow: Colors.shadow,
          width: "100%",
        }}
      >
        {Strings.buttons.login}
      </Button>
    </Link>
    <Link to={Paths.register} onClick={onClick}>
      <Button
        size="large"
        style={{
          boxShadow: Colors.shadow,
          width: "100%",
        }}
      >
        {Strings.buttons.register}
      </Button>
    </Link>
  </>;
};
