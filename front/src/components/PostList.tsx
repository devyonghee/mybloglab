import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Post } from '@src/features/blog/types';
import PostRow from './PostRow';
import TablePaginationActions from './TablePagenationActions';

interface Props {
  blogger: string;
  posts: Array<Post>;
  handleSearchPostRank: (post: Post, keyword: string) => void;
  handleCheckExistence: (post: Post) => void;
}

const defaultProps = {
  blogger: '',
  posts: [] as Array<Post>,
  handleSearchPostRank: () => console.warn('no function'),
  checkExistence: () => console.warn('no function'),
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

const PostList: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPageOptions = [5, 10, 20, 50];
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
  const { posts, blogger, handleSearchPostRank, handleCheckExistence } = props;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.currentTarget.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setPage(0);
  }, [blogger]);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post: Post) => (
              <PostRow
                key={post.title}
                post={post}
                checkExistence={() => handleCheckExistence(post)}
                handleSearchPostRank={keyword => handleSearchPostRank(post, keyword)}
              />
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                colSpan={3}
                count={posts.length}
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
