import React, {Fragment} from 'react';
import {Grid, Avatar} from '@material-ui/core';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';

const AuthorBlockView = (props) => {
    const {authors, classes, count, isHeader} = props;

    const profileView = (profileUrl) => {
        if (profileUrl !== undefined && profileUrl !== '') {
            window.location.assign(window.location.origin + profileUrl);
        }
    };

    return (
        <>
            {authors.map((author, index) => (
                <Fragment key={`author-${index}`}>
                    <Grid item xs={12}>
                        <Grid container className={classes.blockContainer}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    className={classes.imageContainer}
                                    onClick={() =>
                                        profileView(author.profileUrl)
                                    }
                                    onKeyPress={() =>
                                        profileView(author.profileUrl)
                                    }
                                    role="button"
                                    tabIndex={0}
                                    data-testid="authorBlockContainer"
                                >
                                    {!!author.imageUrl ? <Avatar
                                        src={author.imageUrl}
                                        alt={author.name}
                                        className={classes.headerImage}
                                        data-testid={`authorImage-${index}`}
                                    />: <div
                                        className={classes.avatarImage}
                                        data-testid={`authorPlaceholderImage-${index}`}
                                    >
                                        <PersonOutlineSharpIcon
                                            htmlColor="#777777"
                                            className={classes.image}
                                        />
                                    </div>
                                    }

                                </Grid>
                                <Grid
                                    container
                                    className={classes.infoContainer}
                                >
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            className={
                                                classes.headerNameContainer
                                            }
                                        >
                                            <span
                                                className={classes.headerName}
                                                onClick={() =>
                                                    profileView(
                                                        author.profileUrl
                                                    )
                                                }
                                                onKeyPress={() =>
                                                    profileView(
                                                        author.profileUrl
                                                    )
                                                }
                                                role="button"
                                                tabIndex={0}
                                                data-testid={`authorName-${index}`}
                                            >
                                                {author.name}
                                            </span>
                                            <span
                                                className={
                                                    classes.headerQualification
                                                }
                                                data-testid={`authorQualification-${index}`}
                                            >
                                                {author.qualification}
                                            </span>
                                        </Grid>
                                        <Grid
                                            container
                                            className={
                                                classes.headerDesignation
                                            }
                                            data-testid={`authorDesignation-${index}`}
                                        >
                                            {author.designation}
                                        </Grid>
                                        {count === 1 && !isHeader && (
                                            <>
                                                <Grid
                                                    container
                                                    className={
                                                        classes.headerDescription
                                                    }
                                                    data-testid={`authorDescription-${index}`}
                                                >
                                                    {author.description}
                                                </Grid>
                                                <Grid
                                                    container
                                                    className={classes.readMore}
                                                    onClick={() =>
                                                        profileView(
                                                            author.profileUrl
                                                        )
                                                    }
                                                    onKeyPress={() =>
                                                        profileView(
                                                            author.profileUrl
                                                        )
                                                    }
                                                    data-testid={`authorReadMore-${index}`}
                                                >
                                                    Read More
                                                </Grid>
                                            </>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {!isHeader && (
                            <hr
                                data-testid={`authorSeperator-${index}`}
                                style={{
                                    border: 'none',
                                    height: 1,
                                    color: '#c5cacc',
                                    backgroundColor: '#c5cacc',
                                }}
                            />
                        )}
                    </Grid>
                </Fragment>
            ))}
        </>
    );
};

AuthorBlockView.propTypes = {};

AuthorBlockView.defaultProps = {};

export default AuthorBlockView;
