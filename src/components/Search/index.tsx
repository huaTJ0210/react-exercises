import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
const { Search } = Input;

const Index: React.FC = () => {
  const [text, setText] = useState('');

  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const { pathname } = useLocation();

  const handleSearch = (value: string) => {
    searchParams.set('keyword', value);
    nav({
      pathname,
      search: searchParams.toString()
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const keyword = searchParams.get('keyword') || '';
    setText(keyword);
  }, [searchParams]);

  return (
    <Search
      placeholder="请输入搜索内容"
      allowClear
      value={text}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '200px' }}
    ></Search>
  );
};

export default Index;
