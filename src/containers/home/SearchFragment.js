import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AutoComplete, Col, Icon, Input, Row, Spin, Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { debounce } from 'lodash';
import { bool, func } from 'prop-types';

import { useGlobalContext } from '../../context';

const { Title } = Typography;

const Suffix = ({ input, loading }) => {
  if (loading) {
    return <Spin />;
  }
  if (!input) {
    return <Icon type="search" />;
  }
  return <span />;
};

export const SearchFragment = ({ isLoading, onSearch, onSelectResult }) => {
  const { currentLanguage } = useGlobalContext();

  const [searchInput, setSearchInput] = useState('');
  const [searchPlaceholderText, setSearchPlaceholderText] = useState('');
  const [results, setResults] = useState([
    {
      value: 'Current location',
      text: 'Use current location',
    },
  ]);

  useEffect(() => {
    switch (currentLanguage) {
      case 'ro':
        setSearchPlaceholderText('Unde ești acum?');
        setResults([
          {
            value: 'Current location',
            text: 'Utilizeaza locația curentă',
          },
        ]);
        break;
      case 'uk':
        setSearchPlaceholderText('Де ти зараз?');
        setResults([
          {
            value: 'Current location',
            text: 'Використовувати поточне місцезнаходження',
          },
        ]);
        break;
      case 'ru':
        setSearchPlaceholderText('Где ты сейчас?');
        setResults([
          {
            value: 'Current location',
            text: 'Использовать текущее местоположение',
          },
        ]);
        break;
      default:
        setSearchPlaceholderText('Where are you now?');
        setResults([
          {
            value: 'Current location',
            text: 'Use current location',
          },
        ]);
    }
  }, [currentLanguage]);

  const onSearchHandler = useCallback(
    (value) => {
      if (value.length > 2) {
        onSearch(value);
      }
    },
    [onSearch],
  );

  const debouncedSearchHandler = useMemo(() => debounce(onSearchHandler, 500), [onSearchHandler]);

  const onSearchInputChange = (newSearchInput) => {
    setSearchInput(newSearchInput);
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="top"
      style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}
    >
      <Col sm={26} md={16}>
        <Title level={3}>
          <Trans>See here where your nearest collection center is:</Trans>
        </Title>

        <AutoComplete
          className="search-box"
          allowClear={!isLoading}
          value={searchInput}
          dataSource={results}
          onChange={onSearchInputChange}
          onSearch={debouncedSearchHandler}
          placeholder={searchPlaceholderText}
          onSelect={onSelectResult}
          defaultActiveFirstOption={false}
        >
          <Input minLength={3} suffix={<Suffix input={searchInput} loading={isLoading} />} />
        </AutoComplete>
      </Col>
    </Row>
  );
};

SearchFragment.defaultProps = {
  isLoading: false,
};

SearchFragment.propTypes = {
  isLoading: bool,
  onSearch: func.isRequired,
  onSelectResult: func.isRequired,
};

export default { SearchFragment };
