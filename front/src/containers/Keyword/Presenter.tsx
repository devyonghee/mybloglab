import React from 'react';
import Layout from '@src/layouts/base/Layout';
import { withStyles } from '@material-ui/styles';
import SearchTextFiled from '@src/components/SearchTextFiled';

interface Props {
  handleSearchKeyword: (keyword: string) => void;
}

const KeywordSearchFiled = withStyles(theme => ({
  textField: {
    display: 'inline-flex',
    marginTop: theme.spacing(5),
    width: '40vw',
    maxWidth: '400px',
  },

  button: {
    transform: 'translateY(39px)',
    borderRadius: '10%',
    height: '57px',
    width: '57px',
  },
}))(SearchTextFiled);

const Presenter: React.FC<Props> = (props: Props): React.ReactElement => {
  const { handleSearchKeyword } = props;
  return (
    <Layout>
      <KeywordSearchFiled
        onSearch={handleSearchKeyword}
        required
        autoFocus
        label="키워드"
        variant="outlined"
        margin="normal"
      />
    </Layout>
  );
};

export default Presenter;
