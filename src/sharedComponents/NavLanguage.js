import React from 'react';
import { CheckOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import lang from 'assets/data/language.data.json';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import { DIR_KEY } from 'constants/ThemeConstant';
import { useSelector } from 'react-redux';
import { onDirectionChange, onLocaleChange } from 'store/slices/themeSlice';

function getLanguageDetail(locale) {
  let _locale = locale;
  if (locale.includes('-')) {
    _locale = locale.split('-')[0];
  }

  const data = lang.filter((elm) => elm.langId === _locale);
  return data[0];
}

const SelectedLanguage = ({ locale }) => {
  const language = getLanguageDetail(locale);

  const { langName, icon } = language;
  return (
    <div className='d-flex align-items-center'>
      <span className='font-weight-semibold ml-2'>
        {langName} <DownOutlined className='font-size-xs' />
      </span>
    </div>
  );
};

export const NavLanguage = ({ configDisplay }) => {
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.theme);
  const languageOption = (
    <Menu>
      {lang.map((elm, i) => {
        return (
          <Menu.Item
            key={i}
            className={
              locale === elm.langId ? 'ant-dropdown-menu-item-active' : ''
            }
            onClick={() => {
              i18next.changeLanguage(elm.langId);
              dispatch(onLocaleChange(elm.langId));
              localStorage.setItem(DIR_KEY, elm.dir);
              dispatch(onDirectionChange(elm.dir));
              window.location.reload();            }}
          >
            <span className='d-flex justify-content-between align-items-center'>
              <div>
                <span className='font-weight-normal ml-2'>{elm.langName}</span>
              </div>
              {locale === elm.langId ? (
                <CheckOutlined className='text-success' />
              ) : null}
            </span>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown
      placement='bottomRight'
      overlay={languageOption}
      trigger={['click']}
    >
      {configDisplay ? (
        <a href='#/' className='text-gray' onClick={(e) => e.preventDefault()}>
          <SelectedLanguage locale={locale} />
        </a>
      ) : (
        <Menu mode='horizontal'>
          <Menu.Item key={0}>
            <a href='#/' onClick={(e) => e.preventDefault()}>
              <GlobalOutlined className='nav-icon mr-0' />
            </a>
          </Menu.Item>
        </Menu>
      )}
    </Dropdown>
  );
};

export default NavLanguage;
