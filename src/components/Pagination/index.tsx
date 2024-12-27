import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
type PropsType = {
  total: number;
};

const Index: React.FC<PropsType> = (props) => {
  const { total } = props;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const handleChange = (page: number, pageSize: number) => {
    //分页组件变化时，更新url的参数
    searchParams.set('page', page.toString());
    searchParams.set('pageSize', pageSize.toString());

    nav({
      pathname,
      search: searchParams.toString()
    });
  };

  useEffect(() => {
    const page = searchParams.get('page') || '1';
    setPage(Number(page));

    const pageSize = searchParams.get('pageSize') || '10';
    setPageSize(Number(pageSize));
  }, [searchParams]);

  return (
    <Pagination
      current={page}
      total={total}
      pageSize={pageSize}
      onChange={handleChange}
    />
  );
};

export default Index;
