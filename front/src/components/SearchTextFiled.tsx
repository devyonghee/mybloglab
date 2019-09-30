import React, { MouseEvent, ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import MyTextField from '@src/components/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { BaseTextFieldProps, TextFieldProps } from '@material-ui/core/TextField';

interface Props extends BaseTextFieldProps {
  classes?: {
    root?: string;
    textField?: string;
    button?: string;
  };
  onSearch: (value: string) => void;
  label: string;
  variant?: TextFieldProps['variant'];
  size?: 'small' | 'medium';
  required?: boolean;
}

const defaultProps = {
  onSearch: () => console.warn('no function'),
};

const SearchTextFiled: React.FC<Props> = (props: Props) => {
  const { variant, onSearch, label, size, classes, required, autoFocus, margin } = props;
  const [value, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  const search = (): void => {
    if (!value && required) {
      if (ref.current) ref.current.focus();
      alert(`${label}를 입력해주세요`);
      return;
    }
    onSearch(value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key.toLowerCase() !== 'enter') return;
    search();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    search();
  };

  return (
    <div className={classes ? classes.root : ''}>
      <MyTextField
        variant={(variant as any) || 'standard'}
        inputRef={ref}
        className={classes ? classes.textField : ''}
        label={label}
        value={value}
        autoFocus={autoFocus}
        onChange={handleValueChange}
        margin={margin}
        inputProps={{
          onKeyPress: handleKeyPress,
        }}
      />
      <IconButton onClick={handleClick} className={classes ? classes.button : ''} size={size}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

SearchTextFiled.defaultProps = defaultProps;

export default SearchTextFiled;
