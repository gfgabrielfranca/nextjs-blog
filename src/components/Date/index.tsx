import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';

import * as S from './styles';

interface DateProps {
  dateString: string;
}

const Date: React.FC<DateProps> = ({ dateString }) => {
  const formattedDate = useMemo(() => {
    const date = parseISO(dateString);

    return format(date, 'LLLL d, yyyy');
  }, [dateString]);

  return <S.Time dateTime={dateString}>{formattedDate}</S.Time>;
};

export default Date;
