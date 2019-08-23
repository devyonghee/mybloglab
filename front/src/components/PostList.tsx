import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TablePaginationActions from './TablePagenationActions';
import { Post } from '@src/models/Blog';
import Link from '@material-ui/core/Link';
import SearchTextFiled from '@src/components/SearchTextFiled';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

type Props = {
  posts: Array<Post>;
};

const defaultProps = {
  posts: [] as Array<Post>
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

const naverSearchHref = (title: string): string => {
  const parameter = { where: 'post', query: `"${title}"` };
  const urlSearchParams = new URLSearchParams(parameter);
  return `https://search.naver.com/search.naver?${urlSearchParams}`;
};

const PostList: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPageOptions = [5, 10, 20, 50];
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[1]);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.posts.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.currentTarget.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setPage(0);
  }, [props.posts]);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody>
            {props.posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post: Post) => (
              <TableRow key={post.title}>
                <TableCell component="th" scope="row">
                  {
                    post.link ?
                      <Link component='a' target='_blank' href={post.link.href}>{post.title}</Link>
                      : post.title
                  }
                  <Button href={naverSearchHref(post.title)} target='_blank' size='small'>검색해보기</Button>
                </TableCell>
                <TableCell>
                  <SearchTextFiled
                    onSearch={(test: string) => {console.log(test);}}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    displayEmpty
                    name="age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6}/>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                colSpan={3}
                count={props.posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
};

PostList.defaultProps = defaultProps;

export default PostList;