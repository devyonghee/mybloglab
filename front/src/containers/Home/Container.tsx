import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import Presenter from './Presenter';
import {Blog} from '../../models/Blog';

type Props = {
    blogList: Array<Blog>;
    searchKeyword: (keyword: string) => void;
}

const defaultProps = {
    blogList: [] as Array<Blog>,
    searchKeyword: (_: string) => console.warn('no function'),
};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
    const [link, setLink] = useState('');
    const linkRef = useRef<HTMLInputElement>(null);

    const {searchKeyword} = props;

    const handleLinkChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setLink(event.currentTarget.value);
    };

    const handleLinkKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() !== 'enter') return;

        if (!link) {
            linkRef.current && linkRef.current.focus();
            return alert('키워드를 입력해주세요.');
        }

        searchKeyword(link);
    };

    return (
        <Presenter
            link={link}
            handleLinkChange={handleLinkChange}
            handleLinkKeyPress={handleLinkKeyPress}
            linkRef={linkRef}
            {...props}/>
    );
};

Container.defaultProps = defaultProps;

export default Container;