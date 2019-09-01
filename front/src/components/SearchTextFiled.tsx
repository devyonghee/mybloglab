import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import MyTextField from '@src/components/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onSearch: (keyword: string) => void;
}

const defaultProps = {
  onSearch: () => console.warn('no function'),
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  keywordFiled: {
    width: '150px',
  },
  searchButton: {
    top: '12px',
    color: grey[500],
  },
}));

const SearchTextFiled: React.FC<Props> = (props: Props) => {
  const { onSearch } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  const search = (): void => {
    if (!value) {
      if (ref.current) ref.current.focus();
      alert('값을 입력해주세요');
      return;
    }
    onSearch(value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key.toLowerCase() !== 'enter') return;
    search();
  };

  return (
    <div className={classes.root}>
      <MyTextField
        inputRef={ref}
        className={classes.keywordFiled}
        label="키워드"
        value={value}
        onChange={handleValueChange}
        inputProps={{
          onKeyPress: handleKeyPress,
        }}
      />
      <IconButton onClick={search} className={classes.searchButton} size="small">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

SearchTextFiled.defaultProps = defaultProps;

export default SearchTextFiled;
