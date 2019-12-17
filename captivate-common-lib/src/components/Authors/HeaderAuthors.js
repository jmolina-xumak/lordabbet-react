import React, {useState, Fragment} from 'react';

import AuthorBlockView from './AuthorBlockView';
import {ArrowTooltip} from '../../common/Tooltip';
import {Avatar} from '@material-ui/core';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';

const HeaderAuthors = (props) => {
    const {authors, count, classes} = props;
    const [authorDetails, setAuthorDetails] = useState();

    const profileView = (profileUrl) => {
        if (!!profileUrl) {
            window.location.assign(window.location.origin + profileUrl);
        }
    };

    return (
        <>
            {count === 1 && (
                <AuthorBlockView
                    authors={authors}
                    classes={classes}
                    count={count}
                    isHeader
                />
            )}
            {count > 1 &&
                authors.map((author, index) => (
                    <Fragment key={`author-${index}`}>
                        <div
                            className={`${
                                index === 0 ? '' : classes.overlappedAuthor
                            }`}
                            style={{zIndex: `${10 - index}`}}
                            data-testid="authorHeaderContainer"
                        >
                            <ArrowTooltip
                                placement="top"
                                interactive
                                data-testid="authorTooltip"
                                title={
                                    <div className={classes.tooltipContainer}>
                                        <div>
                                            <span
                                                className={classes.tooltipName}
                                                onClick={() =>
                                                    profileView(
                                                        authorDetails.profileUrl
                                                    )
                                                }
                                                onKeyPress={() =>
                                                    profileView(
                                                        authorDetails.profileUrl
                                                    )
                                                }
                                                role="button"
                                                tabIndex={0}
                                                data-testid={`authorTooltipName-${index}`}
                                            >
                                                {authorDetails &&
                                                    authorDetails.name}
                                            </span>
                                            <span
                                                className={
                                                    classes.tooltipQualification
                                                }
                                                data-testid={`authorTooltipQualification-${index}`}
                                            >
                                                {authorDetails &&
                                                    authorDetails.qualification}
                                            </span>
                                        </div>
                                        {authorDetails &&
                                            !!authorDetails.designation && (
                                            <div
                                                className={
                                                    classes.tooltipDesignation
                                                }
                                                data-testid={`authorTooltipDesignation-${index}`}
                                            >
                                                {authorDetails &&
                                                        authorDetails.designation}
                                            </div>
                                        )}
                                    </div>
                                }
                            >
                                <div
                                    onMouseEnter={() =>
                                        setAuthorDetails(author)
                                    }
                                    data-testid={`authorIcon-${index}`}
                                    role="button"
                                    tabIndex="0"
                                >
                                    {!!author.imageUrl ?
                                        <Avatar alt={author.name} src={author.imageUrl} className={`${classes.headerImage} ${classes.hoverHeaderImage}`} data-testid={`authorMultiImage-${index}`}/> :
                                        <div
                                            className={`${classes.avatarImage} ${classes.hoverHeaderImage}`}
                                            data-testid={`authorMultiPlaceholderImage-${index}`}
                                        >
                                            <PersonOutlineSharpIcon
                                                htmlColor="#777777"
                                                className={classes.image}
                                            />
                                        </div>
                                    }
                                </div>
                            </ArrowTooltip>
                        </div>
                    </Fragment>
                ))}
        </>
    );
};

HeaderAuthors.propTypes = {};

HeaderAuthors.defaultProps = {};

export default HeaderAuthors;
