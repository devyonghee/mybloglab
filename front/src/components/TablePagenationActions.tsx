import React, { MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
  numberIcon: {
    width: '23px'
  }
}));

const TablePaginationActions: React.FC<TablePaginationActionsProps> = (props: TablePaginationActionsProps) => {
  const classes = useStyles();
  const { count, page, rowsPerPage, onChangePage } = props;

  const pagePerBlock = 5;

  const lastPage: number = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
  const block: number = Math.max(0, Math.floor((page / pagePerBlock)));

  const pagesInBlock: Array<number> = [];
  for (let page = Math.max((block * pagePerBlock), 0);
       page < Math.min((block * pagePerBlock) + pagePerBlock, lastPage + 1);
       page++) {
    pagesInBlock.push(page);
  }

  return (
    <div className={classes.root}>
      <IconButton
        size='small'
        onClick={
          (event: MouseEvent<HTMLButtonElement>): void =>
            onChangePage(event, 0)
        }
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon/>
      </IconButton>
      <IconButton
        size='small'
        onClick={
          (event: MouseEvent<HTMLButtonElement>): void => {
            onChangePage(event, (pagePerBlock * (block - 1) + pagePerBlock) - 1);
          }}
        disabled={block === 0}
        aria-label="previous block">
        <KeyboardArrowLeft/>
      </IconButton>
      <IconButton
        size='small'
        onClick={(event: MouseEvent<HTMLButtonElement>): void => {
          onChangePage(event, page + 1);
        }}
        disabled={page === 0}
        aria-label="previous page">
        <ArrowLeftIcon/>
      </IconButton>

      {
        pagesInBlock.map((targetPage: number) => (
          <IconButton
            onClick={
              (event: MouseEvent<HTMLButtonElement>): void =>
                onChangePage(event, targetPage)
            }
            disabled={targetPage === page}
            aria-label="previous page"
            size='small'
            className={classes.numberIcon}
            key={targetPage}
          >
            {(targetPage + 1).toString()}
          </IconButton>
        ))
      }
      <IconButton
        size='small'
        onClick={
          (event: MouseEvent<HTMLButtonElement>): void => {
            onChangePage(event, page + 1);
          }}
        disabled={page >= lastPage}
        aria-label="next page">
        <ArrowRightIcon/>
      </IconButton>

      <IconButton
        size='small'
        onClick={
          (event: MouseEvent<HTMLButtonElement>): void => {
            onChangePage(event, ((block + 1) * pagePerBlock));
          }}
        disabled={block >= Math.floor(lastPage / pagePerBlock)}
        aria-label="next block"
      >
        <KeyboardArrowRight/>
      </IconButton>
      <IconButton
        size='small'
        onClick={
          (event: MouseEvent<HTMLButtonElement>): void => {
            onChangePage(event, lastPage);
          }}
        disabled={page >= lastPage}
        aria-label="last page"
      >
        <LastPageIcon/>
      </IconButton>
    </div>
  );
};

export default TablePaginationActions;