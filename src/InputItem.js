import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const styles = {
    root: {
        display: 'inline-block',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '3px',
        marginX: 'auto',
    }
}

class InputItem extends Component {
    render() {
        const {classes, color, text, variant} = this.props;
        return (
            <div className={classes.root}>
                <Chip
                    label={text}
                    color={color}
                    variant={variant}
                />
            </div>
        )
    }
}

export default withStyles(styles)(InputItem);