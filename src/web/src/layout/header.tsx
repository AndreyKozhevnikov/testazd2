import {
  FontIcon,
  getTheme,
  IconButton,
  IIconProps,
  IStackStyles,
  mergeStyles,
  Persona,
  PersonaSize,
  Stack,
  Text,
} from "@fluentui/react";
import { FC, ReactElement } from "react";

const theme = getTheme();

const logoStyles: IStackStyles = {
  root: {
    width: "300px",
    background: theme.palette.themePrimary,
    alignItems: "center",
    padding: "0 20px",
  },
};

const logoIconClass = mergeStyles({
  fontSize: 20,
  paddingRight: 10,
});

const toolStackClass: IStackStyles = {
  root: {
    alignItems: "center",
    height: 48,
    paddingRight: 10,
  },
};

const iconProps: IIconProps = {
  styles: {
    root: {
      fontSize: 16,
      color: theme.palette.white,
    },
  },
};

const onmybuttonclicked = () => {
    console.log('test3333')
};

const Header: FC = (): ReactElement => {
  return (
    <Stack horizontal>
      <Stack horizontal styles={logoStyles}>
        <FontIcon
          aria-label="Check"
          iconName="SkypeCircleCheck"
          className={logoIconClass}
        />
        <Text variant="xLarge">ToDo</Text>
        <Text>test2</Text>
      </Stack>
      <Stack.Item grow={1}>
        <div>test3</div>
        <button onClick={onmybuttonclicked}>mybutton</button>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal styles={toolStackClass} grow={1}>
          <IconButton
            aria-label="Add"
            iconProps={{ iconName: "Settings", ...iconProps }}
          />
          <IconButton
            aria-label="Add"
            iconProps={{ iconName: "Help", ...iconProps }}
          />
          <Persona size={PersonaSize.size24} text="Sample User" />
          <Text>test4</Text>
          {/* <Toggle label="Dark Mode" inlineLabel styles={{ root: { marginBottom: 0 } }} onChange={changeTheme} /> */}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Header;
