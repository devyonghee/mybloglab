import React, {RefObject} from 'react';
import Layout from '../../layouts/base/Layout';
import useStyles from './style';
import MyTextField from '../../components/TextField';
import BlogList from '../../components/BlogList';
import {Blog} from '../../models/Blog';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

type Props = {
    blogList: Array<Blog>
    link?: string
    handleLinkChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleLinkKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
    linkRef: RefObject<HTMLInputElement>
}

const Presenter: React.FC<Props> = (props): React.ReactElement => {
    const classes = useStyles();
    const {
        link,
        linkRef,
        handleLinkChange,
        handleLinkKeyPress
    } = props;
    return (
        <Layout>
            <MyTextField
                required
                className={classes.linkTextField}
                onChange={handleLinkChange}
                inputProps={{
                    onKeyPress: handleLinkKeyPress
                }}
                value={link || ''}
                id='keyword'
                label="블로그 사이트"
                variant='outlined'
                autoFocus
                margin='normal'
                inputRef={linkRef}
            />
            <IconButton className={classes.searchButton}>
                <SearchIcon/>
            </IconButton>
            <BlogList {...props}/>
        </Layout>
    );
};

export default Presenter;