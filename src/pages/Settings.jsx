import {
  HeadingThree,
  HeadingTwo,
  OptionsWrapper,
  OptionWrapper,
  SettingsBody,
  SettingsSection,
} from "../components/App.styled";

const settingsOptions = [
  {
    parent: "appearance",
    children: [
      { title: "theme", value: "" },
      { title: "font size", value: "" },
    ],
  },
  {
    parent: "account & security",
    children: [
      { title: "change password", value: "" },
      { title: "change email", value: "" },
      { title: "app lock(PIN)", value: "" },
      { title: "delete account", value: "" },
    ],
  },
  {
    parent: "notifications",
    children: [
      { title: "daily reminders", value: "" },
      { title: "weekly summary", value: "" },
    ],
  },
  {
    parent: "data & privacy",
    children: [
      { title: "export entries", value: "" },
      { title: "clear local data", value: "" },
    ],
  },
  {
    parent: "about",
    children: [
      { title: "version", value: "" },
      { title: "terms & privacy", value: "" },
    ],
  },
];

const Settings = () => (
  <SettingsSection>
    <HeadingTwo>Settings</HeadingTwo>
    <SettingsBody>
      {settingsOptions.map((option, idx) => (
        <OptionsWrapper key={idx}>
          <HeadingThree>{option.parent}</HeadingThree>
          {option.children.map((child, idx) => (
            <OptionWrapper key={idx}>
              <p>{child.title}</p>
            </OptionWrapper>
          ))}
        </OptionsWrapper>
      ))}
    </SettingsBody>
  </SettingsSection>
);

export default Settings;
