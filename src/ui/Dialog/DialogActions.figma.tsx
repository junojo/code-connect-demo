import { DialogActions } from "./DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/file/9PUzxhPq4jv4049larGx0U?node-id=9215-9330",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);
