import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Layout, Menu, Typography } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Trans } from '@lingui/macro';
import logo from '../../logo.svg';
import { useGlobalContext } from '../../context';
import CfR from '../../images/footer_CfR.svg';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const LANGUAGES = {
  uk: 'Українська',
  ro: 'Română',
  en: 'English',
  ru: 'Русский',
};

const languageMenu = (langText, handleMenuClick) => {
  return (
    <Menu onClick={(e) => handleMenuClick(e.key)}>
      {langText.map((language) => (
        <Menu.Item key={language}>{language}</Menu.Item>
      ))}
    </Menu>
  );
};

export const Header = () => {
  const { currentLanguage, languageChange } = useGlobalContext();
  const [langText, setLangText] = useState([]);

  const filterLanguages = (currentLang) => {
    return Object.entries(LANGUAGES)
      .filter(([key]) => key !== currentLang)
      .map((pair) => pair[1]);
  };

  const handleLanguageBtnClick = (language) => {
    const locale = Object.keys(LANGUAGES).find((key) => LANGUAGES[key] === language);
    languageChange(locale);
    setLangText(filterLanguages(locale));
  };

  useEffect(() => {
    setLangText(filterLanguages(currentLanguage));
  }, [currentLanguage]);

  return (
    <div className="navbar">
      <div className="container cfr-banner">
        <img className="cfr-header-logo" src={CfR} alt="Code4Romania" />
        <Text strong>
          <Trans>
            A Code for Romania solution.{' '}
            <Link to={{ pathname: 'https://code4.ro/ro' }} target="_blank">
              Find out more.
            </Link>
          </Trans>
        </Text>
      </div>
      <AntHeader>
        <div className="container">
          <div className="App-logo">
            <Link to="/">
              {/* @TODO update logo */}
              <img src={logo} alt="Bulina Roșie logo" />
            </Link>
          </div>

          <Dropdown
            className="language-btn-desktop"
            overlay={() => languageMenu(langText, handleLanguageBtnClick)}
            trigger={['click']}
          >
            <Button>
              <GlobalOutlined />
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </AntHeader>
    </div>
  );
};

export default { Header };
